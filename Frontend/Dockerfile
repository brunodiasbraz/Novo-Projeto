FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g @vue/cli

RUN npm install  vite --save-dev 

RUN chmod -R 755 /usr/app

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]

