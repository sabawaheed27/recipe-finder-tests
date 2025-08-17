 Recipe Finder - Next.js + TypeScript + Jest

A simple Recipe Finder application built with **Next.js**, **Tailwind**,  **TypeScript**, and **Jest** for unit and integration testing.  
This project is designed for practicing testing.  
The application allows users to search for recipes, view recipe details, and add/remove recipes from favorites.



 Project Structure

recipe-finder/
│── __tests__/           # Unit & integration tests
│── app/                 # App Router pages & components
│── components/          # Reusable components
│── public/              # Static assets
│── package.json
│── jest.config.js
│── tsconfig.json
│── README.txt           # This file


 Test Coverage
- Unit Tests:
            - Header
            - SearchBar
            - RecipeCard
            - RecipeList
            - RecipeDetails
-Integration Tests :
            - Adding/removing favorites
            - Searching recipes
            - Viewing recipe details

This repository contains only test files — it will not run on its own.
These tests are for the full Recipe Finder project.
You must have the original project locally to run them.


Installation & Setup

Create the project:
        npx create-next-app@latest recipe-finder
            .TypeScript → Yes
            .ESLint → Yes
            .Tailwind → Yes
            .src directory →  Yes
            .App Router → Yes
            .Import alias → default is fine


Install Jest + Testing Library
 Navigate into project:
   cd recipe-finder
   npm install -D  jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest @types/jest


Create Jest config
        const nextJest = require('next/jest');
            const createJestConfig = nextJest({
            dir: './',
            });

            const customJestConfig = {
            setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
            testEnvironment: 'jest-environment-jsdom',
            };

            module.exports = createJestConfig(customJestConfig);

Create Jest Setup
        import '@testing-library/jest-dom';

Run the Dev Server
        npm run dev



Install dependencies for testing:
                - next, react, react-dom (core framework)
                - typescript, @types/react, @types/node (TypeScript support)
                - jest, ts-jest, jest-environment-jsdom (testing)
                - @testing-library/react, @testing-library/jest-dom, @testing-library/user-event






Recipe-finder-full-code:   git@github.com:sabawaheed27/recipe-finder.git


   
   
   
   
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest jest-environment-jsdom

 Create Jest config:
   npx ts-jest config:init

In `jest.config.js`, update:
   testEnvironment: 'jsdom',
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']

 Create `jest.setup.ts` in root:
   import '@testing-library/jest-dom';

 Create `__tests__` folder for tests:
   mkdir __tests__


Commands for terminal

    - Run dev server:
        npm run dev

    - Run all tests:
        npm test

    - Run tests in watch mode:
        npm run test:watch






 How to Run the Tests:
 Clone the original project 

 git@github.com:sabawaheed27/recipe-finder.git
 
 git clone 
 Install dependencies:
 - npm Install

These tests include both unit tests (component-level) and integration tests (flow-based).

Unit tests cover:
    Rendering elements (getByRole, getAllByText, queryByText, etc.)
    Event handling (click, change, keydown)
    Props rendering and optional UI states
    Integration tests simulate:
    Adding/removing favorites
    Searching for recipes
    Viewing recipe details
    The tests use:
    React Testing Library
    Jest
    TypeScript