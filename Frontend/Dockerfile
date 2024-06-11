FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN rm -f package-lock.json && rm -rf node_modules && npm install --force 

RUN npm cache clean --force 

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]

