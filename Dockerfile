# Use the official Node.js 18 alpine image as the base
# Alpine is used because it's lightweight (beginner-friendly and fast)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5500

# Command to run the application
CMD ["npm", "start"]
