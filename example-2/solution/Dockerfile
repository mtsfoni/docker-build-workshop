# Use Node.js 22 as the base image
FROM node:22

# Create non-root user and group
RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

# Copy only package.json first to leverage Docker cache
COPY package.json .
RUN npm install

# Copy the rest of the application files
COPY . .

# Change user to non-root
USER appuser

CMD ["node", "index.js"]