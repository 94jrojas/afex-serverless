<p align="center">
  <a href="https://www.afex.cl/" target="blank"><img src="https://www.afex.cl/wp-content/themes/afex/img/logo-afex.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This app is for AFEX company.

## Requirements

- [NodeJs](https://nodejs.org/) v18.

## Getting started

```bash
# install global serverless
$ npm install -g serverless

# install global nestjs-cli
$ npm i -g @nestjs/cli
```

## Installation app

```bash
$ npm install
```

## Configure DynamoDB (Enviroments var, in .env file)

Run with custom DynamoDB
```bash
# Environments vars
DYNAMODB_MODE="server"
KEY_ID="aws key id"
SECRET_KEY="aws secret key"
```
Run whit DynamoDB local
```bash
# Environments vars
DYNAMODB_MODE="local"
DATABASE_URL="http://localhost:8000"

# install dependencies
$ serverless plugin install -n serverless-dynamodb-local 
$ serverless dynamodb install

# start dynamoDB in another terminal
$ serverless dynamodb start
```
Run in aws service (Authentication with "aws configure")
```bash
# Environments vars
DYNAMODB_MODE="aws"
```

## Running the app as serverless

```bash
# install dependencies
$ serverless plugin install -n serverless-offline
# compile app
$ npm run compile

# run serverless offline
$ serverless offline start
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
To run tests you need to configure DynamoDB (custom or local)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy

```bash
# build project
$ npm run build

# deploy in AWS lambda serverless
$ npm serverless deploy
```