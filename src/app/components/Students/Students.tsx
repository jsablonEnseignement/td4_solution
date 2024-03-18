import axios from "axios";
import { useEffect, useState } from "react";
import { Student } from "../Student/Student";
import { Student as StudentType } from "../../types/Student";

export const Students = () => {
    const [students, setStudents] = useState<StudentType[]>([]);
    
    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await axios.get(`http://localhost:5000/students`);
            setStudents(data);
        };
        fetchStudents();
    });
    
    return (
        <>
            <h3>Liste des étudiants :</h3>
            {students.length > 0 ? (
            students.map((student) => (
                <Student
                key={student._id}
                student={student}
                />
            ))
            ) : (
            <div>Aucun étudiant à afficher</div>
            )}
        </>
    );
};
