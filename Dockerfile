# FROM node:alpine
FROM node

RUN mkdir -p /usr/app/hortifrutti-api

WORKDIR /usr/app/hortifrutti-api

# RUN apk add --no-cache git

# Install app dependencies
COPY package*.json ./
# COPY package.json /usr/app/hortifrutti-api
# RUN npm install
RUN npm ci

# Bundle app source
COPY . .
# COPY . /usr/app/hortifrutti-api

EXPOSE 3333

#CMD ["npm", "start"]
ENTRYPOINT ["node", "ace", "serve", "--watch"]
