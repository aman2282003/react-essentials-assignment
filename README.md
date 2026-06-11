# React Essentials Assignment 🚀

A comprehensive React learning project featuring two mini-applications demonstrating core React concepts.

## Project Overview

This assignment showcases practical implementation of React essentials through two interactive projects:

### **Part A: Portfolio Card Application** 👤
A personal profile card application demonstrating:
- **JSX & Component Structure** - Reusable components with proper separation of concerns
- **Props & Dynamic Content** - Rendering skill badges dynamically through props
- **Event Handling** - Interactive buttons for theme switching, photo cycling, and alerts
- **State Management** - Like counter using React hooks
- **Conditional Rendering** - UI elements that respond to user interactions
- **Styling** - Gradient backgrounds with dark/light mode support

**Features:**
- 🌙 Theme switching (Light/Dark mode)
- 🔄 Profile photo cycling through multiple images
- ❤️ Like counter with interactive feedback
- 🏷️ Dynamic skill badges
- 📧 Contact button with alerts

### **Part B: Movie Database Mini Application** 🎬
A search and filtering application demonstrating:
- **Search Input with State** - Real-time search functionality with input handling
- **Dynamic Filtering** - Movies filtered by title and genre
- **Conditional Rendering** - Different UI states (no input, no results, results found)
- **Favorite Toggle** - Add/remove movies from favorites list
- **Dynamic List Rendering** - Map through arrays to display multiple items
- **State Management** - Track search queries and favorites

**Features:**
- 🔍 Real-time search by movie title or genre
- 📊 Display of filtered results with result count
- ❤️ Toggle favorites with animated heart icon
- ⭐ Movie ratings and metadata display
- 📌 Dedicated favorites section
- 🎨 Responsive grid layout

## Project Structure

```
src/
├── components/
│   ├── PortfolioCard.jsx          # Part A - Main portfolio component
│   ├── ProfileImage.jsx           # Part A - Profile image with animation
│   ├── SkillBadge.jsx             # Part A - Reusable skill badge
│   ├── ThemeToggle.jsx            # Part A - Theme toggle button
│   ├── MovieDatabase.jsx          # Part B - Movie search & filter
│   └── MovieCard.jsx              # Part B - Individual movie card
├── styles/
│   ├── PortfolioCard.css          # Part A - Portfolio styles
│   ├── ProfileImage.css           # Part A - Image animation
│   ├── SkillBadge.css             # Part A - Badge styles
│   ├── ThemeToggle.css            # Part A - Toggle button styles
│   ├── MovieDatabase.css          # Part B - Database layout
│   └── MovieCard.css              # Part B - Movie card styles
├── App.jsx                         # Main app with project navigation
├── App.css                         # Navigation & app styles
└── main.jsx
```

## Installation

```bash
# Navigate to the project directory
cd /path/to/project

# Install dependencies
npm install

# Start the development server
npm run dev

# Open browser and navigate to http://localhost:5174/
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

## React Concepts Demonstrated

### **Hooks Used:**
- `useState` - Managing component state (search queries, favorites, theme, likes)
- Component re-rendering on state changes

### **Core Concepts:**
- ✅ JSX Syntax
- ✅ Component-Based Architecture
- ✅ Props Passing & Rendering
- ✅ Event Handling (onClick, onChange)
- ✅ Conditional Rendering (Ternary operators, Logical AND)
- ✅ Dynamic List Rendering (map() method)
- ✅ State Management (useState hook)
- ✅ CSS-in-JS and External Stylesheets
- ✅ Component Composition & Reusability
- ✅ Event Bubbling & Handler Management

## Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **JavaScript ES6+** - Modern JavaScript features

## Component Breakdown

### Part A Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `PortfolioCard` | Main profile container | None (manages own state) |
| `SkillBadge` | Reusable skill display | `skill: string` |
| `ProfileImage` | Profile photo with animation | `src: string, alt: string` |
| `ThemeToggle` | Theme switcher button | `isDarkMode: bool, onToggle: function` |

### Part B Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `MovieDatabase` | Main search & filter container | None (manages own state) |
| `MovieCard` | Individual movie display | `movie: object, isFavorite: bool, onToggleFavorite: function` |

## Key Features Explanation

### **Part A: Theme Switching**
```javascript
const [isDarkMode, setIsDarkMode] = useState(false);
const handleThemeToggle = () => setIsDarkMode(!isDarkMode);
```

### **Part B: Search & Filter**
```javascript
const filteredMovies = moviesData.filter((movie) =>
  movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### **Part B: Favorite Toggle**
```javascript
const toggleFavorite = (movieId) => {
  setFavorites((prev) =>
    prev.includes(movieId)
      ? prev.filter((id) => id !== movieId)
      : [...prev, movieId]
  );
};
```

## Deployment

This project is ready for deployment on multiple platforms. Choose one:

### **Option 1: Netlify** (Recommended)

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

**Live Demo:** [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/aman2282003/react-essentials-assignment)

### **Option 2: Vercel**

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Vite configuration
4. Click Deploy!

**Live Demo:** [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/aman2282003/react-essentials-assignment)

### **Option 3: GitHub Pages**

```bash
# Build the project
npm run build

# Deploy the dist folder to GitHub Pages
```

## Testing the Application

### **Part A Testing:**
1. Click 🌙 button to toggle between light and dark themes
2. Click 🔄 to cycle through different profile photos
3. Click ❤️ Like button to increment the counter
4. Verify skill badges are displayed
5. Test hover effects on all interactive elements

### **Part B Testing:**
1. Type in the search bar to filter movies by title or genre
2. Verify search results update in real-time
3. Click ❤️ on any movie card to add to favorites
4. Check the "Your Favorites" section updates
5. Click ✕ to clear the search
6. Verify "No results" message appears for non-matching queries

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Performance Optimizations

- CSS animations use `transform` and `opacity` for smooth performance
- Conditional rendering prevents unnecessary DOM updates
- Component composition allows for easy code splitting

## Future Enhancements

- Add movie API integration (OMDB, TMDB)
- Implement pagination for large datasets
- Add local storage for persistent favorites
- Create user authentication system
- Add movie reviews and ratings
- Implement sorting options
- Add image lazy loading

## Learning Resources

- [React Official Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

## License

This project is created for educational purposes as part of the Tutedude React Essentials assignment.

## Repository

**GitHub:** https://github.com/aman2282003/react-essentials-assignment

---

**Created:** June 2026  
**Assignment:** React Essentials (Module 2 - 6h 45m)  
**Status:** ✅ Complete
