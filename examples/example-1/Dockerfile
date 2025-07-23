# A: Start from a base image
FROM node:24

# Set the working directory
WORKDIR /app

# Copy only package.json first for better caching
COPY package.json .

# C: Run commands during build (e.g., install deps)
RUN npm install

# Now copy the rest of the app
COPY . .

# D: Set the default command when container starts
CMD ["node", "index.js"]
