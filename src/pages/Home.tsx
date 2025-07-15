import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Star, Zap, Users, ArrowRight } from 'lucide-react';
import { snippets, categories } from '../data/snippets';
import SnippetCard from '../components/SnippetCard';
import * as Icons from 'lucide-react';

export default function Home() {
  const featuredSnippets = snippets.filter(snippet => snippet.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Modern Web Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Code Snippets
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              High-quality, production-ready code snippets for HTML, CSS, JavaScript, and React. 
              Copy, paste, and customize for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/snippets"
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Browse Snippets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center px-8 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CodeVault?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to accelerate your web development workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Production Ready</h3>
              <p className="text-gray-400">
                All snippets are tested, optimized, and ready for production use
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
              <p className="text-gray-400">
                Copy with one click and paste directly into your projects
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-gray-400">
                Created by developers, for developers. Free and open source
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Technology</h2>
            <p className="text-gray-400">
              Find the perfect snippet for your tech stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              const count = snippets.filter(s => s.language === category.id).length;
              
              return (
                <Link
                  key={category.id}
                  to={`/snippets?category=${category.id}`}
                  className="group p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <span className="text-sm text-gray-400">{count} snippets</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Snippets */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Snippets</h2>
              <p className="text-gray-400">
                Hand-picked snippets from our collection
              </p>
            </div>
            <Link
              to="/snippets"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredSnippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Amazing Things?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of developers who use CodeVault to accelerate their projects
            </p>
            <Link
              to="/snippets"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}