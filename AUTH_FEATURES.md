# Authentication System Documentation

## Overview

Your Artisan Pâtisserie cake shop now has a complete, production-ready authentication system powered by **Neon PostgreSQL** and **Better Auth**. Users can create accounts, sign in, and manage their sessions.

## Features

### 1. Sign-Up Page (`/sign-up`)
- Clean, modern signup form with:
  - Full Name input
  - Email address input
  - Password input (minimum 8 characters)
  - Confirm Password input with validation
  - Form error handling with helpful messages
- Benefits section showing account advantages
- Link to sign-in page for existing users
- Option to continue shopping without account
- Fully responsive design (mobile, tablet, desktop)

### 2. Sign-In Page (`/sign-in`)
- Professional login form with:
  - Email address input
  - Password input
  - Form validation and error messages
  - Loading state during authentication
- Quick link to create new account
- Guest checkout option for unregistered users
- Fully responsive layout

### 3. User Session Management
- User sessions stored securely in PostgreSQL
- Session cookies with proper security attributes
- Automatic logout on sign-out
- Session persistence across browser refreshes
- Works across development and production environments

### 4. Navigation Integration
- Desktop: User profile menu in header when logged in
  - Shows user name/email
  - Dropdown with "Dashboard" and "Sign Out" options
- Mobile: Sign In link in mobile menu when logged out
- Mobile: Sign Out option in mobile menu when logged in
- Cart badge with item count displays in navigation
- Login link visible to guests

## Technical Stack

### Backend
- **Database**: Neon PostgreSQL
- **Auth Library**: Better Auth v0
- **Driver**: pg (node-postgres)
- **ORM**: Drizzle ORM (prepared for future data operations)

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Components**: shadcn/ui (Button, Input)
- **Client Auth**: Better Auth React client

## Database Schema

### User Table
```sql
CREATE TABLE "user" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  emailVerified BOOLEAN NOT NULL DEFAULT FALSE,
  image TEXT,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
)
```

### Session Table
```sql
CREATE TABLE "session" (
  id TEXT PRIMARY KEY,
  expiresAt TIMESTAMP NOT NULL,
  token TEXT NOT NULL UNIQUE,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
  ipAddress TEXT,
  userAgent TEXT,
  userId TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
)
```

### Account Table
```sql
CREATE TABLE "account" (
  id TEXT PRIMARY KEY,
  accountId TEXT NOT NULL,
  providerId TEXT NOT NULL,
  userId TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  accessToken TEXT,
  refreshToken TEXT,
  idToken TEXT,
  accessTokenExpiresAt TIMESTAMP,
  refreshTokenExpiresAt TIMESTAMP,
  scope TEXT,
  password TEXT,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
)
```

### Verification Table
```sql
CREATE TABLE "verification" (
  id TEXT PRIMARY KEY,
  identifier TEXT NOT NULL,
  value TEXT NOT NULL,
  expiresAt TIMESTAMP NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
)
```

## File Structure

```
lib/
  auth.ts                    ← Better Auth server configuration
  auth-client.ts             ← Better Auth React client
  db/
    index.ts                 ← Drizzle ORM setup with shared pg Pool
    schema.ts                ← Database schema (Better Auth tables)

app/
  api/
    auth/[...all]/route.ts   ← Better Auth HTTP handler
  sign-in/page.tsx           ← Sign-in page
  sign-up/page.tsx           ← Sign-up page
  actions/
    auth.ts                  ← Logout server action

components/
  auth-form.tsx              ← Shared auth form component (sign-in/sign-up)
  navigation.tsx             ← Navigation with user menu integration
```

## Environment Variables

The following environment variables are already configured:

| Variable              | Purpose                                    |
| -------------------- | ----------------------------------------- |
| `DATABASE_URL`       | Neon PostgreSQL connection string         |
| `BETTER_AUTH_SECRET` | Secret key for signing sessions (32+ chars)|

These are automatically set by the Neon integration and your environment configuration.

## Security Features

- ✅ Passwords hashed with bcrypt (handled by Better Auth)
- ✅ Secure session cookies with:
  - httpOnly flag (not accessible from JavaScript)
  - sameSite protection against CSRF
  - Cross-site compatibility in development (sameSite: "none")
- ✅ Email uniqueness validation
- ✅ Password minimum length requirement (8 characters)
- ✅ Form validation on client and server
- ✅ Automatic session expiration
- ✅ CORS/Origin validation via trustedOrigins

## Guest Checkout Support

The authentication system is **optional for checkout**:
- Users can browse and purchase without creating an account
- Sign-up/login encouraged but not required
- Existing users can checkout faster with saved info
- Perfect for first-time buyers and convenience shoppers

## Usage in Components

### Getting Current User Session
```typescript
'use client'

import { authClient } from '@/lib/auth-client'
import { useEffect, useState } from 'react'

export function UserProfile() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const session = await authClient.getSession()
      setSession(session)
    }
    getSession()
  }, [])

  if (session?.user) {
    return <p>Welcome, {session.user.name}</p>
  }
  return <p>Please sign in</p>
}
```

### Signing Out
```typescript
const handleLogout = async () => {
  await authClient.signOut()
  // User redirected to /sign-in after logout
}
```

## Testing the Auth System

1. **Create a new account**:
   - Visit `/sign-up`
   - Enter name, email, password (8+ characters)
   - Confirm password matches
   - Click "Create Account"
   - Redirected to homepage as logged-in user

2. **Sign in**:
   - Visit `/sign-in`
   - Enter email and password
   - Click "Sign In"
   - Redirected to homepage as logged-in user

3. **User menu**:
   - Look for profile dropdown in header (desktop)
   - Shows user name/email
   - Click "Sign Out" to logout

4. **Guest checkout**:
   - Visit homepage without signing in
   - Add items to cart
   - Proceed to checkout without account

## Error Handling

The auth form provides user-friendly error messages for:
- Incorrect email/password combinations
- Email already in use during signup
- Password mismatch during signup
- Password too short during signup
- Network errors during authentication

All errors are displayed in a styled alert box with an icon for visibility.

## Responsive Design

- ✅ Mobile (375px): Single-column stacked layout, full-width inputs
- ✅ Tablet (768px): Optimized padding and spacing
- ✅ Desktop (1024px+): Centered card layout with max-width constraint
- ✅ Touch-friendly: Large input fields and buttons for mobile
- ✅ Accessible: Proper labels, ARIA attributes, semantic HTML

## Next Steps (Optional Enhancements)

Future additions you can build on this foundation:
1. **Email verification** - Verify email addresses before account activation
2. **Password reset** - Allow users to reset forgotten passwords
3. **OAuth providers** - Add Google, GitHub sign-in options
4. **User profiles** - Let users save delivery address, favorite cakes
5. **Order history** - Display past orders and order tracking
6. **Wishlist** - Save favorite cakes for later purchase
7. **Social features** - Share cakes, leave reviews, ratings
8. **2FA** - Add two-factor authentication for account security

## Support

For issues or questions about the authentication system:
1. Check the console for error messages
2. Verify DATABASE_URL and BETTER_AUTH_SECRET are set
3. Ensure Neon database is connected and tables are created
4. Check dev server logs for backend errors
