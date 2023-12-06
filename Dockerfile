FROM registry.access.redhat.com/ubi8/nodejs-18:1-81

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ..

EXPOSE 3000

CMD ["npm","start"]@
