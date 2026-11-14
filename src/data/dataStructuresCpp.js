// Data Structures MCQ Data – C++ Specific - 100 Questions
export default {
  title: "Data Structures - C++",
  questions: [
    // Section 1 – C++ STL Containers
    { question: "Which header file contains the vector container in C++?", options: ["<vector>", "<array>", "<list>", "<container>"], correct: 0, explanation: "vector container is defined in <vector> header." },
    { question: "What is the default capacity of an empty vector in C++?", options: ["0", "1", "10", "Implementation-defined"], correct: 3, explanation: "Initial capacity is implementation-specific." },
    { question: "Which STL container provides constant time insertion at both ends?", options: ["vector", "deque", "list", "array"], correct: 1, explanation: "deque allows O(1) insertion at both front and back." },
    { question: "What does vector::capacity() return?", options: ["Number of elements", "Allocated space", "Maximum possible size", "Memory in bytes"], correct: 1, explanation: "capacity() returns the allocated storage space." },
    { question: "Which method adds element to the end of vector?", options: ["append()", "push_back()", "add()", "insert()"], correct: 1, explanation: "push_back() adds element to the end of vector." },
    
    // Section 2 – C++ Arrays and Pointers
    { question: "How do you declare a 2D array in C++?", options: ["int arr[5,5]", "int arr[5][5]", "int arr(5,5)", "int arr<5><5>"], correct: 1, explanation: "C++ uses [row][column] syntax for 2D arrays." },
    { question: "What is the relationship between arrays and pointers in C++?", options: ["No relationship", "Array name is a pointer", "Pointers are arrays", "Arrays contain pointers"], correct: 1, explanation: "Array name acts as a pointer to the first element." },
    { question: "Which operator is used for dynamic memory allocation in C++?", options: ["malloc", "new", "alloc", "create"], correct: 1, explanation: "new operator allocates memory dynamically in C++." },
    { question: "What must be called to deallocate memory allocated with new[]?", options: ["delete", "delete[]", "free", "deallocate"], correct: 1, explanation: "delete[] must be used for arrays allocated with new[]." },
    { question: "What is the size of array int arr[10] in C++?", options: ["10 bytes", "40 bytes", "sizeof(int)*10", "Depends on compiler"], correct: 2, explanation: "Size is number of elements times size of each element." },
    
    // Section 3 – C++ Templates
    { question: "What is a template in C++?", options: ["Class type", "Function type", "Generic programming tool", "Memory allocator"], correct: 2, explanation: "Templates enable generic programming in C++." },
    { question: "How do you declare a template class in C++?", options: ["template<class T>", "template<typename T>", "Both a and b", "generic<T>"], correct: 2, explanation: "Both class and typename keywords work in template declarations." },
    { question: "What is template instantiation?", options: ["Creating template", "Using template with specific type", "Deleting template", "Copying template"], correct: 1, explanation: "Instantiation creates specific version from template." },
    { question: "Which is a benefit of templates?", options: ["Type safety", "Code reusability", "Performance", "All of the above"], correct: 3, explanation: "Templates provide all these benefits." },
    { question: "What happens during template compilation?", options: ["Runtime type checking", "Compile-time code generation", "Dynamic linking", "Memory allocation"], correct: 1, explanation: "Compiler generates code for each template instantiation." },
    
    // Section 4 – C++ STL Algorithms
    { question: "Which header contains STL algorithms?", options: ["<algorithm>", "<functional>", "<iterator>", "<utility>"], correct: 0, explanation: "<algorithm> header contains most STL algorithms." },
    { question: "What does std::sort() require?", options: ["Random access iterators", "Comparable elements", "Both a and b", "Contiguous memory"], correct: 2, explanation: "sort() needs random access iterators and comparable elements." },
    { question: "Which algorithm finds an element in unsorted range?", options: ["std::binary_search", "std::find", "std::search", "std::locate"], correct: 1, explanation: "std::find performs linear search in unsorted data." },
    { question: "What is the time complexity of std::sort()?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correct: 1, explanation: "std::sort has O(n log n) average complexity." },
    { question: "Which function applies operation to each element?", options: ["std::apply", "std::for_each", "std::transform", "std::operate"], correct: 1, explanation: "std::for_each applies function to each element." },
    
    // Section 5 – C++ Iterators
    { question: "Which iterator can move in both directions?", options: ["Input iterator", "Forward iterator", "Bidirectional iterator", "Output iterator"], correct: 2, explanation: "Bidirectional iterators support ++ and -- operations." },
    { question: "What does begin() return?", options: ["Pointer to first", "Iterator to first", "Index of first", "Reference to first"], correct: 1, explanation: "begin() returns iterator to first element." },
    { question: "Which iterator provides random access?", options: ["Forward iterator", "Bidirectional iterator", "Random access iterator", "Input iterator"], correct: 2, explanation: "Random access iterators support pointer arithmetic." },
    { question: "What is the difference between end() and rbegin()?", options: ["No difference", "end() is past-the-last, rbegin() is last", "Both point to last", "end() is first"], correct: 1, explanation: "end() is past-the-last forward, rbegin() is last element for reverse." },
    { question: "Which containers support random access iterators?", options: ["vector", "list", "map", "set"], correct: 0, explanation: "vector and deque support random access iterators." },
    
    // Section 6 – C++ Vector Operations
    { question: "What happens when vector exceeds capacity?", options: ["Exception thrown", "Memory reallocated", "Size reset", "Program terminates"], correct: 1, explanation: "Vector automatically reallocates larger memory block." },
    { question: "Which is more efficient for frequent insertions at end?", options: ["vector", "list", "deque", "array"], correct: 0, explanation: "vector::push_back() is amortized O(1)." },
    { question: "What does vector::reserve() do?", options: ["Reduces capacity", "Sets capacity", "Adds elements", "Removes elements"], correct: 1, explanation: "reserve() allocates memory for at least specified elements." },
    { question: "How do you access vector elements safely?", options: ["operator[]", "at()", "get()", "Both a and b"], correct: 1, explanation: "at() performs bounds checking, operator[] doesn't." },
    { question: "What is the difference between size() and capacity()?", options: ["No difference", "size() ≤ capacity()", "capacity() ≤ size()", "Both are equal"], correct: 1, explanation: "size() is current elements, capacity() is allocated space." },
    
    // Section 7 – C++ List and Deque
    { question: "Which container provides fastest insertion in middle?", options: ["vector", "list", "deque", "array"], correct: 1, explanation: "list provides O(1) insertion anywhere if you have iterator." },
    { question: "What type of list is std::list?", options: ["Singly linked", "Doubly linked", "Circular", "Array-based"], correct: 1, explanation: "std::list is typically implemented as doubly linked list." },
    { question: "Which container allows fast insertion at both ends?", options: ["vector", "list", "deque", "All"], correct: 2, explanation: "deque provides O(1) insertion at both front and back." },
    { question: "What is unique about std::forward_list?", options: ["Bidirectional", "Singly linked", "Array-based", "Thread-safe"], correct: 1, explanation: "forward_list is singly linked list." },
    { question: "Which operation is not efficient in std::list?", options: ["push_front", "push_back", "random access", "insert"], correct: 2, explanation: "list doesn't support efficient random access." },
    
    // Section 8 – C++ Stack and Queue
    { question: "std::stack is implemented as:", options: ["Class", "Container adapter", "Template", "Interface"], correct: 1, explanation: "stack is a container adapter wrapping underlying container." },
    { question: "Which container is used by default for std::stack?", options: ["vector", "list", "deque", "array"], correct: 2, explanation: "deque is the default underlying container for stack." },
    { question: "How do you access top element of stack?", options: ["front()", "back()", "top()", "peek()"], correct: 2, explanation: "top() method accesses the top element." },
    { question: "What does std::queue::front() do?", options: ["Adds element", "Removes element", "Access first element", "Checks if empty"], correct: 2, explanation: "front() accesses the first element without removing." },
    { question: "Which container can be used for std::priority_queue?", options: ["vector", "deque", "Both a and b", "list"], correct: 2, explanation: "Both vector and deque support random access needed for heap." },
    
    // Section 9 – C++ Associative Containers
    { question: "std::map is typically implemented as:", options: ["Hash table", "Red-black tree", "Array", "Linked list"], correct: 1, explanation: "map is usually implemented as red-black tree." },
    { question: "What is the time complexity of std::map::find()?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "map operations are O(log n) due to tree structure." },
    { question: "Which container allows duplicate keys?", options: ["std::map", "std::multimap", "std::set", "std::unordered_map"], correct: 1, explanation: "multimap allows multiple values per key." },
    { question: "std::unordered_map is implemented using:", options: ["Tree", "Hash table", "Array", "List"], correct: 1, explanation: "unordered_map uses hash table for O(1) average operations." },
    { question: "Which provides fastest average lookup?", options: ["map", "unordered_map", "set", "multiset"], correct: 1, explanation: "unordered_map provides O(1) average lookup." },
    
    // Section 10 – C++ Memory Management
    { question: "What is RAII in C++?", options: ["Resource Acquisition Is Initialization", "Random Access Interface Implementation", "Recursive Algorithm Implementation", "None"], correct: 0, explanation: "RAII ties resource lifetime to object lifetime." },
    { question: "Which smart pointer should be used for unique ownership?", options: ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"], correct: 1, explanation: "unique_ptr provides exclusive ownership semantics." },
    { question: "What happens when unique_ptr goes out of scope?", options: ["Memory leak", "Automatic cleanup", "Exception thrown", "Undefined behavior"], correct: 1, explanation: "unique_ptr automatically deletes the managed object." },
    { question: "Which header contains smart pointers?", options: ["<memory>", "<pointer>", "<smart>", "<auto>"], correct: 0, explanation: "<memory> header contains smart pointer classes." },
    { question: "What is the purpose of std::make_unique?", options: ["Copy unique_ptr", "Create unique_ptr safely", "Move unique_ptr", "Delete unique_ptr"], correct: 1, explanation: "make_unique creates unique_ptr with exception safety." },
    
    // Section 11 – C++ STL Algorithms Advanced
    { question: "What does std::transform() do?", options: ["Sorts elements", "Applies function to elements", "Finds elements", "Counts elements"], correct: 1, explanation: "transform() applies operation to range and stores result." },
    { question: "Which algorithm partitions elements?", options: ["std::partition", "std::sort", "std::divide", "std::split"], correct: 0, explanation: "std::partition divides range based on predicate." },
    { question: "What is the difference between std::find and std::find_if?", options: ["No difference", "find_if uses predicate", "find is faster", "find_if is deprecated"], correct: 1, explanation: "find_if searches using a predicate function." },
    { question: "Which function removes consecutive duplicates?", options: ["std::remove", "std::unique", "std::distinct", "std::filter"], correct: 1, explanation: "std::unique removes consecutive duplicate elements." },
    { question: "What does std::accumulate() do?", options: ["Adds elements", "Multiplies elements", "Applies binary operation", "All of the above"], correct: 2, explanation: "accumulate applies binary operation to range." },
    
    // Section 12 – C++ Container Adaptors
    { question: "Which of these are container adaptors in STL?", options: ["vector", "stack, queue, priority_queue", "map", "set"], correct: 1, explanation: "stack, queue, and priority_queue are container adaptors." },
    { question: "Can you iterate through std::stack directly?", options: ["Yes", "No", "Only with iterators", "Only in debug mode"], correct: 1, explanation: "stack doesn't provide iterators for direct iteration." },
    { question: "What is the underlying container for std::priority_queue by default?", options: ["vector", "deque", "list", "array"], correct: 0, explanation: "priority_queue uses vector by default." },
    { question: "How is priority determined in std::priority_queue?", options: ["FIFO", "LIFO", "Comparator/operator<", "Random"], correct: 2, explanation: "priority_queue uses comparison operators for ordering." },
    { question: "Can you change the underlying container of std::stack?", options: ["No", "Yes, via template parameter", "Only to vector", "Only to list"], correct: 1, explanation: "You can specify underlying container as template parameter." },
    
    // Section 13 – C++ Iterators Advanced
    { question: "What type of iterator does std::list provide?", options: ["Random access", "Bidirectional", "Forward", "Input"], correct: 1, explanation: "list provides bidirectional iterators." },
    { question: "Which iterator invalidation occurs when vector reallocates?", options: ["Only end()", "All iterators", "Only begin()", "No invalidation"], correct: 1, explanation: "Reallocation invalidates all iterators to vector." },
    { question: "What is the purpose of std::advance()?", options: ["Increment iterator", "Move iterator by n positions", "Get next iterator", "Reset iterator"], correct: 1, explanation: "advance() moves iterator by specified number of positions." },
    { question: "Which function calculates distance between iterators?", options: ["std::length", "std::distance", "std::diff", "std::span"], correct: 1, explanation: "std::distance calculates number of elements between iterators." },
    { question: "What does std::next() do?", options: ["Increments iterator", "Returns advanced copy", "Gets next element", "Moves to end"], correct: 1, explanation: "next() returns copy of iterator advanced by n positions." },
    
    // Section 14 – C++ String as Container
    { question: "std::string is a container of which type?", options: ["char", "wchar_t", "char or wchar_t", "Any character type"], correct: 0, explanation: "std::string is typedef for basic_string<char>." },
    { question: "Which method adds character to end of string?", options: ["append()", "push_back()", "Both a and b", "add()"], correct: 2, explanation: "Both append() and push_back() add characters to string." },
    { question: "What does string::substr() return?", options: ["Reference", "Copy", "Iterator", "Pointer"], correct: 1, explanation: "substr() returns a copy of substring." },
    { question: "How do you convert string to C-style array?", options: ["str.c_str()", "str.data()", "Both a and b", "str.array()"], correct: 2, explanation: "Both c_str() and data() return pointer to character array." },
    { question: "Which is more efficient for string concatenation?", options: ["operator+", "append()", "strcat()", "All same"], correct: 1, explanation: "append() is generally more efficient than operator+." },
    
    // Section 15 – C++ STL Function Objects
    { question: "What is a function object (functor) in C++?", options: ["Function pointer", "Object with operator()", "Lambda function", "Template function"], correct: 1, explanation: "Functor is object that implements operator()." },
    { question: "Which predefined functor performs addition?", options: ["std::add", "std::plus", "std::sum", "std::addition"], correct: 1, explanation: "std::plus is predefined function object for addition." },
    { question: "Where are predefined functors defined?", options: ["<functional>", "<algorithm>", "<operator>", "<functor>"], correct: 0, explanation: "Predefined function objects are in <functional>." },
    { question: "What is a lambda expression in C++11?", options: ["Anonymous function", "Template function", "Inline function", "Virtual function"], correct: 0, explanation: "Lambda creates anonymous function objects." },
    { question: "How do you capture variables in lambda by reference?", options: ["[&]", "[=]", "[var]", "[*]"], correct: 0, explanation: "[&] captures all variables by reference." },
    
    // Section 16 – C++ STL Utilities
    { question: "What does std::pair store?", options: ["Single value", "Two related values", "Array of values", "Key-value mapping"], correct: 1, explanation: "pair stores two related values together." },
    { question: "How do you access first element of std::pair?", options: [".first", ".second", ".get<0>()", "Both a and c"], correct: 3, explanation: "Both .first and .get<0>() access first element." },
    { question: "What is std::tuple?", options: ["Pair with 3 elements", "Generalized pair", "Array wrapper", "Container adapter"], correct: 1, explanation: "tuple is generalized version of pair for multiple values." },
    { question: "Which function creates std::pair?", options: ["std::make_pair", "std::create_pair", "std::new_pair", "std::pair::make"], correct: 0, explanation: "std::make_pair creates pair objects." },
    { question: "How do you swap two variables efficiently in C++?", options: ["temp variable", "std::swap", "XOR operation", "All work"], correct: 1, explanation: "std::swap is optimized and preferred method." },
    
    // Section 17 – C++ Container Comparison
    { question: "When should you choose std::array over built-in array?", options: ["Never", "When you need STL algorithms", "For dynamic size", "For C compatibility"], correct: 1, explanation: "std::array works with STL algorithms unlike built-in arrays." },
    { question: "Which container provides best cache locality?", options: ["vector", "list", "deque", "map"], correct: 0, explanation: "vector stores elements contiguously providing best cache performance." },
    { question: "What is the main advantage of std::list over std::vector?", options: ["Random access", "Iterator stability", "Memory efficiency", "Cache performance"], correct: 1, explanation: "list iterators remain valid after insertions/deletions." },
    { question: "When should you use std::deque?", options: ["Random access needed", "Insertions at both ends", "Cache performance", "All of the above"], correct: 1, explanation: "deque is ideal when you need insertions at both ends." },
    { question: "Which container should be used for large objects?", options: ["vector of objects", "vector of pointers", "list of objects", "Depends on access pattern"], correct: 3, explanation: "Choice depends on whether you need random access or insertion performance." },
    
    // Section 18 – C++ STL Performance
    { question: "What is the amortized complexity of vector::push_back()?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0, explanation: "push_back() is amortized O(1) due to doubling strategy." },
    { question: "Which has better performance for frequent sorting?", options: ["vector", "list", "deque", "set"], correct: 3, explanation: "set maintains sorted order automatically." },
    { question: "What is the complexity of std::map::insert()?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "map insertion is O(log n) due to tree structure." },
    { question: "Which container has predictable iterator invalidation rules?", options: ["vector", "deque", "list", "map"], correct: 2, explanation: "list has simple rules - only erased elements invalidate." },
    { question: "What is the complexity of std::unordered_map worst case?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, explanation: "Worst case when all elements hash to same bucket." },
    
    // Section 19 – C++ Modern Features (C++11/14/17)
    { question: "How do you initialize vector with specific values in C++11?", options: ["vector<int> v{1,2,3}", "vector<int> v = {1,2,3}", "Both a and b", "vector<int> v(1,2,3)"], correct: 2, explanation: "Both brace initialization syntaxes work in C++11." },
    { question: "What is auto keyword used for?", options: ["Automatic variables", "Type deduction", "Memory management", "Loop iteration"], correct: 1, explanation: "auto keyword enables automatic type deduction." },
    { question: "Which loop is preferred for STL containers?", options: ["for(int i=0...)", "while loop", "range-based for", "do-while"], correct: 2, explanation: "Range-based for loop is cleaner and safer." },
    { question: "What does std::move() do?", options: ["Copies object", "Moves object", "Casts to rvalue reference", "Deletes object"], correct: 2, explanation: "std::move casts to rvalue reference enabling move semantics." },
    { question: "What is the benefit of move semantics?", options: ["Type safety", "Performance improvement", "Memory safety", "Thread safety"], correct: 1, explanation: "Move semantics avoid unnecessary copying." },
    
    // Section 20 – C++ Advanced Topics
    { question: "What is the purpose of std::allocator?", options: ["Memory allocation", "Algorithm optimization", "Type conversion", "Iterator creation"], correct: 0, explanation: "allocator provides memory allocation interface for containers." },
    { question: "Which container uses hash table implementation?", options: ["map", "unordered_map", "set", "multiset"], correct: 1, explanation: "unordered_* containers use hash tables." },
    { question: "What does const_iterator provide?", options: ["Constant iterator", "Read-only access", "Immutable container", "Constant time access"], correct: 1, explanation: "const_iterator provides read-only access to elements." },
    { question: "Which is correct way to erase from map while iterating?", options: ["map.erase(it++)", "map.erase(it); it++", "it = map.erase(it)", "All are wrong"], correct: 2, explanation: "C++11 erase returns iterator to next element." },
    { question: "What is the benefit of std::array over C array?", options: ["Dynamic size", "STL compatibility", "Automatic memory management", "Both b and c"], correct: 3, explanation: "std::array provides STL compatibility with automatic cleanup." },
    
    // Additional C++ Specific Questions
    { question: "What does vector::shrink_to_fit() do?", options: ["Reduces size", "Reduces capacity to size", "Clears vector", "Optimizes memory"], correct: 1, explanation: "shrink_to_fit() requests capacity reduction to match size." },
    { question: "Which method checks if container is empty?", options: ["size() == 0", "empty()", "Both a and b", "length() == 0"], correct: 2, explanation: "Both empty() and size() == 0 check if container is empty." },
    { question: "What is the difference between map and unordered_map?", options: ["Ordering", "Performance", "Memory usage", "All of the above"], correct: 3, explanation: "map is ordered with O(log n) ops, unordered_map has O(1) average." },
    { question: "Which container should be used for cache-friendly iteration?", options: ["list", "vector", "map", "set"], correct: 1, explanation: "vector provides best cache locality for iteration." },
    { question: "What happens when you access vector[n] where n >= size()?", options: ["Exception", "Undefined behavior", "Returns default value", "Automatically resizes"], correct: 1, explanation: "Accessing out-of-bounds with operator[] is undefined behavior." },
    { question: "Which STL container is closest to dynamic array?", options: ["array", "vector", "deque", "list"], correct: 1, explanation: "vector is the STL equivalent of dynamic array." },
    { question: "What does std::lower_bound() return?", options: ["Smallest element", "Iterator to first not less than value", "Index of element", "Boolean result"], correct: 1, explanation: "lower_bound returns iterator to first element not less than value." },
    { question: "Which container allows fastest insertion anywhere?", options: ["vector", "deque", "list", "map"], correct: 2, explanation: "list allows O(1) insertion anywhere with valid iterator." },
    { question: "What is the purpose of typename keyword in templates?", options: ["Type safety", "Dependent name disambiguation", "Template instantiation", "Generic programming"], correct: 1, explanation: "typename disambiguates dependent type names in templates." },
    { question: "Which method removes element from specific position in vector?", options: ["remove()", "erase()", "delete()", "pop()"], correct: 1, explanation: "erase() removes elements from specific position." },
    { question: "What does vector::clear() do to capacity?", options: ["Sets to 0", "Unchanged", "Undefined", "Optimal size"], correct: 1, explanation: "clear() removes elements but capacity typically unchanged." },
    { question: "Which associative container maintains insertion order?", options: ["map", "set", "unordered_map", "None in standard STL"], correct: 3, explanation: "Standard associative containers don't maintain insertion order." },
    { question: "What is the complexity of std::set::count()?", options: ["O(1)", "O(log n)", "O(n)", "O(log k)"], correct: 1, explanation: "set::count() is O(log n) since set contains unique elements." },
    { question: "Which function object is used for sorting in descending order?", options: ["std::greater", "std::less", "std::descending", "std::reverse"], correct: 0, explanation: "std::greater provides descending order comparison." },
    { question: "What does std::copy() require?", options: ["Same container types", "Compatible iterators", "Equal sizes", "Sorted ranges"], correct: 1, explanation: "copy() works with compatible iterator types." },
    { question: "Which container provides stable iterators?", options: ["vector", "deque", "list", "array"], correct: 2, explanation: "list iterators remain valid unless element is erased." },
    { question: "What is the purpose of std::back_inserter?", options: ["Insert at back", "Create iterator for push_back", "Get last element", "Reverse iterator"], correct: 1, explanation: "back_inserter creates iterator that calls push_back." },
    { question: "Which method returns reverse iterator?", options: ["rbegin()", "reverse()", "backward()", "rstart()"], correct: 0, explanation: "rbegin() returns reverse iterator to last element." },
    { question: "What does std::make_heap() do?", options: ["Creates heap container", "Converts range to heap", "Sorts elements", "Allocates memory"], correct: 1, explanation: "make_heap converts range into heap structure." },
    { question: "Which algorithm finds intersection of two sorted ranges?", options: ["std::merge", "std::set_intersection", "std::union", "std::intersect"], correct: 1, explanation: "set_intersection finds common elements in sorted ranges." },
    { question: "What is the complexity of std::multiset::equal_range()?", options: ["O(1)", "O(log n)", "O(k)", "O(log n + k)"], correct: 3, explanation: "Finding range takes O(log n + k) where k is count of equal elements." },
    { question: "Which header contains std::sort algorithm?", options: ["<sort>", "<algorithm>", "<utility>", "<vector>"], correct: 1, explanation: "std::sort is defined in <algorithm> header." },
    { question: "What does std::binary_search() return?", options: ["Iterator", "Index", "Boolean", "Element"], correct: 2, explanation: "binary_search returns true if element is found." },
    { question: "Which method provides exception-safe element access in vector?", options: ["operator[]", "at()", "get()", "access()"], correct: 1, explanation: "at() throws std::out_of_range for invalid indices." },
    { question: "What is the difference between emplace_back and push_back?", options: ["No difference", "emplace_back constructs in-place", "push_back is faster", "emplace_back is deprecated"], correct: 1, explanation: "emplace_back constructs object in-place avoiding copies." },
    { question: "Which container should be used for implementing graph adjacency list?", options: ["vector<vector<int>>", "vector<list<int>>", "list<vector<int>>", "All are valid"], correct: 3, explanation: "All are valid choices depending on requirements." },
    { question: "What does std::equal() do?", options: ["Assigns equal values", "Compares two ranges", "Finds equal elements", "Checks container equality"], correct: 1, explanation: "equal() compares elements in two ranges for equality." },
    { question: "Which algorithm sorts only part of range?", options: ["std::sort", "std::partial_sort", "std::nth_element", "Both b and c"], correct: 3, explanation: "Both partial_sort and nth_element sort only part of range." },
    { question: "What is the purpose of std::tie()?", options: ["Bind references", "Unpack tuple", "Compare tuples", "All of the above"], correct: 3, explanation: "tie() can bind references, unpack tuples, and help with comparisons." },
    { question: "Which method inserts multiple elements in vector?", options: ["insert()", "push_back()", "emplace()", "All of the above"], correct: 3, explanation: "All these methods can insert elements (insert can add multiple)." },
    { question: "What does std::rotate() do?", options: ["Sorts elements", "Swaps elements", "Rotates elements left", "Reverses elements"], correct: 2, explanation: "rotate() performs left rotation of elements in range." },
    { question: "Which container adapter doesn't support iterators?", options: ["stack", "queue", "priority_queue", "All of the above"], correct: 3, explanation: "Container adapters don't provide direct iterator access." },
    { question: "What is SFINAE in C++ templates?", options: ["Template syntax", "Substitution Failure Is Not An Error", "STL algorithm", "Memory management"], correct: 1, explanation: "SFINAE allows template overload resolution without errors." },
    { question: "Which method removes elements satisfying condition?", options: ["std::remove", "std::remove_if", "std::erase", "Both a and b"], correct: 3, explanation: "Both remove and remove_if can remove based on value or condition." },
    { question: "What does std::count_if() do?", options: ["Counts all elements", "Counts elements satisfying condition", "Counts unique elements", "Counts duplicates"], correct: 1, explanation: "count_if counts elements for which predicate returns true." },
    { question: "Which is the recommended way to iterate STL containers?", options: ["Index-based", "Iterator-based", "Pointer arithmetic", "Range-based for"], correct: 3, explanation: "Range-based for loop (C++11) is cleanest and safest." },
    { question: "What does std::includes() check?", options: ["Element existence", "One range includes another", "Container inclusion", "Memory inclusion"], correct: 1, explanation: "includes() checks if one sorted range includes all elements of another." },
    { question: "Which smart pointer allows shared ownership?", options: ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"], correct: 1, explanation: "shared_ptr allows multiple owners of same resource." },
    { question: "What is the purpose of std::weak_ptr?", options: ["Weak ownership", "Break circular references", "Observe shared_ptr", "All of the above"], correct: 3, explanation: "weak_ptr provides all these capabilities." },
    { question: "Which method adds element at specific position?", options: ["push()", "insert()", "add()", "place()"], correct: 1, explanation: "insert() adds elements at specified position." },
    { question: "What does std::adjacent_find() search for?", options: ["Adjacent elements", "Equal adjacent elements", "Different adjacent elements", "Maximum adjacent elements"], correct: 1, explanation: "adjacent_find looks for consecutive equal elements." },
    { question: "Which algorithm finds maximum element?", options: ["std::max", "std::max_element", "std::maximum", "std::largest"], correct: 1, explanation: "max_element returns iterator to maximum element in range." },
    { question: "What is the benefit of using STL over custom implementations?", options: ["Performance", "Reliability", "Portability", "All of the above"], correct: 3, explanation: "STL provides all these benefits with well-tested implementations." },
    { question: "Which method reserves exact capacity in vector?", options: ["reserve()", "resize()", "capacity()", "allocate()"], correct: 0, explanation: "reserve() reserves at least the specified capacity." },
    { question: "What does std::mismatch() find?", options: ["Different elements", "First differing elements", "All mismatches", "Missing elements"], correct: 1, explanation: "mismatch() returns iterators to first differing elements." },
    { question: "Which is true about std::array size?", options: ["Compile-time constant", "Runtime variable", "Dynamic", "Unlimited"], correct: 0, explanation: "std::array size must be known at compile time." },
    { question: "What does std::lexicographical_compare() do?", options: ["String comparison", "Dictionary order comparison", "Alphabetical sort", "Character counting"], correct: 1, explanation: "Performs lexicographical (dictionary order) comparison of ranges." },
    { question: "Which method provides safe element removal during iteration?", options: ["container.erase()", "algorithm remove", "iterator.erase()", "All methods safe"], correct: 0, explanation: "Use container's erase method with post-increment: container.erase(it++)." },
    { question: "What is the space complexity of std::map?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 2, explanation: "map requires O(n) space for n key-value pairs." },
    { question: "Which algorithm can be used for set operations?", options: ["std::set_union", "std::set_intersection", "std::set_difference", "All of the above"], correct: 3, explanation: "STL provides algorithms for all set operations." },
    { question: "What does std::generate() do?", options: ["Creates container", "Fills range with generated values", "Generates random numbers", "Creates iterators"], correct: 1, explanation: "generate() fills range with values from generator function." },
    { question: "Which container should be used for priority-based task scheduling?", options: ["queue", "stack", "priority_queue", "deque"], correct: 2, explanation: "priority_queue automatically orders elements by priority." },
    { question: "What is the relationship between std::vector and std::array?", options: ["Same thing", "vector is dynamic, array is fixed", "array is dynamic, vector is fixed", "No relationship"], correct: 1, explanation: "vector is dynamic, std::array is fixed-size wrapper." },
    { question: "Which method provides strong exception guarantee in vector?", options: ["push_back()", "insert()", "emplace_back()", "All depend on T"], correct: 3, explanation: "Exception safety depends on element type's constructor behavior." },
    { question: "What does std::iota() do?", options: ["Input/Output operation", "Fills range with increasing values", "Finds maximum", "Sorts elements"], correct: 1, explanation: "iota() fills range with successively increasing values." },
    { question: "Which is the most appropriate container for implementing LRU cache?", options: ["map", "list + unordered_map", "vector", "set"], correct: 1, explanation: "Combination of list and unordered_map efficiently implements LRU." },
    { question: "What does std::replace() do?", options: ["Swaps elements", "Replaces value with another", "Sorts elements", "Removes elements"], correct: 1, explanation: "replace() changes all occurrences of value to new value." },
    { question: "Which feature makes C++ templates different from Java generics?", options: ["Type erasure", "Compile-time generation", "Runtime checking", "Virtual dispatch"], correct: 1, explanation: "C++ templates generate code at compile time." },
    { question: "What is the purpose of std::forward()?", options: ["Forward declaration", "Perfect forwarding", "Iterator advancement", "Function forwarding"], correct: 1, explanation: "std::forward enables perfect forwarding in template functions." },
    { question: "Which container provides best performance for frequent find operations?", options: ["vector", "list", "unordered_set", "set"], correct: 2, explanation: "unordered_set provides O(1) average find performance." },
    { question: "What does std::stable_sort() guarantee?", options: ["O(n log n) complexity", "Stable sorting", "In-place sorting", "All of the above"], correct: 1, explanation: "stable_sort preserves relative order of equal elements." },
    { question: "Which method provides type-safe union in C++17?", options: ["union", "std::variant", "std::optional", "std::any"], correct: 1, explanation: "std::variant provides type-safe discriminated union." },
    { question: "What is the benefit of std::optional?", options: ["Optional parameters", "Nullable types", "Maybe monad", "All of the above"], correct: 3, explanation: "std::optional provides all these benefits for representing optional values." }
  ]
};

// Register with global mcqData
