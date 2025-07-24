FROM node:22

WORKDIR /app

# Copy Files
COPY . .

# Download dependencies
COPY package.json .
RUN npm install

CMD ["node", "index.js"]
