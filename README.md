# Vehicle Filter App

A React application that allows users to filter and view vehicle models based on their selected make and model year. The app fetches vehicle makes and models from the National Highway Traffic Safety Administration (NHTSA) API.

## Features

- **Filter Page**: 
  - Users can select a vehicle make from a dropdown populated with data fetched from the NHTSA API.
  - A model year selector allows users to choose from years ranging from 2015 to the current year.
  - A "Next" button navigates to the results page when a make and year are selected.

- **Results Page**:
  - Displays a list of vehicle models based on the selected make and year.
  - Handles errors in data fetching gracefully.

- **Responsive Design**: 
  - Built with Tailwind CSS for a modern, responsive UI.
  - Adapts well to different screen sizes.

- **Accessibility**: 
  - Follows best practices for accessibility, ensuring that all users can navigate and use the app effectively.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **NHTSA API**: Provides vehicle make and model data.
- **React Router**: For client-side routing between the filter and result pages.



## Getting Started

This section provides instructions on how to run and build the application.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): npm comes bundled with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/vehicle-filter-app.git
   cd vehicle-filter-app

2. **Install dependencies: Install the required dependencies for the project by running**:
    npm i

### Running the application

**To run the application in development mode, use the following command**:
    npm start  **or** npm run dev

This command will start the development server, and you can view the application in your web browser at http://localhost:3000.
The server will automatically reload if you make edits to the code.

### Building the Application
**To create a production-ready build of the application, execute**:

bash
npm run build
This command will bundle the application into static files for production in the build directory.
You can then serve the contents of this directory using any static file server.



