import React,{ Component,useState } from "react";
import { PropTypes } from "prop-types";
function ListPrint(props) {
    const myList = props.myList;
    const listItem = myList.map((myList,index) => <li key={ index } data={ index }>{ myList }</li>);
    return (
        <ul>{ listItem }</ul>
    );
};
const myList = ["Saab","Volvo","BMW"];

const List = (props) => {
    const [carTitle,setCarTitle] = useState(props.title);
    const [carHeading,setCarHeading] = useState(props.heading);
    const [carSubHeading,setCarSubHeading] = useState(props.subHeading);
    const [carContent,setCarContent] = useState(props.content);
    return (
        <>
            <h3>{ carTitle }</h3>
            <h3>{ carHeading }</h3>
            <h3>{ carSubHeading }</h3>
            <h3>{ carContent }</h3>
            <h1>List and Keys</h1>
            <ListPrint myList={ myList } />
        </>
    );
};
export default List;
List.defaultProps = {
    carTitle: "set title here ",
    carHeading: "Set car heading here",
    carSubHeading: "Set car sub heading here",
    carContent: "Set car content here",
};
