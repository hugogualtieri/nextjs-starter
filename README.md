# NextJS Starter

I built this NextJS project to help everybody who wants to build a project with.

## How to use it

For basic version: `npx create-next-app@latest -e https://github.com/hugogualtieri/nextjs-starter`

You can also specify a branch: `npx create-next-app@latest -e https://github.com/hugogualtieri/nextjs-starter/tree/[branch]`

An example to start a project from a branch like 'firebase': `npx create-next-app@latest -e https://github.com/hugogualtieri/nextjs-starter/tree/firebase`

## Versions

### Basic

The basic version with some components usefull is available on master branch

### Firebase

The Firebase version has the basic features and a basic Firebase setup (Authentication) available on firebase branch.

To use the project, you have to create a project in firebase and a web application. Then, add a file `.env.local` at the root of the project and add your variables like that:

`NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID=`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=`

`NEXT_PUBLIC_FIREBASE_APP_ID=`

## Contributions

Don't hesitate to contact me to talk about the project and the features you would like to see in the next releases.
