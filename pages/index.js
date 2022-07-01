import Head from 'next/head'

import { PostCard, Categories, PostWidget, HeadCategories, FeaturedPostCard} from '../components'
import { getPosts } from '../services'


export default function Home({posts}) {
  return (
    <div>
      
      {/* blog name and favcon */}
      <Head>
        <title>JS-Blog</title>
        <link rel="stylesheet" href="/" />
      </Head>

      <div className='index'>
        <div className='index-cate'>
        <HeadCategories/>
        </div>

        <div className='index-mobile-responsive'>
          <div className='index-posts-map'>
            {posts.map((post) => 
              <PostCard post={post.node} key={post.title}/>
            )}
          </div>

            <div className='index-widgets-categories'>
              <PostWidget/>
              <Categories/>
            </div>
          </div>
      </div>

      <div className='index-featured'>
        <FeaturedPostCard/>
      </div>

    </div>
  )
}

export async function  getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: {posts},
  };
}