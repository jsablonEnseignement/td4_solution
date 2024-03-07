import { useState } from "react";

export const Demo = () => {
    const [name, setName] = useState("John DOE")

    return <>
        Hello {name}, this is our first component and we are using state variable!
        <br />
        <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
    </>;
};
