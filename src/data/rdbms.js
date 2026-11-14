export default {
  title: "Database Management System",
  questions: [
    {
      question: "What does RDBMS stand for?",
      options: [
        "Relational Database Management System",
        "Relational Data Management System", 
        "Relational Database Management Software",
        "Relational Data Management Software"
      ],
      correct: 0,
      explanation: "RDBMS stands for Relational Database Management System, which is a database management system based on the relational model."
    },
    {
      question: "Which of the following is NOT a property of ACID transactions?",
      options: [
        "Atomicity",
        "Consistency", 
        "Durability",
        "Efficiency"
      ],
      correct: 3,
      explanation: "ACID properties are Atomicity, Consistency, Isolation, and Durability. Efficiency is not an ACID property."
    },
    {
      question: "What is the primary key in a relational database?",
      options: [
        "A key that can have NULL values",
        "A key that uniquely identifies each row in a table",
        "A key that references another table",
        "A key that can have duplicate values"
      ],
      correct: 1,
      explanation: "A primary key is a column or set of columns that uniquely identifies each row in a table and cannot contain NULL values."
    },
    {
      question: "Which SQL command is used to create a new table?",
      options: [
        "CREATE TABLE",
        "BUILD TABLE",
        "MAKE TABLE",
        "GENERATE TABLE"
      ],
      correct: 0,
      explanation: "The CREATE TABLE command is used to create a new table in a database with specified columns and data types."
    },
    {
      question: "What is normalization in database design?",
      options: [
        "The process of adding more tables to a database",
        "The process of organizing data to reduce redundancy and dependency",
        "The process of making a database faster",
        "The process of backing up a database"
      ],
      correct: 1,
      explanation: "Normalization is the process of organizing data in a database to reduce data redundancy and improve data integrity."
    },
    {
      question: "Which normal form eliminates transitive dependencies?",
      options: [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Boyce-Codd Normal Form (BCNF)"
      ],
      correct: 2,
      explanation: "Third Normal Form (3NF) eliminates transitive dependencies, where a non-key attribute depends on another non-key attribute."
    },
    {
      question: "What is a foreign key?",
      options: [
        "A key that is always unique",
        "A key that references the primary key of another table",
        "A key that can contain NULL values",
        "A key that is automatically generated"
      ],
      correct: 1,
      explanation: "A foreign key is a column or set of columns that references the primary key of another table, establishing a relationship between tables."
    },
    {
      question: "Which SQL command is used to retrieve data from a database?",
      options: [
        "SELECT",
        "RETRIEVE",
        "GET",
        "FETCH"
      ],
      correct: 0,
      explanation: "The SELECT command is used to retrieve data from one or more tables in a database."
    },
    {
      question: "What is a transaction in a database?",
      options: [
        "A single SQL statement",
        "A logical unit of work that contains one or more SQL statements",
        "A backup of the database",
        "A user session"
      ],
      correct: 1,
      explanation: "A transaction is a logical unit of work that contains one or more SQL statements and must be executed as a single unit."
    },
    {
      question: "Which of the following is NOT a type of JOIN in SQL?",
      options: [
        "INNER JOIN",
        "OUTER JOIN",
        "CROSS JOIN",
        "VERTICAL JOIN"
      ],
      correct: 3,
      explanation: "INNER JOIN, OUTER JOIN (LEFT, RIGHT, FULL), and CROSS JOIN are valid SQL JOIN types. VERTICAL JOIN is not a standard SQL JOIN type."
    },
    {
      question: "What is the purpose of an index in a database?",
      options: [
        "To store backup data",
        "To improve query performance by providing fast access to data",
        "To encrypt sensitive data",
        "To compress data"
      ],
      correct: 1,
      explanation: "Indexes improve query performance by providing fast access to data, similar to how an index in a book helps you find specific information quickly."
    },
    {
      question: "Which SQL command is used to modify existing data in a table?",
      options: [
        "ALTER",
        "MODIFY",
        "UPDATE",
        "CHANGE"
      ],
      correct: 2,
      explanation: "The UPDATE command is used to modify existing data in a table by changing values in specified columns."
    },
    {
      question: "What is a view in a database?",
      options: [
        "A physical copy of a table",
        "A virtual table based on the result set of a SELECT statement",
        "A backup of a table",
        "A temporary table"
      ],
      correct: 1,
      explanation: "A view is a virtual table based on the result set of a SELECT statement. It doesn't store data physically but presents data from one or more tables."
    },
    {
      question: "Which constraint ensures that a column cannot have NULL values?",
      options: [
        "UNIQUE",
        "NOT NULL",
        "CHECK",
        "DEFAULT"
      ],
      correct: 1,
      explanation: "The NOT NULL constraint ensures that a column cannot have NULL values, making it mandatory to provide a value for that column."
    },
    {
      question: "What is the difference between DELETE and TRUNCATE?",
      options: [
        "There is no difference",
        "DELETE removes specific rows, TRUNCATE removes all rows",
        "DELETE is faster than TRUNCATE",
        "TRUNCATE can be rolled back, DELETE cannot"
      ],
      correct: 1,
      explanation: "DELETE removes specific rows based on a WHERE clause, while TRUNCATE removes all rows from a table. TRUNCATE is generally faster but cannot be rolled back."
    },
    {
      question: "Which SQL function is used to count the number of rows?",
      options: [
        "SUM()",
        "COUNT()",
        "TOTAL()",
        "NUMBER()"
      ],
      correct: 1,
      explanation: "The COUNT() function is used to count the number of rows in a result set or the number of non-NULL values in a column."
    },
    {
      question: "What is a stored procedure?",
      options: [
        "A backup procedure",
        "A precompiled collection of SQL statements stored in the database",
        "A type of table",
        "A database user"
      ],
      correct: 1,
      explanation: "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed multiple times with different parameters."
    },
    {
      question: "Which of the following is NOT a valid data type in SQL?",
      options: [
        "VARCHAR",
        "INTEGER",
        "BOOLEAN",
        "ARRAY"
      ],
      correct: 3,
      explanation: "VARCHAR, INTEGER, and BOOLEAN are valid SQL data types. ARRAY is not a standard SQL data type, though some database systems may support it."
    },
    {
      question: "What is the purpose of the GROUP BY clause?",
      options: [
        "To sort results",
        "To group rows that have the same values in specified columns",
        "To filter results",
        "To join tables"
      ],
      correct: 1,
      explanation: "The GROUP BY clause is used to group rows that have the same values in specified columns, typically used with aggregate functions."
    },
    {
      question: "Which SQL command is used to remove a table from the database?",
      options: [
        "REMOVE TABLE",
        "DELETE TABLE",
        "DROP TABLE",
        "ERASE TABLE"
      ],
      correct: 2,
      explanation: "The DROP TABLE command is used to remove a table and all its data from the database permanently."
    },
    {
      question: "What is referential integrity?",
      options: [
        "Ensuring data is accurate",
        "Ensuring that foreign key values reference existing primary key values",
        "Ensuring data is encrypted",
        "Ensuring data is backed up"
      ],
      correct: 1,
      explanation: "Referential integrity ensures that foreign key values reference existing primary key values, maintaining the relationships between tables."
    },
    {
      question: "Which of the following is a valid SQL aggregate function?",
      options: [
        "AVERAGE()",
        "AVG()",
        "MEAN()",
        "MEDIAN()"
      ],
      correct: 1,
      explanation: "AVG() is a valid SQL aggregate function that calculates the average of values in a column. AVERAGE(), MEAN(), and MEDIAN() are not standard SQL functions."
    },
    {
      question: "What is the purpose of the HAVING clause?",
      options: [
        "To filter rows before grouping",
        "To filter groups after grouping",
        "To sort results",
        "To join tables"
      ],
      correct: 1,
      explanation: "The HAVING clause is used to filter groups after they have been created by the GROUP BY clause, similar to WHERE but for groups."
    },
    {
      question: "Which constraint ensures that all values in a column are unique?",
      options: [
        "PRIMARY KEY",
        "UNIQUE",
        "NOT NULL",
        "CHECK"
      ],
      correct: 1,
      explanation: "The UNIQUE constraint ensures that all values in a column are unique, allowing NULL values but preventing duplicate non-NULL values."
    },
    {
      question: "What is a deadlock in database systems?",
      options: [
        "A system crash",
        "A situation where two or more transactions are waiting for each other to release locks",
        "A corrupted database",
        "A slow query"
      ],
      correct: 1,
      explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular wait condition."
    },
    {
      question: "Which SQL command is used to add a new column to an existing table?",
      options: [
        "ADD COLUMN",
        "ALTER TABLE ADD",
        "MODIFY TABLE",
        "INSERT COLUMN"
      ],
      correct: 1,
      explanation: "The ALTER TABLE ADD command is used to add a new column to an existing table with specified data type and constraints."
    }
  ]
};

// Register with global mcqData
