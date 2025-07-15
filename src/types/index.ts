export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: 'html' | 'css' | 'javascript' | 'react';
  code: string;
  tags: string[];
  featured?: boolean;
  author?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}