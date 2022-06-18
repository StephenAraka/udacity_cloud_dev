import dotenv from 'dotenv';

dotenv.config();

export const config = {
  "dev": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "udagram_iam",
    "aws_media_bucket": "udagram-araka-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
