# Stage 1 — install deps & build
FROM node:18-alpine AS builder
WORKDIR /app

# install deps faster: copy package manifests first (cache)
COPY package*.json ./
# If you use pnpm/yarn, adapt accordingly
RUN npm ci --silent

# copy rest of source and build
COPY . .
RUN npm run build

# Stage 2 — production image
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# copy only what's needed from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public



# Install production deps
RUN npm ci --only=production --silent

# expose port (Next default)

ENV PORT=3000
EXPOSE 3000


# Ensure .next/cache/images exists and is writable
RUN mkdir -p /app/.next/cache/images && chown -R appuser:appgroup /app/.next

USER appuser
# Use NODE_ENV=production by default
ENV NODE_ENV=production

# Start Next in production mode
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]
