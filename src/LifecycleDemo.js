import React, { Component } from "react";

class LifecycleDemo extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
        console.log("Component is being created");
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component updated");
    }

    componentWillUnmount(){
        console.log("Component unmounted");
    }

    increment = () => {
        this.setState({count: this.state.count+1});
    };

    render(){
        return(
            <div>
                <h2>LifecycleDemo</h2>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    };
}

export default LifecycleDemo;