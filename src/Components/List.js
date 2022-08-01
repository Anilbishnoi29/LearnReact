
function ListPrint(props) {
    const myList = props.myList;
    const listItem = myList.map((myList,index) => <li key={ index } data={ index }>{ myList }</li>);
    return (
        <ul>{ listItem }</ul>
    );
};
const myList = ["Saab","Volvo","BMW"];
const List = () => {
    return (
        <>
            <h1>List and Keys</h1>
            <ListPrint myList={ myList } />
        </>
    );
};
export default List;