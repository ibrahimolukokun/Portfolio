const ProductReviewItem = ({ item, index }) => {
    const stars = [ '', '', '', '', '' ];
        
    return (
        <>
            <div className="mil-comment mil-up">
                <div className="mil-avatar"><img src={item.image} alt={item.name} /></div>
                <div className="mil-comment-text">
                    <h6 className="mil-mb15 mil-fs20">{item.name}</h6>
                    <p className="mil-fs14 mil-mb30">{item.date}</p>
                    <p className="mil-text" dangerouslySetInnerHTML={{__html : item.text}} />
                    <div className="mil-reply">
                        <div className="mil-stars">
                            {stars.slice(0, item.rating).map((star_item, star_key) => (
                            <span key={`testimonial-item-${index}-rating-star-${star_key}`}><i className="fas fa-star"></i></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductReviewItem;