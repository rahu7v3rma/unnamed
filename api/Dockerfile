FROM node:22.13.0
WORKDIR /app
COPY . .
COPY .env .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]