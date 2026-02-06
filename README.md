# Salty Paws Dog Shelter

## Description

This webbaplication represents the Salty Paws dog shelter. It displays the following:

- Information about what we do and our mission.
- The dogs that is currently living in the shelter.
- How to be involved - either join our events and community, adopt one of our sweethearts or donate to make our mission come true.
- If adoption is in your intrests, we offer guidance and info about dog breeds so you can find the perfect fit for you.

## Installation

1. Clone the repository
   git clone https://github.com/saltyZebra/SaltyPaws-Dog-Shelter.git
2. Install dependencies
   npm install
3. Start development server
   npm run dev
4. Open in browser:
   http://localhost:5174/

## Requirements

✅ Built on SPA with React Router
✅ Fetch API data
✅ Structured components and pages according to React rules
✅ Using state to activate UI to the application
✅ Using props to send data through components

## Technical Reflection

### Folder & file structure

I divided my files in three folders - the Pages folder contains all pages of the application including a notFound-page, the Service folder contains a data file with pure javascript, code that does not need JSX rendering, and the Component folder holds all my components that are reusable and gets rendered in their connected page file.

### Routing setup

The routing with React Router is placed in App.jsx where I have routes to each pages that is places within a main layout route so that the header and footer are consistent on all pages except for the notFound page. My NavBar is using NavLink from react router to better navigate between the different pages on the website.

### Component division

I divided my components into their own category that has their own folder with a CSS file for that category, ex the Header folder holds both the HeaderLogo, Header, NavBar and the CSS for those files.
I have a component called BackToHomeButton that is being used in mutlible components and pages and is placed in a "Other" folder, I am aware that this can be placed in another folder than among the components for better structure.

### Props Solution

I am using props in my DogsList component that is receives the array of dogs from the OurDogs page where it is stored so that the component can map through the array and render it on the page. I'm also using props in my BecomeAParts components Adopt and SearchBar, the SearchBar file receives the data from Adopt that has imported it from the data file.

### State solution

I am using state in multiple components to handle different changes made by the user, in the BecomeAPart page the state handles the data fetch and also when the user is searching for a dog breed a list appears and updates in real time as the user types in the search bar. I also use state to handle the information from the user in the Donate page, to use some information to render it on the page.

### API choice

I chose the API from https://thedogapi.com/en because I found it the most informative API available about dog breed info. It contained a lot of interesting information and it had clear instructions of how to use it and how to get the API key. You could also try it before on their website to see what is displayed.
