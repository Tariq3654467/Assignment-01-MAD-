# SkillSwap - Mobile Application MVP

## Overview

SkillSwap is a peer-to-peer skill exchange mobile application built with React Native and Expo. The app allows users to offer their skills and learn new ones from others without monetary transactions, creating a collaborative learning community.

## Features

### Core Functionality
- **User Authentication**: Login and signup with email validation
- **Skill Offers**: Create, view, and manage skill exchange offers
- **Search & Filter**: Find skills by category, keywords, or tutor
- **User Profiles**: Personal profiles with skills, bio, and ratings
- **Modern UI**: Beautiful, responsive design with dark/light mode support

### Screens
1. **Login/Signup Screen**: User authentication with demo credentials
2. **Home Feed**: Browse available skill offers with pull-to-refresh
3. **Create Post Screen**: Form to post new skill offers
4. **Profile Screen**: User profile management and statistics

## Demo Credentials

For testing purposes, you can use these credentials:
- **Email**: test@student.com
- **Password**: 12345

## Installation & Setup

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SkillSwap_Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Expo CLI globally** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

4. **Start the development server**
   ```bash
   npx expo start

5. **Run on device/simulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your physical device

## Project Structure

```
SkillSwap_Frontend/
├── app/
│   ├── _layout.tsx          # Root layout with navigation
│   ├── login.tsx            # Authentication screen
│   └── (tabs)/
│       ├── _layout.tsx      # Tab navigation layout
│       ├── index.tsx        # Home feed screen
│       ├── create.tsx       # Create post screen
│       └── profile.tsx      # Profile screen
├── components/              # Reusable UI components
├── constants/               # App constants and theme
├── hooks/                   # Custom React hooks
├── assets/                  # Images and static assets
└── README.md
```

## Key Dependencies

- **React Native**: Mobile app framework
- **Expo**: Development platform and tools
- **Expo Router**: File-based navigation
- **React Navigation**: Navigation library
- **TypeScript**: Type safety and better development experience

## Features Implemented

### Authentication
- Login/signup forms with validation
- Demo credentials for testing
- Secure navigation flow

### Home Feed
- Skill offer cards with ratings and availability
- Pull-to-refresh functionality
- Clean, modern card design

### Create Post Screen
- Comprehensive form for new skill offers
- Category selection with chips
- Form validation and submission
- Console logging of post data (as per requirements)

### Profile Screen
- User information display
- Skills showcase
- Session statistics
- Edit profile and logout functionality

## Dummy Data

The app includes the following dummy data as specified in the requirements:

### Skill Offers (Home Feed)
- Python Tutoring by Ali
- Guitar Lessons by Fatima
- Drawing Basics by Ahmed
- Yoga & Meditation by Sara

### User Profile
- Name: Your Name
- Skills: React Native, Guitar, Photography
- Bio: A passionate developer and musician looking to share my skills with the world.

## Technical Implementation

### Navigation
- Expo Router for file-based routing
- Tab navigation with 4 main screens
- Modal presentations for forms

### State Management
- React hooks for local state management
- Context providers for theme and color scheme

### UI/UX
- Dark/light mode support
- Responsive design
- Modern Material Design principles
- Consistent color scheme and typography

### Form Handling
- Input validation
- Error handling and user feedback
- Keyboard-aware scrolling

## Development Commands

```bash
# Start development server
npx expo start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web

# Lint code
npm run lint
```

## Future Enhancements

- Backend integration with real authentication
- Real-time messaging between users
- Push notifications for bookings
- Payment integration (if needed)
- Advanced filtering and sorting
- User reviews and ratings system
- Calendar integration for scheduling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of a university assignment for educational purposes.

## Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Note**: This is an MVP (Minimum Viable Product) prototype for demonstration purposes. The app includes dummy data and simulated functionality as specified in the requirements.
