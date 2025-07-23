FROM ubuntu:22.04

WORKDIR /app

# Copy Files
COPY . .

RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Download dependencies
COPY package.json .
RUN npm install

CMD ["node", "index.js"]
