# Grab the node base image
FROM node:14-alpine
# Ensure root user
USER 0
# Create a working directory
RUN mkdir -p /home/1001/app
# Switch to that directory & copy the package manifests
WORKDIR /home/1001/app
COPY --chown=1001 package*.json /home/1001/app/
# Install the packages required
RUN npm install
# Copy our source
COPY --chown=1001 . .
# Set to a non-root built-in user `node`
USER 1001
# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}/tcp
CMD [ "node", "." ]