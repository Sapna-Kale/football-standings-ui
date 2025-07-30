# Stage 1: Build Angular app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:1.25
COPY --from=builder /app/dist/football-standings-ui/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
