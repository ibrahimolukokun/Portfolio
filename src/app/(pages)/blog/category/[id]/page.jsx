import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getAllCategoriesIds, getCategoryData } from "@library/categories";
import { getCategoryPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const categoryData = await getSingleCategoryData(params);

  return {
    title: categoryData.title + " | Blog",
  }
}

async function BlogCategory( { params } ) {
  const posts = await getAllPosts((await params));
  const categoryData = await getSingleCategoryData((await params));

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
export default BlogCategory;

export async function generateStaticParams() {
    const paths = getAllCategoriesIds()
    return paths
}

async function getSingleCategoryData(params) {
    const categoryData = await getCategoryData((await params).id)

    if ( !categoryData ) {
        notFound()
    } else {
        return categoryData
    }
}

async function getAllPosts( params ) {
    const categoryPosts = await getCategoryPosts((await params).id)

    if (!categoryPosts.length) {
        notFound()
    }

    return categoryPosts
}