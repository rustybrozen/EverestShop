# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:latest

# Create and set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . .

# Copy the start.sh script to the working directory.
COPY start.sh .

# Make the script executable.
RUN chmod +x start.sh

# Expose the port your app will run on.
EXPOSE 80

# Command to run the application.
CMD ["./start.sh"]
