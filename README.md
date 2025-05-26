# Goal for the project
=> Built a React app with Progressive complicity
=> Built a Task manager using the latest React features
=> Features:
1. Functional components using functional constructors.
2. Using Hooks (useState(), useEffect(), useRef(), useMemo(), useCallback(), useContext(), useReducer())
3. Custom Hooks
4. Life-cycle equivalents
5. Error boundaries
6. Suspense and lazy-loading

## Step-by-step plan
Step 1.
Objective:
1. Create a task list were users can add tasks.
2. Hooks covered: useState()
Implementation:
1. Setup a basic React app using create-react-app or vite.
2. Create app.js with simple input field and button to add task.
3. Use useSate() to manage task.

Step 2.
Objective:
1. Side effects with useEffect()
2. Persist tasks to local storage.
3. Hooks covered: useEffect()
Implementation:
1. Use useEffect() to load tasks from local storage onMount.
2. Save tasks to local storage whenever task change.

Step 3.
Objective:
1. DOM references with useRef()
2. Auto focus on the input when the app loads.
3. Hooks covered: useRef()

Step 4.
Objective:
1. Performance optimization with useMemo() and useCallback().
2. Only compute filtered task and memorise tasks.
3. Hooks covered: useMemo(), useCallback()


Step 5.
Objective:
1. Golbal state with useContext()
2. Share task between components without prop-drilling
3. Hooks covered: createContext(), useContext()


Step 6.
Objective:
1. State machine with useReducer()
2. Manage complex task actions like add, delete, toggle, clear with a reducer.
3. Hooks covered: useReducer()


Step 7.
Objective:
1. Custom hooks
2. Extract reusable logic for local storage sync or input handeling
3. Hooks covered: useLoalStorage() and useForm()

Step 8.
Objective:
1. Suspense, Lazy-loading and Error-Boundaries.
2. Concepts covered: 
a. Optimize load time
b. Handle component crashes.
c. React.lazy
d. Suspense
e. Error-Boundaries (acting like a class component wrapper)



## Component API-Lifecycle
=====================================================================================================
|| Lifecycle Class              || Hook in functional component            || When it runs         ||
=====================================================================================================
|| Constructor                  || useState(), useReducer()                || On component init    ||
|| componentDidMount()          || useEffect(()=>{...},[])                 || After first render   ||
|| componentDidUpdate()         || useEffect(()=>{...},[dep])              || After updates        ||
|| componentWillUnmount()       || useEffect(()=>{return ()=>{...}},[])    || Before unmount       ||
|| getDerivedStateFromProps()   || Derive values manually in render        || Use logic in the body||
|| shouldComponentUpdate()      || React.memo() or useMemo() hook or useCallback()  || Optimization techniques. ||
|| componentDidCatch()          || class based error boundraies wrappers   || For error handelling ||
|| getSnapShotBeforeUpdate()    || useLayout() hook                        || Befor DOM mutation   ||
=====================================================================================================
