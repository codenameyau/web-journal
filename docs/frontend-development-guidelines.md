## Frontend Development Guidelines

## Typescript Guidelines
- Use type inference when possible. It makes code a lot cleaner and easier to read.
- Avoid using the *any* keyword.

# Javascript Guidelines
- Use Async / Await in favor of Promises. Promises are okay but should be used sparingly unless required. Avoid callback hell.
- Use the built-in browser fetch API over Axios or Bluebird unless performance is highly important.
- Prefer arrow functions unless you need a feature of function keyword such as `this` or prototypes, in which case you might want to use an class anyway.
- Prefer destructuring - if you are using keys from on object more than once, destructure them.
- Prefer const over let and avoid using let to make a variable and then reassign it - if you need to do something like this you can make a separate function that returns and single value assign as a const.
- Avoid single use variables.
- Use **React** for all general FE applications.
- Use **Next.js** for all server-side rendered applications.
- Use **Gatsby** for static pages that need fast page load and SEO optimization. 

## Styling and CSS
- Use **Material UI 5**.
- Use **emotion** or **styled components**.
- Do not write raw css, scss/less, inlines-css unless it's for a non-react application.

## State Management
- Use **Redux Toolkit** for state management. We don't use React Query.
- Prefer **Redux Thunk** over **Redux Sagas** (Dashboard is the only application that uses Sagas).

## Third Party Vendors
- Third-party trackers and analytics should be implemented via **Segment** if possible.
- If Segment is not available, then use **Google Tag Manager** (GTM) so we can deploy and change trackers without depending on a release.
- Use **Heap** for our FE event auto-capture, analytics, and visualization.
- Make sure that you get security sign-off before adding a new third-party vendor. Follow our Vendor Review Process.
- For open source libraries, we generally don't need a vendor review but please make sure that the library is popular and well maintained.

## Authentication
- Use **Auth0** as the auth provider with **OAuth2.0 JWT bearer tokens** to authenticate with our backend services.
- Do not store auth tokens in local storage or cookies. They should only be stored in memory.

## Build Tools
- Monorepo: Use Pants and Bazel.
- Non-monorepo: Use Webpack or Create React App.
- Aim to add your application into the monorepo when resources are available.

## Unit Testing
- Use react-testing-library in favor of enzyme.
- Use selectors that select based on a11y selectors or text selectors. See this [priority guideline](https://testing-library.com/docs/queries/about/#priority).

## Linters
- Use Prettier and ESLint with your code editor. The recommended editor to use is VSCode with the Prettier and ESLint Plugin.
- Use Husky pre-commit checks before pushing to CI. We use this to block typescript type compilation errors and linting errors.

## Logging and Stacktracing
- Use Sentry for error reporting and stack tracing.
