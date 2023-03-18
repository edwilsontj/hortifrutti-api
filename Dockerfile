FROM node:alpine

RUN mkdir -p /usr/app/api-hortifrutti

WORKDIR /usr/app/api-hortifrutti

RUN apk add --no-cache git

COPY package*.json ./
#RUN npm install

RUN npm ci

COPY . .

EXPOSE 3333

#CMD ["npm", "start"]
ENTRYPOINT ["node", "ace", "serve", "--watch"]
