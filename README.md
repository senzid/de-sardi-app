# Getting Started

This project is hosted in a public github repository and you can clone it. But is builded to work properly with @senzid/de-sardi-lib, and you will need permissions to install this library.

The projects will be totally opened during few days. If you are trying to install it and credentials failed message appears contact to @senzid to obtain a valid token.

You can see the project in this github page: [https://senzid.github.io/de-sardi-app/]

## Project Structure

This project is built with hexagonal architecture. It means that we have a features folder that contains all the logic (domain layer) and more folders that are structure to suport our bussines logic. The folder structure is as follows:

### app
For now only contains app.tsx file. But it's important to keep this folder if we wont to add redux or global context in the future, or if we need load any content before home page appears.

### assets
Images or ressources needed in build. Images not required in build are in public folder.

### features
**-ui-components:** Contains our components. In this folder we would create the components that we want to use. In this case we import the components directly from our custom library. We keep this files because if we want to change the library in the future, we would only have to make changes in this file and not in all the project. In fact we could put this folders outside, but it will only be consumed by some module (next section)
**-all modules:** This is the domain layer. **The most important part of our application** as it contains the bussines logic. For example, to manage the list of pokemons is bussines logic core. It doesn't matter which table or render method we use. If we want we could add Context in this folders easily.

### pages
Here are the page files, but they contain no logic. They are like the page files of NEXT and only renders components from features folder.

### services
Contains API generic functions. It's a adapter layer. If in the future we wont change the fetching data method to axios (or whatever), or we need to fetch data from GraphQL, for example, it will be easy to change.

### utils
It isn't a Pandora's box. At this moment only contains custom css files for generic styles and a feedback handler. Here can go a localstorage file for example, traductions, and generic functions used in all project.

## Legal Disclaimer
©Pokémon, ©Nintendo, Creatures Inc.™, GAME FREAK inc ™ and character names and images are trademarks of Nintendo