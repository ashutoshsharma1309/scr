# EduAccess - Inclusive Education Platform

A simple, accessible, technology-enabled education platform designed to break down barriers to learning.

## 🌟 Features

### Core Features
- **User Authentication**: Student and teacher roles with secure login/signup
- **Course Management**: Dynamic course listing with search and filter functionality
- **Progress Tracking**: Real-time progress tracking for enrolled courses
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching for user preference
- **Multilingual Support**: Support for English, Spanish, French, and Hindi

### Accessibility Features
- **WCAG 2.1 AA Compliant**: Follows accessibility standards
- **Large Touch Targets**: Minimum 44x44px for easy interaction
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast Mode**: Support for high contrast preferences
- **Reduced Motion**: Respects user motion preferences
- **Large Fonts**: Readable typography with proper line heights

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- (Optional) Firebase account for production authentication

### Installation

1. **Clone the repository**
   ```bash
   cd SCR
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (Optional for demo)
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
SCR/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── courses/           # Courses pages
│   ├── dashboard/         # User dashboard
│   ├── login/             # Authentication pages
│   ├── signup/
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── CourseCard.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── LanguageProvider.tsx
├── lib/                   # Utility libraries
│   ├── firebase.ts        # Firebase configuration
│   └── dummyData.ts       # Sample data
├── store/                 # State management (Zustand)
│   ├── useAuthStore.ts
│   └── useCourseStore.ts
├── hooks/                 # Custom React hooks
│   └── useTranslations.ts
└── public/               # Static assets
```

## 🎨 Design Principles

### Simplicity
- Clean, uncluttered interface
- Intuitive navigation
- Minimal learning curve

### Inclusivity
- Accessible to users with disabilities
- Multilingual support
- Works on low-end devices
- Low bandwidth optimization

### Modern
- Component-based architecture
- Reusable UI components
- Responsive design
- Smooth animations

## 🔧 Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **React Hook Form**: Form validation
- **Zustand**: Lightweight state management

### Backend
- **Firebase**: Authentication and database (optional)
- **Next.js API Routes**: RESTful API endpoints
- **Node.js**: Server-side runtime

## 📱 Pages

1. **Landing Page** (`/`): Problem-solution storytelling, features showcase
2. **Courses Page** (`/courses`): Browse and search courses with filters
3. **Course Details** (`/courses/[id]`): Detailed course information and enrollment
4. **Dashboard** (`/dashboard`): User progress tracking and enrolled courses
5. **Login** (`/login`): User authentication
6. **Signup** (`/signup`): Account creation
7. **About** (`/about`): Mission and values
8. **Contact** (`/contact`): Support and contact form

## 🔐 Authentication

The platform currently uses mock authentication for demo purposes. To enable Firebase authentication:

1. Set up a Firebase project
2. Add your Firebase config to `.env.local`
3. Uncomment Firebase auth code in `app/login/page.tsx` and `app/signup/page.tsx`

## 📊 API Endpoints

### Courses
- `GET /api/courses` - Get all courses (with optional filters)
- `GET /api/courses/[id]` - Get course by ID

### Enrollment
- `POST /api/enroll` - Enroll in a course

### Progress
- `GET /api/progress` - Get user progress
- `POST /api/progress` - Update user progress

## 🎯 Key Features Implementation

### Search & Filter
- Real-time search across course titles, descriptions, and instructors
- Filter by category and difficulty level
- Clear filters functionality

### Progress Tracking
- Visual progress bars
- Completed lessons tracking
- Last accessed timestamps
- Course completion status

### Form Validation
- Client-side validation with React Hook Form
- Error messages for all fields
- Required field indicators
- Email format validation
- Password strength requirements

## 🌍 Multilingual Support

Currently supported languages:
- English (en)
- Spanish (es)
- French (fr)
- Hindi (hi)

Language preference is saved in localStorage and persists across sessions.

## ♿ Accessibility

### Implemented Features
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- High contrast mode support
- Reduced motion support
- Large touch targets (44x44px minimum)

### Testing
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard-only navigation
- Test with browser zoom (up to 200%)
- Test color contrast ratios

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Development Notes

### Adding New Courses
Edit `lib/dummyData.ts` to add more courses. In production, courses would be stored in a database.

### Adding New Languages
1. Add translations to `hooks/useTranslations.ts`
2. Add language option to `components/LanguageProvider.tsx`
3. Add language selector option in `components/Navbar.tsx`

### Customizing Theme
Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## 🤝 Contributing

This is a demo project. For production use:
1. Set up proper authentication
2. Connect to a real database
3. Add error logging
4. Implement proper security measures
5. Add comprehensive testing

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Icons from React Icons
- Images from Unsplash
- Design inspiration from modern accessibility-first platforms

## 📞 Support

For questions or support, visit the [Contact Page](/contact) or email support@eduaccess.com

---

**Built with ❤️ for accessible education**

