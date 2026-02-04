# Expense Tracker Backend API (Node.js + Express)

A RESTful backend API for managing users, authentication, and financial transactions (income & expenses) for the Expense Tracker mobile application.

This server handles secure user verification, transaction storage, balance calculations, and communication with the mobile client in real time.

> ⚠️ This repository contains **only the backend API**.  
> The mobile client is hosted in a separate repository.

---

## 🚀 Features

- 💰 Transactions API
  - Add income and expense records
  - Fetch transaction history
- 📊 Financial Summary
  - Total balance calculation
  - Total expenses tracking
- 🌐 RESTful API Design
- 🛡 Secure Environment Variables
- 📦 Production-Ready Architecture

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (Neon DB)
- **Authentication:** Clerk / Custom OTP System
- **Environment Management:** dotenv
- **Security:** CORS
- **Logging:** Morgan

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/AniketJas/expense-tracker-api.git
cd expense-tracker-api
```

Install the dependencies:

```bash
npm install
```

Run the application:

```bash
node server.js
```

Server will run at:

```bash
http:\\localhost:9009
```

---

## 📁 Folder Structure

```bash
expense-tracker-api/
├── configs/
│   ├── cron.js          # Background scheduled jobs
│   ├── db.js            # Database connection
│   └── upstash.js      # Rate limiting / Redis config
│
├── controllers/
│   └── transactionsController.js   # Business logic for transactions
│
├── middleware/
│   └── rateLimiter.js  # API rate limiting middleware
│
├── routes/
│   └── transactionsRoute.js  # Transaction routes
│
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
├── server.js           # App entry point
└── README.md
```

## 📡 API Endpoints

| Method | Endpoint                            | Description                                        |
| ------ | ----------------------------------- | -------------------------------------------------- |
| GET    | `/api/transactions/:userId`         | Fetch all transactions for a specific user         |
| POST   | `/api/transactions`                 | Create a new income or expense transaction         |
| DELETE | `/api/transactions/:id`             | Delete a transaction by its ID                     |
| GET    | `/api/transactions/summary/:userId` | Get total balance, income, and expenses for a user |

---

## Deployment

You can deploy this backend using:

- Render
- Railway
- Vercel (Serverless)
- AWS EC2 / Lightsail

Deployment Checklist

- Set environment variables in hosting platform
- Allow MongoDB IP access
- Enable CORS for your mobile app domain
- Set Node.js version (Recommended: Node 18+)
- Enable HTTPS

## Security Notes

- Always use HTTPS in production
- Store secrets in environment variables
- Enable API rate limiting for all routes
- Validate and sanitize all incoming request data

## Testing (Optional)

You can test API endpoints using:

- Postman
- Thunder Client (VS Code)
- curl

Example request:

```bash
curl -X GET http://localhost:9009/api/transactions
```

## Mobile Client Repository

Link - https://github.com/AniketJas/expense-tracker-mobile.git

---

## License

This project is licensed under the MIT License.

## Author

Aniket Jas  
GitHub: https://github.com/AniketJas

## Support

If you find this project helpful, consider giving it a star on GitHub!
