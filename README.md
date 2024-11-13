# Music Band Finder

This application helps users discover recently founded music bands in their area. The app automatically detects the user's location and displays bands that were founded in the last 10 years.

## Features

- 🎵 Search for bands by city
- 📍 Automatic location detection
- 🗓️ Shows bands founded in the last 10 years
- 📱 Fully responsive design
- 📄 Pagination (10 bands per page)
- 🏷️ Display band tags and information

## Live Demo

[Demo Link] (If deployed)


## Installation

1. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm start
```


## Technologies Used

- React.js
- Tailwind CSS
- MusicBrainz API
- GeoJS API

## API Integration

The application uses two main APIs:

1. **MusicBrainz API**
   - Used to fetch band information
   - Returns up to 50 bands per query
   - Filters bands founded in the last 10 years

2. **GeoJS API**
   - Used for IP-based geolocation
   - Fallback when browser geolocation is unavailable

## Features in Detail

### Location Detection
- Attempts to use browser geolocation
- Falls back to IP-based geolocation
- Allows manual city input

### Band Search
- Displays up to 50 bands per city
- Shows only bands founded in last 10 years
- Includes band details:
  - Name
  - Founded date
  - Location
  - Tags (up to 5 tags shown)

### Pagination
- 9 bands per page
- Previous/Next navigation
- Page numbers with ellipsis
- Current page indicator
- Smooth scroll to top on page change
