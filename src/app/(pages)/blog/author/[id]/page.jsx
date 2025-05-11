import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getAllAuthorsIds, getAuthorData } from "@library/authors";
import { getAuthorPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const authorData = await getSingleAuthorData(params);
  
  return {
    title: authorData.name + " | Author | Blog",
  }
}

async function BlogAuthor( { params } ) {
  const posts = await getAllPosts((await params));
  const authorData = await getSingleAuthorData((await params));

  return (
    <OkaiLayout>
      {/* blog */}
      <div className="mil-p-240-120 mil-992-p-150-120">
          <PaginatedBlog items={posts} limit={AppData.settings.perPage} />
      </div>
      {/* blog end */}
    </OkaiLayout>
  );
};
export default BlogAuthor;

export async function generateStaticParams() {
    const paths = getAllAuthorsIds()
    return paths
}

async function getSingleAuthorData(params) {
    const authorData = await getAuthorData((await params).id)

    if ( !authorData ) {
        notFound()
    } else {
        return authorData
    }
}

async function getAllPosts( params ) {
    const authorPosts = await getAuthorPosts((await params).id)

    if (!authorPosts.length) {
        notFound()
    }

    return authorPosts
}