import { config } from '@/lib/server/config'

import Container from '@/components/Container'
import PostListItem from '@/components/PostListItem'
import Pagination from '@/components/Pagination'
import { getAllPosts } from 'lib/server/notion-api'

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / config.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) },
    })),
    fallback: true,
  }
}

export async function getStaticProps (context) {
  const { page } = context.params // Get Current Page No.
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(
    config.postsPerPage * (page - 1),
    config.postsPerPage * page,
  )
  const totalPosts = posts.length
  const showNext = page * config.postsPerPage < totalPosts
  return {
    props: {
      page, // Current Page
      postsToShow,
      showNext,
    },
    revalidate: 1,
  }
}

export default function PagePage ({ postsToShow, page, showNext }) {
  return (
    <Container>
      {postsToShow &&
        postsToShow.map(post => <PostListItem key={post.id} post={post}/>)}
      <Pagination page={page} showNext={showNext}/>
    </Container>
  )
}
