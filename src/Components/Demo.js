import React,{ Component,useState } from "react";
import { PropTypes } from "prop-types";
function Demo(props) {
    const [data,setData] = useState(props.dataName);
    function updateData() {
        const newData = data.toUpperCase();
        setData(newData);
    }
    console.warn("-----------------");
    return (
        <>
            <h1>{ props.title }</h1>
            <h1>{ data }</h1>
            <button onClick={ updateData }>Update Data</button>
        </>
    );
};
Demo.propTypes = {
    title: PropTypes.string,
};
Demo.defaultProps = {
    title: "set title here ",
    dataName: "Set name here",
};

export default Demo;
