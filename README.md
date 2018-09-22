# Vourcher

> A carousel microservice modeled after Groupon's product pages.

## Table of Contents

1. [Usage](#Usage)
1. [Prerequisites](#prerequisites)
1. [Installing Dependencies](#installing-dependencies)
1. [Development](#development)
1. [Usage](#usage)

## Related Projects

- https://github.com/TenderloinCodeDealers/side-bar
- https://github.com/TenderloinCodeDealers/ratings-reviews
- https://github.com/TenderloinCodeDealers/recently-viewed-deals
- https://github.com/TenderloinCodeDealers/chii-proxy

### Prerequisites

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.
[Mongodb](https://www.mongodb.com/) is used as the database for this module.
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Development

```
npm start
```
Seed the database with mock data
```
npm run seed
```

## Usage

To start the server run
```
npm start
```
To see Vourcher Proxy Server in action, in a browser visit:
```
http://localhost:3000/<NUMBER_FROM_1_TO_100>
```

## Authors

* **Chii-Jones Law** - *Initial work* - [chiijlaw](https://github.com/chiijlaw)

See also the list of [contributors](https://github.com/TenderloinCodeDealers) who participated in this project.

## License

This project is licensed under the MIT License
