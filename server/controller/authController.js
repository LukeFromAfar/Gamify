const User = require("../models/UserSchema.js");
bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const createJWT = require("../utils/createJWT");
const createCookie = require("../utils/createCookie");
const { get } = require("mongoose");

const saltRounds = parseInt(process.env.SALT);

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      
      const user = await User.findOne({ email: email });
      const role = "user";

      console.log(user);
      let hashedPassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      console.log(isPasswordCorrect);

      if (isPasswordCorrect) {
        const jwtToken = await createJWT(email, role);
        createCookie(res, jwtToken);

        res.status(202).send({ msg: "User found", user: user });
      } else {
        res.status(404).send({ msg: "User not found" });
      }
      // res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Error logging in" });
    }
  },
  register: (req, res) => {
    try {
      const { email, password, repeatPassword } = req.body;

      let role = "user";

      if (password == repeatPassword) {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
          if (err) console.log(err, "Error");
          console.log(req.body, "req.body");

          const user = new User({
            email: email,
            password: hash,
            role: role,
          });
          console.log(user);
          user.save();

          const jwtToken = await createJWT(email, role);
          createCookie(res, jwtToken);
          
          // console.log(jwtToken, "JWT_Token");

          res.status(201).send({ msg: "User created", user: user });
        });
      } else {
        res.status(500).send({ msg: "Passwords do not match" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Error registering user" });
    }
  },
  getUser: async (req, res) => {
    let email = req.user.email;

    try {
      const user = await User.findOne({ email: email });

      if (user) {
        res.status(200).send({ msg: "User found", user: user });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error", error: error});
    }
  },
};

module.exports = authController;
