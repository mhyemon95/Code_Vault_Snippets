import React from 'react';
import { categories } from '../data/snippets';
import { CodeSnippet } from '../types';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  snippets: CodeSnippet[];
}

export default function CategoryFilter({ selectedCategory, onCategoryChange, snippets }: CategoryFilterProps) {
  const getSnippetCount = (categoryId: string) => {
    if (categoryId === 'all') return snippets.length;
    return snippets.filter(snippet => snippet.language === categoryId).length;
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <span>All Snippets</span>
          <span className="text-sm">{getSnippetCount('all')}</span>
        </button>
        
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          const count = getSnippetCount(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <IconComponent className="h-4 w-4" />
                <span>{category.name}</span>
              </div>
              <span className="text-sm">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}