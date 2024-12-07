# Use Node.js LTS version as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 80

# Command to start the app in production mode
CMD ["npm", "start"]
