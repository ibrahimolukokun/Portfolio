import CommentItem from "@components/post/CommentItem";

const PostComments = ({ items }) => {
  return (
    <>
        <div className="row mil-p-0-30">
            <div className="col-12 mil-mb60">
                <h2 className="mil-fs-42 mil-up">Comments (06)</h2>
            </div>
            <div className="col-12">
                <ul className="mil-comments">
                    {items.map((item, key) => (
                    <li key={`post-comments-item-${key}`}>
                        <CommentItem item={item} index={key} />
                        {item.children !== undefined &&
                        <ul>
                            {item.children.map((child, child_key) => (
                            <li key={`post-comment-item-${key}-child-${child_key}`}>
                                <CommentItem item={child} index={child_key} />
                            </li>
                            ))}
                        </ul>
                        }
                    </li>
                    ))}
                </ul>
            </div>
            <h2 className="mil-fs-42 mil-up mil-mb60">Leave a comment</h2>
            <form className="mil-form mil-soft">
                <div className="row">
                    <div className="col-6 mil-mb30">
                        <input type="text" placeholder="Name" className="mil-up" />
                    </div>
                    <div className="col-6 mil-mb30">
                        <input type="email" placeholder="Email" className="mil-up" />
                    </div>
                    <div className="col-12">
                        <textarea placeholder="Your message" className="mil-mb30 mil-up"></textarea>
                        <div className="mil-up"><button className="mil-btn mil-c-gone">Send Comment</button></div>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
};
export default PostComments;