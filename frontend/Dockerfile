FROM node
WORKDIR /app
COPY . .
COPY .env .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]