import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { TaskProvider } from "./context/TaskContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
const root = ReactDOM.createRoot(document.getElementById('root')!)



root.render(
    <React.StrictMode>
    <ErrorBoundary>
        <TaskProvider>
            <App/>
        </TaskProvider>
    </ErrorBoundary>
    </React.StrictMode>
)