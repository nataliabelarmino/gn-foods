import { Pool } from 'pg';

export default new Pool({
   connectionString: process.env.POSTGRES_URL,
  //connectionString: "postgres://default:fWHz3QAc1ovw@ep-late-fog-a4f01qvv-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",

  ssl: {
    rejectUnauthorized: false,
  },
});