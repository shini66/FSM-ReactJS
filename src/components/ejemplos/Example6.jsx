import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return { count: 0};
    }
}

function Example6() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Contador: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>
        </div>
    );

}

export default Example6;