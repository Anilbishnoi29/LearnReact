import { useState } from "react";

const Profile = () => {
    const [loggedIn,setLoggedIn] = useState(false);
    function login() { setLoggedIn(true); }

    // wrong way to use Conditional Rendering
    // if (loggedIn) {
    //     return (
    //         <h1>Welcome to Dashboard</h1>
    //     );
    // } else {
    //     return (
    //         <>
    //             <h1>LogIn to access Dashboard</h1>
    //             <button onClick={ login }>Login</button>
    //         </>
    //     );
    // }
    // Right way to use Conditional Rendering
    return (
        <>
            <h1>{ loggedIn ? "Welcome to Dashboard" : <button onClick={ login }>LogIn to access Dashboard</button> }</h1>
        </>
    );
};
export default Profile; 