FROM nginx:latest

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY html /usr/share/nginx/html

# Expose port 80
EXPOSE 80

