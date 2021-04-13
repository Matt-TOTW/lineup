# Line Up code challenge | Matthew Cox

A React and Typescript app to retrieve paged api data

## Install and run

```bash
npm install
npm run start
```

The app should then be accessible at localhost:3000

## Test

```bash
npm run test
```

## Notes

#### Code design

The code uses React and Typescript with Redux and Styled Components.
I am quite new to typescript so the challenge for me was mostly in leveraging that, particularly in conjunction with Redux. I wasn't sure where I should define my types. For types that are reused often, I placed them (actually there's only one) in a file at src/types/types.tsx. For others, I defined them in the relevant file.

Because it's quite a simple app, the use of Redux is probably overkill so I've implemented it in a way that is probably over-engineered, but I wanted to demonstrate a working knowledge of it.

I am completely new to Styled Components so I was excited to have a good excuse to use them. I'm not sure I've utilised in the best possible way but I have found them quite neat and tidy. It's nice that they avoid conditional class names by accepting props and I particulary like the ThemeProvider, which I have utilised.

#### UI Design

I have kept the look of the app very simple. It's a simple app and I didn't want to overdo it. Whilst I think I have a good, or at least experienced eye for design, it is not my forte and I didn't want to clutter the code with too much extraneous code. Much of the look of the app is defined in the two theme files in src/theme (one for dark mode and one for light mode).

#### Testing

I have only brought in one test which I hope demonstrates an understanind of Jest and Enzyme together with async calls like the api calls. Becuase these api calls depend on url params, I chose to use MemoryRouter to test the routes, rather than the stand alone components.

The combination of jest and typescript required babel, which is a dev dependency. I used create-react-app to initialise the app and this uses React 17 by default. In retrospect I possibly should've downgraded React as enzyme needed a new, unofficial adapter, so I have had to use that, although I think this would be a temporary solution until enzyme specifies an official one.
