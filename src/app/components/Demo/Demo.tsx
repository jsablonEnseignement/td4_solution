import { useState } from "react";
import { Hello } from "./Hello";

export const Demo = () => {
    const [name, setName] = useState("John DOE")

    return <>
        <Hello />
        <br />
        <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
    </>;
};
