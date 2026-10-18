# Workflow repo for the CA

Application used for testing JavaScript workflow. This project focuses on code quality, unit testing and End-to-End testing using ESLint, Prettier, Husky, Vitest and Playwright.

## Features

- Browse a list of available venues.
- View individual venue details.
- User authentication with login and error handling.
- Unit testing of JavaScript utility functions using Vitest.
- End-to-end testing of login and navigation using Playwright.
- Automated code formatting and linting through Git pre-commit hooks.

## Prerequisites

- Node.js
- npm
- Git

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Running the project

Start the development server:

```bash
npm run dev
```

### Running tests

Run unit tests with Vitest:

```bash
npm run test:unit
```

Run end-to-end tests with Playwright:

```bash
npx playwright install
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root directory:

```env
TEST_USER_EMAIL=your-test-email@example.com
TEST_USER_PASSWORD=your-test-password
```

`.env.example` is included as a template.

The `.env` file is already included in `.gitignore` to prevent it being committed to GitHub.

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run start` – Start the local development server on live server on port 5500.
- `npm run test:unit` – Run Vitest unit tests.
- `npm run test:e2e` – Run Playwright end-to-end tests.
- `npm run prepare` - Set up Husky Git hooks.

## Testing

### Unit Testing – Vitest

**isActivePath()**
- Returns true when the current path matches the provided href.
- Recognizes `/` and `/index.html` as root paths.
- Returns true when the current path includes the href.
- Returns false when paths do not match.

**getUsername()**
- Returns the username from a user object saved in localStorage.
- Returns null when no user exists in storage.

### End-to-End Testing – Playwright

**Login tests**
- Successfully logs in using valid credentials stored in environment variables.
- Displays an error message when an incorrect password is entered.

**Navigation tests**
- Navigates to the homepage.
- Waits for the venue list to load.
- Clicks the first available venue.
- Verifies that the venue details page opens and displays the heading "Venue details".

## Code Quality and Git Hooks

**ESLint** is used to identify errors in JavaScript and enforce code quality rules.

**Prettier** is used to maintain consistent formatting across the project.

**Husky and lint-staged** run checks automatically before each commit:

- HTML files are formatted using Prettier.
- JavaScript files are checked using ESLint and formatted using Prettier.
- Commits are blocked if required checks fail.

## Technologies

- JavaScript
- HTML
- CSS
- Node.js
- npm
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright
- Git and GitHub

## Author

Celia Dyremyhr