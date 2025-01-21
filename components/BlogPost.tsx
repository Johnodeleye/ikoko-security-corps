'use client';

import { useEffect, useState } from 'react';
import Card from './Card';  
import SectionHeader from './SectionHeader';

interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  links: string[];
  createdAt: string;
}

interface ApiResponse {
  id: string;
  name: string;
  email: string;
  bio: string;
  posts: Post[];
}

const BlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://hubpost-app.vercel.app/api/authors/johnayomide920@gmail.com');
        if (!response.ok) throw new Error('Something went wrong!');
        
        const data: ApiResponse = await response.json();
        setPosts(data.posts.slice(0, 5)); 
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <p className="text-emerald-400 font-bold text-center text-2xl animate-pulse px-12">
        Loading posts...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 font-bold text-center text-2xl animate-pulse px-12">
        Error: {error}
      </p>
    );

  return (
    <div className="container mx-auto px-12 py-12">
      {/* Header Section */}
      <SectionHeader 
        title="Latest Blog Posts" 
        eyebrow="Discover New Insights" 
        description="Explore our recent posts and stay inspired with fresh content."
      />
      
      {/* Blog Post Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {posts.map((post) => (
          <li key={post.id}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
