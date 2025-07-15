import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Maximize2, Minimize2 } from 'lucide-react';

interface LivePreviewProps {
  code: string;
  language: string;
  title: string;
}

export default function LivePreview({ code, language, title }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!iframeRef.current || !isVisible) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    
    if (!iframeDoc) return;

    let htmlContent = '';

    switch (language) {
      case 'html':
        // For HTML snippets, wrap in a complete document
        htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preview</title>
            <style>
              body { 
                margin: 0; 
                padding: 20px; 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #f8fafc;
              }
              * { box-sizing: border-box; }
            </style>
          </head>
          <body>
            ${code}
          </body>
          </html>
        `;
        break;

      case 'css':
        // For CSS snippets, create a demo with the styles applied
        htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CSS Preview</title>
            <style>
              body { 
                margin: 0; 
                padding: 20px; 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #f8fafc;
              }
              ${code}
            </style>
          </head>
          <body>
            ${getCSSPreviewHTML(code, title)}
          </body>
          </html>
        `;
        break;

      case 'javascript':
        // For JavaScript snippets, create a demo environment
        htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>JavaScript Preview</title>
            <style>
              body { 
                margin: 0; 
                padding: 20px; 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #f8fafc;
              }
              .demo-container {
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
            </style>
          </head>
          <body>
            ${getJavaScriptPreviewHTML(code, title)}
            <script>
              try {
                ${code}
              } catch (error) {
                document.body.innerHTML += '<div style="color: red; padding: 10px; background: #fee; border-radius: 4px; margin-top: 10px;">Error: ' + error.message + '</div>';
              }
            </script>
          </body>
          </html>
        `;
        break;

      default:
        return;
    }

    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();
  }, [code, language, title, isVisible]);

  const getCSSPreviewHTML = (cssCode: string, title: string) => {
    // Generate appropriate HTML based on the CSS content
    if (cssCode.includes('.btn-')) {
      return `
        <div style="padding: 20px; background: #f8fafc;">
          <h3 style="margin-bottom: 20px; color: #374151;">Button Collection</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
            <button class="btn-base btn-gradient">Gradient</button>
            <button class="btn-base btn-neon">Neon Glow</button>
            <button class="btn-base btn-slide">Slide Up</button>
            <button class="btn-base btn-bounce">Bounce</button>
            <button class="btn-base btn-ripple">Ripple</button>
          </div>
        </div>
      `;
    }
    
    if (cssCode.includes('.glass-card')) {
      return `
        <div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px; display: flex; align-items: center; justify-content: center;">
        <div class="glass-card">
          <h3>Glassmorphism Card</h3>
          <p>This is a beautiful glassmorphism card effect with backdrop blur and subtle transparency.</p>
        </div>
        </div>
      `;
    }
    
    if (cssCode.includes('.spinner')) {
      return `
        <div class="spinner-container">
          <div class="spinner-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="spinner-container">
          <div class="spinner-ring"></div>
        </div>
        <div class="spinner-container">
          <div class="spinner-pulse"></div>
        </div>
      `;
    }

    if (cssCode.includes('.grid-container')) {
      return `
        <div class="grid-container">
          <div class="grid-item">
            <h3>Card 1</h3>
            <p>This is a sample card in the responsive grid layout.</p>
          </div>
          <div class="grid-item">
            <h3>Card 2</h3>
            <p>Another card demonstrating the grid system.</p>
          </div>
          <div class="grid-item featured">
            <h3>Featured Card</h3>
            <p>This card spans multiple columns on larger screens.</p>
          </div>
          <div class="grid-item">
            <h3>Card 4</h3>
            <p>More content in the grid layout.</p>
          </div>
        </div>
      `;
    }

    if (cssCode.includes('background: linear-gradient') && cssCode.includes('body')) {
      // Gradient Background
      return `
        <div style="height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #f472b6 100%); border-radius: 12px;">
          Gradient Background Demo
        </div>
      `;
    }
    if (cssCode.includes('.neumorphic-btn')) {
      return `
        <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
          <button class="neumorphic-btn">Neumorphic Button</button>
        </div>
      `;
    }
    if (cssCode.includes('.zoom-hover')) {
      return `
        <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
          <img class="zoom-hover" src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&q=80' alt='Zoom Demo' style='width:120px; height:120px; border-radius:12px; box-shadow:0 2px 8px #0002;' />
        </div>
      `;
    }
    if (cssCode.includes('.pulse')) {
      return `
        <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
          <div class="pulse" style="width: 60px; height: 60px; background: #6366f1; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">Pulse</div>
        </div>
      `;
    }
    if (cssCode.includes('.flex-center')) {
      return `
        <div class="flex-center" style="height: 200px; background: #f3f4f6; border-radius: 12px;">
          <span style="font-size: 1.2rem; color: #4f46e5;">Centered Content</span>
        </div>
      `;
    }
    if (cssCode.includes('.tooltip')) {
      return `
        <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
          <span class="tooltip" style="font-size: 1.1rem;">Hover me
            <span class="tooltip-text">Tooltip text</span>
          </span>
        </div>
      `;
    }
    if (cssCode.includes('.scroll-progress-bar')) {
      return `
        <div style="height: 200px; overflow-y: scroll; position: relative; background: #f3f4f6; border-radius: 12px;">
          <div class="scroll-progress-bar" id="progressBar"></div>
          <div style="height: 600px; padding: 16px;">
            <h4>Scroll this area</h4>
            <p>As you scroll, the progress bar at the top fills up.</p>
            <p style="margin-top: 400px;">Keep scrolling...</p>
          </div>
          <script>
            const container = document.currentScript.parentElement;
            const bar = container.querySelector('.scroll-progress-bar');
            container.addEventListener('scroll', function() {
              const scrollTop = container.scrollTop;
              const scrollHeight = container.scrollHeight - container.clientHeight;
              const percent = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;
              bar.style.width = percent + '%';
            });
          </script>
        </div>
      `;
    }

    // Default preview for other CSS
    return `
      <div style="padding: 20px;">
        <h3>CSS Preview</h3>
        <p>This preview shows the CSS styles applied. The actual implementation may vary based on your HTML structure.</p>
        <div class="demo-element" style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
          Sample element with applied styles
        </div>
      </div>
    `;
  };

  const getJavaScriptPreviewHTML = (jsCode: string, title: string) => {
    if (jsCode.includes('ProgressBar')) {
      return `
        <div class="demo-container">
          <h3>Progress Bar Demo</h3>
          <p>Animated progress bars with different configurations:</p>
          
          <div style="margin: 20px 0;">
            <h4 style="margin-bottom: 10px; color: #374151;">Skills Progress (75%)</h4>
            <div id="progress1"></div>
          </div>
          
          <div style="margin: 20px 0;">
            <h4 style="margin-bottom: 10px; color: #374151;">Project Completion (60%)</h4>
            <div id="progress2"></div>
          </div>
          
          <div style="margin: 20px 0;">
            <h4 style="margin-bottom: 10px; color: #374151;">Loading Progress (90%)</h4>
            <div id="progress3"></div>
          </div>
        </div>
      `;
    }
    
    if (jsCode.includes('scroll-to-top')) {
      return `
        <div class="demo-container">
          <h3>Scroll to Top Demo</h3>
          <p>Scroll down to see the scroll-to-top button appear.</p>
          <div style="height: 1000px; background: linear-gradient(to bottom, #e2e8f0, #cbd5e1); padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p>Keep scrolling...</p>
            <div style="margin-top: 400px;">
              <p>The scroll-to-top button should appear when you scroll down 300px.</p>
            </div>
            <div style="margin-top: 400px;">
              <p>Click the button to smoothly scroll back to the top!</p>
            </div>
          </div>
        </div>
      `;
    }

    if (jsCode.includes('IntersectionObserver')) {
      return `
        <div class="demo-container">
          <h3>Intersection Observer Demo</h3>
          <p>Scroll down to see elements fade in as they come into view.</p>
          <div style="height: 200px;"></div>
          <div class="fade-in-on-scroll" style="padding: 20px; background: #e2e8f0; margin: 20px 0; border-radius: 8px;">
            <h4>Element 1</h4>
            <p>This element will fade in when scrolled into view.</p>
          </div>
          <div class="fade-in-on-scroll" style="padding: 20px; background: #ddd6fe; margin: 20px 0; border-radius: 8px;">
            <h4>Element 2</h4>
            <p>This element will fade in with a delay.</p>
          </div>
          <div class="fade-in-on-scroll" style="padding: 20px; background: #fecaca; margin: 20px 0; border-radius: 8px;">
            <h4>Element 3</h4>
            <p>This element will fade in last.</p>
          </div>
          <div style="height: 200px;"></div>
        </div>
      `;
    }

    if (title === 'Copy to Clipboard Button') {
      return `
        <div>
          <input id="copyInput" value="Copy this text!" readonly style="padding:8px; border:1px solid #ccc; border-radius:4px; margin-right:8px;" />
          <button id="copyBtn" style="padding:8px 16px;">Copy Text</button>
        </div>
        <script>
          const btn = document.getElementById('copyBtn');
          const input = document.getElementById('copyInput');
          btn.addEventListener('click', () => {
            input.select();
            document.execCommand('copy');
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy Text', 1500);
          });
        </script>
      `;
    }
    if (title === 'Toggle Dark Mode') {
      return `
        <div>
          <button id="darkModeBtn" style="padding:8px 16px;">Toggle Dark Mode</button>
        </div>
        <script>
          document.getElementById('darkModeBtn').onclick = function() {
            document.body.classList.toggle('dark-mode');
          };
        </script>
        <style>
          body.dark-mode {
            background: #18181b !important;
            color: #f4f4f5 !important;
          }
        </style>
      `;
    }
    if (title === 'Scroll to Top Button') {
      return `
        <div style="height: 300px; overflow-y: scroll; border: 1px solid #eee; border-radius: 8px; position: relative;">
          <div style="height: 600px; padding: 16px;">
            <p>Scroll down to see the button...</p>
            <p style="margin-top: 500px;">Bottom of content</p>
          </div>
          <button id="scrollTopBtn" style="display:none;position:absolute;bottom:20px;right:20px;">↑ Top</button>
        </div>
        <script>
          const container = document.currentScript.parentElement;
          const scrollBtn = container.querySelector('#scrollTopBtn');
          container.onscroll = function() {
            scrollBtn.style.display = container.scrollTop > 200 ? 'block' : 'none';
          };
          scrollBtn.onclick = function() {
            container.scrollTo({ top: 0, behavior: 'smooth' });
          };
        </script>
      `;
    }
    if (title === 'Countdown Timer') {
      return `
        <div>
          <div id="timer" style="font-size:2rem; margin-bottom:8px;">10</div>
          <button id="startCountdown" style="padding:8px 16px;">Start</button>
        </div>
        <script>
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
          };
        </script>
      `;
    }
    if (title === 'Character Counter') {
      return `
        <div>
          <input id="charInput" maxlength="50" style="padding:8px; border:1px solid #ccc; border-radius:4px;" />
          <span id="charCount" style="margin-left:8px;">0/50</span>
        </div>
        <script>
          const charInput = document.getElementById('charInput');
          const charCount = document.getElementById('charCount');
          charInput.addEventListener('input', () => {
            charCount.textContent = charInput.value.length + '/50';
          });
        </script>
      `;
    }
    if (title === 'Modal Toggle') {
      return `
        <div>
          <button id="openModal" style="padding:8px 16px;">Open Modal</button>
          <div id="modal" style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0008;align-items:center;justify-content:center;z-index:10;">
            <div style="background:#fff;padding:2rem;border-radius:8px;min-width:200px;">
              <p>This is a modal!</p>
              <button id="closeModal">Close</button>
            </div>
          </div>
        </div>
        <script>
          document.getElementById('openModal').onclick = function() {
            document.getElementById('modal').style.display = 'flex';
          };
          document.getElementById('closeModal').onclick = function() {
            document.getElementById('modal').style.display = 'none';
          };
        </script>
      `;
    }
    if (title === 'Accordion Toggle') {
      return `
        <div class="accordion">
          <button class="accordion-header" style="padding:8px 16px;">Section 1</button>
          <div class="accordion-body" style="display:none; padding:8px 0;">Content 1</div>
          <button class="accordion-header" style="padding:8px 16px;">Section 2</button>
          <div class="accordion-body" style="display:none; padding:8px 0;">Content 2</div>
        </div>
        <script>
          const headers = document.querySelectorAll('.accordion-header');
          headers.forEach(header => {
            header.onclick = function() {
              const body = this.nextElementSibling;
              body.style.display = body.style.display === 'block' ? 'none' : 'block';
            };
          });
        </script>
      `;
    }
    if (title === 'Input Validation') {
      return `
        <div>
          <input id="emailInput" type="email" placeholder="Enter email" style="padding:8px; border:1px solid #ccc; border-radius:4px;" />
          <span id="emailMsg" style="margin-left:8px;"></span>
        </div>
        <script>
          const emailInput = document.getElementById('emailInput');
          const emailMsg = document.getElementById('emailMsg');
          emailInput.addEventListener('input', () => {
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
            emailMsg.textContent = valid ? 'Valid email!' : 'Invalid email.';
            emailMsg.style.color = valid ? 'green' : 'red';
          });
        </script>
      `;
    }
    if (title === 'Tabs Switcher') {
      return `
        <div>
          <div class="tabs" style="margin-bottom:8px;">
            <button class="tab-btn active" data-tab="1" style="padding:8px 16px;">Tab 1</button>
            <button class="tab-btn" data-tab="2" style="padding:8px 16px;">Tab 2</button>
            <button class="tab-btn" data-tab="3" style="padding:8px 16px;">Tab 3</button>
          </div>
          <div class="tab-content" id="tab-1">Content 1</div>
          <div class="tab-content" id="tab-2" style="display:none;">Content 2</div>
          <div class="tab-content" id="tab-3" style="display:none;">Content 3</div>
        </div>
        <script>
          const tabBtns = document.querySelectorAll('.tab-btn');
          tabBtns.forEach(btn => {
            btn.onclick = function() {
              document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
              document.getElementById('tab-' + this.dataset.tab).style.display = 'block';
            };
          });
        </script>
      `;
    }
    if (title === 'Typewriter Effect') {
      return `
        <div>
          <div id="typewriter" style="font-size:1.2rem; font-family:monospace;"></div>
        </div>
        <script>
          const text = 'Typewriter Effect!';
          let i = 0;
          function type() {
            if (i < text.length) {
              document.getElementById('typewriter').textContent += text.charAt(i);
              i++;
              setTimeout(type, 100);
            }
          }
          type();
        </script>
      `;
    }
    if (title === 'Responsive Navbar with Toggle') {
      return `
        <nav class="navbar">
          <div class="nav-container">
            <a href="#" class="logo">Brand</a>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
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
        </style>
      `;
    }
    if (title === 'Hamburger Menu') {
      return `
        <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
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
        </script>
      `;
    }
    if (title === 'Testimonial Slider') {
      return `
        <div class="testimonial-slider">
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
        </script>
      `;
    }
    if (title === 'Image Carousel') {
      return `
        <div class="carousel">
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
        </script>
      `;
    }
    if (title === 'Step Progress Bar') {
      return `
        <div class="step-progress">
          <div class="step active">1</div>
          <div class="step">2</div>
          <div class="step">3</div>
          <div class="step">4</div>
        </div>
        <style>
          .step-progress { display: flex; gap: 1rem; justify-content: center; margin: 2rem 0; }
          .step { width: 36px; height: 36px; border-radius: 50%; background: #e5e7eb; color: #4f46e5; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; border: 2px solid #4f46e5; transition: background 0.3s; }
          .step.active, .step:hover { background: #4f46e5; color: #fff; }
        </style>
      `;
    }
    if (title === 'Custom File Upload') {
      return `
        <label class="file-upload">
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
        </script>
      `;
    }
    if (title === 'Rating Star System') {
      return `
        <div class="star-rating">
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
        </script>
      `;
    }
    if (title === 'Pagination UI') {
      return `
        <div class="pagination">
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
        </style>
      `;
    }
    if (title === 'Pricing Card') {
      return `
        <div class="pricing-card">
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
        </style>
      `;
    }
    if (title === 'Newsletter Signup Form') {
      return `
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
        <style>
          .newsletter-form { display: flex; gap: 8px; max-width: 350px; margin: 0 auto; }
          .newsletter-form input { flex: 1; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; }
          .newsletter-form button { padding: 8px 18px; background: #4f46e5; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; }
          .newsletter-form button:hover { background: #3730a3; }
        </style>
      `;
    }

    // Default preview for other JavaScript
    return `
      <div class="demo-container">
        <h3>JavaScript Demo</h3>
        <p>This JavaScript code has been executed. Check the browser console for any output.</p>
        <div id="demo-output" style="margin-top: 15px; padding: 10px; background: #f1f5f9; border-radius: 4px; font-family: monospace;"></div>
      </div>
    `;
  };

  // Don't render preview for React snippets as they need a different approach
  if (language === 'react') {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-300">Live Preview</h4>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            title={isVisible ? 'Hide preview' : 'Show preview'}
          >
            {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          {isVisible && (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
      
      {isVisible && (
        <div className={`bg-white rounded-lg border border-gray-600 overflow-hidden ${
          isFullscreen ? 'fixed inset-4 z-50' : 'h-64'
        }`}>
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            title={`Preview of ${title}`}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}
    </div>
  );
}