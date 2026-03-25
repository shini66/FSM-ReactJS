import { useEffect, useState } from "react";

function Example3() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Counts: ${count}`);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}   


export default Example3;
