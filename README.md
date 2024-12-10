## Getting Started

Hello! Welcome to my application. Here are the inital steps to get the app up and running locally:

First, install libraries and run intial build

```bash
yarn
yarn build
```

Second, replace the value of TODO_API_KEY in .env.local with the actual API key needed for the mock API.

Third, run the development server:

```bash
yarn dev
```

Technologies Used:
I used create-next-app with tailwind CSS for the base of the application, definitley not required for this small of an application, but mirrors common technologies used in a full production application. I also like the DX provided by NextJs and decided bringing in TailwindCSS for speed of development of this application, not necessarily my first choice (if any) for css extensions.
