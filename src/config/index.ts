// Export all environment variables
const config = {
  DYNAMODB_MODE: 'server',
  DATABASE_URL: process.env.DATABASE_URL || 'http://localhost:5000',
  SERVER_SWAGGER_URL:
    process.env.SERVER_SWAGGER_URL || 'http://localhost:3000/dev',
};

export default config;
