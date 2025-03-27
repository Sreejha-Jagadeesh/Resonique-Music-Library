Music Library

Overview

Music Library is a web application built using ReactJS, Spring Boot, Vite, and MySQL. This application allows users to manage and explore their music collections efficiently.

Features

🎵 User Authentication: Sign up and log in securely.

📂 Music Upload & Management: Add, edit, and delete music tracks.

🔍 Search & Filter: Easily find songs by title, artist, or genre.

📋 Playlists: Create and manage custom playlists.

🎧 Music Player: Integrated audio player for seamless playback.

⚡ Fast Performance: Optimized with Vite for quick loading.

Tech Stack

Frontend:

ReactJS - For building the user interface.

Vite - A fast development build tool for React.


Backend:

Spring Boot - For handling business logic and API development.

Spring Security - For authentication and authorization.

Database:

MySQL - For storing user and music data.

Installation

Prerequisites

Node.js

Java (JDK 11+)

MySQL

Maven

Setup Frontend (React + Vite)

cd frontend
npm install
npm run dev

Setup Backend (Spring Boot)

cd backend
mvn clean install
mvn spring-boot:run

Database Setup

Create a MySQL database:

CREATE DATABASE music_library;

Update application.properties in Spring Boot:

spring.datasource.url=jdbc:mysql://localhost:3306/music_library
spring.datasource.username=root
spring.datasource.password=yourpassword

Contributing

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Added a cool feature')

Push to the branch (git push origin feature-name)

Open a Pull Request

License

This project is open-source and available under the MIT License.

Happy Coding! 🎶🚀

