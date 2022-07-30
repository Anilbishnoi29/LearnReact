import React,{ Component } from "react"; // this line for only Class-components

// functional component
function Demo() {
    function DemoInner() {
        return (
            <h3>DemoInner Component</h3>
        );
    }
    return (
        <>
            <h2>functional Component from Demo</h2>
            <DemoClass />
            { DemoInner() }
            <DemoInner />
        </>
    );
}


export default Demo;

// Class Component
class DemoClass extends Component {
    render() {
        return <h2>Class Component from Demo</h2>;
    }
}
