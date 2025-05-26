# Goal for the project
=> Built a React app with progressive complexity  
=> Built a Task Manager using the latest React features  
=> Features:  
1. Functional components using functional constructors.  
2. Using Hooks (`useState()`, `useEffect()`, `useRef()`, `useMemo()`, `useCallback()`, `useContext()`, `useReducer()`)  
3. Custom Hooks  
4. Lifecycle equivalents  
5. Error boundaries  
6. Suspense and lazy-loading  

## Step-by-step plan

**Step 1**  
**Objective:**  
1. Create a task list where users can add tasks.  
2. Hooks covered: `useState()`  

**Implementation:**  
1. Set up a basic React app using Create React App or Vite.  
2. Create `App.js` with a simple input field and button to add tasks.  
3. Use `useState()` to manage tasks.  

---

**Step 2**  
**Objective:**  
1. Handle side effects with `useEffect()`  
2. Persist tasks to local storage.  
3. Hooks covered: `useEffect()`  

**Implementation:**  
1. Use `useEffect()` to load tasks from local storage on mount.  
2. Save tasks to local storage whenever tasks change.  

---

**Step 3**  
**Objective:**  
1. DOM references with `useRef()`  
2. Auto-focus the input when the app loads.  
3. Hooks covered: `useRef()`  

---

**Step 4**  
**Objective:**  
1. Performance optimization with `useMemo()` and `useCallback()`  
2. Only compute filtered tasks and memoize handlers.  
3. Hooks covered: `useMemo()`, `useCallback()`  

---

**Step 5**  
**Objective:**  
1. Global state with `useContext()`  
2. Share tasks between components without prop drilling.  
3. Hooks covered: `createContext()`, `useContext()`  

---

**Step 6**  
**Objective:**  
1. State machine with `useReducer()`  
2. Manage complex task actions like add, delete, toggle, clear using a reducer.  
3. Hooks covered: `useReducer()`  

---

**Step 7**  
**Objective:**  
1. Custom hooks  
2. Extract reusable logic for local storage sync or input handling.  
3. Hooks covered: `useLocalStorage()` and `useForm()`  

---

**Step 8**  
**Objective:**  
1. Suspense, lazy-loading, and error boundaries.  
2. Concepts covered:  
   a. Optimize load time  
   b. Handle component crashes  
   c. `React.lazy`  
   d. `Suspense`  
   e. Error boundaries (class component wrapper)  

---

## Component API-Lifecycle

| Lifecycle (Class)            | Hook in Functional Component                    | When It Runs                     |
|-----------------------------|--------------------------------------------------|----------------------------------|
| Constructor                 | `useState()`, `useReducer()`                    | On component init                |
| componentDidMount()         | `useEffect(() => { ... }, [])`                  | After first render               |
| componentDidUpdate()        | `useEffect(() => { ... }, [dep])`               | After updates                    |
| componentWillUnmount()      | `useEffect(() => { return () => { ... } }, [])` | Before unmount                   |
| getDerivedStateFromProps()  | Derive values manually in render                | Use logic in the body            |
| shouldComponentUpdate()     | `React.memo()`, `useMemo()`, `useCallback()`    | Optimization techniques          |
| componentDidCatch()         | Class-based error boundaries                    | For error handling               |
| getSnapshotBeforeUpdate()   | `useLayoutEffect()`                             | Before DOM mutation              |
