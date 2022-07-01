import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories,PostWidget, HeadCategories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="categories-slug-main">
      
     
        <div className="categories-slug-header">
        <HeadCategories/>
        </div>

      <div className='index-mobile-responsive'>
        
        <div className="categories-slug-posts">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
       
          <div className="categories-slug-categories">
            <PostWidget/>
            <Categories />
          </div>

        </div>
     
        
      
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}