# React Components 

A hands-on React.js project demonstrating fundamental component creation and props usage. This lab focuses on building reusable UI components from scratch using modern React practices.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## 🎯 Overview

 It demonstrates the creation of various React components including navigation, content display, user interaction, and layout components.

## ✨ Features

- **Responsive Design**: All components are built with mobile-first approach
- **Reusable Components**: Each component accepts props for customization
- **Interactive Elements**: Buttons with click handlers and hover effects
- **Modern Styling**: Clean, professional UI using CSS3
- **Component Composition**: Demonstrates how components work together

## 🧩 Components

### 1. **Greeting Component**
- Displays welcome message to users
- Simple introductory component

### 2. **NavBar Component**  
- Navigation menu with multiple links
- Hover effects and responsive design

### 3. **Footer Component**
- Copyright information
- Social media links
- Consistent bottom layout

### 4. **Card Component**
- Displays image, title, and description
- Reusable for different content types
- Props: `image`, `title`, `description`

### 5. **Button Component**
- Customizable button with multiple variants
- Different sizes and styles
- Props: `children`, `variant`, `size`, `onClick`

### 6. **Banner Component**
- Promotional banner with call-to-action
- Customizable background and messaging
- Props: `message`, `ctaText`, `backgroundColor`

### 7. **Testimonial Component**
- Customer testimonial display
- User photo, name, position, and quote
- Props: `quote`, `name`, `photo`, `position`

## 🛠 Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and layout
- **JavaScript ES6+** - Modern JavaScript features
- **HTML5** - Semantic markup

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-components-lab.git
   cd react-components-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 💻 Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Component Usage Examples

```jsx
// Using the Card component
<Card 
  image="https://example.com/image.jpg"
  title="Web Development"
  description="Learn modern web development"
/>

// Using the Button component
<Button 
  variant="primary" 
  size="large" 
  onClick={handleClick}
>
  Click Me!
</Button>

// Using the Testimonial component
<Testimonial 
  quote="Great learning experience!"
  name="John Doe"
  photo="https://example.com/photo.jpg"
  position="Software Engineer"
/>
```

## 📁 Project Structure

```
react-components-lab/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Greeting.jsx
│   │   ├── NavBar.jsx
│   │   └── Testimonial.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎓 Learning Objectives

By completing this lab, students will understand:

- ✅ How to create functional React components
- ✅ Props usage and component communication
- ✅ Component composition and reusability
- ✅ Event handling in React
- ✅ Modern React development workflow with Vite
- ✅ CSS styling and responsive design
- ✅ Project structure and organization

## 🤝 Contributing

This is an educational project, but suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of SE3040 course at SLIIT.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/dasundu)
