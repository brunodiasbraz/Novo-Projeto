require('dotenv').config()
const express = require("express");
const routes = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require("email-validator");
const nodemailer = require("nodemailer");
const { uid, suid } = require('rand-token');
const User = require("./models/User");




function checkToken(req, res, next) {
  const token = eq.cookie.jwt;

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(401).json({ msg: "O Token é inválido!" });
  }
}


// Private Route
routes.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});



// Private Route

// Open Route
routes.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API!" });

});


routes.post("/auth/verify", async (req, res) => {
  const { token_verify } = req.body;
  console.log(req.cookies.jwt)
  // check if user exists
  const userExists = await User.findOne({ token_verify: token_verify });

  if (!userExists) {
    return res.status(422).json({ msg: "Esse link expirou ou não é válido!" });
  }

  userExists.email_verify = Date();
  userExists.token_verify = null;
  try {
    await userExists.save();

    res.status(201).json({ msg: "Seu email foi verificado, Você será direcionado para a tela de Login" });
  } catch (error) {
    console.log(error);
  }
});

routes.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // validations
  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }
  if (!validator.validate(email)) {
    return res.status(422).json({ msg: "Digite um email válido!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  if (password != confirmpassword) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }

  // check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);
  const sendEmail = process.env.EMAIL;
  const emailPassword = process.env.EMAIL_PASSWORD;
  // create user
  const user = new User({
    name,
    email,
    passwordHash,
  });
  const verifyToken = suid(16);
  user.token_verify = verifyToken;

  console.log(verifyToken)
  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso! Verifique sua caixa de email e faça a validação do seu cadastro" });

    let message = {
      from: "gabusoftapp@gmail.com",
      to: user.email,
      subject: "Validação de cadastro Nosso Clube",
      text: "Plaintext version of the message",
      html: '<img src="https://ci3.googleusercontent.com/meips/ADKq_NYL2HBvmfArevX3NVujmQCPWNFsgX3e2hjNCIZn7wwvXIa1forX93ezrWp2zlocURZiHNdcmUKX7nVR1hykvEYH9z2V1PNazvd4tbOmYD4KRmNam4z_uunMuZD-cp4vJl0hboEc_C7xPxOvlJ9qU6pUjTiS2cwgesI=s0-d-e1-ft#https://mcusercontent.com/80734d74fa766a626186188dc/images/64dbc363-0c78-fb86-2e2f-a7e49b5615f1.png" alt="Imagem Externa">'
        + `<p>Olá, Por favor, clique no link abaixo para verificar seu endereço de e-mail:</p>`
        + `<a href="https://seusite.com/verify-email?token=${verifyToken}">`
        + `Verificar Email</a><p>Se você não solicitou esta verificação, ignore este e-mail.</p>`
      ,
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: sendEmail,
        pass: emailPassword,
      },
      connectionTimeout: 5000, // Ajuste o valor conforme necessário
    });
    transporter.sendMail(message).then(console.log('enviado com sucesso')).catch(console.error);


  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

routes.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  // check if password match
  const checkPassword = bcrypt.compare(password, user.passwordHash);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });

  }

  try {


    const secret = process.env.SECRET;
    const expiresIn = '7d'
    const token = jwt.sign(
      {
        user: user.email,
      },
      secret, {
      expiresIn: expiresIn
    }
    );
    res.cookie('jwt', token, {
     // path: "/", // Cookie is accessible from all paths
      maxAge: 604800*1000,
      httpOnly: true,
      secure: true,
    }).status(200).json({ msg: "Autenticação realizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});


module.exports = routes;