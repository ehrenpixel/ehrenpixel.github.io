# check the README.md and other files for more information
# create me the dockerfile for my Astro project using pnpm
FROM node:18

# Install git for version control in codespaces
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Change ownership to node user
RUN chown -R node:node /app

# Switch to non-root user
USER node

# Copy package files
COPY --chown=node:node package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY --chown=node:node . .

# Expose the port that Astro uses
EXPOSE 4321