# Spring Boot Authentication Backend

Backend API for Todo Management System built with Spring Boot, Spring Security, JWT Authentication, and MySQL.

---

# Tech Stack

- Java 17
- Spring Boot 3.5.14
- Spring Security
- Spring Data JPA
- MySQL
- JWT Authentication
- Lombok
- Maven

---

# Features

- JWT Authentication
- User Registration & Login
- Spring Security Configuration
- Role-Based Authentication
- REST APIs
- MySQL Database Integration
- Secure Password Encoding
- Exception Handling

---

# Clone Repository

Clone backend branch:

```bash
git clone -b main git@github.com:iuzaifa/todo-ap-spring.git
```

Go to project folder:

```bash
cd todo-ap-spring
```

---

# Required Software

Install these before running project:

- Java 17
- Maven
- MySQL
- Git
- IntelliJ IDEA / VS Code

---

# Database Configuration

Create MySQL database:

```sql
CREATE DATABASE springsecuritydb;
```

---

# Configure Application Properties

Open:

```text
src/main/resources/application.properties
```

Example configuration:

```properties
spring.application.name=SpringAuthentication

server.port=8080

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/springsecuritydb
spring.datasource.username=root
spring.datasource.password=your_password

# Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT
application.security.jwt.secret-key=your_secret_key
application.security.jwt.access-token-expiration=86400000
```

---

# Install Dependencies

Using Maven:

```bash
mvn clean install
```

---

# Run Application

Using Maven:

```bash
mvn spring-boot:run
```

Application will run on:

```text
http://localhost:8080
```

---

# API Authentication

This project uses JWT Authentication.

Typical flow:

1. Register User
2. Login User
3. Receive JWT Token
4. Send token in Authorization header

Example:

```http
Authorization: Bearer your_jwt_token
```

---

# Maven Dependencies Used

## Spring Boot

- spring-boot-starter-web
- spring-boot-starter-security
- spring-boot-starter-data-jpa

## Database

- mysql-connector-j

## JWT

- jjwt-api
- jjwt-impl
- jjwt-jackson

## Utility

- lombok

## Testing

- spring-boot-starter-test
- spring-security-test

---

# Build Project

```bash
mvn clean package
```

Generated JAR file:

```text
target/SpringAuthentication-0.0.1-SNAPSHOT.jar
```

Run JAR:

```bash
java -jar target/SpringAuthentication-0.0.1-SNAPSHOT.jar
```

---

# Project Structure

```text
src/main/java
 ├── config
 ├── controller
 ├── dto
 ├── entity
 ├── repository
 ├── security
 ├── service
 └── exception
```

---

# Frontend Branch

Frontend application is available in:

```text
feature/frontend
```

Built with:

- React
- TypeScript
- Vite
- Tailwind CSS

---

# Author

Abu Huzaifa