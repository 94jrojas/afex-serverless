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

## Running the app as serverless

```bash
# compile app
$ npm run compile

# run serverless offline
$ serverless offline start
```

## Running the app (Requires run dynamoDB at http://localhost:8000)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```