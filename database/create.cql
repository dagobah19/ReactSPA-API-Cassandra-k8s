CREATE KEYSPACE sensordata WITH replication =  {'class':'SimpleStrategy', 'replication_factor':1};​

USE sensordata;​

CREATE COLUMNFAMILY sensordata(​
sensor_name text,​
entry_date timestamp,​
motion Boolean,​
primary key (sensor_name,entry_date));​
​