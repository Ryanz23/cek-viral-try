# Frontend Folder Structure Guide

## Directory Structure

src/
├── components/ # Reusable UI components
│ ├── common/ # Generic components (Button, Modal, etc.)
│ └── forms/ # Form-specific components
├── pages/ # Route components/page components
├── features/ # Feature-based modules
│ └── auth/
│ ├── components/
│ ├── services/
│ └── types/
├── hooks/ # Custom React hooks
├── services/ # API calls and external services
├── utils/ # Pure utility functions
├── types/ # TypeScript type definitions
├── constants/ # App constants
├── assets/ # Static files (images, fonts, etc.)
└── styles/ # Global styles and themes

## Folder Functions Explained

### 📁 components/

**Purpose**: Store reusable UI components that can be used across multiple pages  
**What goes here**:

- Button, Input, Modal, Card components
- Navigation bars, Headers, Footers
- Data display components (Table, List)  
  **Example**: `Button.tsx`, `Modal.tsx`, `Navbar.tsx`

### 📁 pages/

**Purpose**: Components that represent entire pages/routes in your application  
**What goes here**:

- Home page, About page, Contact page
- Dashboard, Profile, Settings pages
- Each file maps to a route  
  **Example**: `HomePage.tsx`, `LoginPage.tsx`, `DashboardPage.tsx`

### 📁 features/

**Purpose**: Group related functionality by business feature  
**What goes here**:

- Feature-specific components, services, and types
- Authentication, User management, Product catalog  
  **Structure**: Each feature has its own subfolder with components/, services/, types/  
  **Example**: `auth/`, `user-profile/`, `viral-check/`

### 📁 hooks/

**Purpose**: Custom React hooks for reusable stateful logic  
**What goes here**:

- Data fetching hooks
- Form handling hooks
- Authentication state hooks  
  **Example**: `useAuth.ts`, `useLocalStorage.ts`, `useApi.ts`

### 📁 services/

**Purpose**: API calls and external service integrations  
**What goes here**:

- HTTP client configurations
- API endpoint functions
- Third-party service integrations  
  **Example**: `api.ts`, `authService.ts`, `viralCheckService.ts`

### 📁 utils/

**Purpose**: Pure utility functions with no side effects  
**What goes here**:

- Data formatting functions
- Validation helpers
- Math calculations  
  **Example**: `formatDate.ts`, `validators.ts`, `helpers.ts`

### 📁 types/

**Purpose**: TypeScript type definitions and interfaces  
**What goes here**:

- API response types
- Component prop interfaces
- Global type definitions  
  **Example**: `api.types.ts`, `user.types.ts`, `common.types.ts`

### 📁 constants/

**Purpose**: Application-wide constant values  
**What goes here**:

- API endpoints
- Configuration values
- Enum definitions  
  **Example**: `endpoints.ts`, `config.ts`, `enums.ts`

### 📁 assets/

**Purpose**: Static files used in the application  
**What goes here**:

- Images, icons, logos
- Fonts, audio, video files
- JSON data files  
  **Example**: `images/`, `icons/`, `fonts/`

### 📁 styles/

**Purpose**: Global styles and theme configurations  
**What goes here**:

- CSS/SCSS global styles
- Theme definitions
- Style variables  
  **Example**: `globals.css`, `theme.ts`, `variables.scss`

## Usage Guidelines

1. **Start simple**: Begin with basic folders and add more as your project grows
2. **Be consistent**: Follow the same naming and organization patterns
3. **Avoid deep nesting**: Keep folder depth to 3-4 levels maximum
4. **Group by feature**: When in doubt, organize by business logic rather than file type
