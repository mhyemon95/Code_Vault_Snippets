import { CodeSnippet } from '../types';

export const snippets: CodeSnippet[] = [
  {
    id: '1',
    title: 'Responsive Navigation Bar',
    description: 'A modern, responsive navigation bar with mobile hamburger menu',
    language: 'html',
    code: `<nav class="navbar">
  <div class="nav-container">
    <div class="nav-logo">
      <a href="#" class="logo">Brand</a>
    </div>
    <div class="nav-menu" id="nav-menu">
      <div class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">About</a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">Services</a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">Contact</a>
      </div>
    </div>
    <div class="nav-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
</nav>`,
    tags: ['navigation', 'responsive', 'menu'],
    featured: true,
    difficulty: 'intermediate',
    createdAt: '2025-01-01',
  },
  {
    id: '9',
    title: 'Interactive Button Hover Effects',
    description: 'Collection of modern button hover effects with smooth animations',
    language: 'css',
    code: `/* Modern Button Collection */
.btn-base {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 8px;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

/* Gradient Button */
.btn-gradient {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #764ba2 0%, #667eea 100%);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-gradient:hover::before {
  left: 0;
}

/* Neon Glow Button */
.btn-neon {
  background: transparent;
  color: #00ffff;
  border: 2px solid #00ffff;
  text-shadow: 0 0 5px #00ffff;
  box-shadow: 0 0 5px #00ffff;
}

.btn-neon:hover {
  background: #00ffff;
  color: #000;
  box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
}

/* Slide Up Button */
.btn-slide {
  background: #4f46e5;
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-slide::before {
  content: '';
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3730a3;
  transition: bottom 0.3s ease;
  z-index: -1;
}

.btn-slide:hover::before {
  bottom: 0;
}

/* Bounce Button */
.btn-bounce {
  background: #10b981;
  color: white;
}

.btn-bounce:hover {
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
}

/* Ripple Effect Button */
.btn-ripple {
  background: #f59e0b;
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-ripple:hover::after {
  width: 300px;
  height: 300px;
}`,
    tags: ['buttons', 'hover', 'animation', 'effects'],
    difficulty: 'intermediate',
    createdAt: '2025-01-09',
  },
  {
    id: '10',
    title: 'Dynamic Progress Bar',
    description: 'Animated progress bar with percentage display and smooth transitions',
    language: 'javascript',
    code: `// Dynamic Progress Bar Component
class ProgressBar {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? 
      document.querySelector(container) : container;
    
    this.options = {
      duration: 2000,
      color: '#4f46e5',
      backgroundColor: '#e5e7eb',
      height: '20px',
      borderRadius: '10px',
      showPercentage: true,
      animateOnVisible: true,
      ...options
    };
    
    this.currentProgress = 0;
    this.targetProgress = 0;
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    this.createProgressBar();
    
    if (this.options.animateOnVisible) {
      this.setupIntersectionObserver();
    }
  }
  
  createProgressBar() {
    this.container.innerHTML = \`
      <div class="progress-wrapper" style="
        width: 100%;
        background: \${this.options.backgroundColor};
        height: \${this.options.height};
        border-radius: \${this.options.borderRadius};
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
      ">
        <div class="progress-fill" style="
          width: 0%;
          height: 100%;
          background: \${this.options.color};
          border-radius: \${this.options.borderRadius};
          transition: width 0.3s ease;
          position: relative;
          overflow: hidden;
        ">
          <div class="progress-shine" style="
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255,255,255,0.3), 
              transparent
            );
            animation: shine 2s infinite;
          "></div>
        </div>
        \${this.options.showPercentage ? \`
          <div class="progress-text" style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
            font-size: 12px;
            color: #374151;
            text-shadow: 0 1px 2px rgba(255,255,255,0.8);
          ">0%</div>
        \` : ''}
      </div>
    \`;
    
    this.progressFill = this.container.querySelector('.progress-fill');
    this.progressText = this.container.querySelector('.progress-text');
    
    // Add shine animation
    const style = document.createElement('style');
    style.textContent = \`
      @keyframes shine {
        0% { left: -100%; }
        100% { left: 100%; }
      }
    \`;
    document.head.appendChild(style);
  }
  
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateTo(this.targetProgress);
          this.hasAnimated = true;
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(this.container);
  }
  
  setProgress(progress) {
    this.targetProgress = Math.max(0, Math.min(100, progress));
    
    if (!this.options.animateOnVisible) {
      this.animateTo(this.targetProgress);
    }
  }
  
  animateTo(targetProgress) {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    const startProgress = this.currentProgress;
    const progressDiff = targetProgress - startProgress;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      this.currentProgress = startProgress + (progressDiff * easeOut);
      this.updateDisplay();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.currentProgress = targetProgress;
        this.updateDisplay();
        this.isAnimating = false;
      }
    };
    
    requestAnimationFrame(animate);
  }
  
  updateDisplay() {
    this.progressFill.style.width = \`\${this.currentProgress}%\`;
    
    if (this.progressText) {
      this.progressText.textContent = \`\${Math.round(this.currentProgress)}%\`;
    }
  }
  
  reset() {
    this.currentProgress = 0;
    this.targetProgress = 0;
    this.hasAnimated = false;
    this.updateDisplay();
  }
}

// Usage Examples
document.addEventListener('DOMContentLoaded', () => {
  // Create progress bars
  const progressContainer1 = document.getElementById('progress1');
  const progressContainer2 = document.getElementById('progress2');
  const progressContainer3 = document.getElementById('progress3');
  
  if (progressContainer1) {
    const progress1 = new ProgressBar(progressContainer1, {
      color: '#10b981',
      duration: 1500
    });
    progress1.setProgress(75);
  }
  
  if (progressContainer2) {
    const progress2 = new ProgressBar(progressContainer2, {
      color: '#f59e0b',
      duration: 2500
    });
    progress2.setProgress(60);
  }
  
  if (progressContainer3) {
    const progress3 = new ProgressBar(progressContainer3, {
      color: '#ef4444',
      duration: 2000,
      showPercentage: false
    });
    progress3.setProgress(90);
  }
});`,
    tags: ['progress', 'animation', 'class', 'interactive'],
    difficulty: 'advanced',
    createdAt: '2025-01-10',
  },
  {
    id: '11',
    title: 'Responsive Card Layout',
    description: 'Modern card layout with hover effects and responsive design',
    language: 'html',
    code: `<div class="card-container">
  <div class="card">
    <div class="card-image">
      <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Technology">
      <div class="card-overlay">
        <span class="card-category">Technology</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">Modern Web Development</h3>
      <p class="card-description">
        Explore the latest trends and technologies in modern web development, 
        from responsive design to progressive web apps.
      </p>
      <div class="card-meta">
        <span class="card-date">Jan 15, 2025</span>
        <span class="card-read-time">5 min read</span>
      </div>
      <div class="card-actions">
        <button class="btn-primary">Read More</button>
        <button class="btn-secondary">Save</button>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-image">
      <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Design">
      <div class="card-overlay">
        <span class="card-category">Design</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">UI/UX Design Principles</h3>
      <p class="card-description">
        Learn the fundamental principles of user interface and user experience 
        design that create engaging digital products.
      </p>
      <div class="card-meta">
        <span class="card-date">Jan 12, 2025</span>
        <span class="card-read-time">8 min read</span>
      </div>
      <div class="card-actions">
        <button class="btn-primary">Read More</button>
        <button class="btn-secondary">Save</button>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-image">
      <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Development">
      <div class="card-overlay">
        <span class="card-category">Development</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">JavaScript Best Practices</h3>
      <p class="card-description">
        Discover essential JavaScript best practices and patterns that will 
        make your code more maintainable and efficient.
      </p>
      <div class="card-meta">
        <span class="card-date">Jan 10, 2025</span>
        <span class="card-read-time">6 min read</span>
      </div>
      <div class="card-actions">
        <button class="btn-primary">Read More</button>
        <button class="btn-secondary">Save</button>
      </div>
    </div>
  </div>
</div>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.card-category {
  background: rgba(255, 255, 255, 0.9);
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.card-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  color: #9ca3af;
}

.card-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-primary {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  flex: 1;
}

.btn-primary:hover {
  background: #3730a3;
}

.btn-secondary {
  background: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
  color: #374151;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .card-actions {
    flex-direction: column;
  }
}
</style>`,
    tags: ['cards', 'responsive', 'layout', 'hover'],
    difficulty: 'intermediate',
    createdAt: '2025-01-11',
  },
  {
    id: '2',
    title: 'Glassmorphism Card',
    description: 'Modern glassmorphism card effect with backdrop blur',
    language: 'css',
    code: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.glass-card h3 {
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.glass-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}`,
    tags: ['glassmorphism', 'card', 'modern', 'hover'],
    featured: true,
    difficulty: 'intermediate',
    createdAt: '2025-01-02',
  },
  {
    id: '3',
    title: 'Smooth Scroll to Top',
    description: 'Smooth scroll to top button with fade-in animation',
    language: 'javascript',
    code: `// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// CSS for the button
const style = document.createElement('style');
style.textContent = \`
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #6366f1;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .scroll-to-top.show {
    opacity: 1;
    visibility: visible;
  }
  
  .scroll-to-top:hover {
    background: #4f46e5;
    transform: translateY(-2px);
  }
\`;
document.head.appendChild(style);`,
    tags: ['scroll', 'animation', 'button', 'smooth'],
    difficulty: 'beginner',
    createdAt: '2025-01-03',
  },
  {
    id: '4',
    title: 'Custom Hook for API Calls',
    description: 'Reusable React hook for handling API requests with loading states',
    language: 'react',
    code: `import { useState, useEffect } from 'react';

interface UseApiOptions {
  immediate?: boolean;
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(
  url: string,
  options: UseApiOptions = { immediate: true }
): ApiState<T> & { refetch: () => void } {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      });
    }
  };

  useEffect(() => {
    if (options.immediate) {
      fetchData();
    }
  }, [url, options.immediate]);

  return {
    ...state,
    refetch: fetchData,
  };
}

// Usage example:
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, refetch } = useApi<User>(
    \`/api/users/\${userId}\`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}`,
    tags: ['hooks', 'api', 'typescript', 'reusable'],
    featured: true,
    difficulty: 'advanced',
    createdAt: '2025-01-04',
  },
  {
    id: '5',
    title: 'Animated Loading Spinner',
    description: 'CSS-only animated loading spinner with multiple variants',
    language: 'css',
    code: `/* Spinner Container */
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

/* Dot Spinner */
.spinner-dots {
  display: flex;
  gap: 4px;
}

.spinner-dots div {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  animation: dot-bounce 1.4s infinite ease-in-out;
}

.spinner-dots div:nth-child(1) { animation-delay: -0.32s; }
.spinner-dots div:nth-child(2) { animation-delay: -0.16s; }
.spinner-dots div:nth-child(3) { animation-delay: 0s; }

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* Ring Spinner */
.spinner-ring {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Pulse Spinner */
.spinner-pulse {
  width: 40px;
  height: 40px;
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    tags: ['loading', 'spinner', 'animation', 'css-only'],
    difficulty: 'beginner',
    createdAt: '2025-01-05',
  },
  {
    id: '6',
    title: 'Form Validation Hook',
    description: 'React hook for form validation with real-time feedback',
    language: 'react',
    code: `import { useState, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface FormState {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | null;
}

function useFormValidation(initialValues: FormState, rules: ValidationRules) {
  const [values, setValues] = useState<FormState>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback((name: string, value: string): string | null => {
    const rule = rules[name];
    if (!rule) return null;

    if (rule.required && !value.trim()) {
      return 'This field is required';
    }

    if (rule.minLength && value.length < rule.minLength) {
      return \`Minimum length is \${rule.minLength} characters\`;
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      return \`Maximum length is \${rule.maxLength} characters\`;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return 'Invalid format';
    }

    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  }, [rules]);

  const handleChange = useCallback((name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [validateField, touched]);

  const handleBlur = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField, values]);

  const validate = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(name => {
      const error = validateField(name, values[name] || '');
      newErrors[name] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    setTouched(Object.keys(rules).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    return isValid;
  }, [rules, values, validateField]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
    isValid: Object.values(errors).every(error => !error),
  };
}

// Usage example:
function ContactForm() {
  const { values, errors, touched, handleChange, handleBlur, validate } = useFormValidation(
    { name: '', email: '', message: '' },
    {
      name: { required: true, minLength: 2 },
      email: { 
        required: true, 
        pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
      },
      message: { required: true, minLength: 10 }
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder="Name"
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
      </div>
      
      <div>
        <input
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder="Email"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <textarea
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder="Message"
        />
        {touched.message && errors.message && <span>{errors.message}</span>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}`,
    tags: ['forms', 'validation', 'hooks', 'react'],
    featured: true,
    difficulty: 'advanced',
    createdAt: '2025-01-06',
  },
  {
    id: '7',
    title: 'Intersection Observer Hook',
    description: 'React hook for intersection observer with fade-in animations',
    language: 'javascript',
    code: `// Intersection Observer for fade-in animations
function createIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  return observer;
}

// Initialize observer
const fadeInObserver = createIntersectionObserver();

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
  elementsToAnimate.forEach(el => fadeInObserver.observe(el));
});

// CSS for animations
const animationStyles = \`
  .fade-in-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger animations */
  .fade-in-on-scroll:nth-child(1) { transition-delay: 0.1s; }
  .fade-in-on-scroll:nth-child(2) { transition-delay: 0.2s; }
  .fade-in-on-scroll:nth-child(3) { transition-delay: 0.3s; }
  .fade-in-on-scroll:nth-child(4) { transition-delay: 0.4s; }
\`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Usage: Add 'fade-in-on-scroll' class to any element
// <div class="fade-in-on-scroll">This will fade in on scroll</div>`,
    tags: ['intersection', 'animation', 'scroll', 'observer'],
    difficulty: 'intermediate',
    createdAt: '2025-01-07',
  },
  {
    id: '8',
    title: 'Responsive Grid Layout',
    description: 'Modern CSS Grid layout with responsive breakpoints',
    language: 'css',
    code: `/* Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Grid items */
.grid-item {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Advanced grid layouts */
.grid-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;
}

.grid-masonry .grid-item {
  display: flex;
  flex-direction: column;
}

/* Featured item spanning multiple columns */
.grid-item.featured {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .grid-item.featured {
    grid-column: span 1;
  }
}

/* Aspect ratio containers */
.aspect-ratio-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
}

.aspect-ratio-container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
    tags: ['grid', 'responsive', 'layout', 'css'],
    difficulty: 'intermediate',
    createdAt: '2025-01-08',
  },
  {
    id: '12',
    title: 'Basic HTML5 Template',
    description: 'A minimal HTML5 boilerplate for new projects.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`,
    tags: ['html5', 'template', 'boilerplate'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '13',
    title: 'Responsive Navbar',
    description: 'A responsive navigation bar with a hamburger menu for mobile.',
    language: 'html',
    code: `<nav class="navbar">
  <div class="container">
    <a href="#" class="brand">Brand</a>
    <input type="checkbox" id="toggle-menu" />
    <label for="toggle-menu" class="hamburger">&#9776;</label>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>`,
    tags: ['navbar', 'responsive', 'navigation'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '14',
    title: 'Sticky Header',
    description: 'A header that stays fixed at the top of the page when scrolling.',
    language: 'html',
    code: `<header class="sticky-header">
  <h1>Sticky Header</h1>
</header>
<main>
  <p>Content goes here...</p>
</main>`,
    tags: ['header', 'sticky', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '15',
    title: 'HTML Table with Zebra Stripes',
    description: 'A table with alternating row colors for better readability.',
    language: 'html',
    code: `<table class="zebra-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>alice@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>bob@example.com</td>
      <td>User</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>charlie@example.com</td>
      <td>Editor</td>
    </tr>
  </tbody>
</table>`,
    tags: ['table', 'zebra', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '16',
    title: 'HTML Contact Form',
    description: 'A simple contact form with name, email, and message fields.',
    language: 'html',
    code: `<form class="contact-form">
  <label>Name:<input type="text" name="name" required></label>
  <label>Email:<input type="email" name="email" required></label>
  <label>Message:<textarea name="message" required></textarea></label>
  <button type="submit">Send</button>
</form>`,
    tags: ['form', 'contact', 'input'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '17',
    title: 'Modal Structure',
    description: 'A basic modal dialog structure.',
    language: 'html',
    code: `<div class="modal" id="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>This is a modal window.</p>
  </div>
</div>`,
    tags: ['modal', 'dialog', 'popup'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '18',
    title: 'Accordion Layout',
    description: 'A simple accordion layout for collapsible content.',
    language: 'html',
    code: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-body">Content for section 1.</div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">Section 2</button>
    <div class="accordion-body">Content for section 2.</div>
  </div>
</div>`,
    tags: ['accordion', 'collapsible', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '19',
    title: 'Responsive Footer',
    description: 'A responsive footer with multiple columns.',
    language: 'html',
    code: `<footer class="footer">
  <div class="footer-container">
    <div class="footer-col">
      <h4>About</h4>
      <p>Short description here.</p>
    </div>
    <div class="footer-col">
      <h4>Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <p>email@example.com</p>
    </div>
  </div>
</footer>`,
    tags: ['footer', 'responsive', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '20',
    title: 'Semantic Article Layout',
    description: 'A semantic HTML5 article layout with header, main, and aside.',
    language: 'html',
    code: `<article>
  <header>
    <h2>Article Title</h2>
    <p>By Author - Date</p>
  </header>
  <section>
    <p>Main content goes here...</p>
  </section>
  <aside>
    <p>Related links or info</p>
  </aside>
  <footer>
    <p>Article footer</p>
  </footer>
</article>`,
    tags: ['article', 'semantic', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '21',
    title: 'Simple Login Form',
    description: 'A basic login form with username and password fields.',
    language: 'html',
    code: `<form class="login-form">
  <label>Username:<input type="text" name="username" required></label>
  <label>Password:<input type="password" name="password" required></label>
  <button type="submit">Login</button>
</form>`,
    tags: ['form', 'login', 'input'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '22',
    title: 'Gradient Background',
    description: 'A full-page linear gradient background.',
    language: 'css',
    code: `body {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #f472b6 100%);
}`,
    tags: ['background', 'gradient', 'color'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '23',
    title: 'Neumorphic Button',
    description: 'A soft, neumorphic-style button with subtle shadows.',
    language: 'css',
    code: `.neumorphic-btn {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #333;
  transition: box-shadow 0.2s;
}

.neumorphic-btn:active {
  box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;
}`,
    tags: ['neumorphism', 'button', 'shadow'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '24',
    title: 'Hover Zoom Effect',
    description: 'A smooth zoom-in effect on hover for images or cards.',
    language: 'css',
    code: `.zoom-hover {
  transition: transform 0.3s ease;
}

.zoom-hover:hover {
  transform: scale(1.08);
}`,
    tags: ['hover', 'zoom', 'effect'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '25',
    title: 'Pulse Animation',
    description: 'A simple pulse animation for attention-grabbing elements.',
    language: 'css',
    code: `.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`,
    tags: ['animation', 'pulse', 'effect'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '26',
    title: 'Flexbox Centering',
    description: 'Center any content both vertically and horizontally using Flexbox.',
    language: 'css',
    code: `.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
    tags: ['flexbox', 'center', 'layout'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '27',
    title: 'CSS Tooltip',
    description: 'A simple tooltip that appears on hover.',
    language: 'css',
    code: `.tooltip {
  position: relative;
  cursor: pointer;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`,
    tags: ['tooltip', 'hover', 'ui'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '28',
    title: 'Scroll Progress Bar',
    description: 'A fixed progress bar at the top of the page that fills as you scroll.',
    language: 'css',
    code: `.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 4px;
  background: linear-gradient(90deg, #4f46e5, #f472b6);
  z-index: 9999;
  transition: width 0.2s;
}`,
    tags: ['scroll', 'progress', 'bar'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '29',
    title: 'Copy to Clipboard Button',
    description: 'A button that copies text to the clipboard when clicked.',
    language: 'javascript',
    code: `// HTML
<button id="copyBtn">Copy Text</button>
<input id="copyInput" value="Copy this text!" readonly />

// JavaScript
const btn = document.getElementById('copyBtn');
const input = document.getElementById('copyInput');
btn.addEventListener('click', () => {
  input.select();
  document.execCommand('copy');
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy Text', 1500);
});`,
    tags: ['clipboard', 'button', 'copy'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '30',
    title: 'Toggle Dark Mode',
    description: 'A button to toggle dark mode on and off.',
    language: 'javascript',
    code: `// HTML
<button id="darkModeBtn">Toggle Dark Mode</button>

// JavaScript
document.getElementById('darkModeBtn').onclick = function() {
  document.body.classList.toggle('dark-mode');
};

// CSS
body.dark-mode {
  background: #18181b;
  color: #f4f4f5;
}`,
    tags: ['dark mode', 'toggle', 'theme'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '31',
    title: 'Scroll to Top Button',
    description: 'A button that appears on scroll and brings the user to the top.',
    language: 'javascript',
    code: `// HTML
<button id="scrollTopBtn" style="display:none;position:fixed;bottom:20px;right:20px;">↑ Top</button>

// JavaScript
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};`,
    tags: ['scroll', 'button', 'top'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '32',
    title: 'Countdown Timer',
    description: 'A simple countdown timer that updates every second.',
    language: 'javascript',
    code: `// HTML
<div id="timer">10</div>
<button id="startCountdown">Start</button>

// JavaScript
let time = 10;
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('startCountdown');
let interval;
startBtn.onclick = function() {
  clearInterval(interval);
  time = 10;
  timerEl.textContent = time;
  interval = setInterval(() => {
    time--;
    timerEl.textContent = time;
    if (time <= 0) clearInterval(interval);
  }, 1000);
};`,
    tags: ['timer', 'countdown', 'interval'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '33',
    title: 'Character Counter',
    description: 'Counts and displays the number of characters in a text input.',
    language: 'javascript',
    code: `// HTML
<input id="charInput" maxlength="50" />
<span id="charCount">0/50</span>

// JavaScript
const charInput = document.getElementById('charInput');
const charCount = document.getElementById('charCount');
charInput.addEventListener('input', () => {
  charCount.textContent = \`\${charInput.value.length}/50\`;
});`,
    tags: ['character', 'counter', 'input'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '34',
    title: 'Modal Toggle',
    description: 'Open and close a modal dialog with JavaScript.',
    language: 'javascript',
    code: `// HTML
<button id="openModal">Open Modal</button>
<div id="modal" style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0008;align-items:center;justify-content:center;">
  <div style="background:#fff;padding:2rem;border-radius:8px;min-width:200px;">
    <p>This is a modal!</p>
    <button id="closeModal">Close</button>
  </div>
</div>

// JavaScript
document.getElementById('openModal').onclick = function() {
  document.getElementById('modal').style.display = 'flex';
};
document.getElementById('closeModal').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};`,
    tags: ['modal', 'toggle', 'dialog'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '35',
    title: 'Accordion Toggle',
    description: 'Expand and collapse accordion sections with JavaScript.',
    language: 'javascript',
    code: `// HTML
<div class="accordion">
  <button class="accordion-header">Section 1</button>
  <div class="accordion-body" style="display:none;">Content 1</div>
  <button class="accordion-header">Section 2</button>
  <div class="accordion-body" style="display:none;">Content 2</div>
</div>

// JavaScript
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.onclick = function() {
    const body = this.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  };
});`,
    tags: ['accordion', 'toggle', 'collapse'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '36',
    title: 'Input Validation',
    description: 'Validate an input field and show a message if invalid.',
    language: 'javascript',
    code: `// HTML
<input id="emailInput" type="email" placeholder="Enter email" />
<span id="emailMsg"></span>

// JavaScript
const emailInput = document.getElementById('emailInput');
const emailMsg = document.getElementById('emailMsg');
emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailMsg.textContent = valid ? 'Valid email!' : 'Invalid email.';
  emailMsg.style.color = valid ? 'green' : 'red';
});`,
    tags: ['input', 'validation', 'form'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '37',
    title: 'Tabs Switcher',
    description: 'Switch between tabbed content panels.',
    language: 'javascript',
    code: `// HTML
<div class="tabs">
  <button class="tab-btn active" data-tab="1">Tab 1</button>
  <button class="tab-btn" data-tab="2">Tab 2</button>
  <button class="tab-btn" data-tab="3">Tab 3</button>
</div>
<div class="tab-content" id="tab-1">Content 1</div>
<div class="tab-content" id="tab-2" style="display:none;">Content 2</div>
<div class="tab-content" id="tab-3" style="display:none;">Content 3</div>

// JavaScript
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.onclick = function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById('tab-' + this.dataset.tab).style.display = 'block';
  };
});`,
    tags: ['tabs', 'switcher', 'ui'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '38',
    title: 'Typewriter Effect',
    description: 'A typewriter animation for text.',
    language: 'javascript',
    code: `// HTML
<div id="typewriter"></div>

// JavaScript
const text = 'Typewriter Effect!';
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById('typewriter').textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();`,
    tags: ['typewriter', 'animation', 'text'],
    difficulty: 'beginner',
    createdAt: '2024-06-08',
  },
  {
    id: '39',
    title: 'Responsive Navbar with Toggle',
    description: 'A responsive navigation bar with a hamburger toggle for mobile.',
    language: 'html',
    code: `<nav class="navbar">
  <div class="nav-container">
    <a href="#" class="logo">Brand</a>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
    <ul class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
<style>
.navbar { background: #4f46e5; padding: 0.5rem 0; }
.nav-container { display: flex; align-items: center; justify-content: space-between; max-width: 900px; margin: 0 auto; padding: 0 1rem; }
.logo { color: #fff; font-weight: bold; font-size: 1.2rem; text-decoration: none; }
.nav-menu { display: flex; gap: 1.5rem; list-style: none; margin: 0; }
.nav-menu a { color: #fff; text-decoration: none; font-weight: 500; }
.nav-toggle { display: none; }
.nav-toggle-label { display: none; cursor: pointer; }
.nav-toggle-label span, .nav-toggle-label span:before, .nav-toggle-label span:after { display: block; background: #fff; height: 3px; width: 28px; border-radius: 2px; position: relative; transition: all 0.3s; }
.nav-toggle-label span:before { content: ''; position: absolute; top: -8px; }
.nav-toggle-label span:after { content: ''; position: absolute; top: 8px; }
@media (max-width: 700px) {
  .nav-menu { display: none; flex-direction: column; background: #4f46e5; position: absolute; top: 56px; left: 0; width: 100%; padding: 1rem 0; }
  .nav-toggle:checked + .nav-toggle-label + .nav-menu { display: flex; }
  .nav-toggle-label { display: block; }
}
</style>`,
    tags: ['navbar', 'responsive', 'toggle', 'menu'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '40',
    title: 'Hamburger Menu',
    description: 'A hamburger menu icon that animates into an X when active.',
    language: 'html',
    code: `<button class="hamburger" id="hamburgerBtn" aria-label="Menu">
  <span></span>
  <span></span>
  <span></span>
</button>
<style>
.hamburger { display: inline-block; cursor: pointer; background: none; border: none; padding: 0; width: 40px; height: 40px; position: relative; }
.hamburger span { display: block; height: 4px; width: 28px; background: #4f46e5; margin: 6px auto; border-radius: 2px; transition: all 0.3s; }
.hamburger.active span:nth-child(1) { transform: translateY(10px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-10px) rotate(-45deg); }
</style>
<script>
document.getElementById('hamburgerBtn').onclick = function() {
  this.classList.toggle('active');
};
</script>`,
    tags: ['hamburger', 'menu', 'icon', 'toggle'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '41',
    title: 'Testimonial Slider',
    description: 'A simple testimonial slider with next/prev controls.',
    language: 'html',
    code: `<div class="testimonial-slider">
  <div class="testimonial active">"Great service!" - Alice</div>
  <div class="testimonial">"Loved the experience." - Bob</div>
  <div class="testimonial">"Highly recommend." - Carol</div>
  <button id="prevTestimonial">Prev</button>
  <button id="nextTestimonial">Next</button>
</div>
<style>
.testimonial-slider { max-width: 350px; margin: 0 auto; text-align: center; position: relative; }
.testimonial { display: none; font-size: 1.1rem; background: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; }
.testimonial.active { display: block; }
.testimonial-slider button { margin: 0 8px; padding: 6px 16px; background: #4f46e5; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
</style>
<script>
const testimonials = document.querySelectorAll('.testimonial');
let idx = 0;
function showTestimonial(i) {
  testimonials.forEach((t, j) => t.classList.toggle('active', j === i));
}
document.getElementById('prevTestimonial').onclick = function() {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  showTestimonial(idx);
};
document.getElementById('nextTestimonial').onclick = function() {
  idx = (idx + 1) % testimonials.length;
  showTestimonial(idx);
};
showTestimonial(idx);
</script>`,
    tags: ['testimonial', 'slider', 'carousel'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '42',
    title: 'Image Carousel',
    description: 'A basic image carousel with next/prev controls.',
    language: 'html',
    code: `<div class="carousel">
  <img class="carousel-img" src="https://placekitten.com/300/150" alt="1" />
  <img class="carousel-img" src="https://placekitten.com/301/150" alt="2" style="display:none;" />
  <img class="carousel-img" src="https://placekitten.com/302/150" alt="3" style="display:none;" />
  <button id="prevImg">Prev</button>
  <button id="nextImg">Next</button>
</div>
<style>
.carousel { max-width: 320px; margin: 0 auto; text-align: center; position: relative; }
.carousel-img { width: 100%; border-radius: 8px; margin-bottom: 1rem; }
.carousel button { margin: 0 8px; padding: 6px 16px; background: #4f46e5; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
</style>
<script>
const imgs = document.querySelectorAll('.carousel-img');
let imgIdx = 0;
function showImg(i) {
  imgs.forEach((img, j) => img.style.display = j === i ? 'block' : 'none');
}
document.getElementById('prevImg').onclick = function() {
  imgIdx = (imgIdx - 1 + imgs.length) % imgs.length;
  showImg(imgIdx);
};
document.getElementById('nextImg').onclick = function() {
  imgIdx = (imgIdx + 1) % imgs.length;
  showImg(imgIdx);
};
showImg(imgIdx);
</script>`,
    tags: ['carousel', 'image', 'slider'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '43',
    title: 'Step Progress Bar',
    description: 'A horizontal step progress bar with 4 steps.',
    language: 'html',
    code: `<div class="step-progress">
  <div class="step active">1</div>
  <div class="step">2</div>
  <div class="step">3</div>
  <div class="step">4</div>
</div>
<style>
.step-progress { display: flex; gap: 1rem; justify-content: center; margin: 2rem 0; }
.step { width: 36px; height: 36px; border-radius: 50%; background: #e5e7eb; color: #4f46e5; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; border: 2px solid #4f46e5; transition: background 0.3s; }
.step.active, .step:hover { background: #4f46e5; color: #fff; }
</style>`,
    tags: ['progress', 'steps', 'bar'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '44',
    title: 'Custom File Upload',
    description: 'A custom styled file upload input with label.',
    language: 'html',
    code: `<label class="file-upload">
  <input type="file" id="fileInput" style="display:none;" />
  <span id="fileLabel">Choose file</span>
</label>
<style>
.file-upload { display: inline-block; padding: 10px 24px; background: #4f46e5; color: #fff; border-radius: 6px; cursor: pointer; font-weight: 500; }
</style>
<script>
const fileInput = document.getElementById('fileInput');
const fileLabel = document.getElementById('fileLabel');
fileInput.onchange = function() {
  fileLabel.textContent = fileInput.files[0] ? fileInput.files[0].name : 'Choose file';
};
</script>`,
    tags: ['file', 'upload', 'input'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '45',
    title: 'Rating Star System',
    description: 'A 5-star rating system with interactive selection.',
    language: 'html',
    code: `<div class="star-rating">
  <span class="star" data-value="1">&#9733;</span>
  <span class="star" data-value="2">&#9733;</span>
  <span class="star" data-value="3">&#9733;</span>
  <span class="star" data-value="4">&#9733;</span>
  <span class="star" data-value="5">&#9733;</span>
</div>
<style>
.star-rating { display: flex; gap: 4px; font-size: 2rem; color: #e5e7eb; cursor: pointer; }
.star.selected, .star:hover, .star:hover ~ .star { color: #fbbf24; }
</style>
<script>
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.onclick = function() {
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < +star.dataset.value; i++) {
      stars[i].classList.add('selected');
    }
  };
});
</script>`,
    tags: ['rating', 'star', 'ui'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '46',
    title: 'Pagination UI',
    description: 'A simple pagination component with page numbers.',
    language: 'html',
    code: `<div class="pagination">
  <button class="page-btn">Prev</button>
  <button class="page-btn active">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn">Next</button>
</div>
<style>
.pagination { display: flex; gap: 6px; justify-content: center; margin: 1rem 0; }
.page-btn { padding: 6px 14px; border: none; border-radius: 4px; background: #e5e7eb; color: #4f46e5; font-weight: 500; cursor: pointer; transition: background 0.2s; }
.page-btn.active, .page-btn:hover { background: #4f46e5; color: #fff; }
</style>`,
    tags: ['pagination', 'ui', 'pages'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '47',
    title: 'Pricing Card',
    description: 'A modern pricing card with features and a call-to-action.',
    language: 'html',
    code: `<div class="pricing-card">
  <h3>Pro Plan</h3>
  <p class="price">$29/mo</p>
  <ul>
    <li>✔ Unlimited Projects</li>
    <li>✔ Priority Support</li>
    <li>✔ Advanced Analytics</li>
  </ul>
  <button class="cta">Get Started</button>
</div>
<style>
.pricing-card { max-width: 300px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 16px #0001; padding: 2rem; text-align: center; }
.pricing-card h3 { color: #4f46e5; margin-bottom: 0.5rem; }
.price { font-size: 2rem; color: #111; margin-bottom: 1rem; }
.pricing-card ul { list-style: none; padding: 0; margin: 1rem 0; color: #4b5563; }
.pricing-card li { margin-bottom: 0.5rem; }
.cta { background: #4f46e5; color: #fff; border: none; border-radius: 6px; padding: 10px 24px; font-size: 1rem; cursor: pointer; margin-top: 1rem; }
.cta:hover { background: #3730a3; }
</style>`,
    tags: ['pricing', 'card', 'ui'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '48',
    title: 'Newsletter Signup Form',
    description: 'A simple newsletter signup form with email input.',
    language: 'html',
    code: `<form class="newsletter-form">
  <input type="email" placeholder="Enter your email" required />
  <button type="submit">Subscribe</button>
</form>
<style>
.newsletter-form { display: flex; gap: 8px; max-width: 350px; margin: 0 auto; }
.newsletter-form input { flex: 1; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; }
.newsletter-form button { padding: 8px 18px; background: #4f46e5; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; }
.newsletter-form button:hover { background: #3730a3; }
</style>`,
    tags: ['newsletter', 'signup', 'form'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '49',
    title: 'Fade-in on Scroll',
    description: 'Elements fade in as they enter the viewport on scroll.',
    language: 'html',
    code: `<div class="fade-in-on-scroll">Fade me in!</div>
<div class="fade-in-on-scroll" style="margin-top: 200px;">Fade me in too!</div>
<style>
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s, transform 0.7s;
}
.fade-in-on-scroll.visible {
  opacity: 1;
  transform: none;
}
</style>
<script>
function onScrollFadeIn() {
  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
onScrollFadeIn();
</script>`,
    tags: ['fade', 'scroll', 'animation'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '50',
    title: 'Slide-in Sidebar',
    description: 'A sidebar that slides in from the left.',
    language: 'html',
    code: `<button id="openSidebar">Open Sidebar</button>
<div class="sidebar" id="sidebar">
  <button id="closeSidebar">×</button>
  <p>Sidebar content</p>
</div>
<style>
.sidebar {
  position: fixed;
  top: 0; left: -260px;
  width: 240px; height: 100vh;
  background: #4f46e5;
  color: #fff;
  padding: 2rem 1rem;
  box-shadow: 2px 0 12px #0002;
  transition: left 0.4s cubic-bezier(.4,0,.2,1);
  z-index: 100;
}
.sidebar.open { left: 0; }
.sidebar button { background: none; border: none; color: #fff; font-size: 1.5rem; position: absolute; top: 1rem; right: 1rem; cursor: pointer; }
</style>
<script>
const sidebar = document.getElementById('sidebar');
document.getElementById('openSidebar').onclick = () => sidebar.classList.add('open');
document.getElementById('closeSidebar').onclick = () => sidebar.classList.remove('open');
</script>`,
    tags: ['sidebar', 'slide', 'ui'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '51',
    title: 'Hover Reveal Text',
    description: 'Text is revealed with a smooth transition on hover.',
    language: 'html',
    code: `<div class="reveal-container">
  <span class="reveal-label">Hover me</span>
  <span class="reveal-text">Revealed text!</span>
</div>
<style>
.reveal-container { display: inline-block; position: relative; cursor: pointer; }
.reveal-text { opacity: 0; max-width: 0; overflow: hidden; white-space: nowrap; transition: opacity 0.4s, max-width 0.4s; color: #4f46e5; margin-left: 8px; }
.reveal-container:hover .reveal-text { opacity: 1; max-width: 200px; }
</style>`,
    tags: ['hover', 'reveal', 'text'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '52',
    title: 'Scroll-triggered Animations',
    description: 'Multiple elements animate in as you scroll down.',
    language: 'html',
    code: `<div class="scroll-anim anim-fade">Fade In</div>
<div class="scroll-anim anim-slide" style="margin-top: 120px;">Slide In</div>
<div class="scroll-anim anim-zoom" style="margin-top: 120px;">Zoom In</div>
<style>
.scroll-anim { opacity: 0; transform: translateY(40px); transition: all 0.7s; margin-bottom: 1.5rem; background: #f3f4f6; padding: 1rem 2rem; border-radius: 8px; text-align: center; }
.scroll-anim.visible { opacity: 1; transform: none; }
.anim-slide { transform: translateX(-60px); }
.anim-slide.visible { transform: none; }
.anim-zoom { transform: scale(0.7); }
.anim-zoom.visible { transform: scale(1); }
</style>
<script>
function onScrollAnim() {
  document.querySelectorAll('.scroll-anim').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollAnim);
onScrollAnim();
</script>`,
    tags: ['scroll', 'animation', 'trigger'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '53',
    title: 'Bounce on Hover',
    description: 'An element bounces when hovered.',
    language: 'css',
    code: `.bounce-hover {
  display: inline-block;
  transition: transform 0.2s;
}
.bounce-hover:hover {
  animation: bounce 0.6s;
}
@keyframes bounce {
  0%, 20%, 60%, 100% { transform: translateY(0); }
  40% { transform: translateY(-12px); }
  80% { transform: translateY(-6px); }
}
`,
    tags: ['bounce', 'hover', 'animation'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '54',
    title: 'CSS Keyframe Spinner',
    description: 'A simple CSS spinner using keyframes.',
    language: 'css',
    code: `.keyframe-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`,
    tags: ['spinner', 'keyframes', 'css'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '55',
    title: 'Infinite Scrolling Marquee',
    description: 'A horizontally scrolling infinite marquee effect.',
    language: 'css',
    code: `.marquee {
  width: 100%;
  overflow: hidden;
  background: #f3f4f6;
}
.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 8s linear infinite;
  font-size: 1.2rem;
  color: #4f46e5;
  padding: 8px 0;
}
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`,
    tags: ['marquee', 'scroll', 'animation'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '56',
    title: 'Blinking Text Animation',
    description: 'Text that blinks using CSS animation.',
    language: 'css',
    code: `.blinking-text {
  animation: blink 1s steps(2, start) infinite;
  color: #ef4444;
  font-weight: bold;
}
@keyframes blink {
  to { visibility: hidden; }
}
`,
    tags: ['blink', 'text', 'animation'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '57',
    title: 'Glowing Text Effect',
    description: 'A glowing effect for text using CSS.',
    language: 'css',
    code: `.glow-text {
  color: #fff;
  text-shadow: 0 0 8px #4f46e5, 0 0 16px #4f46e5, 0 0 32px #a5b4fc;
  font-weight: bold;
  background: #3730a3;
  padding: 8px 18px;
  border-radius: 8px;
}
`,
    tags: ['glow', 'text', 'effect'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  },
  {
    id: '58',
    title: 'Text Reveal on Hover',
    description: 'Text is revealed with a sliding mask on hover.',
    language: 'css',
    code: `.reveal-hover {
  position: relative;
  display: inline-block;
  color: #4f46e5;
  overflow: hidden;
}
.reveal-hover::after {
  content: '';
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  background: #fff;
  transition: transform 0.5s cubic-bezier(.4,0,.2,1);
  transform: translateX(0);
  z-index: 1;
}
.reveal-hover:hover::after {
  transform: translateX(100%);
}
.reveal-hover span {
  position: relative;
  z-index: 2;
}
`,
    tags: ['reveal', 'hover', 'text'],
    difficulty: 'intermediate',
    createdAt: '2024-06-08',
  }
];

export const categories = [
  {
    id: 'html',
    name: 'HTML',
    icon: 'FileText',
    color: 'bg-orange-500',
    description: 'Semantic HTML structures and modern markup patterns'
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'Palette',
    color: 'bg-blue-500',
    description: 'Styling solutions, animations, and responsive design'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'Code',
    color: 'bg-yellow-500',
    description: 'Vanilla JavaScript utilities and modern ES6+ features'
  },
  {
    id: 'react',
    name: 'React',
    icon: 'Component',
    color: 'bg-cyan-500',
    description: 'React components, hooks, and patterns'
  },
];