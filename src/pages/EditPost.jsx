import { useEffect, useState } from 'react';
import axios from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditPost.css';

function EditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/posts/${id}`, { title, content });
      alert('Post updated');
      navigate('/');
    } catch {
      alert('Unauthorized or error updating');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditPost;
