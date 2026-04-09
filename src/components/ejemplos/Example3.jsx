import { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";

function Example3() {
    const { count, increment } = useCounter();

    useEffect(() => {
        console.log(`Counts: ${count}`);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}   


export default Example3;
