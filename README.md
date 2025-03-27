# Auth0 Authentication with React and Node.js

This project implements authentication using Auth0, a Node.js backend with Express for validating tokens, and an email service to send authentication tokens to users upon login.

## Features
- **Frontend**: Built with React.js using Auth0 for authentication.
- **Backend**: Express.js API that validates Auth0 tokens and sends an email to the authenticated user.
- **Email Service**: Uses Nodemailer to send authentication tokens via email.

---
## Setup Instructions

### Prerequisites
- Node.js installed
- Auth0 account set up
- Gmail or another SMTP service for sending emails



### 2. Setup Environment Variables
Create a `.env` file in both the frontend and backend directories with the following variables:

#### **Backend (`server/.env`):**
```env
PORT=5000
AUTH0_AUDIENCE=your-auth0-audience
AUTH0_DOMAIN=your-auth0-domain
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

#### **Frontend (`frontend/.env`):**
```env
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

---
## Backend Setup

### 1. Install Dependencies
```sh
cd server
npm install
```

### 2. Run the Server
```sh
npm start
```
The server will start on `http://localhost:5000`

---
## Frontend Setup

### 1. Install Dependencies
```sh
cd frontend
npm install
```

### 2. Start the Frontend
```sh
npm start
```
The frontend will be available on `http://localhost:3000`

---
## Authentication Flow
1. User logs in using Auth0.
2. Auth0 returns an access token.
3. The frontend sends this token to the backend.
4. The backend validates the token and extracts user details.
5. The backend sends an email to the authenticated user containing the token.

---
## Dependencies Used
- **Frontend:** Next.js/React.js, @auth0/auth0-react, Axios
- **Backend:** Express.js, express-oauth2-jwt-bearer, Nodemailer
- **Email Service:** Gmail SMTP (can be replaced with SendGrid or other services)

---
## Bonus Features (Optional)
- Logging authentication events.
- UI enhancements for better user experience.
- Using a database to store authentication logs.

---
## Demo Video
(Soon to be added)

For any issues, feel free to open an issue or contribute to the repository!

