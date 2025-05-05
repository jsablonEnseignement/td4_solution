import { Types } from "mongoose";
import { StudentModel, Student } from "../models/students.model";

const getStudents = async () => {
  return await StudentModel.find();
};

const getStudent = async (studentId: string) => {
  return await StudentModel.findOne({ _id: studentId });
};

const createStudent = async (studentToCreate: Student) => {
  const newStudent = new StudentModel(studentToCreate);
  return await newStudent.save();
};

const updateStudent = async (studentId: string, studentToUpdate: Student) => {
  return await StudentModel.findOneAndUpdate(
    {
      _id: new Types.ObjectId(studentId),
    },
    studentToUpdate,
    {new:true}
  );
};

const deleteStudent = async (studentId: string) => {
  await StudentModel.deleteOne({ _id: studentId });
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};