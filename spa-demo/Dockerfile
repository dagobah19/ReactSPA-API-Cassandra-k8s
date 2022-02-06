# STAGE 1: First grab the node base image
FROM node:14-alpine as build
# Ensure root user
USER 0
# Create a working directory
RUN mkdir -p /home/1001/app
# Switch to that directory & copy the package manifests
WORKDIR /home/1001/app
COPY --chown=1001 package*.json /home/1001/app/
# Install the packages required
RUN npm install
# Copy our source and supporting files
COPY --chown=1001 . .
# Run the build script
RUN npm run build

# STAGE 2: Grab the nginx web server image
FROM nginx:1.21.4-alpine
# Establish the port
ARG port=80
# Switch to the html default directory
WORKDIR /usr/share/nginx/html
# Copy the compiled app from previous stage
COPY --from=build /home/1001/app/build/ .
# Expose the port
EXPOSE ${port}
# Start the nginx server with daemon off
CMD ["nginx", "-g", "daemon off;"]