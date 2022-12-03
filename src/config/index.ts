// Export all environment variables
const config = {
  ENV_MODE: process.env.ENV_MODE || 'development',
  DYNAMODB_MODE: process.env.DYNAMODB_MODE || 'aws',
  KEY_ID: process.env.KEY_ID || 'keyId',
  SECRET_KEY: process.env.SECRET_KEY || 'secretKsey',
  DATABASE_URL: process.env.DATABASE_URL || 'http://localhost:5000',
};

export default config;
