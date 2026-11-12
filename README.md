
# StudioSpace Server 🚀

Backend API for **StudioSpace** — a studio discovery and booking platform where users can explore studio spaces and manage their bookings.

## 🌐 Live Links

- **Live Website:** https://studio-space-nine-lac.vercel.app/
- **Backend Repository:** https://github.com/ShovonDas-Dev/StudioSpace_server

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Better Auth
- JWT Authentication
- JOSE
- CORS
- dotenv

## ✨ Features

- RESTful API built with Express.js
- Create and retrieve studio listings
- Get studio details by ID
- Filter studios by category
- Filter studios by host email
- Update and delete studio listings
- Create and retrieve booking records
- Delete booking records
- Secure protected routes using JWT authentication
- MongoDB database integration

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShovonDas-Dev/StudioSpace_server.git
```

### 2. Navigate to the Project Directory

```bash
cd StudioSpace_server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_URL=your_better_auth_base_url
```

**Environment Variables:**

- `MONGODB_URI` — MongoDB connection string.
- `BETTER_AUTH_URL` — Base URL of the Better Auth application.

Never share your database credentials or commit your `.env` file to GitHub.

### 5. Run the Server

```bash
node index.js
```

The server runs on:

```text
http://localhost:5000
```

## 🔗 API Endpoints

Base URL:

```text
http://localhost:5000
```

### General

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check server status |

### Studio APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/add-studio` | Add a new studio |
| GET | `/allStudio` | Get all studios |
| GET | `/allStudio?category={category}` | Filter studios by category |
| GET | `/allStudio?hostEmail={email}` | Get studios by host email |
| GET | `/allStudio/:id` | Get a single studio |
| PATCH | `/allStudio/:id` | Update studio information |
| DELETE | `/allStudio/:id` | Delete a studio |

### Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/booking` | Create a new booking |
| GET | `/booking` | Get booking records |
| DELETE | `/booking/:id` | Delete a booking |

## 🔐 Authentication

Protected API routes use Better Auth JWT authentication.

Include the access token in the request headers:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The server verifies JWT tokens using the Better Auth JWKS endpoint:

```text
{BETTER_AUTH_URL}/api/auth/jwks
```

Requests without a valid token receive an unauthorized response.

## 🗄️ Database

This project uses MongoDB for data storage.

**Collections:**

| Collection | Description |
|---|---|
| `Studios` | Stores studio listing information |
| `bookingData` | Stores booking information |

## 📁 Project Structure

```text
StudioSpace_server/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── .env
```

## 👨‍💻 Author

**Shovon Kumar Das**

- GitHub: [ShovonDas-Dev](https://github.com/ShovonDas-Dev)
- LinkedIn: [Shovon Kumar Das](https://www.linkedin.com/in/shovonkumardas)

---

⭐ If you like this project, consider giving it a star!
