require("./routes");
const { restoreSessions } = require("./sessions");
const { routes } = require("./routes");
const app = require("express")();
const bodyParser = require("body-parser");
const { maxAttachmentSize } = require("./config");
const cors = require("cors");

const allowedOrigins = ["http://192.168.1.128", "http://localhost"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, x-api-key",
  })
);

// Initialize Express app
app.disable("x-powered-by");
app.use(bodyParser.json({ limit: maxAttachmentSize + 1000000 }));
app.use(
  bodyParser.urlencoded({ limit: maxAttachmentSize + 1000000, extended: true })
);
app.use("/", routes);

restoreSessions();

module.exports = app;
