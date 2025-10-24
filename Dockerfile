# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# If you use pnpm/yarn, adjust accordingly. Using npm here.
COPY package*.json ./
# install deps
RUN npm ci

# copy rest and build
COPY . .
RUN npm run build

# Stage 2: runtime
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# install a very small runtime-only deps if any (not needed usually)
COPY package*.json ./
RUN npm ci --production

# copy built app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./

EXPOSE 3000

# use the start script that should be in package.json: "start": "next start -p $PORT"
CMD ["npm", "run", "start"]
