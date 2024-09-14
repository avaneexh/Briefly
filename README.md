# Briefly - News Portal Web App

## Project Overview

**Briefly** is a modern, responsive news portal web app built with React, Tailwind CSS, and Vite. It uses the GNews API to fetch the latest news based on various categories. The app features a smooth user experience with a simple, subtle, and modern design.

## Features

- Responsive design for phones, tablets, and desktops.
- Navbar with different news categories (General, Technology, Sports, Entertainment, Health).
- News displayed in grid layout with descriptions.
- Clicking a news box opens the full article.
- Built using Vite for fast development and optimized builds.
- GNews API integration for fetching live news.

## Technologies Used

- **React**: Frontend library
- **Vite**: Build tool for faster development
- **Tailwind CSS**: For modern, responsive styling
- **GNews API**: To fetch live news
- **React Router**: For routing
- **Axios**: For API requests

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NewsGrid.jsx
│   │   ├── NewsDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## Installation

To set up the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/briefly-news-portal.git
cd briefly-news-portal
```

### 2. Install dependencies

Make sure you have Node.js and npm (or yarn) installed. Then run:

```bash
npm install
```

### 3. Set up the GNews API key

Create a `.env` file in the root of the project, and add your GNews API key:

```bash
VITE_GNEWS_API_KEY=your_gnews_api_key
```

Replace `your_gnews_api_key` with your actual API key from the [GNews API](https://gnews.io/).

### 4. Run the app

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### 5. Build for production

To build the project for production, run:

```bash
npm run build
```








## Contact

If you have any questions, feel free to contact me at [avaneesh.gupta5@gmail.com].

---

Happy coding!
