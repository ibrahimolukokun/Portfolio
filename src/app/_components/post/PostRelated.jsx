import Image from 'next/image';

const PostRelated = ({ posts, currentPost }) => {

  //prev next navigation
  let prev = { "id": 0, "key": 0, "image": 0, "title": "" }
  let next = { "id": 0, "key": 0, "image": 0, "title": "" }
  let first = { "id": 0, "image": 0, "title": '' }
  let last = { "id": 0, "image": 0, "title": '' }

  posts.forEach(function(item, key){
    if ( item.id == currentPost.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  posts.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; prev.title = item.title; prev.image = item.image; }
    if ( key == next.key ) { next.id = item.id; next.title = item.title; next.image = item.image; }
    if ( key == 0 ) { first.id = item.id; first.title = item.title; first.image = item.image; }
    if ( key == posts.length-1 ) { last.id = item.id; last.title = item.title; last.image = item.image; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; prev.title = last.title; prev.image = last.image; }
  if ( next.key == posts.length ) { next.id = first.id; next.title = first.title; next.image = first.image; }

  return (
    <>
      <div className="row mil-p-0-30">
        <div className="col-12 mil-mb60">
            <h2 className="mil-fs-42 mil-up">You may also like</h2>
        </div>
        {prev.id != 0 &&
        <div className="col-lg-6">
            <a href={`/blog/${prev.id}`} className="mil-blog-card mil-mb60 mil-c-read">
                <div className="mil-card-cover mil-up">
                    <div className="mil-hover-frame">
                        <Image src={prev.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={prev.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                    </div>
                    <div className="mil-hover-overlay"></div>
                </div>
                <h4 className="mil-text mil-fs20 mil-up">{prev.title}</h4>
            </a>
        </div>
        }
        {next.id != 0 &&
        <div className="col-lg-6">
            <a href={`/blog/${next.id}`} className="mil-blog-card mil-mb60 mil-c-read">
                <div className="mil-card-cover mil-up">
                    <div className="mil-hover-frame">
                        <Image src={next.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={next.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                    </div>
                    <div className="mil-hover-overlay"></div>
                </div>
                <h4 className="mil-text mil-fs20 mil-up">{next.title}</h4>
            </a>
        </div>
        }
      </div>
    </>
  );
};
export default PostRelated;