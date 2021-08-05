const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(200).json({
      message: "Signup was successful!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await Admin.find({ username: req.body.username });
    if (user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        // generate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "2 days",
          }
        );
        res.status(200).json({
          access_token: token,
          message: "Login successful",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed!. Please try again",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed!. Please try again",
      });
    }
  } catch (err) {
    res.status(401).json({
      error: "Authentication failed!. Please try again",
    });
  }
};

module.exports = {
  signup,
  login,
};
