# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy lockfiles and install dependencies
COPY package.json yarn.lock package-lock.json pnpm-lock.yaml ./
RUN \ 
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm install --global pnpm && pnpm install --frozen-lockfile; \
    else npm ci; \
    fi

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Create the final image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the "standalone" folder and static assets from the builder stage
COPY --from=builder /app/public ./public
# The standalone output includes its own minimal node_modules and the server
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the port and run the server
ENV PORT 3000
EXPOSE 3000

# The standalone server uses the standard node command
CMD ["node", "server.js"]