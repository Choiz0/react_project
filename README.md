# 📘 Book Finder 

## Overview

Book Finder is a dynamic web application built with React, leveraging the Google Books API to enable users to search for and view details about various books. The application demonstrates modern React practices, including the use of `react-query` for efficient data fetching and `react-router-dom` for routing.

## Live Demo

Check out the live demo of the application here: 
## ✨[Book Finder](https://jocular-cendol-cdddaa.netlify.app/)✨

## Features

-   **Google Books API Integration**: Implements the Google Books API to fetch book data based on user search terms. It handles API endpoints, API tokens, and crafting specific queries to fetch only the necessary data.
-   **Parent Component Setup**: Includes a search input and a button for initiating the search, along with a display area for book cards.
-   **Stateless Book Card Component**: A pure component that displays book data, including the cover image, title, author, publisher, and a link for more information.
-   **Styling**: Consistent and responsive design across various devices, maintaining a cohesive color scheme, font, and layout.
-   **Functionality**:
    -   Performs API calls to the Google Books API with loading, resolved, and error states.
    -   Accepts book search terms and displays results in the form of book cards.
    -   Handles edge cases such as random data input, slow API responses, API errors, empty strings, and zero results.
## API INTERGRATION


The application integrates with the Google Books API. The `fetchBooks` function in the `Landing` page component uses `axios` to make GET requests to the API endpoint, retrieving books based on the user's search term.

    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    
    const fetchBooks = async (searchTerm) => {   const response = await axios.get(`${url}${encodeURIComponent(searchTerm)}`);   return response.data.items || []; };

## React Hooks and Libraries

This project uses `@tanstack/react-query` for managing server state and fetching data. It also utilizes `react-router-dom` for navigation and URL management.


## Technologies Used

-   React.js
-   Axios for API requests
-   `@tanstack/react-query` for data fetching
-   `react-router-dom` for navigation and routing
-   CSS for styling

## Structure

-   **Components**: Reusable UI components like `BookList`, `SearchForm`, `Navbar`, etc.
-   **Pages**: `Landing`, `Book`, and `Error` pages for different views.
-   **Hooks**: Custom React hooks for managing state and side effects.
-   **API**: Integration with Google Books API.
-   **Styling**: CSS files for styling the application.