FROM node:latest

RUN mkdir -p /var/www/camworld.ecdevstudio.com
WORKDIR /var/www/camworld.ecdevstudio.com

COPY ./app/package*.json ./

RUN npm ci --silent

COPY ./app .

RUN npm run build

EXPOSE 5555/tcp

CMD ["npm", "start"]
