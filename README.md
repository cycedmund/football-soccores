# Soccores

The Soccores app is a platform for accessing Premier League football updates such as live score updates, detailed standings, team icons, and player information. Soccores aims to provide a seamless experience to keep users informed and engaged with the latest Premier League Scores.

## Table of Contents

1. [Features](#features)
1. [Project Brief](#project-brief)
   - [MVP - Minimum Viable Product](#mvp---minimum-viable-product)
   - [Optional Goals](#optional-goals)
1. [Screenshot(s)](#screenshots)
1. [Technologies Used](#technologies-used)
1. [Getting Started](#getting-started)
   - [Soccores App](#soccores-app)
   - [Trello Board (Project Planning)](#trello-board-project-planning)
1. [Next Steps](#next-steps)
1. [Challenges Faced and Key Learnings](#challenges-faced-and-key-learnings)
1. [References](#references)
   - [APIs](#apis)
   - [Mini Libraries](#mini-libraries)
   - [Knowledge](#knowledge)

## Features

- Real-time scores from live Premier League matches.
- Access the most recent Premier League standings.
- Explore all the teams in the league, along with detailed player information.
- Add favorite teams to your list for quick access.
  - View past results and upcoming match schedules for your favorite team.
- Access individual match lineups and overall match statistics.
  - Dive deep into the details of each match, from match summary to player lineups.
- Filter and view results by specific dates.
  - Easily access and analyze both upcoming and past match results based on selected dates.

## Project Brief

### MVP - Minimum Viable Product

- Build a web application using create-react-app / vite or next.js.
- Use 3rd party API and Airtable
  - Calling an API and displaying the data for the user. You may use any API of your choosing.
  - You must use Airtable to store data.
- Use React framework to build your application with at least:
  - 5 components
  - 4 props
  - 2 useStates
  - 2 react router routes
  - 1 lifting state, which isused to implement CRUD on the client side
- Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, **it should have a consistent and polished user interface**.
- Be deployed online (Vercel).
- Have **full-CRUD single model operations** somewhere within the app's features. For example, you can have functionality that Creates & Updates & Delete by implementing the ability to CRUD favourites.

### Optional Goals

- Use more than 1 API
- Use more than 1 model with Airtable
- Have suitable validations and/or fetch loading states
- Use a React component library like Ant Design or Material UI
- Use a CSS Framework or a design system

## Screenshot(s)

![Screenshot of Soccores App](/screenshots/ScheduledPage.png)

## Technologies Used

- React with Vite
- Tailwind CSS
- Daisy UI
- Insomnia

## Getting Started

- [Soccores App](https://soccores.vercel.app/)
- [Wireframe Draft (Project Planning)](https://miro.com/app/board/uXjVMm6lVFE=/?share_link_id=778211192354)
- [Trello Board (Project Planning)](https://trello.com/invite/b/aijMVvGr/ATTI936ee6404ee21b6a0b914c63f754835e30A42DA9/football-livescore)

## Next Steps

Planned future enhancements for the Soccores app include:

- Actual real-time updates with backend.
  - Implement a backend solution for real-time updates instead of request updates through "refresh".
- Offer detailed statistics for individual matches and players, both during and after games.
- Access latest transfer news and pre-game updates for every team.
- Access standings and team information from multiple leagues.

## Challenges Faced and Key Learnings

- **Balancing Features and MVP**: Initially, I faced the challenge of dedicating too much time to perfecting UI layouts and item placement.

  - **Key Learnings**: Learnt the importance of prioritising core functionalities first before developing the UI layouts.

- **Styling with Tailwind CSS**: While using Tailwind CSS can be an effective way to style components, I find that it can make the HTML code look cluttered due to the extensive use of classnames. I find it challenging to read and navigate through the codes.
  - **Key Learnings**: Learnt about the limitations of Tailwind CSS.

## References

### APIs

- [API-Football](https://www.api-football.com/)
- [Useless Facts API](https://uselessfacts.jsph.pl/)

### Mini Libraries

- [React Icons](https://react-icons.github.io/react-icons/)
- [React Tailwindcss Datepicker](https://react-tailwindcss-datepicker.vercel.app/)
- [React Hot Toast](https://react-hot-toast.com/)

### Miscellaneous

- [Time and Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [Sorting](https://usefulangle.com/post/227/javascript-sort-array-of-objects)
- [Error Page](https://www.makeuseof.com/react-router-404-page-create/)
- [Managing Arrays](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
- [Create Objects from Key-Value pairs](https://www.tutorialspoint.com/javascript-how-to-create-an-object-from-key-value-pairs)
- [Group Items by Date](https://stackoverflow.com/questions/46802448/how-do-i-group-items-in-an-array-by-date)
- [Tailwind with Icons](https://dev.to/shubhamtiwari909/beautiful-buttons-with-tailwindcss-and-react-icons-3ego)
