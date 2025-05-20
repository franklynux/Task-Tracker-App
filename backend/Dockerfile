# Dockerfile for Express backend
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install \
    && apk add --no-cache curl
COPY . .
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
CMD ["npm", "start"]
