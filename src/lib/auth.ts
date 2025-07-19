import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'your-secret-key'



export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}


export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret)
  } catch {
    return null
  }
}