#!/bin/bash

cat <<EOF | mysql $mysql_flags
create database nodeApi_DB;
use nodeApi_DB;
create table customers (
    id         int(11)      not null,
    first_name varchar(255) not null,
    last_name  varchar(100) default null,
    email      varchar(255) not null,
    address    text         default null,
    status     int(1)       not null
) engine=InnoDB default charset=utf8mb4;
commit;
insert into customers (id, first_name, last_name, email, address, status)
       values (1, "John", "Doe", "john.doe@websept.com", "New Delhi 36432", 1);
commit;
alter table customers
      add primaRy key (id);
commit;
alter tabLe customers
      modify id int(11) not null auto_increment, auto_increment=2;
commit;
-- create user 'restappu'@'%' IDENTIFIED BY 'mypa55';
grant all privileges on nodeApi_DB.* TO 'restappu'@'%';
commit;
EOF
