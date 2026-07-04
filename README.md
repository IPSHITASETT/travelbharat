# 🗺️ TravelBharat – Explore India State by State

A full-featured React tourism web app for discovering India's incredible destinations.

## 🚀 Quick Start

```bash
# 1. Go into the project folder
cd travelbharat

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

App will open at **http://localhost:3000**

---

## 📁 Project Structure

```
travelbharat/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Footer.js / .css
│   │   ├── PlaceCard.js / .css
│   │   └── StateCard.js / .css
│   ├── pages/
│   │   ├── Home.js / .css        ← Landing page with hero
│   │   ├── States.js / .css      ← All states listing
│   │   ├── StatePage.js / .css   ← Individual state + filter
│   │   ├── PlaceDetail.js / .css ← Destination detail page
│   │   └── Search.js / .css      ← Search results
│   ├── data/
│   │   └── data.js               ← All tourism data
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
└── package.json
```

## 🌟 Features

- ✅ **8 States** with detailed info (Rajasthan, Kerala, Goa, UP, HP, TN, Maharashtra, West Bengal)
- ✅ **40+ Tourist Places** with full descriptions, ratings, best time, entry fees
- ✅ **6 Categories**: Heritage, Nature, Religious, Adventure, Beach, Wildlife
- ✅ **Search** by place name, city, state, or category
- ✅ **Filter** by category on state pages and search results
- ✅ **Responsive** – works on mobile, tablet, desktop
- ✅ **React Router** – full multi-page navigation
- ✅ Beautiful hero sections with parallax images

## 📦 Tech Stack

- React 18
- React Router DOM v6
- Google Fonts (Playfair Display + Inter)
- Unsplash images (free, no API key needed)
- Pure CSS (no Tailwind/Bootstrap dependency)

## ➕ Adding More Data

Edit `src/data/data.js`:

```js
// Add a new state
export const states = [
  ...existing,
  {
    id: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    tagline: "One State, Many Worlds",
    coverImage: "https://...",
    description: "...",
    bestTime: "October – March",
    language: "Kannada",
    placesCount: 5,
  }
];

// Add a place for that state
export const places = [
  ...existing,
  {
    id: "hampi",
    name: "Hampi",
    stateId: "karnataka",
    city: "Hampi",
    category: "Heritage",
    image: "https://...",
    description: "...",
    bestTime: "October – February",
    entryFee: "₹40",
    timings: "6 AM – 6 PM",
    location: "https://maps.google.com/?q=Hampi",
    nearbyAttractions: ["Virupaksha Temple", "..."],
    highlights: ["Vijayanagara Empire", "..."],
    rating: 4.8,
  }
];
```

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `/build` folder — deploy to Netlify, Vercel, or AWS S3.

---

Made with ❤️ for Incredible India 🇮🇳
