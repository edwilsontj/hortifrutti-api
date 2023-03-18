FROM node:alpine

RUN mkdir -p /usr/app/hortifrutti-api

WORKDIR /usr/app/hortifrutti-api

RUN apk add --no-cache git

COPY package*.json ./
#RUN npm install

RUN npm ci

COPY . .

EXPOSE 3333

#CMD ["npm", "start"]
ENTRYPOINT ["node", "ace", "serve", "--watch"]
