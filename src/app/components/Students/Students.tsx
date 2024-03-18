import axios from "axios";
import { useEffect, useState } from "react";
import { Student } from "../Student/Student";
import { Student as StudentType } from "../../types/Student";
import { Divider } from "antd";
import { AddStudent } from "../AddStudent/AddStudent";

export const Students = () => {
    const [students, setStudents] = useState<StudentType[]>([]);
    
    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await axios.get(`http://localhost:5000/students`);
            setStudents(data);
        };
        fetchStudents();
    });

    const addStudent = async (name: string, firstname: string, age: number) => {
      const student = {
        name: name,
        firstname: firstname,
        age: age,
      };
  
      const newStudent = (
        await axios.post(`http://localhost:5000/students`, student)
      ).data;
      console.log("newStudent: ", newStudent);
      setStudents([...students, newStudent]);
    };

    const editStudent = async (data: Partial<StudentType>) => {
      const updatedStudent = (
        await axios.put(`http://localhost:5000/students/${data._id}`, data)
      ).data;
  
      const studentsUpdated = students.map((student) => {
        if (student._id === updatedStudent._id) {
          student = updatedStudent;
        }
        return student;
      });
  
      setStudents(studentsUpdated);
    };

    const deleteStudent = (id: string) => {
      axios.delete(`http://localhost:5000/students/${id}`);
      setStudents(students.filter((student) => student._id !== id));
    };
    
    return (
        <>
            <h3>Liste des étudiants :</h3>
            {students.length > 0 ? (
            students.map((student) => (
                <Student
                    key={student._id}
                    student={student}
                    onEdit={editStudent}
                    onDelete={deleteStudent}
                />
            ))
            ) : (
            <div>Aucun étudiant à afficher</div>
            )}
            <Divider />
            <AddStudent onAdd={addStudent} />
        </>
    );
};
