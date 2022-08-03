DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

use employees;

CREATE TAble department (
    id INT auto_increment Primary key,
    name VARCHAR(30) not null
);

CREATE Table role (
       id INT auto_increment Primary key,
       title VARCHAR(30) not null,
       salary INT not null,
       department_id INT not null ,
       constraint fk_department Foreign Key (department_id) References department(id)
);

CREATE TABLE employee (
      id INT auto_increment Primary key,
      first_name VARCHAR(30) not null,
      last_name VARCHAR(30) not null,
      role_id INT,
         constraint fk_role Foreign Key (role_id) References role(id),
         manager_id Int,
        constraint fk_manager Foreign Key (manager_id) References employee(id)
);