# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Rename .env_default to .env
RUN mv .env_default .env

# Create a shell script to run our files in sequence
RUN echo '#!/bin/sh' > start.sh && \
    echo 'node dulieu.js && node app.js' >> start.sh && \
    chmod +x start.sh

# Expose the port the app runs on
EXPOSE 80

# Command to run the start script
CMD ["./start.sh"]
