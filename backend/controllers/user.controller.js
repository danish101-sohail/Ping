import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    // Assuming the logged-in user's ID is available in req.user._id
    const loggedInUserId = req.user._id;

    // Fetch all users except the logged-in user
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
