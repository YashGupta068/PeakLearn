export default {
  title: "Database Management System",
  questions: [
    // Basic RDBMS Concepts
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
      question: "Which SQL command is used to add a new column to an existing table?",
      options: [
        "ADD COLUMN",
        "ALTER TABLE ADD",
        "MODIFY TABLE",
        "INSERT COLUMN"
      ],
      correct: 1,
      explanation: "The ALTER TABLE ADD command is used to add a new column to an existing table with specified data type and constraints."
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
    
    // Advanced Database Fundamentals
    {
      question: "What is a Database Management System (DBMS)?",
      options: [
        "A collection of programs that enables users to create and maintain a database",
        "A type of computer hardware",
        "A programming language",
        "An operating system"
      ],
      correct: 0,
      explanation: "A DBMS is a collection of programs that enables users to create, maintain, and access databases efficiently while ensuring data integrity and security."
    },
    {
      question: "Which of the following is NOT a characteristic of a database?",
      options: [
        "Data redundancy is minimized",
        "Data is shared among multiple users",
        "Data is stored in files without any structure",
        "Data integrity is maintained"
      ],
      correct: 2,
      explanation: "Databases are structured collections of data with minimal redundancy, shared access, and maintained integrity. Unstructured file storage is not a database characteristic."
    },
    {
      question: "What is data independence in DBMS?",
      options: [
        "Data can be accessed without knowing its location",
        "The ability to change database schema without affecting applications",
        "Data can be stored in multiple locations",
        "Data can be accessed by multiple users simultaneously"
      ],
      correct: 1,
      explanation: "Data independence is the ability to change the database schema at one level without affecting the schema at the next higher level or applications."
    },
    {
      question: "Which data model uses tables to represent data and relationships?",
      options: [
        "Hierarchical Model",
        "Network Model",
        "Relational Model",
        "Object-Oriented Model"
      ],
      correct: 2,
      explanation: "The relational model uses tables (relations) to represent data and relationships between different entities."
    },
    {
      question: "What is a schema in database terminology?",
      options: [
        "The physical storage of data",
        "The logical structure or design of the database",
        "A query language",
        "A type of database software"
      ],
      correct: 1,
      explanation: "A schema is the logical structure or design of the database that defines how data is organized and the relationships between different data elements."
    },

    // Relational Model
    {
      question: "What is a tuple in the relational model?",
      options: [
        "A column in a table",
        "A row in a table",
        "A table in a database",
        "A relationship between tables"
      ],
      correct: 1,
      explanation: "A tuple is a row in a table (relation) that represents a single record or instance of data."
    },
    {
      question: "Which of the following is a type of key in relational databases?",
      options: [
        "Super key",
        "Candidate key",
        "Foreign key",
        "All of the above"
      ],
      correct: 3,
      explanation: "Super key, candidate key, primary key, and foreign key are all types of keys used in relational databases for different purposes."
    },
    {
      question: "What is a candidate key?",
      options: [
        "A key that can have null values",
        "A minimal super key that can uniquely identify tuples",
        "A key that references another table",
        "A key that can have duplicate values"
      ],
      correct: 1,
      explanation: "A candidate key is a minimal super key, meaning it's the smallest set of attributes that can uniquely identify each tuple in a relation."
    },
    {
      question: "In relational algebra, which operation is used to select specific columns?",
      options: [
        "Select (σ)",
        "Project (π)",
        "Join (⋈)",
        "Union (∪)"
      ],
      correct: 1,
      explanation: "The Project operation (π) is used to select specific columns (attributes) from a relation, while Select (σ) is used to filter rows."
    },
    {
      question: "What does the Cartesian product operation do in relational algebra?",
      options: [
        "Selects common tuples from two relations",
        "Combines all tuples from two relations",
        "Removes duplicate tuples",
        "Sorts tuples in ascending order"
      ],
      correct: 1,
      explanation: "Cartesian product combines every tuple from the first relation with every tuple from the second relation, creating all possible combinations."
    },

    // SQL
    {
      question: "Which SQL command is used to create a database?",
      options: [
        "CREATE DATABASE",
        "MAKE DATABASE",
        "BUILD DATABASE",
        "NEW DATABASE"
      ],
      correct: 0,
      explanation: "The CREATE DATABASE command is the standard SQL command used to create a new database."
    },
    {
      question: "What is the correct syntax for inserting data into a table?",
      options: [
        "INSERT INTO table_name (columns) VALUES (values)",
        "INSERT table_name (columns) VALUES (values)",
        "ADD INTO table_name (columns) VALUES (values)",
        "PUT INTO table_name (columns) VALUES (values)"
      ],
      correct: 0,
      explanation: "The correct syntax is INSERT INTO table_name (column_list) VALUES (value_list) to insert new records into a table."
    },
    {
      question: "Which SQL clause is used to filter records?",
      options: [
        "FILTER",
        "WHERE",
        "HAVING",
        "SELECT"
      ],
      correct: 1,
      explanation: "The WHERE clause is used to filter records based on specified conditions, determining which rows to include in the result set."
    },
    {
      question: "What does the SQL command 'SELECT DISTINCT' do?",
      options: [
        "Selects all records",
        "Selects only unique records",
        "Selects records in descending order",
        "Selects records with null values"
      ],
      correct: 1,
      explanation: "SELECT DISTINCT returns only unique (distinct) records, eliminating duplicate rows from the result set."
    },
    {
      question: "Which type of JOIN returns all records when there is a match in either table?",
      options: [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
      ],
      correct: 3,
      explanation: "FULL OUTER JOIN returns all records when there is a match in either the left or right table, including unmatched records from both tables."
    },
    {
      question: "What is a subquery in SQL?",
      options: [
        "A query that runs before the main query",
        "A query nested inside another query",
        "A query that updates data",
        "A query that creates tables"
      ],
      correct: 1,
      explanation: "A subquery is a query nested inside another query, also known as an inner query or nested query."
    },
    {
      question: "Which SQL function returns the current date and time?",
      options: [
        "CURRENT_DATE()",
        "NOW()",
        "GETDATE()",
        "All of the above (depending on the database system)"
      ],
      correct: 3,
      explanation: "Different database systems use different functions: NOW() in MySQL, GETDATE() in SQL Server, CURRENT_TIMESTAMP in PostgreSQL, etc."
    },

    // Normalization
    {
      question: "What is the main goal of database normalization?",
      options: [
        "To increase data redundancy",
        "To reduce data redundancy and eliminate insertion, update, and deletion anomalies",
        "To make databases slower",
        "To increase storage space"
      ],
      correct: 1,
      explanation: "Normalization aims to reduce data redundancy and eliminate insertion, update, and deletion anomalies while preserving data integrity."
    },
    {
      question: "A table is in First Normal Form (1NF) if:",
      options: [
        "It has a primary key",
        "All attributes contain atomic (indivisible) values",
        "It has no partial dependencies",
        "It has no transitive dependencies"
      ],
      correct: 1,
      explanation: "A table is in 1NF if all attributes contain atomic (indivisible) values, meaning no multi-valued or composite attributes."
    },
    {
      question: "What is a functional dependency?",
      options: [
        "A relationship between two functions",
        "A constraint that describes the relationship between attributes",
        "A type of database index",
        "A backup mechanism"
      ],
      correct: 1,
      explanation: "A functional dependency is a constraint that describes the relationship between attributes, where one attribute determines another."
    },
    {
      question: "A table is in Second Normal Form (2NF) if:",
      options: [
        "It is in 1NF and has no partial dependencies",
        "It is in 1NF and has no transitive dependencies",
        "It has a composite primary key",
        "All attributes are atomic"
      ],
      correct: 0,
      explanation: "A table is in 2NF if it is in 1NF and has no partial dependencies (non-prime attributes fully depend on the entire primary key)."
    },
    {
      question: "What is Boyce-Codd Normal Form (BCNF)?",
      options: [
        "Same as 3NF",
        "A stricter version of 3NF",
        "Lower than 3NF",
        "Unrelated to other normal forms"
      ],
      correct: 1,
      explanation: "BCNF is a stricter version of 3NF where every determinant must be a candidate key, eliminating certain anomalies that 3NF might allow."
    },

    // Transaction Management
    {
      question: "What does Atomicity in ACID properties mean?",
      options: [
        "Transactions are processed quickly",
        "Either all operations in a transaction are executed or none are",
        "Data is stored in atomic units",
        "Multiple users can access data simultaneously"
      ],
      correct: 1,
      explanation: "Atomicity ensures that either all operations within a transaction are executed successfully, or none are executed at all (all-or-nothing principle)."
    },
    {
      question: "What is Consistency in ACID properties?",
      options: [
        "Data is always backed up",
        "Transactions bring the database from one valid state to another valid state",
        "All users see the same data",
        "Data is stored consistently across multiple servers"
      ],
      correct: 1,
      explanation: "Consistency ensures that transactions bring the database from one valid state to another valid state, maintaining all database rules and constraints."
    },
    {
      question: "What is Isolation in ACID properties?",
      options: [
        "Transactions are executed in isolation from hardware failures",
        "Each transaction is executed independently without interference from other concurrent transactions",
        "Data is isolated from unauthorized access",
        "Transactions are isolated from the network"
      ],
      correct: 1,
      explanation: "Isolation ensures that concurrent transactions do not interfere with each other, making it appear as if transactions are executed sequentially."
    },
    {
      question: "What is two-phase locking protocol?",
      options: [
        "A backup strategy with two phases",
        "A concurrency control protocol with growing and shrinking phases",
        "A normalization technique",
        "A query optimization method"
      ],
      correct: 1,
      explanation: "Two-phase locking protocol ensures serializability by having two phases: growing phase (acquiring locks) and shrinking phase (releasing locks)."
    },
    {
      question: "What is a dirty read in database transactions?",
      options: [
        "Reading corrupted data",
        "Reading data that has been modified by an uncommitted transaction",
        "Reading encrypted data",
        "Reading backup data"
      ],
      correct: 1,
      explanation: "A dirty read occurs when a transaction reads data that has been modified by another transaction that hasn't been committed yet."
    },

    // Indexing and Storage
    {
      question: "What is the primary advantage of using indexes in databases?",
      options: [
        "Reduced storage space",
        "Faster data retrieval",
        "Better data security",
        "Automatic backup"
      ],
      correct: 1,
      explanation: "Indexes provide faster data retrieval by creating efficient access paths to data, similar to an index in a book."
    },
    {
      question: "Which data structure is commonly used for database indexes?",
      options: [
        "Linked List",
        "Array",
        "B-Tree",
        "Stack"
      ],
      correct: 2,
      explanation: "B-Trees are commonly used for database indexes because they maintain sorted data and allow searches, insertions, and deletions in logarithmic time."
    },
    {
      question: "What is a clustered index?",
      options: [
        "An index that groups multiple columns",
        "An index where the physical order of data matches the logical order of the index",
        "An index used for clustering servers",
        "A temporary index"
      ],
      correct: 1,
      explanation: "A clustered index is one where the physical order of data in the table matches the logical order of the index keys."
    },
    {
      question: "What is hashing in database storage?",
      options: [
        "A data encryption technique",
        "A technique to convert data into a fixed-size value for fast retrieval",
        "A backup method",
        "A normalization process"
      ],
      correct: 1,
      explanation: "Hashing is a technique that converts data into a fixed-size hash value, enabling very fast data retrieval through direct addressing."
    },

    // Advanced SQL and Database Concepts
    {
      question: "What is a trigger in databases?",
      options: [
        "A button to start the database",
        "A special stored procedure that automatically executes in response to certain events",
        "A type of index",
        "A backup schedule"
      ],
      correct: 1,
      explanation: "A trigger is a special stored procedure that automatically executes (fires) in response to certain events on a table or view in a database."
    },
    {
      question: "What is the purpose of the COMMIT statement?",
      options: [
        "To start a new transaction",
        "To permanently save all changes made in the current transaction",
        "To cancel all changes in the current transaction",
        "To create a new table"
      ],
      correct: 1,
      explanation: "The COMMIT statement permanently saves all changes made in the current transaction to the database."
    },
    {
      question: "What is the difference between ROLLBACK and COMMIT?",
      options: [
        "No difference",
        "ROLLBACK saves changes, COMMIT cancels changes",
        "COMMIT saves changes, ROLLBACK cancels changes",
        "Both save changes differently"
      ],
      correct: 2,
      explanation: "COMMIT permanently saves all transaction changes to the database, while ROLLBACK cancels all changes and returns the database to its previous state."
    },
    {
      question: "What is a cursor in SQL?",
      options: [
        "A pointer to a specific location in a result set",
        "A mouse pointer for database interfaces",
        "A type of index",
        "A backup tool"
      ],
      correct: 0,
      explanation: "A cursor is a database object that points to a specific location in a result set, allowing row-by-row processing of query results."
    },

    // Database Design and ER Model
    {
      question: "In an Entity-Relationship (ER) model, what does an entity represent?",
      options: [
        "A relationship between data",
        "A real-world object or concept",
        "A database table",
        "A query result"
      ],
      correct: 1,
      explanation: "An entity represents a real-world object or concept about which data is stored in the database."
    },
    {
      question: "What is cardinality in ER modeling?",
      options: [
        "The number of entities in a database",
        "The number of relationships an entity can participate in",
        "The number of attributes an entity has",
        "The data type of an attribute"
      ],
      correct: 1,
      explanation: "Cardinality specifies the number of relationships an entity can participate in, such as one-to-one, one-to-many, or many-to-many."
    },
    {
      question: "What is a weak entity in ER modeling?",
      options: [
        "An entity with few attributes",
        "An entity that cannot be uniquely identified by its own attributes",
        "An entity with weak relationships",
        "An entity that is rarely used"
      ],
      correct: 1,
      explanation: "A weak entity cannot be uniquely identified by its own attributes and depends on a strong entity for identification."
    },

    // Concurrency and Recovery
    {
      question: "What is serializability in database systems?",
      options: [
        "The ability to convert data to serial format",
        "The property that concurrent execution of transactions is equivalent to some serial execution",
        "The ability to backup data serially",
        "The process of storing data in series"
      ],
      correct: 1,
      explanation: "Serializability ensures that concurrent execution of transactions produces the same result as some serial (sequential) execution of the same transactions."
    },
    {
      question: "What is a checkpoint in database recovery?",
      options: [
        "A backup of the entire database",
        "A point in the transaction log where all committed transactions are written to disk",
        "A validation point for data integrity",
        "A security checkpoint"
      ],
      correct: 1,
      explanation: "A checkpoint is a point in the transaction log where all committed transactions and their changes are guaranteed to be written to disk."
    },
    {
      question: "What is phantom read in database concurrency?",
      options: [
        "Reading deleted data",
        "Reading data that appears or disappears between reads due to other transactions",
        "Reading encrypted data",
        "Reading backup data"
      ],
      correct: 1,
      explanation: "Phantom read occurs when a transaction re-executes a query and finds additional rows that satisfy the condition due to other transactions' insertions."
    },

    // Query Optimization
    {
      question: "What is the purpose of query optimization?",
      options: [
        "To make queries shorter",
        "To find the most efficient execution plan for a query",
        "To encrypt queries",
        "To backup queries"
      ],
      correct: 1,
      explanation: "Query optimization aims to find the most efficient execution plan for a query to minimize execution time and resource usage."
    },
    {
      question: "What is a query execution plan?",
      options: [
        "A backup plan for failed queries",
        "A step-by-step procedure for executing a query",
        "A security plan for queries",
        "A schedule for running queries"
      ],
      correct: 1,
      explanation: "A query execution plan is a step-by-step procedure that the database management system follows to execute a query efficiently."
    },

    // NoSQL and Modern Databases
    {
      question: "Which of the following is a characteristic of NoSQL databases?",
      options: [
        "Always use SQL as query language",
        "Strictly follow ACID properties",
        "Schema-less or flexible schema",
        "Only support relational data model"
      ],
      correct: 2,
      explanation: "NoSQL databases typically have schema-less or flexible schema designs, allowing for more dynamic and varied data structures."
    },
    {
      question: "What does CAP theorem state?",
      options: [
        "A distributed system can guarantee all three: Consistency, Availability, and Partition tolerance",
        "A distributed system can guarantee at most two out of three: Consistency, Availability, and Partition tolerance",
        "Consistency is more important than Availability",
        "Partition tolerance is not important"
      ],
      correct: 1,
      explanation: "CAP theorem states that a distributed system can guarantee at most two out of three properties: Consistency, Availability, and Partition tolerance."
    },
    {
      question: "Which of the following is a type of NoSQL database?",
      options: [
        "Document-based",
        "Key-Value",
        "Column-family",
        "All of the above"
      ],
      correct: 3,
      explanation: "NoSQL databases come in various types including document-based (MongoDB), key-value (Redis), column-family (Cassandra), and graph databases."
    },

    // Data Warehousing and OLAP
    {
      question: "What is OLAP?",
      options: [
        "Online Learning and Processing",
        "Online Analytical Processing",
        "Offline Analytical Processing",
        "Online Application Processing"
      ],
      correct: 1,
      explanation: "OLAP (Online Analytical Processing) is a technology for organizing large databases and supporting complex analysis and queries."
    },
    {
      question: "What is the difference between OLTP and OLAP?",
      options: [
        "No difference",
        "OLTP is for transaction processing, OLAP is for analytical processing",
        "OLTP is newer than OLAP",
        "OLAP is faster than OLTP"
      ],
      correct: 1,
      explanation: "OLTP (Online Transaction Processing) handles day-to-day transactions, while OLAP handles complex analytical queries and reporting."
    },
    {
      question: "What is a data warehouse?",
      options: [
        "A physical building to store servers",
        "A large, centralized repository of integrated data from multiple sources",
        "A type of database software",
        "A backup storage system"
      ],
      correct: 1,
      explanation: "A data warehouse is a large, centralized repository that stores integrated data from multiple sources for analytical processing and reporting."
    },

    // Database Security and Integrity
    {
      question: "What is a database audit trail?",
      options: [
        "A physical path in the database",
        "A record of all database activities and changes",
        "A type of index",
        "A backup schedule"
      ],
      correct: 1,
      explanation: "A database audit trail is a chronological record of all database activities and changes, used for security, compliance, and troubleshooting."
    },
    {
      question: "What is SQL injection?",
      options: [
        "A method to optimize SQL queries",
        "A security vulnerability where malicious SQL code is inserted into application queries",
        "A way to backup databases",
        "A type of database index"
      ],
      correct: 1,
      explanation: "SQL injection is a security vulnerability where attackers insert malicious SQL code into application queries to gain unauthorized access to data."
    },
    {
      question: "What is data encryption in databases?",
      options: [
        "Compressing data to save space",
        "Converting data into a coded format to protect it from unauthorized access",
        "Backing up data regularly",
        "Indexing data for faster access"
      ],
      correct: 1,
      explanation: "Data encryption converts data into a coded format that can only be accessed with the proper decryption key, protecting sensitive information."
    },

    // Database Architecture
    {
      question: "What is a three-tier database architecture?",
      options: [
        "Three different databases",
        "Client tier, application tier, and database tier",
        "Three backup levels",
        "Three user access levels"
      ],
      correct: 1,
      explanation: "Three-tier architecture consists of the client tier (user interface), application tier (business logic), and database tier (data storage and management)."
    },
    {
      question: "What is database sharding?",
      options: [
        "Breaking a database into smaller pieces",
        "Horizontally partitioning data across multiple database instances",
        "Creating backup copies",
        "Encrypting database files"
      ],
      correct: 1,
      explanation: "Database sharding is a method of horizontally partitioning data across multiple database instances to improve performance and scalability."
    },
    {
      question: "What is database replication?",
      options: [
        "Creating identical copies of a database for backup or distribution",
        "Compressing database files",
        "Encrypting database content",
        "Optimizing database queries"
      ],
      correct: 0,
      explanation: "Database replication involves creating and maintaining identical copies of a database across multiple servers for backup, disaster recovery, or load distribution."
    },

    // Advanced Database Topics
    {
      question: "What is a materialized view?",
      options: [
        "A regular database view",
        "A view that physically stores the result set of a query",
        "A temporary table",
        "A type of index"
      ],
      correct: 1,
      explanation: "A materialized view physically stores the result set of a query, unlike regular views which are virtual and computed on-demand."
    },
    {
      question: "What is database partitioning?",
      options: [
        "Dividing a database into multiple files",
        "Dividing large tables into smaller, more manageable pieces",
        "Creating separate user accounts",
        "Backing up database in parts"
      ],
      correct: 1,
      explanation: "Database partitioning involves dividing large tables into smaller, more manageable pieces while maintaining logical unity."
    },
    {
      question: "What is eventual consistency in distributed databases?",
      options: [
        "Data is always consistent",
        "Data will become consistent over time if no new updates are made",
        "Data is never consistent",
        "Consistency is not important"
      ],
      correct: 1,
      explanation: "Eventual consistency means that the system will become consistent over time, provided no new updates are made to the data."
    },
    {
      question: "What is MVCC (Multi-Version Concurrency Control)?",
      options: [
        "Multiple database versions",
        "A concurrency control method that maintains multiple versions of data",
        "A backup strategy",
        "A type of database index"
      ],
      correct: 1,
      explanation: "MVCC is a concurrency control method that maintains multiple versions of data to allow concurrent access without locking."
    },
    {
      question: "What is database denormalization?",
      options: [
        "The opposite of normalization",
        "Intentionally introducing redundancy to improve performance",
        "Removing all relationships",
        "A type of database backup"
      ],
      correct: 1,
      explanation: "Denormalization is the process of intentionally introducing redundancy into a normalized database to improve query performance."
    }
  ]
};

// Register with global mcqData
