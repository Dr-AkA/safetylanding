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
COPY --from=builder /app/.env* ./
RUN npx prisma generate

USER node

EXPOSE 3000

CMD ["npm", "start"]
