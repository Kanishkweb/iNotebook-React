// Import the required modules
const express = require("express");
const User = require("../models/User");

// Npm Package Express-Validator
const { body, validationResult } = require("express-validator");

const router = express.Router();
// Npm Package Bcrypt js
const bcrypt = require("bcryptjs");
// Token for Authentication jsonwebtoken
const jwt = require("jsonwebtoken");
// Custom middle ware
const fetchuser = require("../middleware/fetchuser");
// Secreat key JWT_SECRET
const JWT_SECRET = "Harryisagood$oy";

// ----------------All routes --------------------------------------------------------------
// ----------------------------------------------------------------------------------------/*


/*--------------------------------------ROUTE-1--------------------------------------------*/

// Route - 1 : Create a User using POST /api/auth/createuser - No login required


router.post(
  "/createuser",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("name").notEmpty().withMessage("Name is required"),
  ],
  async (req, res) => {
    // If errors return bad request and Errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, name } = req.body; // Destructuring
      let user = await User.findOne({ email });

      // Securing password in hash+salt password

      const salt = await bcrypt.genSalt(10); // Promise thats why we are awaiting
      const secPass = await bcrypt.hash(req.body.password, salt); // Promise thats why we are awaiting

      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }
      // Create a new User
      user = new User({
        email,
        password: secPass,
        name,
      });

      await user.save();
      // Creating token for the user
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      res.status(201).json({ authToken, message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

/*--------------------------------------ROUTE-3---------------------------------------*/

//  Route - 2 : Authenticate a User using POST : "api/auth/login" - No login required


router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be Blank").exists(),
  ],
  async (req, res) => {
    // If errors return bad request and Errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct Credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);
/*------------------------------ROUTE-3-----------------------------------------------*/

// Route - 3 : Get loggedin User Details using: POST "/api/auth/getuser". Login required


router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id; // 64a914a8401ba63343b309fd
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
