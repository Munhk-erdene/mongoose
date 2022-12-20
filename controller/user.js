import User from "../model/User.js";
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) throw Error("not found", 400);
  res.send({
    data: users,
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw Error("not found", 400);
  res.send({
    data: user,
  });
};
