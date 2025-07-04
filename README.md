# Rock Paper Scissors Spock Lizard Game 🎮

A modern implementation of the classic Rock Paper Scissors game with the extended Spock and Lizard rules, built with React, TypeScript, and Vite.

## 🌐 Live Demo

**🎮 [Play the Game Live](https://code-challenge-dhcy.vercel.app/)**

The application is deployed on Vercel and available for immediate play and exploration.

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
CodeChallenge/
├── .env                      # Environment variables
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── README.md                # Project documentation
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML template
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript root configuration
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript Node.js configuration
├── vite.config.ts           # Vite build configuration
├── vitest.config.ts         # Vitest test configuration
├── .vscode/                 # VS Code workspace settings
│   ├── extensions.json      # Recommended extensions
│   └── settings.json        # Workspace settings
├── public/                  # Static public assets
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
└── src/                     # Source code
    ├── App.tsx              # Main application component
    ├── main.tsx             # Application entry point
    ├── vite-env.d.ts        # Vite environment type definitions
    ├── components/          # React components organized by feature
    │   ├── game/           # Game-specific components
    │   │   ├── __tests__/  # Game component tests
    │   │   ├── GameBoard.tsx
    │   │   ├── GameComparison.tsx
    │   │   ├── GameConnections.tsx
    │   │   ├── GameGrid.tsx
    │   │   ├── GameResults.tsx
    │   │   ├── PlayerDisplay.tsx
    │   │   ├── PlayerPlaceholder.tsx
    │   │   ├── PlayerResult.tsx
    │   │   ├── PlayingOverlay.tsx
    │   │   ├── ResultMessage.tsx
    │   │   ├── ScoreDisplay.tsx
    │   │   └── TutorialMode.tsx
    │   ├── tutorial/       # Tutorial-specific components
    │   │   ├── __tests__/  # Tutorial component tests
    │   │   ├── ChoiceDisplay.tsx        # Reusable choice display with image and label
    │   │   ├── GameComparison.tsx       # Player vs Computer comparison display
    │   │   ├── ResetButton.tsx          # Reusable reset/try again button
    │   │   ├── ResultMessage.tsx        # Game result message with dynamic styling
    │   │   ├── TutorialChoiceGrid.tsx
    │   │   ├── TutorialGameResult.tsx
    │   │   ├── TutorialHeader.tsx
    │   │   ├── TutorialNavigation.tsx
    │   │   └── TutorialPlaySection.tsx
    │   ├── ui/             # Reusable UI components
    │   │   ├── __tests__/  # UI component tests
    │   │   ├── ConfirmModal.tsx
    │   │   ├── ReloadButton.tsx
    │   │   └── Toast.tsx
    │   ├── layout/         # Layout and state components
    │   │   ├── ComparisonLayout.tsx
    │   │   ├── ErrorState.tsx
    │   │   └── LoadingState.tsx
    │   └── history/        # Game history components
    │       ├── GameHistoryList.tsx      # History table container with scrolling
    │       ├── GameHistoryRow.tsx       # Individual game history table row
    │       ├── GameHistoryTable.tsx     # Main history modal orchestrator
    │       ├── GameStatsGrid.tsx        # Statistics display grid component
    │       ├── HistoryButton.tsx
    │       ├── HistoryModalFooter.tsx   # Modal footer with action buttons
    │       └── HistoryModalHeader.tsx   # Modal header with title and stats
    ├── models/             # TypeScript type definitions
    │   ├── game.ts         # Game-related types (Choice, GameResult)
    │   ├── history.ts      # History-related types (GameHistory, GameStats)
    │   └── tutorial.ts     # Tutorial-related types (TutorialStep, TutorialModeProps)
    ├── services/           # Business logic and external services
    │   ├── __tests__/      # Service layer tests
    │   ├── api.ts          # External API service
    │   ├── gameHistory.ts  # Game history management
    │   ├── tutorialContentService.ts  # Tutorial content management
    │   └── tutorialGameService.ts     # Tutorial game simulation
    ├── data/               # Static data and configuration
    │   └── tutorial/       # Tutorial content
    │       ├── index.ts    # Tutorial data exports
    │       └── steps.ts    # Tutorial step definitions
    ├── utils/              # Utility functions
    │   ├── __tests__/      # Utility function tests
    │   ├── bodyScrollLock.ts # Body scroll management for modal overlays
    │   ├── gameConnections.ts # Game connection utilities
    │   ├── gameUtils.ts    # Game-related utilities
    │   ├── historyUtils.ts # History display utilities for formatting and styling
    │   ├── resultUtils.ts  # Game result styling and messaging utilities
    │   └── toastUtils.ts   # Toast styling and icon utilities
    ├── test/               # Testing utilities and configuration
    │   ├── setup.ts        # Global test configuration
    │   └── utils.ts        # Test utilities and mock data
    ├── styles/             # SCSS stylesheets
    │   ├── _app.scss
    │   ├── _connections.scss
    │   ├── _mixins.scss
    │   ├── _variables.scss
    │   └── index.scss
    ├── assets/             # Static assets (images, icons)
    │   ├── icons/          # SVG icons
    │   │   ├── refresh.svg
    │   │   ├── reload.svg
    │   │   └── warning.svg 
    │   ├── desktopBgd.png  # Desktop background image
    │   ├── lizard.png      # Lizard choice image
    │   ├── mobileBgd.png   # Mobile background image
    │   ├── paper.png       # Paper choice image
    │   ├── rock.png        # Rock choice image
    │   ├── scissors.png    # Scissors choice image
    │   └── spock.png       # Spock choice image
    └── config/             # Configuration files
        └── appConfig.ts    # Application configuration
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
npm run build        # Build for production (runs tests first)
npm run build:no-tests # Build for production without running tests
npm run build:coverage # Build for production with test coverage

# Testing
npm test             # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Run tests with UI interface
npm run test:coverage # Run tests with coverage report

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:scss  # Format only SCSS files

# Type Checking
npx tsc --build      # Type check with project references
```

### Build Process Quality Gates

The default build command includes automated quality checks:

- **`npm run build`** - Runs the complete test suite before building to ensure code quality
- **TypeScript compilation** - Type checking prevents runtime errors
- **Test validation** - Unit tests must pass before deployment
- **Production optimization** - Vite optimizes bundle size and performance

This approach ensures that only tested, type-safe code reaches production environments.

## 🎮 Game Features

### Core Gameplay
- **Extended Rock Paper Scissors** with Spock and Lizard rules
- **Interactive Tutorial System** for first-time users with real game simulation
- **Score tracking** with persistent game history using localStorage
- **Real-time game results** with animated comparisons

### API Integration
- **Task-compliant endpoints** - Uses `/play` and `/choices` API endpoints as specified in the assignment
- **Dual implementation approach** - Main game integrates with provided API for authentic gameplay
- **Custom game logic implementation** - Tutorial mode showcases self-written game mechanics and rules engine to demonstrate deep understanding of Rock Paper Scissors Spock Lizard algorithms
- **Seamless user experience** - Both API-driven and tutorial modes provide identical gameplay feel

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

## 🧪 Testing Strategy

### Testing Architecture
The project follows a comprehensive testing strategy that aligns with our clean architecture:

- **Service Layer Tests**: Business logic and game mechanics testing
- **Utility Function Tests**: Pure function testing with predictable inputs/outputs
- **Component Tests**: UI component behavior and rendering
- **Integration Tests**: End-to-end component interactions and service integration

### Testing Framework
- **[Vitest 3.2.4](https://vitest.dev/)** - Fast unit test runner with Vite integration
- **[React Testing Library](https://testing-library.com/react)** - Component testing utilities
- **[Jest DOM](https://github.com/testing-library/jest-dom)** - Custom Jest matchers for DOM assertions
- **[User Event](https://testing-library.com/docs/user-events/intro)** - User interaction simulation

### Test Organization
```
src/
├── test/
│   ├── setup.ts         # Global test configuration
│   └── utils.ts         # Test utilities and mock data
├── services/__tests__/  # Service layer tests
├── utils/__tests__/     # Utility function tests
└── components/
    ├── ui/__tests__/      # UI component tests
    ├── game/__tests__/    # Game component tests
    └── tutorial/__tests__/ # Tutorial component tests
```

### Test Coverage
- **Services**: Game simulation logic, content management, data persistence
- **Components**: Rendering, user interactions, prop handling, accessibility
- **Utils**: Image path resolution, game utility functions
- **Integration**: Component composition and service interaction

### Running Tests
```bash
# Development testing
npm test                 # Watch mode for development
npm run test:ui         # Visual test interface

# CI/Production testing
npm run test:run        # Single run for CI
npm run test:coverage   # Coverage reports
```

### Test Best Practices
- **Mock external dependencies**: SVG imports, localStorage, services
- **Test behavior, not implementation**: Focus on user-facing functionality
- **Service layer isolation**: Test business logic independently from UI
- **Accessibility testing**: Ensure components work with screen readers
- **Integration testing**: Verify component and service collaboration

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

## �️ Component Architecture

### Component Extraction & Composition
The project follows a modular component architecture with extracted, reusable components:

#### **Tutorial Components (Extracted from TutorialGameResult)**
- **`ChoiceDisplay.tsx`** - Reusable choice display with image and label
- **`GameComparison.tsx`** - Player vs Computer comparison display  
- **`ResetButton.tsx`** - Reusable reset/try again button
- **`ResultMessage.tsx`** - Game result message with dynamic styling
- **`TutorialChoiceGrid.tsx`** - Responsive choice selection grid for tutorial
- **`TutorialGameResult.tsx`** - Game result display with Try Again functionality
- **`TutorialHeader.tsx`** - Progress bar, titles, and instructions
- **`TutorialNavigation.tsx`** - Previous/Next/Skip navigation controls
- **`TutorialPlaySection.tsx`** - Interactive game practice area

#### **Game Components (Core Game & Display)**
- **`GameBoard.tsx`** - Main game board orchestrator component
- **`GameGrid.tsx`** - Game choice grid layout component
- **`GameResults.tsx`** - Game results display and management
- **`GameConnections.tsx`** - Visual connections between game choices
- **`GameComparison.tsx`** - Game comparison logic and display
- **`PlayerDisplay.tsx`** - Individual player choice display component
- **`PlayerPlaceholder.tsx`** - Placeholder component for empty player slots
- **`PlayerResult.tsx`** - Player result display with win/lose styling
- **`ResultMessage.tsx`** - Game result message component
- **`ScoreDisplay.tsx`** - Score tracking and display component
- **`PlayingOverlay.tsx`** - Loading overlay during game play
- **`TutorialMode.tsx`** - Tutorial mode container component

#### **Layout Components**
- **`ComparisonLayout.tsx`** - Layout component for game comparisons
- **`ErrorState.tsx`** - Error state display component
- **`LoadingState.tsx`** - Loading state display component

#### **History Components (Extracted from GameHistoryTable)**
- **`GameHistoryTable.tsx`** - Main history modal orchestrator using composition
- **`HistoryModalHeader.tsx`** - Modal header with title and statistics
- **`HistoryModalFooter.tsx`** - Modal footer with action buttons
- **`GameHistoryList.tsx`** - History table container with scrolling
- **`GameHistoryRow.tsx`** - Individual game history table row
- **`GameStatsGrid.tsx`** - Reusable statistics display grid

### Utility Functions Organization
The project extracts utility functions to separate modules for better reusability:

- **`gameUtils.ts`** - Core game-related utilities and helper functions
- **`gameConnections.ts`** - Game connection utilities for visual connections between choices
- **`resultUtils.ts`** - Game result styling and messaging utilities
- **`toastUtils.ts`** - Toast styling and icon utilities  
- **`historyUtils.ts`** - History display formatting and styling utilities
- **`bodyScrollLock.ts`** - Body scroll management for modal overlays

### Design Principles
- **Single Responsibility**: Each component has one focused purpose
- **Composition over Inheritance**: Complex components built from smaller pieces
- **Extract and Reuse**: Common functionality extracted to utility functions
- **Type Safety**: Comprehensive TypeScript interfaces for all components
- **Clean Separation**: UI components consume utility functions, not inline logic

## �🎓 Tutorial System

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

// Extracted reusable components (shared between tutorial and game)
├── ChoiceDisplay.tsx         # Reusable choice display with image and label
├── GameComparison.tsx        # Player vs Computer comparison display
├── ResetButton.tsx           # Reusable reset/try again button
└── ResultMessage.tsx         # Game result message with dynamic styling
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
VITE_API_BASE_URL=https://your-api-url.com
VITE_APP_NAME=Your App Name

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
