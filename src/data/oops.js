export default {
  title: "Object Oriented Programming",
  questions: [
    // C++ Function MCQs
    { question: "Which of the following is not a valid return type for a C++ function?", options: ["int", "void", "function", "float"], correct: 2, explanation: "'function' is not a valid return type in C++." },
    { question: "In C++, default arguments must be:", options: ["Assigned to all parameters", "Assigned from left to right", "Assigned from right to left", "Optional for all functions"], correct: 2, explanation: "Default arguments are assigned from right to left." },
    { question: "What is the correct syntax for an inline function in C++?", options: ["function inline int sum()", "inline int sum()", "int inline sum()", "Both b and c"], correct: 3, explanation: "Both 'inline int sum()' and 'int inline sum()' are valid syntaxes." },
    { question: "Which parameter passing method creates a copy of the argument in C++?", options: ["Call by value", "Call by reference", "Call by pointer", "Return by reference"], correct: 0, explanation: "Call by value creates a copy of the argument." },
    { question: "Which keyword is used to define a function outside a class but still allow it to access private members?", options: ["protected", "friend", "private", "static"], correct: 1, explanation: "'friend' keyword allows function access to private members." },
    { question: "What will happen if you declare a function with the same name but different parameter list in C++?", options: ["Compile-time error", "Function overloading", "Function overriding", "Undefined behavior"], correct: 1, explanation: "This is called function overloading in C++." },
    { question: "Which method allows you to return the actual variable instead of its value in C++?", options: ["Call by pointer", "Call by reference", "Return by value", "Return by reference"], correct: 3, explanation: "Return by reference returns the actual variable." },

    // Java Method MCQs
    { question: "In Java, what is the equivalent of C++ function overloading?", options: ["Method overriding", "Method overloading", "Lambda expressions", "Constructors"], correct: 1, explanation: "Method overloading in Java is the equivalent of C++ function overloading." },
    { question: "Which keyword is used to define a method that can be called without creating an object in Java?", options: ["private", "public", "static", "abstract"], correct: 2, explanation: "'static' keyword allows calling without object creation." },
    { question: "In Java, which method is executed first when an object is created?", options: ["main()", "constructor", "init()", "start()"], correct: 1, explanation: "Constructor executes when an object is created." },
    { question: "Method overriding in Java requires:", options: ["Same name, different parameters", "Same name, same parameters", "Same class only", "Different return type"], correct: 1, explanation: "Overriding requires same method signature." },
    { question: "Which Java feature allows passing a method as a parameter?", options: ["Lambda expressions", "Method overloading", "Method overriding", "Default methods"], correct: 0, explanation: "Lambda expressions allow passing code as parameters." },
    { question: "In Java, if a method has the same name and parameter list in both superclass and subclass, which method will run when called from subclass?", options: ["Superclass method", "Subclass method", "Both methods", "None"], correct: 1, explanation: "Subclass method overrides superclass method." },
    { question: "In Java, which of the following cannot be overridden?", options: ["public methods", "protected methods", "private methods", "abstract methods"], correct: 2, explanation: "Private methods are not visible to subclasses." },

    // C++ Classes & Objects
    { question: "What is the default access specifier for members of a C++ class?", options: ["public", "private", "protected", "None"], correct: 1, explanation: "Default access specifier for a class is private." },
    { question: "Which of the following creates an object of class Student?", options: ["Student();", "Student obj;", "Student obj();", "create Student;"], correct: 1, explanation: "'Student obj;' creates an object." },
    { question: "Which keyword is used to make a function accessible to all classes?", options: ["public", "friend", "static", "extern"], correct: 1, explanation: "'friend' keyword makes function accessible to other classes." },
    { question: "Static data members in a C++ class:", options: ["Have separate copies for each object", "Are shared among all objects", "Cannot be initialized", "Must be private"], correct: 1, explanation: "Static data members are shared across all objects." },
    { question: "Which of the following is true for constant member functions in C++?", options: ["They can modify member variables", "They cannot modify member variables", "They must be static", "They are friend functions"], correct: 1, explanation: "Const member functions cannot change member variables." },
    { question: "How are class member functions defined outside the class in C++?", options: ["Using the class::function syntax", "Using the function::class syntax", "Using extern", "Using scope()"], correct: 0, explanation: "ClassName::functionName syntax is used." },
    { question: "If an object is passed by reference to a function in C++,", options: ["A copy of the object is made", "The actual object is modified", "The function cannot modify the object", "It will cause a compile error"], correct: 1, explanation: "Passing by reference allows modifying the actual object." },

    // Java Classes & Objects
    { question: "What is the default access specifier for class members in Java?", options: ["public", "private", "protected", "package-private"], correct: 3, explanation: "Package-private is default in Java." },
    { question: "Which keyword in Java is used to define a constant variable?", options: ["const", "final", "static", "constant"], correct: 1, explanation: "'final' keyword makes a constant variable." },
    { question: "In Java, static variables in a class:", options: ["Are shared among all objects", "Have separate copies for each object", "Cannot be initialized", "Must be public"], correct: 0, explanation: "Static variables are shared among all instances." },
    { question: "Which of the following statements about constructors in Java is false?", options: ["A constructor must have the same name as the class", "A constructor has no return type", "Constructors can be overloaded", "Constructors can be inherited"], correct: 3, explanation: "Constructors are not inherited in Java." },
    { question: "Which Java keyword is used to access the current object?", options: ["super", "this", "self", "object"], correct: 1, explanation: "'this' refers to current object instance." },
    { question: "What happens when an object is passed to a method in Java?", options: ["A copy of the reference is passed", "The actual object is passed by reference", "It is always passed by value", "None of the above"], correct: 0, explanation: "Java passes objects by value of the reference." },
    { question: "Friend functions exist in:", options: ["Java only", "C++ only", "Both Java & C++", "Neither"], correct: 1, explanation: "Friend functions are a C++ feature." },

    // C++ Constructors & Destructors
    { question: "Which statement is true about constructors in C++?", options: ["They must have a return type", "They can be overloaded", "They are called manually only", "They must be virtual"], correct: 1, explanation: "Constructors can be overloaded in C++." },
    { question: "Which constructor is invoked when an object is created without arguments?", options: ["Copy constructor", "Parameterized constructor", "Default constructor", "Dynamic constructor"], correct: 2, explanation: "Default constructor is called when no args are passed." },
    { question: "A destructor in C++ is identified by:", options: ["~ followed by the class name", "delete keyword", "destroy() method", "finalize() method"], correct: 0, explanation: "Destructor is defined with '~ClassName'." },
    { question: "Which of the following about a copy constructor is true?", options: ["It is called when copying an object", "It can be overloaded", "It must always take a reference parameter", "All of the above"], correct: 3, explanation: "All listed statements are true for copy constructors." },
    { question: "If you don’t define a destructor in C++:", options: ["Compiler creates one automatically", "Program won’t compile", "Object will never be destroyed", "Memory leak is guaranteed"], correct: 0, explanation: "Compiler generates a default destructor." },
    { question: "Dynamic constructors are used to:", options: ["Create constant objects", "Allocate memory during object creation", "Destroy objects faster", "Prevent multiple object creation"], correct: 1, explanation: "Dynamic constructors allocate memory during construction." },
    { question: "What is the key difference between shallow copy and deep copy?", options: ["Shallow copy copies only pointer addresses", "Deep copy copies actual content and allocates new memory", "Both a and b", "None of the above"], correct: 2, explanation: "Shallow copies pointers; deep copies data with new allocation." },
    { question: "When are destructors called in C++?", options: ["Immediately after creation", "When the object goes out of scope", "Before constructor", "At compile time"], correct: 1, explanation: "Destructors run when object scope ends." },

    // Java Constructors & Garbage Collection
    { question: "Which statement about constructors in Java is false?", options: ["They have the same name as the class", "They can have a return type", "They can be overloaded", "They are called when an object is created"], correct: 1, explanation: "Constructors never have a return type." },
    { question: "Which Java feature replaces the need for destructors?", options: ["Constructor chaining", "Garbage collection", "Static initialization", "Method overloading"], correct: 1, explanation: "Garbage collection handles memory management in Java." },
    { question: "Which method in Java is called before garbage collection?", options: ["destroy()", "finalize()", "delete()", "dispose()"], correct: 1, explanation: "'finalize()' is called prior to garbage collection." },
    { question: "Constructor chaining in Java can be done using:", options: ["super()", "this()", "Both a and b", "None"], correct: 2, explanation: "Chaining is possible with both this() and super()." },
    { question: "What happens if no constructor is defined in a Java class?", options: ["Compilation error occurs", "Object cannot be created", "Compiler provides a default constructor", "JVM throws an exception"], correct: 2, explanation: "Compiler inserts a default no-arg constructor." },
    { question: "Parameterized constructors in Java are used to:", options: ["Initialize objects with custom values", "Delete objects", "Allocate dynamic memory", "Create multiple copies"], correct: 0, explanation: "They initialize objects with specific data." },
    { question: "In Java, which of the following is true about garbage collection?", options: ["It can be forced using System.gc()", "It is deterministic like C++ destructors", "It must be called manually", "It guarantees memory release immediately"], correct: 0, explanation: "System.gc() requests garbage collection." },

    // C++ Operator Overloading
    { question: "Which of the following operators cannot be overloaded in C++?", options: ["+", "=", ".", "[]"], correct: 2, explanation: "Dot operator (.) cannot be overloaded." },
    { question: "Which operator must be overloaded as a member function, not a friend function?", options: ["= (assignment)", "+ (addition)", "- (subtraction)", "> (comparison)"], correct: 0, explanation: "Assignment operator (=) must be a member function." },
    { question: "What is the return type of an overloaded assignment operator (operator=)?", options: ["void", "int", "Reference to the class type", "Pointer to the class type"], correct: 2, explanation: "Assignment operator should return a reference to *this." },
    { question: "In C++, which keyword is used with a function to allow overloading as a friend function?", options: ["static", "friend", "public", "extern"], correct: 1, explanation: "Friend functions can be used for operator overloading." },
    { question: "Overloading the ++ operator for a class object can be done in:", options: ["Prefix form only", "Postfix form only", "Both prefix and postfix form", "Neither"], correct: 2, explanation: "++ can be overloaded in both forms." },
    { question: "When overloading comparison operators, they usually return:", options: ["int", "bool", "char", "float"], correct: 1, explanation: "Comparison operators return boolean results." },
    { question: "String concatenation using operator overloading is typically done by overloading:", options: ["=", "+", ">>", "[]"], correct: 1, explanation: "Overload '+' for string concatenation." },

    // Java Method Overloading & Overriding
    { question: "In Java, method overloading is determined at:", options: ["Compile-time", "Runtime", "JVM execution", "Dynamic linking"], correct: 0, explanation: "Overloading is compile-time polymorphism." },
    { question: "In Java, method overriding is determined at:", options: ["Compile-time", "Runtime", "JVM load time", "Static linking"], correct: 1, explanation: "Overriding is resolved at runtime." },
    { question: "Which annotation in Java is used to indicate method overriding?", options: ["@Overload", "@Override", "@Overridden", "@Super"], correct: 1, explanation: "'@Override' indicates method overriding." },
    { question: "Which of the following is not allowed in method overriding in Java?", options: ["Changing method name", "Keeping same method name & parameters", "Reducing access modifier visibility", "Changing method body"], correct: 2, explanation: "Cannot reduce access visibility of overridden method." },
    { question: "In Java, static methods:", options: ["Can be overridden", "Cannot be overridden", "Are always overloaded", "Are always virtual"], correct: 1, explanation: "Static methods are not overridden; they are hidden." },
    { question: "Which is true for method overloading in Java?", options: ["Parameters must differ in type/number", "Return type alone can differ", "Access modifiers must differ", "It must use @Override"], correct: 0, explanation: "Overloading requires changes in parameters, not just return type." },
    { question: "Runtime polymorphism in Java is achieved through:", options: ["Method overloading", "Method overriding", "Static methods", "Constructors"], correct: 1, explanation: "Override provides runtime polymorphism." }
  ]
};

// Register with global mcqData
