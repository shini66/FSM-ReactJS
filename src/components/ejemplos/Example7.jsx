import { useId } from "react";

function Example7({label, type = 'text'}) {
    const id = useId();

    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <input id={id} type={type} className="block w-full p-2 border border-gray-300 rounded-md" />
        </div>
    );

}

export default Example7;