 **Containerized Website Application**


This project is a simple website application containerized using Docker. The application serves an HTML page with basic CSS and JavaScript, all run through a lightweight Node.js server inside a Docker container.

## Project Structure

```plaintext
containerized-website-app/
├── Dockerfile               # Docker configuration to build the image
├── docker-compose.yml       # Docker Compose file to manage services
├── .dockerignore            # Files/folders to exclude from the Docker image
├── src/                     # Static files for the website
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── server/
    └── server.js            # Node.js server to serve the website
```

## Prerequisites

- **Docker** and **Docker Compose** installed on your machine

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jatinpandit001/Containerized-application
   cd containerized-website-app
   ```

2. **Build and Run the Container**:
   Use Docker Compose to build and run the application.
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**:
   Open your browser and go to `http://localhost:8080` to view the website.

## Features

- Simple HTML/CSS/JS frontend served by a Node.js server
- Fully containerized for easy deployment and portability
- Easy setup with Docker Compose

## License

This project is licensed under the MIT License.
