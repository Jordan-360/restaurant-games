# Restaurant Games

A collection of quick, phone-friendly games for kids to play while waiting for food. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no internet connection required once loaded.

## Games

| Game             | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Tic Tac Toe**  | Classic two-player game on one device. Highlights the winning line and detects ties.      |
| **Hangman**      | Guess a kid-friendly word (animals, food, toys, and more) before the figure is drawn.     |
| **Memory Match** | Flip cards to find all 15 pairs of animal emoji, with a running count of pairs and moves. |

## Features

- **Mobile-first** — large tap targets and layouts sized for phone screens
- **Light and dark mode** — follows the device's color scheme automatically
- **Zero dependencies at runtime** — every game is a static page that works anywhere
- **Consistent design** — shared color palette, navigation, and per-game favicons

## Getting Started

### Play locally

Clone the repository and open `index.html` in any modern browser:

```bash
git clone https://github.com/Jordan-360/restaurant-games.git
cd restaurant-games
open index.html   # macOS — or double-click the file
```

Or serve it over a local web server (useful for testing on a phone on the same network):

```bash
npx serve .
```

### Deploy

The project is fully static, so it can be hosted on any static site service, such as GitHub Pages, Netlify, or Vercel, with no configuration.

## Project Structure

```
restaurant-games/
├── index.html          # Home page linking to every game
├── styles.css          # Home page styles
├── shared.css          # Styles shared across games (back button)
├── favicon.svg         # Home page icon
├── tic-tac-toe/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── favicon.svg
├── hangman/            # Same layout as tic-tac-toe/
└── memorymatch/        # Same layout as tic-tac-toe/
```

Each game is self-contained in its own folder with its own markup, styles, script, and icon.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (only needed for linting and formatting tools)

### Setup

```bash
npm install
```

This also installs the Git hooks via [Husky](https://typicode.github.io/husky/).

### Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run lint`   | Lint all JavaScript with ESLint |
| `npm run format` | Format all files with Prettier  |

### Code quality

- **ESLint** and **Prettier** keep code consistent.
- **lint-staged** automatically lints and formats staged files before each commit.
- **commitlint** enforces [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `style:`, and so on).

### Adding a new game

1. Create a new folder, for example `connect-four/`, with `index.html`, `styles.css`, `script.js`, and `favicon.svg`.
2. Link `../shared.css` and include the back button: `<a href="../index.html" class="back-button">Back to Games</a>`.
3. Define an `--accent` color in the game's `:root` styles (used by the back button).
4. Add a card for the game to the root `index.html`.

## Roadmap

- [x] Tic Tac Toe
- [x] Hangman
- [x] Memory Match
- [ ] Connect Four

## License

Licensed under the ISC License, as declared in `package.json`.
