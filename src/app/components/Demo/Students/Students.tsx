import axios from "axios";

export const Students = () => {
    const fetchStudents = async () => {
        const { data } = await axios.get(`http://localhost:5000/students`);
        console.log(data);
    };
        
    return <button onClick={() => fetchStudents()}>Récupérer les étudiants</button>;
};
    