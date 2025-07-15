import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { snippets } from '../data/snippets';
import { CodeSnippet } from '../types';
import SnippetCard from '../components/SnippetCard';
import CategoryFilter from '../components/CategoryFilter';
import { Filter, Grid, List } from 'lucide-react';

// TEMP: Only show selected CSS snippets for live preview
const previewSnippetTitles = [
  'Gradient Background',
  'Neumorphic Button',
  'Hover Zoom Effect',
  'Pulse Animation',
  'Flexbox Centering',
  'CSS Tooltip',
  'Scroll Progress Bar',
];
const filteredSnippets = snippets.filter(
  s => previewSnippetTitles.includes(s.title)
);

export default function Snippets() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Handle URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  // Filter and sort snippets
  useEffect(() => {
    let filtered = [...snippets]; // Use original snippets for full filtering

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(snippet => snippet.language === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(snippet => snippet.difficulty === selectedDifficulty);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(snippet =>
        snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort snippets
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'difficulty':
        const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
        filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
    }

    // setFilteredSnippets(filtered); // This line is removed as filteredSnippets is now a constant
  }, [selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Code Snippets</h1>
          <p className="text-gray-400">
            Discover {snippets.length} high-quality code snippets
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              snippets={snippets}
            />

            {/* Difficulty Filter */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Difficulty</h3>
              <div className="space-y-2">
                {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search snippets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">Title</option>
                  <option value="difficulty">Difficulty</option>
                </select>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Snippets Grid */}
            {snippets.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'lg:grid-cols-2' : 'grid-cols-1'
              }`}>
                {snippets.map((snippet) => (
                  <SnippetCard key={snippet.id} snippet={snippet} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto opacity-50" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No snippets found</h3>
                <p className="text-gray-400">
                  Try adjusting your search or filters to find more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}