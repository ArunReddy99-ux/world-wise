# WorldWise 🌍

WorldWise is a modern, interactive web application that helps you keep track of your adventures around the world. Mark cities you’ve visited, add notes, and visualize your travels on a map. Built with React, Vite, React Router, and Leaflet, WorldWise is fast, responsive, and easy to use.

---

## 🚀 Features

- **City Tracking:** Add, view, and delete cities you’ve visited.
- **Map Integration:** Interactive map using React Leaflet to visualize your cities and select new locations.
- **Reverse Geocoding:** Automatically fetch city and country names from coordinates using [BigDataCloud Reverse Geocoding API](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api).
- **Notes & Dates:** Attach notes and travel dates to each city.
- **Country List:** See a summary of all countries you’ve visited, with flags.
- **Authentication (Fake):** Simple login/logout flow with protected routes.
- **Responsive UI:** Clean, modern design with CSS Modules.
- **Loading & Error States:** User-friendly spinners and error messages.
- **Context & useReducer:** Global state management for cities and authentication using React Context and useReducer, making state accessible throughout the app.
- **Lazy Loading (Code Splitting):** Major pages are loaded with React.lazy and Suspense, improving initial load time and performance by splitting the bundle.
- **Protected Routes:** Only authenticated users can access the main app features.
- **Custom Hooks:** Reusable hooks for geolocation, URL position, and more.

---

## 🛠️ Technologies Used

- **React 18**
- **Vite** (for fast development and build)
- **React Router v6** (nested routing, protected routes, lazy loading)
- **React Context & useReducer** (state management)
- **React Leaflet** (interactive maps)
- **CSS Modules** (scoped, modular styles)
- **json-server** (mock REST API for cities data)
- **BigDataCloud Reverse Geocoding API** (for city/country lookup from coordinates)
- **ESLint** (code quality)

---

## 📁 Project Structure

```
worldwise/
├── public/
│   └── ...assets
├── src/
│   ├── Components/
│   ├── Contexts/
│   ├── Hooks/
│   ├── pages/
│   ├── App.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/worldwise.git
   cd worldwise
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the mock API server:**
   ```bash
   npm run server
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🗺️ How It Works (App Process)

1. **Authentication:**
   - The app uses a fake authentication context. Only logged-in users can access the main features (protected routes).
2. **City Management:**
   - All city data is managed globally using a Context Provider (`CitiesProvider`) and `useReducer` for predictable state updates.
   - The context exposes functions to fetch, add, and delete cities, and keeps the UI in sync with the backend (json-server).
3. **Map & Geolocation:**
   - The map (React Leaflet) displays all cities as markers.
   - You can click anywhere on the map or use your current location (via a custom geolocation hook) to add a new city.
4. **Reverse Geocoding:**
   - When you select a location, the app calls the BigDataCloud API to get the city and country name from the coordinates.
   - The city name, country, and flag emoji are auto-filled in the add city form.
5. **Adding/Deleting Cities:**
   - When you add a city, it is posted to the mock API and immediately appears in the UI.
   - You can delete cities, which updates both the backend and the UI.
6. **Country List:**
   - The app summarizes all unique countries you’ve visited, showing their flags.
7. **Lazy Loading:**
   - Major pages (Homepage, Pricing, Product, AppLayout, Login, PageNotFound) are loaded with React.lazy and Suspense, splitting the bundle and improving performance.
8. **Error & Loading States:**
   - All async actions show spinners or error messages for a smooth user experience.

---

## 📦 Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run server` — Start the mock API server (json-server)

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [json-server](https://github.com/typicode/json-server)
- [BigDataCloud Reverse Geocoding API](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api)
- [OpenStreetMap](https://www.openstreetmap.org/)


