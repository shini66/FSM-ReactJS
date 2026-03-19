import React, {useReducer} from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error("Acción desconocida");
    }
}

function ContadorReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => dispatch({ type: 'increment' });
    const handleDecrement = () => dispatch({ type: 'decrement' });
    const handleReset = () => dispatch({ type: 'reset' });

    console.log(`Hola "Como estas ?" '${state.count}'`)

    return (
        <div className="p-4 bg-gray-100 rounded text-center">
            <h2 className="text-2xl font-bold mb-4">Contador: {state.count}</h2>
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleDecrement} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Decrementar
                </button>
                <button
                    onClick={handleIncrement} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Incrementar
                </button>
                <button
                    onClick={handleReset} 
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                    Resetear
                </button>
            </div>
        </div>
    );
}

export default ContadorReducer;
