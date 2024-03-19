FROM node:latest

RUN mkdir -p /aws/app/camworld.ecdevstudio.com
WORKDIR /aws/app/camworld.ecdevstudio.com

COPY ./app/package*.json ./

RUN npm ci --silent

COPY ./app .

RUN npm run build

EXPOSE 5555/tcp

CMD ["npm", "start"]
