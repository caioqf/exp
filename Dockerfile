FROM node:17.4.0

WORKDIR /usr/src/app

#nao ideal, mas para fins de estudo, suficiente por enquanto
ENV JWT_SECRET=${JWT_SECRET}

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000
CMD ["npm", "start"]