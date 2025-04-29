import express from "express";
const router = express.Router();//anytime u want to use router u have to type this line of code   

// CAUTION ⚠️
// Beaware when testing this code
// The route methods are totally different from one another
// Which means you'll have to either test it on Postman or Thunder Client

router.get("/all", (req, res) => {
  res.send("All Student");
});

router.post("/create", (req, res) => {
  res.send("Sign in new student");
});

router.put("/update", (req, res) => {
  res.send("Update student ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove student from DB");
});


//imp-> jab create vaala kroge toh postman mey tumhe POST select karna hoga   = http://localhost:8000/student/create
//imp-> jab update vaala kroge toh postman mey tumhe PUT select karna hoga   = http://localhost:8000/student/update
//imp->  nhi toh error aa jaayega i.e method bhi mention karna hoga

export default router;
