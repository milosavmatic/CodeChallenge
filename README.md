# Rock Paper Scissors Spock Lizard Game 🎮

A modern implementation of the classic Rock Paper Scissors game with the extended Spock and Lizard rules, built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd CodeChallenge
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit .env file with your configuration
   # Add your API endpoints and other environment variables
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Core Framework

- **[React 19.1.0](https://react.dev/)** - UI library for building user interfaces
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7.0.0](https://vitejs.dev/)** - Fast build tool and development server

### Styling

- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[SCSS/Sass 1.89.2](https://sass-lang.com/)** - CSS preprocessor for enhanced styling
- **[PostCSS 8.5.6](https://postcss.org/)** - CSS processing tool
- **[Autoprefixer 10.4.21](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixing

### Code Quality & Linting

- **[ESLint 9.30.0](https://eslint.org/)** - JavaScript/TypeScript linting
- **[Prettier 3.6.2](https://prettier.io/)** - Code formatting
- **[@stylistic/eslint-plugin](https://eslint.style/)** - Stylistic linting rules
- **[eslint-plugin-perfectionist](https://perfectionist.dev/)** - Import sorting and organization

### Build & Development Tools

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - React integration for Vite
- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)** - SVG to React component conversion

## 📁 Project Structure

```
src/
├── components/           # React components organized by feature
│   ├── game/            # Game-specific components
│   │   ├── GameBoard.tsx
│   │   ├── GameComparison.tsx
│   │   ├── GameConnections.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameResults.tsx
│   │   ├── PlayingOverlay.tsx
│   │   ├── ResultMessage.tsx
│   │   ├── ScoreDisplay.tsx
│   │   └── TutorialMode.tsx
│   ├── tutorial/        # Tutorial-specific components
│   │   ├── TutorialChoiceGrid.tsx
│   │   ├── TutorialGameResult.tsx
│   │   ├── TutorialHeader.tsx
│   │   ├── TutorialNavigation.tsx
│   │   └── TutorialPlaySection.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── ConfirmModal.tsx
│   │   ├── ReloadButton.tsx
│   │   └── Toast.tsx
│   ├── layout/          # Layout and state components
│   │   ├── ErrorState.tsx
│   │   └── LoadingState.tsx
│   └── history/         # Game history components
│       ├── GameHistoryTable.tsx
│       └── HistoryButton.tsx
├── models/              # TypeScript type definitions
│   ├── game.ts          # Game-related types (Choice, GameResult)
│   ├── history.ts       # History-related types (GameHistory, GameStats)
│   └── tutorial.ts      # Tutorial-related types (TutorialStep, TutorialModeProps)
├── services/            # Business logic and external services
│   ├── api.ts           # External API service
│   ├── gameHistory.ts   # Game history management
│   ├── tutorialContentService.ts  # Tutorial content management
│   └── tutorialGameService.ts     # Tutorial game simulation
├── data/                # Static data and configuration
│   └── tutorial/        # Tutorial content
│       ├── index.ts     # Tutorial data exports
│       └── steps.ts     # Tutorial step definitions
├── utils/               # Utility functions
│   ├── gameUtils.ts     # Game-related utilities
│   └── historyUtils.ts  # History-related utilities
├── styles/              # SCSS stylesheets
│   ├── _app.scss
│   ├── _connections.scss
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── index.scss
├── assets/              # Static assets (images, icons)
│   ├── desktopBgd.png
│   ├── lizard.png
│   ├── mobileBgd.png
│   ├── paper.png
│   ├── refresh.svg
│   ├── reload.svg
│   ├── rock.png
│   ├── scissors.png
│   └── spock.png
└── config/              # Configuration files
    ├── appConfig.ts
    └── env.ts
```

## 🎨 Styling System

### Tailwind CSS Configuration

The project uses Tailwind CSS for utility-first styling with custom configuration:

- Custom background images for desktop and mobile
- Extended color palette
- Responsive design breakpoints

### SCSS Integration

SCSS files are organized in the `src/styles/` directory:

- **`_variables.scss`** - Color variables and design tokens
- **`_mixins.scss`** - Reusable SCSS mixins
- **`_base.scss`** - Base styles and resets
- Component-specific stylesheets for complex components

### Code Formatting

Prettier is configured for automatic code formatting:

- **`.prettierrc`** - Main configuration
- SCSS-specific settings with 120 character line width
- Auto-format on save in VS Code

## 🔧 Development Tools

### TypeScript Configuration

The project uses TypeScript project references for better organization:

- **`tsconfig.json`** - Root configuration with project references
- **`tsconfig.app.json`** - Application-specific TypeScript config
- **`tsconfig.node.json`** - Node.js/build tools configuration

### ESLint Configuration

Comprehensive linting setup with multiple plugins:

- **`eslint.config.js`** - Main ESLint configuration
- TypeScript-aware rules
- React and React Hooks linting
- Import sorting and organization
- Prettier integration

### VS Code Integration

Recommended extensions for optimal development experience:

- **Prettier** - Code formatting
- **ESLint** - Linting integration
- **Tailwind CSS IntelliSense** - CSS class autocomplete
- **TypeScript** - Enhanced language support
- **Error Lens** - Inline error display

See **`.vscode/extensions.json`** for the complete list of recommended extensions.

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Building
npm run build        # Build for production

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:scss  # Format only SCSS files

# Type Checking
npx tsc --build      # Type check with project references
```

## 🎮 Game Features

### Core Gameplay
- **Extended Rock Paper Scissors** with Spock and Lizard rules
- **Interactive Tutorial System** for first-time users with real game simulation
- **Score tracking** with persistent game history using localStorage
- **Real-time game results** with animated comparisons

### User Experience
- **Responsive design** optimized for desktop, tablet, and mobile devices
- **Mobile-first approach** with touch-friendly interfaces
- **Progressive enhancement** from 3-column mobile layout to 5-column desktop
- **Toast notifications** for user feedback and game events
- **Smooth animations** and transitions throughout the interface

### Data & History
- **Persistent game history** with detailed statistics
- **Game statistics dashboard** showing wins, losses, and ties
- **Exportable game data** with timestamp tracking
- **Local storage management** with data persistence across sessions

### Architecture Features
- **Component-based architecture** with single responsibility principle
- **Service-oriented design** separating business logic from UI components
- **Type-safe development** with comprehensive TypeScript interfaces
- **Modular tutorial system** with reusable components
- **Clean code organization** following modern React patterns

## 💾 Data Storage Strategy

### Why localStorage for Game History?

The project uses **browser localStorage** for persisting game history and statistics. This approach was chosen for several reasons:

#### **✅ Advantages of localStorage:**

- **No Backend Required** - Perfect for a client-side demo project
- **Instant Persistence** - Data is saved immediately without network calls
- **Offline Functionality** - Game history works without internet connection
- **Zero Configuration** - No database setup or API endpoints needed
- **Privacy-Friendly** - Data stays on the user's device
- **Fast Performance** - No network latency for data access

#### **🎯 Best Option for This Project Because:**

1. **Demo/Portfolio Project** - Showcases frontend skills without backend complexity
2. **Single User Experience** - No need for multi-user data sharing
3. **Quick Development** - Focus on React/TypeScript implementation
4. **Deployment Simplicity** - Static hosting without database requirements
5. **Cost Effective** - No server or database costs

#### **📊 What's Stored:**

```typescript
// Game history structure in localStorage
interface GameHistory {
  id: string
  timestamp: Date
  playerChoice: Choice
  computerChoice: Choice
  result: 'win' | 'lose' | 'tie'
  playerScore: number
  computerScore: number
}
```

#### **🔄 Alternative Approaches:**

For production applications, consider:

- **Backend Database** (PostgreSQL, MongoDB) for multi-user support
- **Cloud Storage** (Firebase, Supabase) for real-time sync
- **IndexedDB** for larger datasets and complex queries
- **Session Storage** for temporary data that doesn't persist between sessions

The localStorage approach perfectly suits this project's scope while demonstrating proper data management patterns.

## 🎓 Tutorial System

### Interactive Learning Experience
The game features a comprehensive tutorial system designed for first-time users:

- **Progressive step-by-step guidance** through game mechanics
- **Real game simulation** allowing users to practice during the tutorial
- **Personalized messaging** for first-time vs. returning users
- **Mobile-optimized tutorial flow** with responsive navigation

### Tutorial Architecture
- **Modular component design**: Separate components for header, navigation, game simulation, and results
- **Service-based content management**: Tutorial content extracted from components for maintainability
- **Type-safe tutorial steps**: Comprehensive TypeScript interfaces for tutorial data
- **Reusable tutorial components**: Components designed for potential reuse in other contexts

### Tutorial Components Structure
```typescript
// Main tutorial container
TutorialMode.tsx

// Specialized tutorial components
├── TutorialHeader.tsx        # Progress bar, titles, and instructions
├── TutorialNavigation.tsx    # Previous/Next/Skip navigation
├── TutorialPlaySection.tsx   # Interactive game practice area
├── TutorialChoiceGrid.tsx    # Responsive choice selection grid
└── TutorialGameResult.tsx    # Game result display with Try Again
```

### Content Management
- **Centralized tutorial data**: All tutorial steps defined in `data/tutorial/steps.ts`
- **Content service**: Dynamic message generation in `services/tutorialContentService.ts`
- **Separation of concerns**: Content logic separated from UI components for better maintainability

### Component Architecture
- **Feature-based organization**: Components grouped by functionality (game, tutorial, ui, layout, history)
- **Single Responsibility Principle**: Each component has a focused, well-defined purpose
- **Composition over inheritance**: Complex components built from smaller, reusable pieces
- **Props interface design**: Comprehensive TypeScript interfaces for type safety

### Service-Oriented Architecture
- **Business logic separation**: Game logic in services, not components
- **Content management**: Tutorial content and messages extracted to dedicated services
- **Data persistence**: Centralized history management through service layer
- **API abstraction**: External service calls isolated in service modules

### Type System Organization
- **Domain-driven types**: Models organized by business domain (game, tutorial, history)
- **Interface segregation**: Focused interfaces avoiding unnecessary dependencies
- **Type reusability**: Shared types across components and services
- **Strict typing**: Comprehensive TypeScript coverage with no any types

### Data Flow Patterns
- **Unidirectional data flow**: Clear parent-to-child prop passing
- **Service layer abstraction**: Components consume services, not direct APIs
- **State management**: Local component state with service-managed persistence
- **Event handling**: Clean separation of UI events and business logic

### Mobile-First Design System
- **Progressive enhancement**: Base mobile experience enhanced for larger screens
- **Responsive breakpoints**: Systematic approach to multi-device support
- **Touch-first interactions**: Optimized for mobile input methods
- **Performance optimization**: Efficient rendering and minimal reflows

The game features comprehensive mobile optimization with a mobile-first approach:

### Responsive Layout System
- **Adaptive grid layouts**: 3 columns on mobile, 5 columns on desktop
- **Flexible component sizing**: Touch-friendly buttons and interactive elements
- **Dynamic spacing**: Responsive margins and padding across breakpoints
- **Typography scaling**: Automatic text size adjustments for readability

### Mobile-Specific Features
- **Touch-friendly interfaces** with appropriate tap target sizes
- **Active state feedback** for better touch interaction
- **Optimized image sizes** for different screen densities
- **Viewport height handling** for mobile browsers with dynamic UI

### Tutorial System Mobile Optimization
- **Stacked navigation** on mobile devices
- **Full-width buttons** for easier interaction
- **Responsive tutorial grids** adapting to screen size
- **Mobile-first tutorial flow** with touch-optimized controls

### Performance Considerations
- **Optimized asset delivery** for mobile connections
- **Efficient rendering** with minimal reflows
- **Touch gesture optimization** for smooth interactions
- **Battery-conscious animations** with reduced motion options

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=your_api_url_here
VITE_APP_ENV=development

# Add other environment variables as needed
```

## 🤝 Contributing

1. **Install recommended VS Code extensions**
   VS Code will prompt you to install the recommended extensions from `.vscode/extensions.json`

2. **Follow the code style**
   - Use Prettier for formatting
   - Follow ESLint rules
   - Write TypeScript with strict typing

3. **Project organization & architecture**
   - Place components in appropriate folders (`game/`, `tutorial/`, `ui/`, `layout/`, `history/`)
   - Use TypeScript types from the `models/` directory organized by domain
   - Business logic belongs in `services/`, utility functions in `utils/`
   - Static data and configuration in `data/` directory
   - Follow service-oriented architecture with separated concerns

4. **Component development guidelines**
   - Keep components focused on single responsibilities
   - Extract long content strings to service files for better maintainability
   - Use proper TypeScript interfaces from `models/` directory
   - Implement mobile-first responsive design with Tailwind breakpoints
   - Write concise comments since detailed documentation is in README

## 📚 References & Documentation

- **[React Documentation](https://react.dev/)**
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**
- **[Vite Guide](https://vitejs.dev/guide/)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)**
- **[SCSS Documentation](https://sass-lang.com/documentation)**
- **[ESLint Configuration](https://eslint.org/docs/latest/use/configure/)**
- **[Prettier Configuration](https://prettier.io/docs/en/configuration.html)**

## 🐛 Troubleshooting

### TypeScript Errors

Use the correct command for project references:

```bash
npx tsc --build  # Not --noEmit
```

### Development Issues

If you encounter issues during development:

1. **Clear cache and reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Restart development server**:
   ```bash
   npm run dev
   ```

3. **Check VS Code extensions**: Install recommended extensions from `.vscode/extensions.json`

4. **Prettier formatting**: Ensure Prettier is set as default formatter for SCSS files

---

Built with ❤️ using modern web technologies
