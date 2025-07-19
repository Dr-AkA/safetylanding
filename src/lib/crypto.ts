import crypto from "crypto";

const algorithm = "aes-256-gcm";
const secretKey = process.env.ENCRYPTION_SECRET_KEY as string;
const ivLength = 12;
const tagLength = 16;

export function encrypt(text: string): string {
  if (!secretKey) {
    throw new Error("ENCRYPTION_SECRET_KEY is not set");
  }

  if (secretKey.length !== 64) {
    throw new Error("ENCRYPTION_SECRET_KEY must be 64 hex characters (32 bytes)");
  }

  const iv = new Uint8Array(crypto.randomBytes(ivLength));
  const key = new Uint8Array(Buffer.from(secretKey, "hex"));

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const tag = cipher.getAuthTag();

  return Buffer.from(iv).toString("hex") + ":" + tag.toString("hex") + ":" + encrypted;
}

export function decrypt(encryptedData: string): string {
  if (!secretKey) {
    throw new Error("ENCRYPTION_SECRET_KEY is not set");
  }

  const parts = encryptedData.split(":");
  if (parts.length !== 3) {
    throw new Error("Invalid encrypted data format - expected iv:tag:ciphertext");
  }

  const [ivHex, tagHex, encrypted] = parts;
  const iv = new Uint8Array(Buffer.from(ivHex, "hex"));
  const tag = new Uint8Array(Buffer.from(tagHex, "hex"));
  const key = new Uint8Array(Buffer.from(secretKey, "hex"));

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

export function hash(text: string): string {
  return crypto.createHash('sha256').update(text).digest('hex');
}