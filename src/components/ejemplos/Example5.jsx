import { useRef, useState } from "react";

function Example5({ placeholder }) {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input  ref={inputRef} type="text" placeholder={placeholder ?? "Escribe algo..."} className="p-2 border rounded-md" />
            <button onClick={handleFocus} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Enfocar - {placeholder}</button>
        </div>
    );
}

function Example5Count() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const incrementCount = () => {
        setCount(count + 1);
        countRef.current += 1;
        console.log("Count Ref:", countRef.current);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Count Ref: {countRef.current}</h1>
            <button onClick={incrementCount} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Increment</button>
        </div>
    );
}

export { Example5, Example5Count };