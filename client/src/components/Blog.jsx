import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

const Blog = ({ onNavigate }) => {
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
      isEditing: false,
      originalData: null // Store original data for cancel
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
      isEditing: false,
      originalData: null
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
      isEditing: false,
      originalData: null
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    image: ''
  });

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingStates, setEditingStates] = useState({});

  // Improved Edit Function
  const handleEdit = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        // Store original data before editing
        return { 
          ...post, 
          isEditing: true,
          originalData: { ...post } // Store a copy of original data
        };
      }
      return post;
    }));
  };

  // Improved Save Function
  const handleSave = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const updatedPost = {
          ...post,
          isEditing: false,
          originalData: null, // Clear original data
          date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) // Update date when edited
        };
        return updatedPost;
      }
      return post;
    }));
  };

  // Improved Cancel Function
  const handleCancel = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id && post.originalData) {
        // Restore original data
        return { ...post.originalData, isEditing: false };
      }
      return post;
    }));
  };

  // Handle field changes during editing
  const handleEditFieldChange = (id, field, value) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, [field]: value } : post
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCreate = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

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
      category: newPost.category || 'General',
      image: newPost.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
      likes: 0,
      comments: 0,
      isEditing: false,
      originalData: null
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
      navigator.clipboard.writeText(`${post.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
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
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter post title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., React, CSS, Node.js"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://example.com/image.jpg"
                    value={newPost.image}
                    onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Content *</label>
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Write your post content here..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  ></textarea>
                </div>
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-success"
                    onClick={handleCreate}
                    disabled={!newPost.title.trim() || !newPost.content.trim()}
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Publish Post
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancel
                  </button>
                </div>
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
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={post.title}
                          onChange={(e) => handleEditFieldChange(post.id, 'title', e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input
                          type="text"
                          className="form-control"
                          value={post.category}
                          onChange={(e) => handleEditFieldChange(post.id, 'category', e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                          type="url"
                          className="form-control"
                          value={post.image}
                          onChange={(e) => handleEditFieldChange(post.id, 'image', e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          value={post.content}
                          onChange={(e) => handleEditFieldChange(post.id, 'content', e.target.value)}
                        />
                      </div>
                      <div className="edit-actions d-flex gap-2">
                        <button 
                          className="btn btn-success btn-sm"
                          onClick={() => handleSave(post.id)}
                          disabled={!post.title.trim() || !post.content.trim()}
                        >
                          <i className="fas fa-check me-1"></i>
                          Save
                        </button>
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleCancel(post.id)}
                        >
                          <i className="fas fa-times me-1"></i>
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
                      {post.author === "You" && <span className="badge bg-primary ms-2">Your Post</span>}
                    </div>
                    
                    <div className="post-stats">
                      <button 
                        className="btn-like"
                        onClick={() => likePost(post.id)}
                        disabled={post.isEditing}
                      >
                        <i className="fas fa-heart"></i> {post.likes}
                      </button>
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
                        <i className="fas fa-edit me-1"></i> Edit
                      </button>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => sharePost(post)}
                      >
                        <i className="fas fa-share me-1"></i> Share
                      </button>
                      {post.author === "You" && (
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <i className="fas fa-trash me-1"></i> Delete
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="empty-state">
                <i className="fas fa-blog fa-3x mb-3 text-muted"></i>
                <h4>No posts yet</h4>
                <p>Create your first blog post to get started!</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowCreateForm(true)}
                >
                  Create First Post
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Load More */}
        {posts.length > 0 && (
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center">
              <button className="btn btn-outline-primary">
                <i className="fas fa-sync me-2"></i>
                Load More Posts
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;