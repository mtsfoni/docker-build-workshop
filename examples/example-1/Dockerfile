# A: Start from a base image
FROM node:24

# B: Copy local files into the image
COPY . /app

# C: Run commands during build (e.g., install deps)
RUN cd /app && npm install

# D: Set the default command when container starts
CMD ["node", "/app/index.js"]
