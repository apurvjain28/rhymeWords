# Setting a base image
FROM ubuntu 

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# Copy the package.json and package-lock.json (if available)
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json


# Install dependencies
WORKDIR /app
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the application in development mode
CMD ["npm", "start"]