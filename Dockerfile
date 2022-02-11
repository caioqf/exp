FROM node:17.4.0

WORKDIR /usr/src/app

#nao ideal, mas para fins de estudo, suficiente por enquanto
ENV JWT_SECRET=728e76aeae54da65a0f72f59ff6ed98c30f2bbd280ceffad2c86ab7f53b05265c589632b798db77cbd3f08e2183bad0a930190ae73dfe0e8b63d6c9c7363ed7d

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000
CMD ["npm", "start"]