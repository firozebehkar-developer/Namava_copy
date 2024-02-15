const userModel = require("./../models/user");
const bsanUserModel = require("./../models//ban-phone");

exports.banUser = async (req, res) => {
  const { id } = req.params.id;
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
