import TestButton from "./dbteszt";

function App() {
    async function getElek(){
        const emailInput = (document.getElementById('emailInput') as HTMLInputElement).value
        const passwordInput = (document.getElementById('passwordInput') as HTMLInputElement).value

        console.log(emailInput, passwordInput)

        const user = await fetch(`http://localhost:3001/login?email=${emailInput}&password=${passwordInput}`,{
            method: 'GET',
        }).then((response) => response.json())
            .then((user) => {
                return user;
            });

        console.log(user)
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
