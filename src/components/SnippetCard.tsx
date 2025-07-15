import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Star, Calendar, User } from 'lucide-react';
import { CodeSnippet } from '../types';
import LivePreview from './LivePreview';

interface SnippetCardProps {
  snippet: CodeSnippet;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function SnippetCard({ snippet, isExpanded = false, onToggle }: SnippetCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'html':
        return 'bg-orange-500';
      case 'css':
        return 'bg-blue-500';
      case 'javascript':
        return 'bg-yellow-500';
      case 'react':
        return 'bg-cyan-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLanguageColor(snippet.language)}`}>
                {snippet.language.toUpperCase()}
              </span>
              <span className={`text-xs font-medium ${getDifficultyColor(snippet.difficulty)}`}>
                {snippet.difficulty}
              </span>
              {snippet.featured && (
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{snippet.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{snippet.description}</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{snippet.createdAt}</span>
              </div>
              {snippet.author && (
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{snippet.author}</span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Code */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Code Section */}
        <div className="relative border-r border-gray-700">
          <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
            <span className="text-xs font-medium text-gray-300">Code</span>
          </div>
          <div className="max-h-96 overflow-auto">
            <SyntaxHighlighter
              language={snippet.language === 'react' ? 'jsx' : snippet.language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                backgroundColor: '#1f2937',
                fontSize: '0.875rem',
              }}
              showLineNumbers={true}
              wrapLines={true}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        </div>
        
        {/* Preview Section */}
        <div className="relative">
          <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
            <span className="text-xs font-medium text-gray-300">Live Preview</span>
          </div>
          <div className="h-96 overflow-auto bg-gray-50">
            {snippet.language !== 'react' ? (
              <LivePreview 
                code={snippet.code} 
                language={snippet.language} 
                title={snippet.title}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚛️</div>
                  <p className="text-sm">React components require a development environment</p>
                  <p className="text-xs mt-1">Copy the code to use in your React project</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}