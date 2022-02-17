import config from "config";
import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  //create a session
  const session = await createSession(user._id, req.get("user-agent") || "");
  //create access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("assessTokenTTL") }
  );
  //create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTTL") }
  );
  //return access and refresh tokens

  return res.send({ accessToken, refreshToken });
}
