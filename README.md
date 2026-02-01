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

- Built on SPA with React Router
- Fetch API data
- Structured components and pages according to React rules
- Using state to activate UI to the application
- Using props to send data through components

# PROJEKTUPPGIFT - EXAMINATION B

Projekt - Dog shelter

### Tekniska krav:

- Det ska finnas minst 3 routes - Home(our mission) , Our Dogs, Become a part, Contact

- Göra en header/navigation och footer som ska vara låsta på alla routes
- Donate-knapp i headern
- Interaktivitet med useState - Filter/Sök bland våra hundar OCH Lägg till i favoriter
- Hämta Data med fetch - API - Hämta info om olika hundraser
  https://dog.ceo/dog-api/documentation/
  https://www.thedogapi.com/en?utm_source=chatgpt.com - API nyckel: live_2NpJUtAQ3xue9gYSuTF2dWSqadr5ZspzuyWAK2D5Ocx8a9g9Z3BiuyQL4Zz5Pc7d

## Alla delar:

### Home

Namn: Salty Paws(logga)
Navigation bar - Home, Our Dogs, Become a Part - Donate-knapp
Our mission

### Our Dogs

- Lägg till ca 6 hundar med beskrivning
- Använda useParams för att byta info om hundarna - ex /ourdogs/:id

### Become a part

- Del 1 - Adoptera - Här finns API med info om hundraser som ska visas när man klickar på en hundras från en lista
- Del 2 - Voluntära
- Donate-knapp

* använd input och sen useState för att visa ett meddelande när man klickar på donera - tex ”Tack Malin för din donation på 100 kr”

### Footer

- Contact
- Adress
