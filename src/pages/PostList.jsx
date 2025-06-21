import { useEffect, useState } from 'react';
import axios from '../api';
import { Link } from 'react-router-dom';
import '../styles/PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-card" key={post._id}>
          <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;

