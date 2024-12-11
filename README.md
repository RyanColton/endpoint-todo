## Getting Started

Hello! Welcome to my application. Here are the inital steps to get the app up and running locally:

First, clone repository and install libraries

```bash
yarn
```

Second, replace the value of TODO_API_KEY and NEXT_PUBLIC_TODO_API_KEY in .env with the actual API key needed for the mock API.


Third, build the app and run the application:

```bash
yarn build
yarn start
```

Some basic tests were added as well, which can be seen by running:
```bash
yarn test
```

Technologies Used:
I used create-next-app with tailwind CSS for the base of the application, definitley not required for this small of an application, but mirrors common technologies used in a full production application. I also like the DX provided by NextJs and decided bringing in TailwindCSS for speed of development of this application, not necessarily my first choice (if any) for css extensions.
Jest and React Testing library were added and very basic tests were added, much more could have been done in this area to improve coverage. Better testing leveraging more features of Testing Library would be ideal over more snapshot tests. 
