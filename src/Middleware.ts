import { Request, Response, NextFunction } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET : string = "made-with-love"



function AdminMiddlware(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string = req.headers?.token as string;

    if (!token) {
       res.status(401).json({ message: "Access Denied! No token provided." });
    }

    const verifytoken: JwtPayload = Jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (verifytoken) {
      next();
    } else {
      res.status(401).json({ message: "Invalid token! Please log in again." });
    }
  } catch (e) {
    console.log(e);
     res.send("server error");
  }
}

export default AdminMiddlware;
