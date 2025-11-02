import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

const Blog = ({onNavigate}) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React Hooks",
      content: "React Hooks are a powerful feature that allows you to use state and other React features without writing classes. They simplify code and make it more reusable...",
      author: "John Doe",
      date: "March 15, 2024",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      likes: 24,
      comments: 8,
      isEditing: false
    },
    {
      id: 2,
      title: "Modern CSS Techniques for 2024",
      content: "CSS has evolved significantly over the years. With new features like Grid, Flexbox, and CSS Variables, we can create amazing layouts with less code...",
      author: "Jane Smith",
      date: "March 12, 2024",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&h=250&fit=crop",
      likes: 18,
      comments: 5,
      isEditing: false
    },
    {
      id: 3,
      title: "Building REST APIs with Node.js",
      content: "Node.js combined with Express makes it incredibly easy to build robust REST APIs. In this post, we'll explore best practices and common patterns...",
      author: "Mike Johnson",
      date: "March 10, 2024",
      category: "Node.js",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      likes: 31,
      comments: 12,
      isEditing: false
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    image: ''
  });

  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleEdit = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isEditing: !post.isEditing } : post
    ));
  };

  const handleSave = (id, updatedPost) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...updatedPost, isEditing: false } : post
    ));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleCreate = () => {
    const newPostObj = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: "You",
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      category: newPost.category,
      image: newPost.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
      likes: 0,
      comments: 0,
      isEditing: false
    };

    setPosts([newPostObj, ...posts]);
    setNewPost({ title: '', content: '', category: '', image: '' });
    setShowCreateForm(false);
  };

  const sharePost = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content.substring(0, 100) + '...',
        url: window.location.href,
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${post.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="blog" className="blog-section">
      <div className="container">
       <button 
              className="btn btn-outline-secondary mb-4"
              onClick={() => onNavigate('home')}
            >
              ← Back to Home
            </button>
      
        {/* Header */}
        
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title animate-fade-in">My Blog</h2>
            <p className="section-subtitle animate-fade-in">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>
        </div>

        {/* Create New Post Button */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <button 
              className="btn btn-primary btn-create"
              onClick={() => setShowCreateForm(!showCreateForm)}
            >
              <i className="fas fa-plus me-2"></i>
              {showCreateForm ? 'Cancel' : 'Create New Post'}
            </button>
          </div>
        </div>

        {/* Create New Post Form */}
        {showCreateForm && (
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="create-post-card animate-slide-up">
                <h4>Create New Post</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category (e.g., React, CSS, Node.js)"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="url"
                    className="form-control"
                    placeholder="Image URL (optional)"
                    value={newPost.image}
                    onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your post content here..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  className="btn btn-success"
                  onClick={handleCreate}
                  disabled={!newPost.title || !newPost.content}
                >
                  Publish Post
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="row">
          {posts.map((post, index) => (
            <div key={post.id} className="col-lg-6 mb-4">
              <div 
                className="blog-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-badge">{post.category}</div>
                </div>

                {/* Post Content */}
                <div className="blog-content">
                  {post.isEditing ? (
                    <div className="edit-form">
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={post.title}
                        onChange={(e) => {
                          const updated = {...post, title: e.target.value};
                          setPosts(posts.map(p => p.id === post.id ? updated : p));
                        }}
                      />
                      <textarea
                        className="form-control mb-2"
                        rows="3"
                        value={post.content}
                        onChange={(e) => {
                          const updated = {...post, content: e.target.value};
                          setPosts(posts.map(p => p.id === post.id ? updated : p));
                        }}
                      />
                      <div className="edit-actions">
                        <button 
                          className="btn btn-success btn-sm"
                          onClick={() => handleSave(post.id, post)}
                        >
                          Save
                        </button>
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleEdit(post.id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.content}</p>
                    </>
                  )}

                  {/* Post Meta */}
                  <div className="blog-meta">
                    <div className="author-info">
                      <span className="author">By {post.author}</span>
                      <span className="date">{post.date}</span>
                    </div>
                    
                    <div className="post-stats">
                      <span className="likes">
                        <i className="fas fa-heart"></i> {post.likes}
                      </span>
                      <span className="comments">
                        <i className="fas fa-comment"></i> {post.comments}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  {!post.isEditing && (
                    <div className="blog-actions">
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => handleEdit(post.id)}
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => sharePost(post)}
                      >
                        <i className="fas fa-share"></i> Share
                      </button>
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <button className="btn btn-outline-primary">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;