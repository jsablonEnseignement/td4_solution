import { useEffect, useState } from "react";
import { Hello } from "./Hello";
import { Button } from "antd";

const languages = ["Français", "Anglais", "Espagnol"];

export const Demo = () => {
    const [name, setName] = useState("John DOE");

    useEffect(() => {
        console.log("Ce texte est affiché au chargement du composant !");
    }, []);

    useEffect(() => {
        console.log(`La variable name contient ${name.length} caractères !`);
    }, [name]);
        

    return <>
        {name ? <Hello name={name} /> : "Veuillez renseigner un nom d'utilisateur"}
        <br />
        <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <ul>
            {languages.map((language) => (
                <li key={language}>{language}</li>
            ))}
        </ul>
    </>
};
