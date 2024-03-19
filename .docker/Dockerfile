FROM 868285727925.dkr.ecr.us-west-1.amazonaws.com/node:16-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .. .

RUN npm run build

CMD ["npm", "start"]

FROM node:latest

RUN mkdir -p /aws/app/camworld-next
WORKDIR /aws/app/camworld-next

COPY package*.json ./

COPY ../app ./app/

RUN npm i

EXPOSE 3000/tcp

CMD ["npm", "run", "dev"]
