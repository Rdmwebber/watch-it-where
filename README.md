# 🍿 Watch It Where

A simple and clean React application that allows users to search for a movie or TV series and instantly find out which streaming services it's available on.

[Watch It Where Demo](https://www.youtube.com/watch?v=Gv4mDhJVfNo)

---

## 🚀 Core Features

- **Universal Search:** Find any movie or TV series by title.
- **Service Toggling:** Easily switch your search between movies and TV shows.
- **Streaming Availability:** Instantly see a list of services (like Netflix, Prime Video, Disney+, Apple TV+, and Crave) that host the title.
- **Clean UI:** A minimal, responsive interface built with modern React and CSS.

---

## 🛠️ Tech Stack

This project was built using:

- **Frontend:** React
- **State Management:** React Context API
- **API Calls:** Axios
- **Animations:** Framer Motion
- **Styling:** CSS Modules
- **Data:** [Streaming Availability API](https://rapidapi.com/streaming-availability/api/streaming-availability) from RapidAPI

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v16 or later)
- npm
- A [RapidAPI](https://rapidapi.com/) account to get an API key.

### Installation

1. **Clone the repo**
   git clone [https://github.com/Rdmwebber/watch-it-where.git](https://github.com/Rdmwebber/watch-it-where.git)
2. **Install NPM packages**
   npm install
3. **Add your API Key**
   - Get your API key from the [Streaming Availability API](https://rapidapi.com/streaming-availability/api/streaming-availability) page on RapidAPI.
   - Open the file `src/store/apiOptions.js`.
   - Replace the hardcoded key in the `headers` object with your own:
     'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
4. **Run the app**
   npm start

   The application will open at `http://localhost:3000`.
