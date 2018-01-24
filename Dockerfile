FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

CMD [ "npm", "run", "build" ]
