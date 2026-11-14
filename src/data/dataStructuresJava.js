// Data Structures MCQ Data – Java Specific - 100 Questions
export default {
  title: "Data Structures - Java",
  questions: [
    // Section 1 – Java Collections Framework
    { question: "Which interface is the root of the Java Collections hierarchy?", options: ["List", "Collection", "Iterable", "Object"], correct: 1, explanation: "Collection interface is the root of most collection classes in Java." },
    { question: "Which class implements both List and Deque interfaces in Java?", options: ["ArrayList", "LinkedList", "Vector", "Stack"], correct: 1, explanation: "LinkedList implements both List and Deque interfaces." },
    { question: "What is the default initial capacity of an ArrayList in Java?", options: ["10", "16", "8", "0"], correct: 0, explanation: "ArrayList has a default initial capacity of 10." },
    { question: "Which collection maintains insertion order and allows duplicates?", options: ["HashSet", "TreeSet", "LinkedHashSet", "HashMap"], correct: 2, explanation: "LinkedHashSet maintains insertion order and allows duplicates." },
    { question: "What is the time complexity of add() operation in ArrayList?", options: ["O(1) amortized", "O(n)", "O(log n)", "O(n²)"], correct: 0, explanation: "ArrayList add() is O(1) amortized, O(n) worst case when resizing." },
    
    // Section 2 – Java Arrays
    { question: "How do you declare a 2D array in Java?", options: ["int arr[][];", "int[][] arr;", "Both a and b", "int arr[,]"], correct: 2, explanation: "Both syntaxes are valid in Java for 2D arrays." },
    { question: "What happens when you access an array index out of bounds in Java?", options: ["Compilation error", "ArrayIndexOutOfBoundsException", "Returns null", "Undefined behavior"], correct: 1, explanation: "Java throws ArrayIndexOutOfBoundsException at runtime." },
    { question: "Which method is used to copy arrays in Java?", options: ["System.arraycopy()", "Arrays.copyOf()", "clone()", "All of the above"], correct: 3, explanation: "All these methods can be used to copy arrays in Java." },
    { question: "What is the length property of array int[] arr = new int[5]?", options: ["4", "5", "6", "Compilation error"], correct: 1, explanation: "Array length property returns the number of elements." },
    { question: "Which class provides utility methods for arrays in Java?", options: ["Array", "Arrays", "ArrayUtils", "Collections"], correct: 1, explanation: "java.util.Arrays class provides utility methods." },
    
    // Section 3 – Java Generics
    { question: "What is the purpose of generics in Java collections?", options: ["Type safety", "Performance", "Memory efficiency", "All of the above"], correct: 0, explanation: "Generics primarily provide compile-time type safety." },
    { question: "Which of the following is a valid generic declaration?", options: ["List<int>", "List<Integer>", "List<>", "List<T>"], correct: 1, explanation: "Generics work with reference types, not primitives. Integer is correct." },
    { question: "What does the diamond operator <> do in Java?", options: ["Creates empty collection", "Type inference", "Generic wildcard", "Template syntax"], correct: 1, explanation: "Diamond operator allows type inference in generic declarations." },
    { question: "What is a bounded generic parameter?", options: ["<T extends Number>", "<T super Number>", "Both a and b", "<T implements Number>"], correct: 2, explanation: "Both extends and super are used for bounded type parameters." },
    { question: "Which wildcard represents unknown type in Java generics?", options: ["<T>", "<?>", "<*>", "<Object>"], correct: 1, explanation: "<?> is the unbounded wildcard in Java generics." },
    
    // Section 4 – Java Stack Implementation
    { question: "Which class implements Stack in Java?", options: ["Stack", "ArrayDeque", "LinkedList", "All of the above"], correct: 3, explanation: "Stack class, ArrayDeque, and LinkedList all can implement stack operations." },
    { question: "Why is ArrayDeque preferred over Stack class in Java?", options: ["Thread-safe", "Better performance", "Generic support", "Both b and c"], correct: 3, explanation: "ArrayDeque is not synchronized (better performance) and supports generics." },
    { question: "Which method is used to add an element to Stack in Java?", options: ["add()", "push()", "offer()", "put()"], correct: 1, explanation: "push() method adds element to the top of stack." },
    { question: "What exception is thrown when pop() is called on empty Stack?", options: ["StackOverflowError", "EmptyStackException", "IllegalStateException", "NullPointerException"], correct: 1, explanation: "EmptyStackException is thrown when popping from empty stack." },
    { question: "Which interface should you use for Stack operations in modern Java?", options: ["Stack", "Deque", "List", "Queue"], correct: 1, explanation: "Deque interface is preferred for stack operations." },
    
    // Section 5 – Java Queue Implementations
    { question: "Which Queue implementation is thread-safe in Java?", options: ["LinkedList", "ArrayDeque", "ConcurrentLinkedQueue", "PriorityQueue"], correct: 2, explanation: "ConcurrentLinkedQueue is thread-safe." },
    { question: "What does offer() method return when queue is full?", options: ["Exception", "true", "false", "null"], correct: 2, explanation: "offer() returns false when unable to add element." },
    { question: "Which queue implementation allows null elements?", options: ["PriorityQueue", "ArrayDeque", "LinkedList", "ConcurrentLinkedQueue"], correct: 2, explanation: "LinkedList allows null elements, others don't." },
    { question: "What is the natural ordering in PriorityQueue?", options: ["FIFO", "LIFO", "Comparable/Comparator", "Random"], correct: 2, explanation: "PriorityQueue uses natural ordering via Comparable or Comparator." },
    { question: "Which method removes and returns head of queue?", options: ["poll()", "remove()", "Both a and b", "peek()"], correct: 2, explanation: "Both poll() and remove() remove and return head element." },
    
    // Section 6 – Java HashMap and HashSet
    { question: "What is the default load factor of HashMap in Java?", options: ["0.5", "0.75", "1.0", "0.8"], correct: 1, explanation: "Default load factor is 0.75 for optimal performance." },
    { question: "What happens when load factor is exceeded in HashMap?", options: ["Exception thrown", "Rehashing occurs", "Performance degrades", "Size becomes fixed"], correct: 1, explanation: "HashMap rehashes when load factor threshold is exceeded." },
    { question: "Which method is used to check if a key exists in HashMap?", options: ["contains()", "containsKey()", "hasKey()", "exists()"], correct: 1, explanation: "containsKey() method checks for key existence." },
    { question: "What is the time complexity of get() in HashMap?", options: ["O(1) average", "O(n)", "O(log n)", "O(1) always"], correct: 0, explanation: "HashMap get() is O(1) average case, O(n) worst case." },
    { question: "Which collection does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], correct: 1, explanation: "Set interface does not allow duplicate elements." },
    
    // Section 7 – Java TreeMap and TreeSet
    { question: "TreeSet maintains elements in which order?", options: ["Insertion order", "Natural order", "Random order", "Reverse order"], correct: 1, explanation: "TreeSet maintains elements in sorted (natural) order." },
    { question: "What interface must objects implement to be stored in TreeSet?", options: ["Serializable", "Comparable", "Cloneable", "Iterable"], correct: 1, explanation: "Objects must implement Comparable or provide a Comparator." },
    { question: "Time complexity of search in TreeMap?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "TreeMap uses Red-Black tree with O(log n) operations." },
    { question: "Which is true about TreeMap?", options: ["Allows null keys", "Thread-safe", "Maintains sorted order", "Allows duplicate keys"], correct: 2, explanation: "TreeMap maintains keys in sorted order." },
    { question: "What exception is thrown when null is added to TreeSet?", options: ["NullPointerException", "IllegalArgumentException", "ClassCastException", "No exception"], correct: 0, explanation: "TreeSet throws NullPointerException for null values." },
    
    // Section 8 – Java Iterator and ListIterator
    { question: "Which method checks if iterator has more elements?", options: ["hasNext()", "hasMore()", "next()", "isNext()"], correct: 0, explanation: "hasNext() method checks for more elements." },
    { question: "What exception is thrown when next() is called without checking hasNext()?", options: ["IndexOutOfBoundsException", "NoSuchElementException", "IllegalStateException", "NullPointerException"], correct: 1, explanation: "NoSuchElementException is thrown when no more elements." },
    { question: "Which iterator allows bidirectional traversal?", options: ["Iterator", "ListIterator", "Both", "Neither"], correct: 1, explanation: "ListIterator allows both forward and backward traversal." },
    { question: "Can you modify collection during iteration with Iterator?", options: ["Yes, always", "No, never", "Yes, using remove()", "Depends on collection"], correct: 2, explanation: "Iterator's remove() method safely removes elements during iteration." },
    { question: "Which collections support ListIterator?", options: ["All collections", "Only List implementations", "Only Set implementations", "Only Map implementations"], correct: 1, explanation: "ListIterator is only supported by List implementations." },
    
    // Section 9 – Java Streams and Collections
    { question: "Which method converts Collection to Stream?", options: ["toStream()", "stream()", "asStream()", "getStream()"], correct: 1, explanation: "stream() method converts Collection to Stream." },
    { question: "What is the result of stream().filter().collect()?", options: ["Stream", "Optional", "Collection", "Array"], correct: 2, explanation: "collect() terminal operation returns a Collection." },
    { question: "Which is a terminal operation in Java Streams?", options: ["filter()", "map()", "collect()", "sorted()"], correct: 2, explanation: "collect() is a terminal operation that produces a result." },
    { question: "How do you create an immutable list in Java 9+?", options: ["List.of()", "List.create()", "new ImmutableList()", "Collections.immutableList()"], correct: 0, explanation: "List.of() creates immutable lists in Java 9+." },
    { question: "What does Collections.synchronizedList() return?", options: ["Thread-safe list", "Immutable list", "Sorted list", "Empty list"], correct: 0, explanation: "Returns a synchronized (thread-safe) wrapper." },
    
    // Section 10 – Java Memory and Performance
    { question: "Which collection is most memory efficient for storing integers?", options: ["ArrayList<Integer>", "int[]", "LinkedList<Integer>", "HashSet<Integer>"], correct: 1, explanation: "Primitive arrays have no object overhead." },
    { question: "What happens to ArrayList when capacity is exceeded?", options: ["Exception thrown", "Size increased by 50%", "Size doubled", "New array created"], correct: 1, explanation: "ArrayList grows by 50% when capacity is exceeded." },
    { question: "Which collection has the least memory overhead?", options: ["ArrayList", "LinkedList", "HashMap", "Array"], correct: 3, explanation: "Arrays have the least memory overhead." },
    { question: "What is the space complexity of HashMap?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1, explanation: "HashMap space complexity is O(n) for n key-value pairs." },
    { question: "When should you use LinkedList over ArrayList?", options: ["Random access", "Frequent insertions/deletions", "Memory efficiency", "Thread safety"], correct: 1, explanation: "LinkedList is better for frequent insertions/deletions in middle." },
    
    // Section 11 – Java Advanced Features
    { question: "What is the difference between Comparable and Comparator?", options: ["No difference", "Comparable is external", "Comparator is external", "Both are internal"], correct: 2, explanation: "Comparator provides external comparison logic." },
    { question: "Which annotation is used for overriding compareTo method?", options: ["@Override", "@Comparable", "@Compare", "@Natural"], correct: 0, explanation: "@Override annotation is used when overriding compareTo." },
    { question: "What does hashCode() method return for equal objects?", options: ["Different values", "Same values", "Random values", "Depends on implementation"], correct: 1, explanation: "Equal objects must have same hashCode values." },
    { question: "Which method is called during HashMap key lookup?", options: ["equals()", "hashCode()", "Both a and b", "compareTo()"], correct: 2, explanation: "Both hashCode() and equals() are used for HashMap operations." },
    { question: "What is the contract between equals() and hashCode()?", options: ["No relationship", "Equal objects same hashCode", "Different objects different hashCode", "hashCode must return true"], correct: 1, explanation: "If objects are equal, they must have same hashCode." },
    
    // Section 12 – Java Concurrent Collections
    { question: "Which map implementation is thread-safe?", options: ["HashMap", "ConcurrentHashMap", "LinkedHashMap", "TreeMap"], correct: 1, explanation: "ConcurrentHashMap is designed for concurrent access." },
    { question: "What is the benefit of ConcurrentHashMap over synchronized HashMap?", options: ["Memory efficiency", "Better concurrency", "Simpler API", "Faster single-thread"], correct: 1, explanation: "ConcurrentHashMap allows better concurrent access." },
    { question: "Which queue is suitable for producer-consumer pattern?", options: ["LinkedList", "ArrayDeque", "BlockingQueue", "PriorityQueue"], correct: 2, explanation: "BlockingQueue implementations are ideal for producer-consumer." },
    { question: "What does CopyOnWriteArrayList optimize for?", options: ["Writes", "Reads", "Memory", "Threading"], correct: 1, explanation: "CopyOnWriteArrayList is optimized for frequent reads." },
    { question: "Which collection should be used for high-frequency reads with occasional writes?", options: ["ArrayList", "Vector", "CopyOnWriteArrayList", "LinkedList"], correct: 2, explanation: "CopyOnWriteArrayList is perfect for read-heavy scenarios." },
    
    // Section 13 – Java Specific Implementations
    { question: "What is the difference between Vector and ArrayList?", options: ["Vector is synchronized", "ArrayList is synchronized", "No difference", "Vector is generic"], correct: 0, explanation: "Vector is synchronized while ArrayList is not." },
    { question: "Which collection was introduced in Java 1.0?", options: ["ArrayList", "Vector", "HashMap", "LinkedList"], correct: 1, explanation: "Vector is part of legacy collections from Java 1.0." },
    { question: "What is the capacity increment of Vector by default?", options: ["50%", "100%", "25%", "Fixed size"], correct: 1, explanation: "Vector doubles its size by default." },
    { question: "Which method returns the number of elements in a collection?", options: ["length", "size()", "count()", "elements()"], correct: 1, explanation: "size() method returns the number of elements." },
    { question: "What interface do all Java collections implement for iteration?", options: ["Iterator", "Iterable", "Enumerable", "Traversable"], correct: 1, explanation: "All collections implement Iterable interface." },
    
    // Section 14 – Java Collection Utilities
    { question: "Which class provides utility methods for collections?", options: ["Collection", "Collections", "Collector", "CollectionUtils"], correct: 1, explanation: "java.util.Collections class provides utility methods." },
    { question: "How do you create an unmodifiable list in Java?", options: ["List.unmodifiable()", "Collections.unmodifiableList()", "new UnmodifiableList()", "List.readOnly()"], correct: 1, explanation: "Collections.unmodifiableList() creates read-only view." },
    { question: "Which method sorts a List in Java?", options: ["List.sort()", "Collections.sort()", "Both a and b", "Arrays.sort()"], correct: 2, explanation: "Both List.sort() and Collections.sort() can sort lists." },
    { question: "What does Collections.reverse() do?", options: ["Creates reversed copy", "Reverses in-place", "Returns reversed iterator", "Throws exception"], correct: 1, explanation: "Collections.reverse() reverses the list in-place." },
    { question: "How do you find maximum element in collection?", options: ["Collections.max()", "Math.max()", "Stream.max()", "Both a and c"], correct: 3, explanation: "Both Collections.max() and Stream.max() can find maximum." },
    
    // Section 15 – Java Algorithm Implementations
    { question: "Which sorting algorithm does Arrays.sort() use for objects?", options: ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"], correct: 1, explanation: "Arrays.sort() uses TimSort (modified merge sort) for objects." },
    { question: "Which sorting algorithm does Arrays.sort() use for primitives?", options: ["Quick Sort", "Dual-Pivot Quick Sort", "Merge Sort", "Heap Sort"], correct: 1, explanation: "Dual-Pivot Quicksort is used for primitive arrays." },
    { question: "What is the time complexity of Collections.binarySearch()?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "Binary search on sorted list is O(log n)." },
    { question: "Which collection maintains elements in sorted order automatically?", options: ["ArrayList", "LinkedList", "TreeSet", "HashSet"], correct: 2, explanation: "TreeSet automatically maintains sorted order." },
    { question: "What is required for binary search in Java?", options: ["Sorted collection", "Comparable elements", "Both a and b", "Generic collection"], correct: 2, explanation: "Collection must be sorted and elements must be comparable." },
    
    // Section 16 – Java Exception Handling in Collections
    { question: "What exception is thrown by ArrayList.get() for invalid index?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "IllegalArgumentException", "NoSuchElementException"], correct: 1, explanation: "ArrayList throws IndexOutOfBoundsException." },
    { question: "When is ConcurrentModificationException thrown?", options: ["During concurrent access", "During fail-fast iteration", "During synchronization", "During cloning"], correct: 1, explanation: "Thrown when collection is modified during iteration." },
    { question: "How can you avoid ConcurrentModificationException?", options: ["Use synchronized collections", "Use Iterator.remove()", "Use concurrent collections", "All of the above"], correct: 3, explanation: "All mentioned approaches can help avoid the exception." },
    { question: "What exception does HashMap.get() throw for null key in null-safe maps?", options: ["NullPointerException", "IllegalArgumentException", "No exception", "KeyNotFoundException"], correct: 2, explanation: "HashMap allows null keys and returns null for non-existent keys." },
    { question: "Which collection throws UnsupportedOperationException for add()?", options: ["ArrayList", "Unmodifiable collections", "HashMap", "TreeSet"], correct: 1, explanation: "Unmodifiable collections throw UnsupportedOperationException." },
    
    // Section 17 – Java Collection Performance
    { question: "Which has better performance for frequent random access?", options: ["ArrayList", "LinkedList", "Vector", "Stack"], correct: 0, explanation: "ArrayList provides O(1) random access." },
    { question: "When is LinkedList preferred over ArrayList?", options: ["Random access", "Sequential access", "Frequent middle insertions", "Memory efficiency"], correct: 2, explanation: "LinkedList is better for frequent insertions/deletions in middle." },
    { question: "Which Map implementation provides best performance for simple key-value storage?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], correct: 1, explanation: "HashMap provides best average-case performance." },
    { question: "What is the worst-case time complexity of HashMap operations?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, explanation: "Worst case when all keys hash to same bucket." },
    { question: "Which collection is most suitable for LRU cache implementation?", options: ["HashMap", "LinkedHashMap", "TreeMap", "ArrayList"], correct: 1, explanation: "LinkedHashMap with access-order is ideal for LRU cache." },
    
    // Section 18 – Java Lambda and Functional Programming
    { question: "Which functional interface is used with Collection.removeIf()?", options: ["Function", "Predicate", "Consumer", "Supplier"], correct: 1, explanation: "removeIf() takes a Predicate functional interface." },
    { question: "How do you iterate over a Map using lambda expressions?", options: ["map.forEach()", "map.entrySet().forEach()", "map.keySet().forEach()", "All of the above"], correct: 3, explanation: "All these methods can be used with lambda expressions." },
    { question: "Which Stream operation is lazy?", options: ["forEach()", "collect()", "filter()", "reduce()"], correct: 2, explanation: "filter() is an intermediate (lazy) operation." },
    { question: "What does Optional.orElse() do?", options: ["Returns value if present", "Returns default if empty", "Both a and b", "Throws exception"], correct: 2, explanation: "orElse() returns value if present, otherwise returns default." },
    { question: "Which collector joins strings in Java Streams?", options: ["Collectors.joining()", "Collectors.grouping()", "Collectors.mapping()", "Collectors.reducing()"], correct: 0, explanation: "Collectors.joining() joins stream elements into a string." },
    
    // Section 19 – Java Memory Management in Collections
    { question: "What is memory leak risk with HashMap?", options: ["Key references", "Value references", "Both a and b", "No risk"], correct: 2, explanation: "Both strong key and value references can cause memory leaks." },
    { question: "Which collection uses weak references?", options: ["HashMap", "WeakHashMap", "TreeMap", "LinkedHashMap"], correct: 1, explanation: "WeakHashMap uses weak references for keys." },
    { question: "What happens to WeakHashMap entries when keys are garbage collected?", options: ["Exception thrown", "Entries remain", "Entries are removed", "Map becomes null"], correct: 2, explanation: "Entries are automatically removed when keys are GC'd." },
    { question: "Which is more memory efficient for small collections?", options: ["ArrayList", "Array", "LinkedList", "HashSet"], correct: 1, explanation: "Arrays have minimal object overhead." },
    { question: "What causes memory overhead in collections?", options: ["Object wrappers", "Internal structures", "Synchronization", "All of the above"], correct: 3, explanation: "All these factors contribute to memory overhead." },
    
    // Section 20 – Java Best Practices and Design Patterns
    { question: "Which design pattern is implemented by Iterator?", options: ["Singleton", "Factory", "Iterator", "Observer"], correct: 2, explanation: "Iterator design pattern provides sequential access." },
    { question: "What is the factory method for creating collections?", options: ["new ArrayList()", "List.of()", "Collections.create()", "Factory.newList()"], correct: 1, explanation: "List.of() and similar factory methods create collections." },
    { question: "Which principle suggests programming to interfaces?", options: ["List list = new ArrayList()", "ArrayList list = new ArrayList()", "Both are same", "Neither is correct"], correct: 0, explanation: "Programming to interfaces (List) is preferred." },
    { question: "When should you use composition over inheritance in collections?", options: ["Never", "Always", "When extending functionality", "When implementing interfaces"], correct: 2, explanation: "Composition is preferred when extending collection functionality." },
    { question: "What is the Builder pattern benefit for collections?", options: ["Thread safety", "Immutability", "Fluent API", "All of the above"], correct: 3, explanation: "Builder pattern provides all these benefits for collections." },
    
    // Additional Java-specific questions
    { question: "Which method creates a view of portion of list?", options: ["subList()", "slice()", "partition()", "segment()"], correct: 0, explanation: "subList() creates a view of the original list." },
    { question: "What is the difference between peek() and poll() in Queue?", options: ["No difference", "peek() doesn't remove", "poll() doesn't remove", "peek() throws exception"], correct: 1, explanation: "peek() returns head without removing it." },
    { question: "Which Map method returns previous value when inserting?", options: ["put()", "putIfAbsent()", "replace()", "compute()"], correct: 0, explanation: "put() returns the previous value associated with the key." },
    { question: "What does containsAll() method do?", options: ["Checks subset", "Checks superset", "Checks equality", "Checks intersection"], correct: 0, explanation: "containsAll() checks if collection contains all elements of another." },
    { question: "Which collection allows duplicate keys?", options: ["Set", "Map", "List", "None"], correct: 3, explanation: "None of these allow duplicate keys by definition." },
    { question: "What is the purpose of entrySet() in Map?", options: ["Get keys", "Get values", "Get key-value pairs", "Get size"], correct: 2, explanation: "entrySet() returns set of key-value pairs." },
    { question: "Which collection maintains insertion order by default?", options: ["HashSet", "HashMap", "LinkedHashSet", "TreeSet"], correct: 2, explanation: "LinkedHashSet maintains insertion order." },
    { question: "What is the time complexity of TreeSet.add()?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "TreeSet operations are O(log n) due to tree structure." },
    { question: "Which interface extends Collection interface?", options: ["Map", "List", "Iterator", "Comparable"], correct: 1, explanation: "List interface extends Collection interface." },
    { question: "What does retainAll() method do?", options: ["Remove all", "Keep intersection", "Add all", "Clear collection"], correct: 1, explanation: "retainAll() keeps only common elements (intersection)." },
    { question: "Which collection is fail-safe during iteration?", options: ["ArrayList", "HashMap", "ConcurrentHashMap", "TreeSet"], correct: 2, explanation: "ConcurrentHashMap iterators are fail-safe." },
    { question: "What is the default sorting order in TreeSet?", options: ["Descending", "Ascending", "Random", "Insertion order"], correct: 1, explanation: "TreeSet sorts elements in ascending order by default." },
    { question: "Which method removes all elements from collection?", options: ["removeAll()", "clear()", "empty()", "delete()"], correct: 1, explanation: "clear() method removes all elements." },
    { question: "What does toArray() method return?", options: ["Array copy", "Array reference", "Object array", "Generic array"], correct: 2, explanation: "toArray() returns Object[] array containing collection elements." },
    { question: "Which collection allows null values but not null keys?", options: ["HashMap", "TreeMap", "Hashtable", "ConcurrentHashMap"], correct: 0, explanation: "HashMap allows null values but TreeMap doesn't allow nulls." },
    { question: "What is the purpose of Spliterator in Java 8?", options: ["Splitting collections", "Parallel processing", "Iterator replacement", "Stream processing"], correct: 1, explanation: "Spliterator enables parallel processing of collections." },
    { question: "Which method checks if collection is empty?", options: ["empty()", "isEmpty()", "size() == 0", "Both b and c"], correct: 3, explanation: "Both isEmpty() and size() == 0 check if collection is empty." },
    { question: "What does Collections.frequency() calculate?", options: ["Size of collection", "Number of occurrences", "Hash frequency", "Memory frequency"], correct: 1, explanation: "frequency() counts occurrences of specific element." },
    { question: "Which collection allows indexed access?", options: ["Set", "Map", "List", "Queue"], correct: 2, explanation: "List interface provides indexed access via get(index)." },
    { question: "What is the difference between remove(Object) and remove(int) in List?", options: ["No difference", "remove(int) removes by index", "remove(Object) is faster", "Both remove by value"], correct: 1, explanation: "remove(int) removes by index, remove(Object) removes by value." },
    { question: "Which collection is best for implementing LFU cache?", options: ["HashMap", "LinkedHashMap", "TreeMap", "Custom implementation"], correct: 3, explanation: "LFU cache typically requires custom implementation with frequency tracking." },
    { question: "What does Collections.shuffle() do?", options: ["Sorts collection", "Randomly permutes", "Removes duplicates", "Reverses order"], correct: 1, explanation: "shuffle() randomly permutes the elements in the list." },
    { question: "Which Map implementation preserves insertion order?", options: ["HashMap", "TreeMap", "LinkedHashMap", "ConcurrentHashMap"], correct: 2, explanation: "LinkedHashMap maintains insertion order." },
    { question: "What is the purpose of compute() method in Map?", options: ["Calculate size", "Compute hash", "Update value atomically", "Compare keys"], correct: 2, explanation: "compute() atomically updates value for a key." },
    { question: "Which collection should be used for priority-based processing?", options: ["ArrayList", "LinkedList", "PriorityQueue", "ArrayDeque"], correct: 2, explanation: "PriorityQueue processes elements based on priority." },
    { question: "What does Collections.min() require?", options: ["Sorted collection", "Comparable elements", "Numeric elements", "Non-empty collection"], correct: 1, explanation: "Elements must be Comparable or provide Comparator." },
    { question: "Which collection implementation is part of Java Collections Framework?", options: ["Vector", "ArrayList", "Hashtable", "All of the above"], correct: 1, explanation: "ArrayList is part of JCF; Vector and Hashtable are legacy." },
    { question: "What is the benefit of using EnumSet in Java?", options: ["Type safety", "Memory efficiency", "Fast operations", "All of the above"], correct: 3, explanation: "EnumSet provides all these benefits for enum collections." },
    { question: "Which method returns a synchronized view of collection?", options: ["Collections.sync()", "Collections.synchronizedList()", "Collections.threadSafe()", "Collections.concurrent()"], correct: 1, explanation: "Collections.synchronizedList() returns synchronized wrapper." },
    { question: "What is the difference between ArrayList and LinkedList for iteration?", options: ["No difference", "ArrayList faster", "LinkedList faster", "Depends on iterator type"], correct: 1, explanation: "ArrayList has better cache locality for iteration." },
    { question: "Which collection is best for unique elements with fast lookup?", options: ["ArrayList", "LinkedList", "HashSet", "TreeSet"], correct: 2, explanation: "HashSet provides O(1) average lookup for unique elements." },
    { question: "What does putIfAbsent() do in Map?", options: ["Always puts value", "Puts only if key absent", "Puts only if value absent", "Updates existing value"], correct: 1, explanation: "putIfAbsent() only inserts if key is not already present." },
    { question: "Which collection should be used for fixed-size data?", options: ["ArrayList", "Array", "LinkedList", "Vector"], correct: 1, explanation: "Arrays are most efficient for fixed-size data." },
    { question: "What is the purpose of IdentityHashMap?", options: ["Fast hashing", "Reference equality", "Memory efficiency", "Thread safety"], correct: 1, explanation: "IdentityHashMap uses reference equality (==) instead of equals()." },
    { question: "Which method creates a stream from array in Java?", options: ["Arrays.stream()", "Stream.of()", "Both a and b", "Array.toStream()"], correct: 2, explanation: "Both Arrays.stream() and Stream.of() create streams from arrays." },
    { question: "What is the contract of equals() method in collections?", options: ["Reflexive only", "Symmetric only", "Transitive only", "All of the above"], correct: 3, explanation: "equals() must be reflexive, symmetric, transitive, and consistent." },
    { question: "Which collection allows efficient insertion at both ends?", options: ["ArrayList", "LinkedList", "ArrayDeque", "Both b and c"], correct: 3, explanation: "Both LinkedList and ArrayDeque allow efficient insertion at both ends." },
    { question: "What is the space complexity of recursion for tree traversal?", options: ["O(1)", "O(log n)", "O(n)", "O(h)"], correct: 3, explanation: "Space complexity is O(h) where h is height of tree." },
    { question: "Which Java feature helps avoid ClassCastException in collections?", options: ["Inheritance", "Generics", "Interfaces", "Annotations"], correct: 1, explanation: "Generics provide compile-time type checking." },
    { question: "What is the difference between capacity and size in ArrayList?", options: ["No difference", "Capacity is allocated space", "Size is allocated space", "Both are same"], correct: 1, explanation: "Capacity is allocated space, size is actual number of elements." },
    { question: "Which collection is best for implementing undo functionality?", options: ["Queue", "Stack", "List", "Set"], correct: 1, explanation: "Stack (LIFO) is perfect for undo operations." },
    { question: "What does Collections.disjoint() check?", options: ["Empty collections", "Common elements", "Size equality", "Type compatibility"], correct: 1, explanation: "disjoint() returns true if collections have no common elements." },
    { question: "Which collection provides both Set and List characteristics?", options: ["HashSet", "ArrayList", "LinkedHashSet", "None"], correct: 3, explanation: "No single collection provides both Set and List characteristics." },
    { question: "What is the purpose of Collections.nCopies()?", options: ["Copy collection", "Create n copies", "Duplicate elements", "Create immutable list"], correct: 3, explanation: "nCopies() creates immutable list with n copies of specified element." },
    { question: "Which interface should custom collection classes implement?", options: ["Collection", "AbstractCollection", "List", "Depends on type"], correct: 3, explanation: "Depends on the type of collection being implemented." },
    { question: "What is the benefit of using primitive collections (like IntList)?", options: ["Type safety", "No boxing overhead", "Thread safety", "Immutability"], correct: 1, explanation: "Primitive collections avoid autoboxing overhead." },
    { question: "Which method provides atomic put-if-absent operation?", options: ["put()", "putIfAbsent()", "compute()", "Both b and c"], correct: 3, explanation: "Both putIfAbsent() and compute() can provide atomic operations." },
    { question: "What is the purpose of NavigableSet interface?", options: ["Navigation methods", "Sorting capability", "Iteration support", "Search functionality"], correct: 0, explanation: "NavigableSet provides navigation methods like ceiling(), floor()." },
    { question: "Which collection is backed by array internally?", options: ["ArrayList", "ArrayDeque", "HashMap", "All of the above"], correct: 3, explanation: "All these collections use arrays internally." },
    { question: "What does Collections.rotate() do?", options: ["Sorts elements", "Rotates elements by distance", "Reverses elements", "Shuffles elements"], correct: 1, explanation: "rotate() shifts elements by specified distance." },
    { question: "Which is the most appropriate collection for caching?", options: ["HashMap", "LinkedHashMap", "TreeMap", "WeakHashMap"], correct: 1, explanation: "LinkedHashMap with access-order is commonly used for caches." },
    { question: "What is fail-fast behavior in Java collections?", options: ["Quick failure", "Exception on modification", "Fast iteration", "Error recovery"], correct: 1, explanation: "Fail-fast iterators throw ConcurrentModificationException on structural modification." },
    { question: "Which collection should be used for mathematical set operations?", options: ["List", "Set", "Map", "Queue"], correct: 1, explanation: "Set interface provides mathematical set operations." },
    { question: "What is the purpose of Deque interface?", options: ["Double-ended queue", "Sorted queue", "Priority queue", "Synchronized queue"], correct: 0, explanation: "Deque provides double-ended queue operations." },
    { question: "Which method adds all elements from another collection?", options: ["add()", "addAll()", "put()", "insert()"], correct: 1, explanation: "addAll() method adds all elements from another collection." },
    { question: "What is the recommended way to iterate over Map entries?", options: ["keySet() iteration", "entrySet() iteration", "values() iteration", "All are same"], correct: 1, explanation: "entrySet() iteration is most efficient for accessing both keys and values." },
    { question: "Which collection allows efficient removal from middle?", options: ["ArrayList", "LinkedList", "Vector", "Array"], correct: 1, explanation: "LinkedList allows O(1) removal if you have reference to the node." },
    { question: "What is the purpose of Collections.checkedList()?", options: ["Performance checking", "Type checking", "Size checking", "Null checking"], correct: 1, explanation: "checkedList() provides runtime type checking." }
  ]
};

// Register with global mcqData
