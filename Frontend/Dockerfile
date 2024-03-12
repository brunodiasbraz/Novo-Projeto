FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.5.0

RUN npm install -g @vue/cli

RUN npm install vite --save-dev

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]