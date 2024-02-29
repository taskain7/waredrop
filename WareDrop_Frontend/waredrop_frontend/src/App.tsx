import axios from "axios";
import {useState} from "react";

const App: React.FC = () =>{
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    return (
        <div className="app">
            <input type="text" value={emailInput} onChange={(e) => {
                const email = e.target.value;
                setEmailInput(email);
            }}/>
            <input type="password" value={passwordInput} onChange={(e) => {
                const password = e.target.value;
                setPasswordInput(password);
            }}/>
        </div>
    );
}

export default App;
