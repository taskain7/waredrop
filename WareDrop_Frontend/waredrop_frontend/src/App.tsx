import TestButton from "./dbteszt";
import axios from "axios";

function App() {
    async function getElek(){
        const emailInput = (document.getElementById('emailInput') as HTMLInputElement).value
        const passwordInput = (document.getElementById('passwordInput') as HTMLInputElement).value

        console.log(emailInput, passwordInput)

        const user = {
            user_email: emailInput,
            user_password: passwordInput
        }

        let response;
        axios.post(`http://localhost:3001/login`, {user})
            .then(res => {
                response = res;
            })

        console.log(response)
        return 'teszt';
    }
  return (
      <div className="app">
          <input type="text" id={"emailInput"}/>
          <input type="password" id={"passwordInput"}/>

          <TestButton handleClick={getElek}></TestButton>
      </div>
  );
}

export default App;
