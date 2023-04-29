import React from "react";
class Clock extends React.Component{
    constructor() {
        console.log('constructor...');
        super();
        this.state = {currentTime: new Date()};
    }
    
    componentDidMount() {
        console.log('mounting...');
        this.timerId = setInterval(()=>{this.setState({currentTime: new Date()} )},1000);
    }
    
    componentWillUnmount() {
        console.log('unmounting...');
        clearInterval(this.timerId);
    }

    render() {
        console.log('rendering...');
        return(
            <div>
                <h1>Current time is : {this.state.currentTime.toLocaleString()}</h1>
            </div>
        )
    }
}
export default Clock;