import { useCounter } from "@/hooks/useCounter.js";


function Example6() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Resetear</button>
        </div>
    );

}

export default Example6;