import React from 'react';
import { useRouter } from 'next/router';

import {getPosts, getPostsDetails} from '../../services';
import {PostDescription, HeadCategories, Categories, PostWidget, Author, Comment,CommentForm, Loader} from '../../components';

const PostDetails = ({post}) =>{
    const router = useRouter();
    console.log(post);

  if (router.isFallback) {
    return <Loader />;
  }

    return(
        <>
           <div className='desc-slug-main'>

            <div className='desc-slug-header'>
              <HeadCategories/>
            </div>

            <div className="desc-slug-posts">
                <PostDescription post={post}/>
                <Author author={post.author}/>
                <CommentForm slug={post.slug}/>
                <Comment slug={post.slug}/>
            </div>

            <div className='desc-slug-second'>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                <Categories/>
            </div>

           </div>
        </>
    )
}

export default PostDetails;

export async function getStaticProps({params}){
   
  const data = await getPostsDetails(params.slug)

  return{
    props: {post: data},
  };

}

export async function getStaticPaths(){
  const posts = await getPosts();

  return{
      paths: posts.map(({node: {slug}}) => ({params: {slug}})),
      fallback: false,
  }
}