const CommentItem = ({ item, index }) => {
  return (
    <>
      <div className="mil-comment mil-up">
          <div className="mil-avatar"><img src={item.avatar} alt={item.name} /></div>
          <div className="mil-comment-text">
              <h6 className="mil-mb15 mil-fs20">{item.name}</h6>
              <p className="mil-fs14 mil-mb30">{item.date}</p>
              <p className="mil-text" dangerouslySetInnerHTML={{__html : item.text}} />
              <a href="#." className="mil-reply"><i className="fas fa-reply-all"></i> Reply</a>
          </div>
      </div>
    </>
  );
};
export default CommentItem;
  