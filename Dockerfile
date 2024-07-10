# Stage 1

FROM node:22.4-alpine

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

EXPOSE 5143

CMD ["npm", "run", "preview"]
