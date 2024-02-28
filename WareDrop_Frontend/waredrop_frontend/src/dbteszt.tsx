interface TestButtonProps {
    handleClick: () => void;
}

function TestButton(props: TestButtonProps){
    return(
        <button onClick={props.handleClick}>Teszt</button>
    )
}
export default TestButton;