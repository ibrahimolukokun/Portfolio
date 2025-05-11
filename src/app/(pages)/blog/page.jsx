import PaginatedBlog from '@components/PaginatedBlog';

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedPostsData } from "@library/posts";

export const metadata = {
  title: {
        default: "Blog",
    },
  description: AppData.settings.siteDescription,
};

async function Blog() {
  const postsData = await getAllPosts();

  return (
    <OkaiLayout>
      {/* blog */}
      <div className="mil-p-240-120 mil-992-p-150-120">
          <PaginatedBlog items={postsData.posts} limit={AppData.settings.perPage} />
      </div>
      {/* blog end */}
    </OkaiLayout>
  );
};
export default Blog;

async function getAllPosts() {
  const posts = getSortedPostsData();

  return {
    posts: posts
  }
}