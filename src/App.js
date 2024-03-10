import React from "react";
import { createRoot } from "react-dom";
import Login from "./Login";
import Register from "./Register";


// const heading= React.createElement('h2',{},"Nasmte fgfh");
const AppLayout =()=>{
    return (
        <>

        <Register/>
        {/* <Login/> */}
        </>
    )
}

const root =createRoot(document.getElementById('root'));

root.render(<AppLayout/>);