const User = require("../models/User");

async function getUser(req, res, next) {
  try {
    const user = await User.findOne({ email: req.user.user });
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

async function checkTokenUser(req, res) {
  const id = req.params.id;

  // check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
}

module.exports = { getUser, checkTokenUser };
