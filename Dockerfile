# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Set the working directory within the container
WORKDIR /usr/share/nginx/html

# Copy your website files to the container's working directory
COPY index.html .  
COPY login.html .
COPY dashboard.html .
COPY styles/ ./styles/  
COPY scripts/ ./scripts/ 
COPY images/ ./images/

# If you have additional assets like images, you can copy them here too
# COPY images/ ./images/  # Replace "images/" with your image directory

# Expose port 80 (default for HTTP) to the host machine
EXPOSE 80

# Start Nginx web server when the container runs
CMD ["nginx", "-g", "daemon off;"]
