import axios from "axios";
import { useEffect } from "react";

export const Students = () => {
    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await axios.get(`http://localhost:5000/students`);
            console.log(data)
        };
        fetchStudents();
    });
    
    return <></>;
};
