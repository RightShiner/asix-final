FROM node:7.10

ARG ENV=production
ENV NODE_ENV=$ENV
ENV TERM=xterm

WORKDIR /usr/src/app
COPY . /usr/src/app/

ADD docker-files/nginx.conf /etc/nginx/conf.d/default.conf
VOLUME /etc/nginx/conf.d/

RUN npm install && npm run build
VOLUME /usr/src/app/build

CMD npm run start

EXPOSE 80

