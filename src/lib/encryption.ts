// lib/encryption.ts
import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const secretKey = process.env.ENCRYPTION_SECRET_KEY as string; 
const ivLength = 12; 

export function encrypt(text: string): string {
  if (!secretKey) {
    throw new Error("ENCRYPTION_SECRET_KEY is not set");
  }
  
  if (secretKey.length !== 64) {
    throw new Error("ENCRYPTION_SECRET_KEY must be 64 hex characters (32 bytes)");
  }
  
  const iv = crypto.randomBytes(ivLength);
  const key = Buffer.from(secretKey, 'hex');
  
  const cipher = crypto.createCipheriv(algorithm, new Uint8Array(key), new Uint8Array(iv));
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const tag = cipher.getAuthTag();
  
  return iv.toString('hex') + ':' + tag.toString('hex') + ':' + encrypted;
}

export function decrypt(encryptedData: string): string {
  if (!secretKey) {
    throw new Error("ENCRYPTION_SECRET_KEY is not set");
  }
  
  const parts = encryptedData.split(':');
  if (parts.length !== 3) {
    throw new Error("Invalid encrypted data format - expected iv:tag:ciphertext");
  }
  
  const [ivHex, tagHex, encrypted] = parts;
  const iv = Buffer.from(ivHex, 'hex');
  const tag = Buffer.from(tagHex, 'hex');
  const key = Buffer.from(secretKey, 'hex');
  
  const decipher = crypto.createDecipheriv(algorithm, new Uint8Array(key), new Uint8Array(iv));
  decipher.setAuthTag(new Uint8Array(tag));
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}