const User = require("../models/product");

const getproduct = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const createproduct = async (req, res) => {
  const user = new User({
    name: "Bike",
    price: 4000,
    quantity: 2
  });
  const users = await User.create(user);
  res.send(users);
};

module.exports = { getproduct, createproduct};