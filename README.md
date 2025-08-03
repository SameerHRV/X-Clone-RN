# 🐦 X-Clone React Native

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
</div>

<div align="center">
  <h3>🚀 A modern, full-stack Twitter/X clone built with React Native and Node.js</h3>
  <p>Experience the power of social media with real-time updates, secure authentication, and beautiful UI</p>
</div>

---

## ✨ Features

### 📱 Mobile App (React Native + Expo)
- 🔐 **Secure Authentication** - Powered by Clerk with multiple sign-in options
- 🎨 **Beautiful UI** - Crafted with NativeWind (Tailwind CSS for React Native)
- 📱 **Cross-Platform** - Works seamlessly on iOS, Android, and Web
- 🧭 **File-based Routing** - Intuitive navigation with Expo Router
- 🌙 **Dark/Light Mode** - Automatic theme switching support
- ⚡ **Performance Optimized** - Built with Expo's new architecture

### 🖥️ Backend API (Node.js + Express)
- 🛡️ **Security First** - Protected with Arcjet security middleware
- 🗄️ **MongoDB Integration** - Robust data persistence with Mongoose
- 📸 **Media Upload** - Cloudinary integration for image/video handling
- 🔄 **RESTful API** - Clean, scalable API architecture
- 🚀 **Production Ready** - Built with modern Node.js practices

---

## 🛠️ Tech Stack

### Frontend (Mobile)
| Technology | Purpose | Version |
|------------|---------|---------|
| **React Native** | Mobile framework | 0.79.5 |
| **Expo** | Development platform | ~53.0.20 |
| **Expo Router** | File-based routing | ~5.1.4 |
| **NativeWind** | Styling (Tailwind CSS) | ^4.1.23 |
| **Clerk** | Authentication | ^2.14.14 |
| **TypeScript** | Type safety | ~5.8.3 |

### Backend (API)
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime environment | Latest |
| **Express** | Web framework | ^5.1.0 |
| **MongoDB** | Database | Latest |
| **Mongoose** | ODM | ^8.16.0 |
| **Clerk Express** | Authentication | ^1.7.0 |
| **Cloudinary** | Media storage | ^2.0.0 |
| **Arcjet** | Security middleware | ^1.0.0-beta.8 |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (Mac) or Android Studio

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/x-clone-rn.git
cd x-clone-rn
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Add your environment variables:
# - MongoDB connection string
# - Clerk secret key
# - Cloudinary credentials
# - Arcjet API key

npm run dev
```

### 3. Mobile App Setup
```bash
cd mobile
npm install

# Start the development server
npx expo start

# Or run on specific platform
npx expo start --android  # Android
npx expo start --ios      # iOS
npx expo start --web      # Web
```

---

## 📁 Project Structure

```
x-clone-rn/
├── 📱 mobile/                 # React Native app
│   ├── app/                   # Expo Router pages
│   ├── components/            # Reusable components
│   ├── hooks/                 # Custom React hooks
│   ├── data/                  # Data management
│   ├── assets/                # Images, fonts, etc.
│   └── global.css             # Global styles
├── 🖥️ backend/                # Node.js API
│   ├── src/                   # Source code
│   │   ├── models/            # MongoDB models
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Custom middleware
│   │   └── server.js          # Entry point
│   └── package.json
└── README.md
```

---

## 🔧 Environment Variables

### Backend (.env)
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
CLERK_SECRET_KEY=your_clerk_secret_key

# Media Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Security
ARCJET_KEY=your_arcjet_key

# Server
PORT=3000
NODE_ENV=development
```

### Mobile App
Environment variables are managed through Expo's configuration system.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Clerk](https://clerk.com/) for seamless authentication
- [NativeWind](https://www.nativewind.dev/) for bringing Tailwind CSS to React Native
- [Cloudinary](https://cloudinary.com/) for media management
- [Arcjet](https://arcjet.com/) for security middleware

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/SameerHRV">Sameer Harapanahalli</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
