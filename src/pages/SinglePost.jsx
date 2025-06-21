import { useEffect, useState } from 'react';
import axios from '../api';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/SinglePost.css';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await axios.delete(`/posts/${id}`);
      alert('Deleted');
      navigate('/');
    } catch {
      alert('Unauthorized or failed to delete');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author?.email}</p>
      <button onClick={() => navigate(`/edit/${post._id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SinglePost;
