import React from "react";
import TestButton from "./dbteszt";

function App() {
    async function getUser(){
        const emailInput = (document.getElementById('emailInput') as HTMLInputElement).value
        const passwordInput = (document.getElementById('passwordInput') as HTMLInputElement).value

        console.log(emailInput, passwordInput)

        const user = await fetch(`http://localhost:3001/login`,{
            method: 'POST',
            body: JSON.stringify({emailInput, passwordInput}),
        }).then((response) => response.json())
            .then((user) => {
                return user;
            });

        console.log(user)
    }
  return (
      <div className="app">
          <input placeholder="email" type="text" id={"emailInput"}/>
          <input placeholder="password" type="password" id={"passwordInput"}/>

          <TestButton handleClick={getUser}></TestButton>
      </div>
  )
}

export default App;
