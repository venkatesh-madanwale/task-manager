import React, { Component, ReactNode, ErrorInfo } from "react";

// Component base class for react class
// ErrorInfo type for the error stack and compnent trace
// ReactNode type for the childern prop, which helps us render anything like jsx, string, fragments, etc.


// Types interfaces for Props and State
interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

// Extends Component class to send the props to super class, this.state, componentDidCatch()
export class ErrorBoundary extends Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state={hasError:false}
    }
        
    // Static lifecycle method: automatically called when an error is thrown by a child components
    // Updates the state to render, fallback UI or next render
    static getDerivedStateFromError(): State {
        return {
            hasError: true
        }
    }
    
    //componentDidCatch: 
    // catches only when rendered
    // when rendered used for side-effects for like logging the error to a monitoring service
    // runs after the error is rendered in the fallback UI
    // error: the actual error object
    // ErrorInfo : component track trace
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Caught by error boundary", error, errorInfo)
    }
 

    // if error occures : hasError == true show fallback UI
    // else render wrap this.prop.children
    render(){
        if(this.state.hasError){
            return <h2>Something Went Wrong...!</h2>
        }
        return this.props.children
    }
}