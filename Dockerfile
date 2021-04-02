FROM node:14.16.0

RUN mkdir /docker-dist

WORKDIR /docker-dist

COPY . .

RUN yarn install

CMD ["yarn", "start"]

