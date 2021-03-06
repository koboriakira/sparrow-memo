# sparrow-memo

## Get Started

You must fill these params in `.env` file.

```
BASE_URL="http://localhost:3000"
FB_API_KEY="*****" // refer to Firebase SDK
FB_AUTH_DOMAIN="*****"
FB_DATABASE_URL="*****"
FB_PROJECTID="*****"
FB_STORAGE_BUCKET="*****"
FB_MESSAGING_SENDER_ID="*****"
FB_APP_ID="*****"
```

Create Docker image and container.

```
docker build -t nuxt-image .
docker run -it --name nuxt -p 80:80 -v $(pwd):/work nuxt-image sh
```

And you can see sample site in http://localhost when you run these commands in Docker's container.

```
cd app
yarn dev
```

You can deploy when you do `yarn run deploy` , after `firebase login --no-localhost` /

## Others

Here are options I selected when I did `yarn create nuxt-app app` .

```
? Project name app
? Project description My awesome Nuxt.js project
? Author name Kobori Akira
? Choose the package manager Yarn
? Choose UI framework Vuetify.js
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios, Progressive Web App (PWA) Support, DotEnv
? Choose linting tools ESLint
? Choose test framework Jest
? Choose rendering mode Single Page App
? Choose development tools jsconfig.json (Recommended for VS Code)
```
