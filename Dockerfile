# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source code inside the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define environment variables
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=Anni@0011
ENV DB_NAME=crowdfunder

# Start the Node.js application
CMD ["node", "index.js"]
