import React, {Suspense} from "react";
import Header from "app1/Header"
import {VueInReact} from 'vuera'
const VueComponent = VueInReact(Header)
const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App3</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <VueComponent name="app3"/>
      </Suspense>
    </div>)
}


export default App;
