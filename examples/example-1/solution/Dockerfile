# A: Start from a base image
FROM node:22

# B: Copy local files into the image
COPY . /app

# C: Execute npm install
RUN cd /app && npm install

# D: Set index.js to run when the container starts
CMD ["node", "/app/index.js"]
