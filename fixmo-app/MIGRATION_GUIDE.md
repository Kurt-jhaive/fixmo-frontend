# FixMo App Merge - Migration Guide

## What Was Done

Successfully merged your `provider` and `user` folders into a single unified app called `fixmo-app`. Here's what happened:

### 1. **New Directory Structure**
```
fixmo-app/
├── app/
│   ├── (auth)/          # Login, signup, splash screens
│   ├── (user)/          # Customer-facing screens and tabs
│   ├── (provider)/      # Provider-facing screens and tabs
│   ├── _layout.tsx      # Root navigation with role-based routing
│   └── index.tsx        # Entry point that redirects based on user role
├── src/                 # Shared code between user and provider
│   ├── api/            # API functions
│   ├── components/     # Shared UI components
│   ├── hooks/          # Custom React hooks
│   ├── store/          # State management (Zustand/Redux)
│   ├── types/          # TypeScript definitions
│   └── utils/          # Helper functions
└── assets/             # Images, fonts, icons
```

### 2. **Smart Role-Based Navigation**
- **Unauthenticated users** → `(auth)` flow (login/signup)
- **Users with role "provider"** → `(provider)` tabs (schedule, calendar, messages, profile)
- **Users with role "user"** → `(user)` tabs (home, bookings, schedule, messages, profile)

### 3. **Merged Dependencies**
Combined all packages from both apps:
- React Native Paper (from provider)
- React Native Maps (from user)
- React Native Camera (from user)
- All Expo modules
- Navigation libraries

### 4. **Combined Permissions**
- Camera access
- Microphone access
- Location services
- All required for both user types

## Next Steps

### 1. **Install Dependencies**
```bash
cd fixmo-app
npm install
```

### 2. **Test the App**
```bash
npm start
# or
npm run android
npm run ios
```

### 3. **Update Your Code**
You may need to update some import paths:
- Components now in `../../src/components/`
- APIs now in `../../src/api/`
- Hooks now in `../../src/hooks/`

### 4. **Authentication Updates**
Update your auth logic to set user roles:
```typescript
// In your login/signup logic
const user = {
  id: "123",
  name: "John Doe",
  role: "provider" // or "user"
}
```

### 5. **Screen Organization**
- **Add new user screens** → `app/(user)/`
- **Add new provider screens** → `app/(provider)/`
- **Add shared components** → `src/components/`

## Benefits of This Approach

✅ **Single Codebase**: Easier maintenance and updates
✅ **Shared Components**: Reuse UI components between user types
✅ **Unified Authentication**: One auth system for all users
✅ **Better Performance**: Single app bundle
✅ **Easier Deployment**: One app to deploy and maintain

## Cleanup

Once you've tested the merged app and confirmed everything works:

1. You can safely delete the old `provider/` and `user/` folders
2. Update your deployment scripts to use `fixmo-app/`
3. Update your repository structure

## Testing Checklist

- [ ] App starts without errors
- [ ] Authentication flow works
- [ ] Role-based routing works correctly
- [ ] User screens accessible for users
- [ ] Provider screens accessible for providers
- [ ] Shared components work in both interfaces
- [ ] All dependencies resolve correctly

## Need Help?

If you encounter any issues:
1. Check the import paths in error messages
2. Ensure all screens have proper navigation setup
3. Verify user role assignment in your auth logic
4. Check that all required dependencies are installed
