# Marketing Association NZ: Digital News Home Page

## About the Project

A responsive home page prototype for Marketing Association New Zealand's new digital news site, built from the desktop and mobile wireframes in the project brief.

Features:

- Header with logo, menu links and a Login button
- Hamburger menu on mobile
- Hero section with headline, search bar and image
- Three story cards below the hero
- Layout that adapts to desktop, tablet and mobile

The search bar is a visual placeholder only. The brief says search functionality need not be implemented.

### Built With

- React
- Vite
- CSS Modules
- Google Fonts (Bricolage Grotesque, Source Sans 3)

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repo

```bash
   git clone https://github.com/Danleinadzmission/Mission-0---lvl-5-.git
```

2. Install NPM packages

```bash
   npm install
```

3. Start the dev server

```bash
   npm run dev
```

4. Open the local address shown in the terminal (usually http://localhost:5173)

## Usage

The page adapts to screen size using media queries:

- **Desktop:** full navigation, hero text beside the image, three cards in a row
- **Tablet (900px and under):** cards move to two columns
- **Mobile (720px and under):** hamburger menu, stacked search input and button, hero image hidden, cards in one column

Screenshots are in the submitted Word document.

## Roadmap

- [ ] Make the search bar work
- [ ] Add a footer
- [ ] Add article pages and routing
- [ ] Replace placeholder images and copy with real content

## Use of AI

I used Claude to help generate the first version of the components and CSS from the brief and wireframes. I set up the project, fixed the errors that came up, and adjusted some CCS styling eg. border padding/margins between stories .
