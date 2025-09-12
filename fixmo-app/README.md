# FixMo - Unified Mobile Application

This is a unified React Native Expo application that serves both users (customers) and service providers in the FixMo platform.

## Features

### For Users (Customers)
- Browse and book services (aircon, appliances, carpentry, computer, electrical, masonry, painting, welding, tile)
- View and manage bookings
- Schedule appointments
- Message with service providers
- Profile management

### For Providers
- Manage daily schedule
- Calendar view for appointments
- Messaging with customers
- Profile and service management
- Onboarding process

## Project Structure

```
fixmo-app/
├── app/
│   ├── (auth)/          # Authentication screens (login, signup, etc.)
│   ├── (user)/          # User/customer screens and navigation
│   ├── (provider)/      # Service provider screens and navigation
│   ├── _layout.tsx      # Root layout with role-based routing
│   └── index.tsx        # Entry point that routes based on user role
├── src/
│   ├── api/             # API client functions
│   ├── components/      # Shared components
│   ├── constants/       # App constants (colors, fonts, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── navigation/      # Navigation components
│   ├── providers/       # Context providers (Auth, etc.)
│   ├── store/           # State management
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── assets/              # Images, fonts, and other assets
└── scripts/             # Build and utility scripts
```

## Role-Based Navigation

The app automatically routes users to the appropriate interface based on their role:

- **Unauthenticated users** → Authentication flow
- **Users with role "provider"** → Provider interface
- **Users with role "user"** → Customer interface

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on specific platforms:
   ```bash
   npm run android
   npm run ios
   npm run web
   ```

## Dependencies

This project combines dependencies from both the original user and provider apps, including:

- Expo Router for navigation
- React Native Paper for UI components
- React Native Maps for location services
- React Native Camera for image capture
- And many more...

## Configuration

The app includes merged configurations for:
- Camera and microphone permissions
- Location services
- Push notifications
- TypeScript compilation
- ESLint code quality

## Contributing

When adding new features:
1. Determine if the feature is for users, providers, or shared
2. Place screens in the appropriate `(user)` or `(provider)` directory
3. Add shared components to `src/components`
4. Update navigation if needed
