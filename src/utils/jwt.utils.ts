import jwt from "jsonwebtoken";
import config from "config";

const publicKey = config.get<string>("publicKey");
const privateKey = config.get<string>("privateKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS512",
  });
}

function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
  } catch (e: any) {
    valid: false;
    expired: e.message === "jwt expired";
    decoded: null;
  }
}
