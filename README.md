# JavaScript Automation Frameworks — WebdriverIO and Mocha

Browser end-to-end tests for the [Practice Software Testing](https://practicesoftwaretesting.com/) demo storefront. The suite uses WebdriverIO 10, Mocha, and Chai, with page objects to keep browser interactions reusable.

## Requirements

- Node.js 22 or newer
- npm
- Google Chrome installed locally
- Internet access to reach the demo storefront

## Getting started

Install the project dependencies:

```bash
npm ci
```

Run all WebdriverIO browser tests:

```bash
npm run wdio
```

Run one spec file:

```bash
npx wdio run ./wdio.conf.js --spec test/specs/login.e2e.js
```

WebdriverIO starts a local Chrome session using the configuration in `wdio.conf.js`. Test results are printed with the WebdriverIO spec reporter.

## Test coverage

The browser suite is in `test/specs/` and covers:

- Product search and product detail information
- Catalog sorting and category filtering
- Login and registration
- Adding a product to the cart
- Adding a product to favorites

The tests interact with the live demo site, so availability and site data can affect results. The registration spec uses a fixed test email; if that account has already been registered on the site, registration may need a different email.

## Project structure

```text
test/
  pageobjects/   Reusable page objects and storefront interactions
  specs/         WebdriverIO end-to-end test specs
wdio.conf.js     WebdriverIO, Chrome, and Mocha configuration
package.json     Dependencies and npm scripts
```

## Other npm scripts

| Command | Description |
| --- | --- |
| `npm test` | Runs the `test:junit` Mocha command and writes a JUnit XML report |
| `npm run test:junit` | Runs Mocha with the JUnit reporter |
| `npm run test:xunit` | Runs Mocha with the XUnit reporter |
| `npm run test:dev` | Starts Mocha using its default configuration |

Use `npm run wdio` for the browser end-to-end suite; it runs the WebdriverIO configuration and specs.
