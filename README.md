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

## Configure DynamoDB (Enviroments var, in file .env)

Run with custom DynamoDB
```bash
DYNAMODB_MODE="server"
KEY_ID="AKIAXR4MIYRFYRER3J6X"
SECRET_KEY="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"
```
Run whit DynamoDB local
```bash
DYNAMODB_MODE="local"
DATABASE_URL="http://localhost:8000"
```
Run in aws service (Authentication with "aws configure")
```bash
DYNAMODB_MODE="aws"
```

## Running the app as serverless

```bash
# compile app
$ npm run compile

# run serverless offline
$ serverless offline start
```


## Running the app

```bash
# install dependencies
$ serverless plugin install -n serverless-dynamodb-local 
$ serverless plugin install -n serverless-offline
$ serverless dynamodb install

# start dynamoDB in another terminal
$ serverless dynamodb start

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