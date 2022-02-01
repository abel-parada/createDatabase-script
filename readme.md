# MYSQL

Project that shows how to add, remove or update databases and tables in each database.

This project is a continuation of: https://github.com/abel-parada/MySQL-database

## Technologies used

Built with:

- mySQL/mariadb
- JS
- Node

## Setup and usage

### 1. Install mysql or mariadb

### 2.In root folder: `node createDatabase file.json `

Example:

```shell
node createDatabase twotables.json
```

### 3.Access terminal, and enter mysql commands

```shell
mysql -u gandalf -p
show databases;
use shopdb;
show tables;
select * from products;
```

Console will log the database, tables and values added, removed, or updated.

## Screenshots

![alt text](/Images/main.png) "Console logs"

## Sources

- Business College Helsinki. Node & Express Advanced lessons.

## Authors and acknowledgment

Abel Parada

- [GitHub @abel-parada](https://github.com/abel-parada)
- [LinkedIn](https://www.linkedin.com/in/abelparadamillan/)
