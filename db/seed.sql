USE employees;

INSERT INTO department
    (name)
VALUES
    ('Human Resources'),
    ('Marketing'),
    ('Information Technology'),
    ('Accounting');

INSERT INTO role
    (title, salary, department_id)
VALUES  
    ('HR Manager', 105000, 1),
    ('HR', 50000, 1),
    ('Marketing Director', 120000, 2),
    ('Sales', 65000, 2),
    ('IT Director', 180000, 3),
    ('Desktop Support', 100000, 3),
    ('Account Manager', 115000, 4),
    ('Accountant', 95000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Andrew', 'Graham', 1, NULL),
    ('Dmytro', 'Tckach', 2, 1),
    ('Ioan', 'Savidis', 3, NULL),
    ('Jesus', 'Hugareda', 4, 3),
    ('Linda', 'Hamilton', 4, 3),
    ('Adam', 'Reynold', 5, NULL),
    ('Bill', 'Adamson', 6, 5),
    ('Natasha', 'Lune', 6, 5),
    ('Sofia', 'Loren', 7, NULL),
    ('Arnold', 'Stalone', 7, 8);
    
    