import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching( async() => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comerror] = useFetching( async (e) => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
    // console.log(comments);
    // comments.map(e => {
    //   console.log(e.email);
    // })

  })

  useEffect(()=> {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h1>Вы открыли страницу поста с ID={params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isComLoading
        ? <Loader/>
        :<div>
          
          {comments.map(comm =>
            <div style = {{marginTop: 15}}>
              <h5>{comm.email}fd</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default PostIdPage;