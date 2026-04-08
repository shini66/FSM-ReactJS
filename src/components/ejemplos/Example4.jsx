import { useState, useMemo } from "react";

function Example4() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const hardCalculation = (num) => {
        console.log("Calculando...");
        let result = 0;
        for (let i = 0; i < 10; i++) {
            result += i;
        }
        return result + num;
    };

    const resultMemo = useMemo(() => {return hardCalculation(count)}, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Resultado de Cálculo: {resultMemo}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe algo..."
                className="mt-4 p-2 border rounded-md"
            />
        </div>
    );
}

export default Example4;