FROM node:16-alpine3.12
#FROM 868285727925.dkr.ecr.us-west-2.amazonaws.com/node:16-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
