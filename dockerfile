FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma/
COPY .env* ./

RUN npx prisma generate

RUN ls -al node_modules/@prisma/client
RUN ls -al node_modules/.prisma/client

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY llm.txt /app/llm.txt

RUN npx prisma generate
RUN mkdir -p /app/cv-uploads && chown -R node:node /app/cv-uploads
RUN mkdir -p /app/.next/cache/images && chown -R node:node /app/.next/cache

USER node

EXPOSE 3000

CMD ["npm", "start"]
