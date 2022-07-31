import React,{ Component,useState } from "react";

// functional component
function Demo() {
    const [data,setData] = useState("Anil");
    function updateData() {
        setData("Anil Bishnoi");
        alert(data);
    }
    console.warn("-----------------");
    return (
        <>
            <h1>{ data }</h1>
            <button onClick={ updateData }>Update Data</button>
        </>
    );
}


export default Demo;
