FROM node:16

WORKDIR /usr/src/app

# Copy server files to the container
COPY ./server ./server
COPY ./src ./src

# Install server dependencies
RUN cd server && npm install

# Expose the port that the app will run on
EXPOSE 8080

# Run the server when the container starts
CMD ["node", "server/server.js"]
