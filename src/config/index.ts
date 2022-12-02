// Export all environment variables
const config = {
  DATABASE_URL: process.env.DATABASE_URL || 'http://localhost:8000',
  SERVER_SWAGGER_URL:
    process.env.SERVER_SWAGGER_URL || 'http://localhost:3000/dev',
};

export default config;
