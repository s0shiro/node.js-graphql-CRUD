import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
