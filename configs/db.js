import { neon } from "@neondatabase/serverless";
import "dotenv/config";

//Creates a SQL connectionusing DB_URI from .env file
export const sql = neon(process.env.DB_URI);

export const initDB = async () => {
  // Database connection logic can be added here if needed
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE 
    );`;

    console.log('Database initialized successfully.');
  } catch (error) {
    console.log('Error initializing database:', error.message);
    process.exit(1)
  }
}