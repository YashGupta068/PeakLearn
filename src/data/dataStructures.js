// Data Structures MCQ Data – 100 Questions
export default {
  title: "Data Structures",
  questions: [
    // Section 1 – General
    { question: "Which data structure follows LIFO principle?", options: ["Queue", "Stack", "Tree", "Graph"], correct: 1, explanation: "Stack follows Last In First Out (LIFO) principle." },
    { question: "What is the time complexity of searching in a binary search tree?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1, explanation: "Balanced BST search runs in O(log n)." },
    { question: "Which data structure is best for implementing a priority queue?", options: ["Array", "Linked List", "Heap", "Stack"], correct: 2, explanation: "Heap is most efficient for priority queues." },
    { question: "What is the main advantage of a hash table?", options: ["Ordered data storage", "Fast average case lookup", "Memory efficiency", "Easy implementation"], correct: 1, explanation: "Hash tables allow O(1) average lookups." },
    { question: "Which traversal visits root, left subtree, then right subtree?", options: ["Inorder", "Preorder", "Postorder", "Level order"], correct: 1, explanation: "Preorder visits root first." },
    { question: "Which of the following is not a linear data structure?", options: ["Array", "Stack", "Linked List", "Binary Tree"], correct: 3, explanation: "Binary Tree is hierarchical." },
    { question: "Which of the following data structures uses LIFO principle?", options: ["Queue", "Stack", "Linked List", "Heap"], correct: 1, explanation: "Stack uses LIFO." },
    { question: "Which type of memory allocation is used for a linked list?", options: ["Static", "Dynamic", "Both", "None"], correct: 1, explanation: "Linked lists use dynamic allocation." },
    { question: "Which is the correct asymptotic notation for constant time complexity?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0, explanation: "O(1) means constant time." },
    { question: "Master Theorem is used to:", options: ["Analyze iterative algorithms", "Analyze recursive algorithms", "Calculate memory", "Search arrays"], correct: 1, explanation: "Used for solving recurrence relations." },
    { question: "Which of the following is not a valid asymptotic notation?", options: ["O", "Ω", "θ", "∆"], correct: 3, explanation: "∆ is not asymptotic notation." },
    { question: "Time vs space trade-off means:", options: ["Reducing time always reduces space", "Increasing space can reduce execution time", "Time and space are unrelated", "Space complexity is ignored"], correct: 1, explanation: "Extra space can improve speed." },
    { question: "Which notation describes average-case complexity?", options: ["Big-O", "Big-Theta", "Big-Omega", "None"], correct: 1, explanation: "Θ notation describes average case." },
    { question: "Which data structure is best for storing hierarchical data?", options: ["Array", "Tree", "Stack", "Queue"], correct: 1, explanation: "Trees store hierarchical data." },
    { question: "In complexity notation, n log n is:", options: ["Faster than O(n)", "Slower than O(n²)", "Same as O(1)", "None"], correct: 1, explanation: "n log n grows slower than n²." },

    // Section 2 – Arrays
    { question: "In an array, elements are stored in:", options: ["Contiguous memory locations", "Random memory locations", "Linked locations", "None"], correct: 0, explanation: "Arrays store elements contiguously." },
    { question: "Index of the first element of an array in C/C++ is:", options: ["0", "1", "-1", "Depends"], correct: 0, explanation: "C/C++ arrays are 0-indexed." },
    { question: "Time complexity of accessing an element in an array is:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, explanation: "Access via index is O(1)." },
    { question: "Insertion at the beginning of an array takes:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1, explanation: "Requires shifting elements." },
    { question: "In a 2D array a[3][4], total elements are:", options: ["7", "12", "8", "6"], correct: 1, explanation: "3 × 4 = 12 elements." },
    { question: "Which algorithm is best for finding an element in a sorted array?", options: ["Linear search", "Binary search", "Jump search", "All"], correct: 1, explanation: "Binary search is optimal for sorted arrays." },
    { question: "Which sorting algorithm is not stable?", options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"], correct: 2, explanation: "Quick sort is not stable by default." },
    { question: "Best case complexity of insertion sort is:", options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"], correct: 1, explanation: "When already sorted." },
    { question: "Selection sort complexity in all cases is:", options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"], correct: 0, explanation: "Always n² comparisons." },
    { question: "Merge sort works on which principle?", options: ["Divide and Conquer", "Greedy", "Dynamic Programming", "Backtracking"], correct: 0, explanation: "It divides and merges." },

    // Section 3 – Linked List
    { question: "In a singly linked list, the last node’s next pointer contains:", options: ["Null", "Address of previous", "Address of head", "None"], correct: 0, explanation: "Last node points to null." },
    { question: "In a circular linked list, the last node’s next pointer contains:", options: ["Null", "Address of head", "Address of random node", "None"], correct: 1, explanation: "Circular links to head." },
    { question: "Which linked list allows traversal in both directions?", options: ["Singly", "Doubly", "Circular singly", "None"], correct: 1, explanation: "Doubly linked lists have prev & next." },
    { question: "Accessing the nth element in a linked list has time complexity:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1, explanation: "Traverse from head." },
    { question: "Which operation is faster in a linked list compared to an array?", options: ["Random access", "Insertion at head", "Access last", "Indexing"], correct: 1, explanation: "Insertion at head is O(1)." },
    { question: "The extra memory in a linked list node is used to store:", options: ["Index", "Pointer to next", "Array size", "None"], correct: 1, explanation: "Stores link address." },
    { question: "Which linked list consumes the most memory per node?", options: ["Singly", "Doubly", "Circular", "None"], correct: 1, explanation: "Doubly has two pointers." },
    { question: "The advantage of a circular linked list is:", options: ["Constant-time access", "Efficient traversal without null check", "Less memory usage", "All"], correct: 1, explanation: "Circular traversal avoids null checks." },
    { question: "Which is not an application of linked lists?", options: ["Implementing stacks", "Implementing queues", "Implementing trees", "Random access storage"], correct: 3, explanation: "Random access is inefficient." },
    { question: "Insertion into the middle of a linked list requires:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1, explanation: "Need to traverse to position." },

    // Section 4 – Stack
    { question: "Stack follows which principle?", options: ["FIFO", "LIFO", "FILO", "Both b and c"], correct: 3, explanation: "Stacks are LIFO/FILO." },
    { question: "Pushing an element into a full stack results in:", options: ["Underflow", "Overflow", "Null pointer", "Segfault"], correct: 1, explanation: "Exceeds capacity → overflow." },
    { question: "Which is NOT an application of stacks?", options: ["Undo", "Expression eval", "Tree traversal", "Round robin"], correct: 3, explanation: "Round robin uses queues." },
    { question: "Time complexity of pop in a stack:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, explanation: "Pop is O(1)." },
    { question: "Which data structure is used for recursion?", options: ["Queue", "Stack", "Array", "Heap"], correct: 1, explanation: "Recursion uses stacks." },
    { question: "Converting infix to postfix uses:", options: ["Stack", "Queue", "Array", "Tree"], correct: 0, explanation: "Stacks are used." },
    { question: "Max number of items in a stack is called:", options: ["Length", "Height", "Capacity", "Size"], correct: 2, explanation: "It’s capacity." },
    { question: "Which traversal uses stack explicitly?", options: ["Level order", "Preorder", "Postorder", "Inorder (non-recursive)"], correct: 3, explanation: "Non-recursive inorder uses stack." },
    { question: "Stack overflow can occur when:", options: ["Deep recursion", "Capacity exceeded", "Infinite loop", "Both a and b"], correct: 3, explanation: "Overflow due to both conditions." },
    { question: "Which is a postfix expression?", options: ["A + B", "A + B * C", "A B +", "(A + B) * C"], correct: 2, explanation: "Operands before operator." },

    // Section 5 – Queue
    { question: "Queue follows which principle?", options: ["LIFO", "FIFO", "FILO", "None"], correct: 1, explanation: "FIFO principle." },
    { question: "In a queue, deletion is done at:", options: ["Rear", "Front", "Middle", "Any"], correct: 1, explanation: "Dequeued from front." },
    { question: "Which queue allows insertion & deletion both ends?", options: ["Priority", "Deque", "Circular", "Simple"], correct: 1, explanation: "Deque = Double Ended Queue." },
    { question: "Which queue is used in CPU scheduling?", options: ["Priority", "Circular", "Deque", "Simple"], correct: 0, explanation: "Priority queues schedule tasks by priority." },
    { question: "Circular queues help in:", options: ["Saving memory", "Faster execution", "Sorting", "None"], correct: 0, explanation: "Reuses emptied space." },
    { question: "Which is NOT a type of queue?", options: ["Linear", "Circular", "Priority", "Indexed"], correct: 3, explanation: "Indexed queue is not standard." },
    { question: "Time complexity for enqueue:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, explanation: "Enqueue is O(1)." },
    { question: "Which scheduling algorithm uses a circular queue?", options: ["FCFS", "Round Robin", "Priority", "SJF"], correct: 1, explanation: "Round robin uses circular queue." },
    { question: "A printer queue works on:", options: ["FIFO", "LIFO", "Priority", "Random"], correct: 0, explanation: "Print jobs FIFO." },
    { question: "When front > rear in array queue:", options: ["Overflow", "Underflow", "Wrap-around", "None"], correct: 2, explanation: "Wrap-around in circular queue." },

    // Section 6 – Searching
    { question: "Binary search can only be applied on:", options: ["Sorted arrays", "Unsorted arrays", "Linked lists", "Hash tables"], correct: 0, explanation: "Requires sorted array." },
    { question: "Worst case complexity of binary search:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 1, explanation: "Cuts search space in half." },
    { question: "Best case complexity of linear search:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, explanation: "Element found in first position." },
    { question: "Search reducing half each step is:", options: ["Linear", "Binary", "Jump", "Hash"], correct: 1, explanation: "Binary search halves space." },
    { question: "Most efficient search for linked lists:", options: ["Linear", "Binary", "Hash", "Fibonacci"], correct: 0, explanation: "Needs sequential traversal." },
    { question: "Interpolation search works best on:", options: ["Sorted uniform", "Sorted random", "Unsorted", "Linked list"], correct: 0, explanation: "Best when data is uniformly distributed." },
    { question: "Mid index in binary search:", options: ["(low+high)/2", "(low-high)/2", "(low+high)*2", "None"], correct: 0, explanation: "Middle element." },
    { question: "Search in balanced BST:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 1, explanation: "BST search log n." },
    { question: "Hash table search average case:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, explanation: "O(1) average case." },
    { question: "Which search doesn't require sorting?", options: ["Binary", "Interpolation", "Linear", "Fibonacci"], correct: 2, explanation: "Linear works on unsorted data." },

    // Section 7 – Sorting
    { question: "Bubble sort best case:", options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"], correct: 0, explanation: "Sorted list requires O(n) passes." },
    { question: "Most efficient for large data:", options: ["Bubble", "Insertion", "Merge", "Selection"], correct: 2, explanation: "Merge is stable & O(n log n)." },
    { question: "Quick sort average:", options: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"], correct: 1, explanation: "Average case n log n." },
    { question: "Which is not based on comparisons?", options: ["Merge", "Radix", "Quick", "Heap"], correct: 1, explanation: "Radix sort uses digit keys." },
    { question: "Heap sort worst:", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correct: 0, explanation: "Always n log n." },
    { question: "Merge sort preferred when:", options: ["Memory limited", "Huge data & stability", "Nearly sorted", "None"], correct: 1, explanation: "Stable sort on big data." },
    { question: "Insertion sort best for:", options: ["Small data", "Large data", "Distributed", "None"], correct: 0, explanation: "Good for small datasets." },
    { question: "Selection sort comparisons:", options: ["n²/2", "n²", "log n", "n log n"], correct: 1, explanation: "Always n² comparisons." },
    { question: "Which sorting algo is stable?", options: ["Quick", "Merge", "Heap", "Selection"], correct: 1, explanation: "Merge sort preserves order." },
    { question: "Counting sort complexity:", options: ["O(n+k)", "O(n log n)", "O(n²)", "O(log n)"], correct: 0, explanation: "Depends on size of k." },

    // Section 8 – Recursion
    { question: "Recursion uses which data structure internally?", options: ["Queue", "Stack", "Array", "Tree"], correct: 1, explanation: "Recursion uses the call stack." },
    { question: "Base case in recursion is used to:", options: ["Repeat infinitely", "Terminate recursion", "Optimize memory", "None"], correct: 1, explanation: "Stops the recursion." },
    { question: "Factorial calculation is an example of:", options: ["Iteration", "Recursion", "Searching", "Sorting"], correct: 1, explanation: "Factorial uses recursion." },
    { question: "Which is not a type of recursion?", options: ["Tail", "Head", "Linear", "Dynamic"], correct: 3, explanation: "Dynamic recursion not standard term." },
    { question: "Excessive recursion can lead to:", options: ["Stack overflow", "Queue overflow", "Infinite loop", "All"], correct: 0, explanation: "Stack can overflow if too deep." },

    // Section 9 – Complexity Analysis
    { question: "O(n²) means time increases:", options: ["Linearly", "Quadratically", "Logarithmically", "Constantly"], correct: 1, explanation: "Time grows with n²." },
    { question: "Which notation shows lower bound?", options: ["O", "Ω", "θ", "None"], correct: 1, explanation: "Ω is lower bound." },
    { question: "Which notation shows both bounds?", options: ["O", "Ω", "θ", "None"], correct: 2, explanation: "θ gives tight bound." },
    { question: "Traversing an array of n elements is:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1, explanation: "Must visit all elements." },
    { question: "Which has better complexity?", options: ["O(log n)", "O(n log n)", "O(n²)", "O(n³)"], correct: 0, explanation: "Log n grows slowest." },

    // Section 10 – Applications
    { question: "Linked list better than array when:", options: ["Frequent insert/delete", "Random access", "Static memory", "None"], correct: 0, explanation: "Linked list better for dynamic & frequent changes." },
    { question: "Stacks are used in:", options: ["Function calls", "Backtracking", "Expression eval", "All"], correct: 3, explanation: "Stacks for calls, backtrack, eval." },
    { question: "Queues are used in:", options: ["Scheduling", "Resource sharing", "Order processing", "All"], correct: 3, explanation: "All queue applications." },
    { question: "BFS traversal uses:", options: ["Stack", "Queue", "Array", "Tree"], correct: 1, explanation: "BFS uses queue." },
    { question: "DFS traversal uses:", options: ["Stack", "Queue", "Linked list", "Array"], correct: 0, explanation: "DFS uses stack." },
    { question: "Shortest path in weighted graphs:", options: ["BFS", "DFS", "Dijkstra", "Merge sort"], correct: 2, explanation: "Dijkstra solves weighted shortest paths." },
    { question: "Minimum spanning tree algorithm:", options: ["Kruskal", "Prim", "Both a and b", "DFS"], correct: 2, explanation: "Kruskal & Prim are MST algorithms." },
    { question: "Priority queues often use:", options: ["Arrays", "Linked lists", "Heaps", "Stacks"], correct: 2, explanation: "Heaps used for priority queues." },
    { question: "Undo feature uses:", options: ["Queue", "Stack", "Linked list", "Heap"], correct: 1, explanation: "Undo uses stack." },
    { question: "Application of circular linked list:", options: ["CPU scheduling", "Binary search", "Merge sort", "None"], correct: 0, explanation: "Used in CPU scheduling." },

    // Section 11 – Mixed
    { question: "Traversal to print BST in sorted order:", options: ["Preorder", "Inorder", "Postorder", "Level order"], correct: 1, explanation: "Inorder yields sorted output." },
    { question: "Height of complete binary tree:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 1, explanation: "Height is log n." },
    { question: "Which is NOT a characteristic of arrays?", options: ["Fixed size", "Contiguous memory", "Random access", "Dynamic resizing"], correct: 3, explanation: "Arrays have fixed size in most languages." },
    { question: "Which traversal uses a queue?", options: ["BFS", "DFS", "Preorder", "Inorder"], correct: 0, explanation: "BFS uses queue." },
    { question: "Which is NOT a graph traversal algo?", options: ["BFS", "DFS", "Dijkstra", "Merge sort"], correct: 3, explanation: "Merge sort is not traversal." },
    { question: "Degree of a node in a graph:", options: ["Edges incident", "Connected nodes", "Both a and b", "None"], correct: 2, explanation: "Both describe degree." },
    { question: "NOT a type of linked list:", options: ["Singly", "Doubly", "Circular", "Indexed"], correct: 3, explanation: "No such thing as indexed linked list." },
    { question: "Data structure for implementing graphs:", options: ["Adjacency matrix", "Adjacency list", "Both", "None"], correct: 2, explanation: "Both are possible representations." },
    { question: "Traversal recursive by nature:", options: ["DFS", "BFS", "Level order", "None"], correct: 0, explanation: "DFS is naturally recursive." },
    { question: "Inserting into max heap complexity:", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "Heap insertion is log n." }
  ]
};

// Register with global mcqData
