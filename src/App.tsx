import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Snippets from './pages/Snippets';
import Categories from './pages/Categories';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snippets" element={<Snippets />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 CodeVault. Made with ❤️ for developers by developers.
              </p>
              <div className="mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contribute
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;