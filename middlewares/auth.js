import jwt from "jsonwebtoken";

import { AuthenticationError } from "../errors/index.js";

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token)
    throw new AuthenticationError(
      "You are not logged in! Please log in to continue"
    );

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId };
  } catch (error) {
    console.log("Error at auth.js file ", error);
    throw new AuthenticationError("Authentication invalid");
  }

  next();
};

export default auth;
