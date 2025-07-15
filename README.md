# CodeVault 🚀

A modern web application for discovering, browsing, and using high-quality code snippets for web development. Built with React, TypeScript, and Tailwind CSS.

![CodeVault](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)

## 🌟 Features

- **Live Preview**: Interactive preview of HTML, CSS, and JavaScript snippets
- **Multiple Languages**: Support for HTML, CSS, JavaScript, and React code snippets
- **Syntax Highlighting**: Beautiful code highlighting with `react-syntax-highlighter`
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Category Filtering**: Browse snippets by technology and difficulty
- **Search Functionality**: Find snippets quickly with search
- **Copy to Clipboard**: One-click code copying
- **Modern UI**: Dark theme with gradient accents and glassmorphism effects

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.6.3
- **Build Tool**: Vite 5.4.2
- **Code Highlighting**: React Syntax Highlighter
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── SnippetCard.tsx      # Individual snippet display
│   │   ├── LivePreview.tsx      # Live code preview component
│   │   └── CategoryFilter.tsx   # Category filtering
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Snippets.tsx        # Snippets browser
│   │   └── Categories.tsx      # Category overview
│   ├── data/
│   │   └── snippets.ts         # Snippet data and categories
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── App.tsx                # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd codevault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 Code Snippets Collection

CodeVault includes a curated collection of snippets across multiple categories:

### HTML Snippets
- Responsive Navigation Bar
- Image Carousel
- Modal Components
- Form Elements

### CSS Snippets
- Gradient Backgrounds
- Neumorphic Buttons
- Hover Effects
- Animations (Pulse, Fade-in)
- Glassmorphism Cards
- Flexbox Layouts

### JavaScript Snippets
- Smooth Scroll to Top
- Progress Bars
- Copy to Clipboard
- Dark Mode Toggle
- Countdown Timer
- Character Counter
- Modal Controls

### React Snippets
- Component templates
- Hooks examples
- State management patterns

## 🎨 Features Deep Dive

### Live Preview System
The `LivePreview` component renders HTML, CSS, and JavaScript snippets in real-time:
- HTML snippets are wrapped in complete documents
- CSS snippets include demo elements
- JavaScript snippets execute with interactive demos
- React snippets show placeholder (requires dev environment)

### Snippet Management
Each snippet includes:
- Unique ID and title
- Description and language
- Difficulty level (beginner/intermediate/advanced)
- Tags for categorization
- Featured status
- Creation date

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with hamburger menu
- Grid layouts that adapt to screen size
- Touch-friendly interactive elements

## 🎯 Usage Examples

### Adding New Snippets
Add snippets to `src/data/snippets.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Snippet Title',
  description: 'Brief description',
  language: 'html' | 'css' | 'javascript' | 'react',
  code: `your code here`,
  tags: ['tag1', 'tag2'],
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  featured: false,
  createdAt: '2025-01-01'
}
```

### Customizing Themes
Modify `tailwind.config.js` to customize colors and styling:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Add appropriate types for new features
- Test snippets in live preview
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Code highlighting by [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Developed with ❤️ by Meherub Hossain Yemon**
