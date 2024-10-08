# Use the official Node.js 18 image as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Set the PORT environment variable
ENV PORT 8080

# Build your Next.js app
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]