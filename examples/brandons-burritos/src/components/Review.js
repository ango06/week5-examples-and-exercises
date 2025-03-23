const Review = (props) => {
    const review = props.review_prop;
    const star = "⭐";
    return (
        <div className="review">
            <h3 className="name">{review.name}<br />{star.repeat(review.starCount)}</h3>
            <h5 className="experience">{review.experience}</h5>
            <p className="explanation">{review.explanation}</p>
        </div>
    );
}

export default Review;


