import React from 'react';
import { Link } from 'react-router-dom';
import { categories, snippets } from '../data/snippets';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Categories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of code snippets organized by technology. 
            Find the perfect solution for your development needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            const categorySnippets = snippets.filter(s => s.language === category.id);
            const featuredSnippets = categorySnippets.filter(s => s.featured);
            
            return (
              <div key={category.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300">
                {/* Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                      <p className="text-gray-400">{categorySnippets.length} snippets available</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  
                  <Link
                    to={`/snippets?category=${category.id}`}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View All Snippets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Featured Snippets */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Featured Snippets</h3>
                  {featuredSnippets.length > 0 ? (
                    <div className="space-y-3">
                      {featuredSnippets.slice(0, 3).map((snippet) => (
                        <div key={snippet.id} className="p-3 bg-gray-700 rounded-lg">
                          <h4 className="font-medium text-white mb-1">{snippet.title}</h4>
                          <p className="text-gray-400 text-sm">{snippet.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-400">No featured snippets yet</p>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="px-6 py-4 bg-gray-700/50 border-t border-gray-700">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Difficulty levels:</span>
                    <div className="flex space-x-2">
                      {['beginner', 'intermediate', 'advanced'].map((level) => {
                        const count = categorySnippets.filter(s => s.difficulty === level).length;
                        return count > 0 ? (
                          <span key={level} className="capitalize">
                            {level}: {count}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gray-800 rounded-lg border border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Collection Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{snippets.length}</div>
              <div className="text-gray-400">Total Snippets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{categories.length}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {snippets.filter(s => s.featured).length}
              </div>
              <div className="text-gray-400">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {new Set(snippets.flatMap(s => s.tags)).size}
              </div>
              <div className="text-gray-400">Unique Tags</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}