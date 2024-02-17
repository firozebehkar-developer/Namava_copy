const userModel = require("./../models/user");
const bsanUserModel = require("./../models//ban-phone");
const { isValidObjectId } = require("mongoose");

exports.banUser = async (req, res) => {
  const id = req.params.id;
  const validId = isValidObjectId(id);

  if (!validId) {
    return res.status(400).json({ message: "ObjectId is Not valid" });
  }

  const findUser = await userModel.findOne({ _id: id });
  const banUser = await bsanUserModel.create({ phone: findUser.phone });

  if (!banUser) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
  return res.status(200).json({
    message: "User Ban successfully",
  });
};

exports.changeRole = async (req, res) => {
  const { id } = req.body;
  const isValidId = await isValidObjectId(id);

  if (!isValidId) {
    return res.status(409).json({
      message: "The object Id Not Valid",
    });
  }

  const user = await userModel.findById({ _id: id });
  if (!user) {
    return res.json({
      message: "user Not Found",
    });
  }
  const newRole = user.role === "ADMIN" ? "USER" : "ADMIN";
  await userModel.findByIdAndUpdate({ _id: id }, { role: newRole });

  return res.json({ message: "User Role Apdated" });
};
