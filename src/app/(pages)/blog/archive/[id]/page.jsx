import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getAllArchivesIds, getArchiveData } from "@library/archives";
import { getArchivePosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const archiveData = await getSingleArchiveData((await params));
  
  return {
    title: archiveData.month+', '+archiveData.year + " | Archive | Blog",
  }
}

async function BlogArchive( { params } ) {
  const posts = await getAllPosts(params);
  const archiveData = await getSingleArchiveData(params);

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
export default BlogArchive;

export async function _generateStaticParams() {
    const paths = getAllArchivesIds()
    return paths
}

async function getSingleArchiveData(params) {
    const archiveData = await getArchiveData((await params).id)

    if ( !archiveData ) {
        notFound()
    } else {
        return archiveData
    }
}

async function getAllPosts( params ) {
    const archivePosts = await getArchivePosts((await params).id)

    if (!archivePosts.length) {
        notFound()
    }

    return archivePosts
}