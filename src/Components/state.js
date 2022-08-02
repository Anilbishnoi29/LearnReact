import React,{ useState } from 'react';

// function Welcome(props) { 
const StateCounter = () => {
    let [count,setData] = useState(0);
    function increment() {
        count++;
        setData(count);
        console.log(count);
    }
    return (
        <div className='wrapper'>
            <h1>Do's and Don'ts of setState in React </h1>
            <h3>{ count }</h3>
            <button onClick={ increment }>Increment</button>
        </div>
    );
};
export default StateCounter;
