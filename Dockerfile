FROM node:lts
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm install -g serve

CMD serve -p 4000 .