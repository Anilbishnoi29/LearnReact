import React,{ Component } from "react"; // this line for only Class-components

// functional component
function Demo() {
    let dataName = "Anil Bishnoi";// variable
    function DemoAlert() {
        dataName = "Peter";
        alert(dataName);
    }
    function DemoInner() {
        return (
            <h3>DemoInner Component</h3>
        );
    }
    return (
        <>
            <h1>{ dataName }</h1>
            <h2>functional Component from Demo</h2>
            <DemoClass />
            { DemoInner() }
            <DemoInner />

            <button onClick={ DemoAlert }>By function</button>
            <button onClick={ () => {
                alert('alert direct inside onClick fun');
            } }>By Arrow Function</button>

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
