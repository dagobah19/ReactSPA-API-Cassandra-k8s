#Creating a database container

Run the following command:
docker run –p 9042:9042 --name cassandra-sensor -v c:/mount/cassandra:/var/lib/cassandra -d cassandra:latest 

This command will download the latest image version of cassandra and run it with a local volume (c:/mount/cassandra) mapping to the cassandra data store​

#Connecting to the container
Connect to the containerized db using docker desktop, going to container list and selecting CLI from the running container​
​
OR​
​
Execute the command:
docker exec –it <name> /bin/sh​

where <name> is the name you passed previously​ (cassandra-sensor)