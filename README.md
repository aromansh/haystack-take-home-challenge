# Photosearch

*Author: Alejandro Román \<alejandro@aroman.sh\>*

This is a React app for the Haystack's Take Home Assignment.

## Requirements

* Node v18
* npm v8

## Getting started

Run the following commands:

```bash
npm install
npm run dev # Development build with `React.StrictMode` turned on
```

After some milliseconds, you will find the app ready at
[http://localhost:5137](http://localhost:5137). The API Key needed is already
hardcoded into the project. See the section `About security concerns` below.

## Tech stack

* Vite - For bootstrapping the project. It provides a very fast hot reload.
* React
* Redux - For managing state. Because the image list can be modified from the
  search form, from the `App` component (when the app first renders for filling the initial values) and from the `Tag`s, I decided to use a
  state management library to avoid prop drilling.
* Prettier, ESLint
* CSS3 - I didn't  use any CSS library

## About reusability and testability

I tried to make components of elements that I think can be used later in other
parts (e.g. `Button`, `TextInput`, `Input`) and move the logic to their parents
(e.g. `SearchForm`, `ImageList`).

Regarding testability, there isn't much logic in this app. However, the one that
exists, I tried extracting it from the rendering logic and placing it in the
Redux actions (`src/store/actions.ts`) and in utils file
(e.g. `src/utils/searchImagesByTag.ts`). That way, that logic can be imported
indepently in test files and get tested on their own.

## About security concerns

This project comes with my Flickr API key hardcoded inside the file
`./src/api/ImageService.ts`. This is only for simplicity and time constraints.
**The API key shouldn't be shipped with the frontend app, as it could be
retrieved and abused by a user.**

A better approach, suitable for production use, would use a proxy backend that
hides the API key and exposes some endpoints for interacting with Flickr. That
way, the frontend client can still query Flickr, through the backend server,
without using an API key.

Note: That API key will be disabled on May, 20th (Saturday).

## Future work

Not in the requirements, but here is a list of new features that I would love to
implement in this project:

1. Cancel current Flickr API requests if a new search was made while the current is
   still waiting
2. Add pagination and infite scrolling (currently it only fetches first page
   from the Flickr API)
3. Add "Loading" scrolls while waiting for Flickr API or image requests.
4. Search a tag if accessing the website through an URL (e.g. writting in the
   browser `localhost:5137/tags/peru` should load the app with the tag `peru`
   already searched). Currently the app only supports starting from the root URL
   (`localhost:5137`) and start searching tags from there.

## Compability

This project was tested mainly with Firefox v113.0.1. If you find any weird
behaviour, please attempt running the app in Firefox.

Also, the source code was written in Linux. If you read it in Windows, you may
find different line ending characters.
