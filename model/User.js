import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: String,
  lastname: String,
  age: Number,
  hobbies: Array,
  image: String,
});
const User = mongoose.model("User", userSchema);
export default User;
