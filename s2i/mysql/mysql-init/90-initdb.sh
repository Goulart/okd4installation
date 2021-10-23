#!/bin/bash

mysql $mysql_flags < init.sql
echo 'create database nodeApi_DB;' | mysql $mysql_flags
