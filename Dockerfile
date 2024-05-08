FROM node:16-alpine3.12

RUN mkdir -p /app/camworld.ecdevstudio.com
WORKDIR /app/camworld.ecdevstudio.com

COPY package*.json ./

RUN npm ci --silent

COPY . .

RUN npm run build

EXPOSE 5555/tcp

CMD ["npm", "start"]
