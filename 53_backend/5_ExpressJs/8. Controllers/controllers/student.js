import express from "express";


//imp-> this file called controllers file 
//imp-> and all of 👇 these fxn called controllers



const allStudents = (req, res) => {
  res.send("All Student");
};

const newStudent = (req, res) => {
  res.send("New Student created");
};

const updateStudent = (req, res) => {
  res.send("Student updated");
};

const deleteStudent = (req, res) => {
  res.send("Student Deleted");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
