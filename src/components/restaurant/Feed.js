import React, {useState} from 'react';

import './Restaurant.css'

const Feed = ({vendor}) => {
    const [showReviews, setShowReviews] = useState(false);


    const [isLoading, setIsLoading] = useState(false);

    let posts = [{
        id: 1,
        caption: 'offer offer',
        time: new Date("2023-09-03T20:15:00"),
        logo: 'https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp',
        likes: 500,
        comments: [{
            id: 101, name: "John Doe", time: new Date("2023-09-03T20:15:00"), body: "johndoe",
        }]
    }, {
        id: 2,
        caption: 'offer offer',
        time: new Date("2023-09-03T20:15:00"),
        logo: 'https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp',
        likes: 500,
        comments: [{
            id: 101, name: "John Doe", body: "johndoe",
        }, {
            id: 103, name: "Jane Doe", time: new Date("2023-09-03T20:15:00"), body: "janedoe",
        }]
    },];
    const reviews = [{
        name: 'John Doe',
        time: '2023-09-05T10:30:00',
        body: 'Great place to eat! The food was delicious.',
        image: 'https://example.com/john-doe-avatar.jpg',
        rate: 4.5,
    }, {
        name: 'Alice Smith',
        time: '2023-09-04T15:45:00',
        body: 'I had an amazing experience. Highly recommended!',
        image: 'https://example.com/alice-smith-avatar.jpg',
        rate: 5.0,
    }]


    function PostCard({time, image, caption, likes, comments}) {
        const [showComments, setShowComments] = useState(false);
        return (<div className="card p-3 m-3 shadow w-50 mx-auto">
            <small>{new Date(time).toLocaleString()}</small>
            <img src={image} alt="Post Image"/>
            <p className="mt-3">{<caption>{caption}</caption>}</p>
            <div className="card-footer">
                <div>
                    <i className="far fa-heart"></i> {likes}
                </div>
                <div>
                    <i className="far fa-comment" onClick={() => {
                        showComments === true ? setShowComments(false) : setShowComments(true)
                    }}></i> {comments.length}
                </div>
                <div>
                    <i className="fas fa-share"></i>
                </div>
            </div>
            {showComments && (<CommentOverlay comments={comments} onClose={() => {
                setShowComments(false)
            }}/>)}
        </div>);
    }

    function CommentOverlay({comments}) {
        const [commentInput, setCommentInput] = useState('');
        return (<div className="comment-overlay">
            <h6>Comments</h6>
            {comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment p-3 mb-3 bg-light border rounded">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="font-weight-bold">{comment.name}</h6>
                        </div>
                        <div className="col-4 text-right">
                            <small className="text-muted">{new Date(comment.time).toLocaleString()}</small>
                        </div>
                    </div>
                    <p>{comment.body}</p>
                </div>))}
            <form>
                <div className="input-group">
                    <input className="form-control rounded-pill" type="text" value={commentInput}
                           onChange={(e) => setCommentInput(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn" type="submit">
                            <i className="far fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </form>

        </div>);
    }

    function ReviewOverlay({}) {
        return (<div className="review-overlay w-50 z-3">
            <h6>Reviews</h6>
            {reviews.map((review, reviewIndex) => (
                <div key={reviewIndex} className="comment p-3 mb-3 bg-light border rounded">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="font-weight-bold">{review.name}</h6>
                        </div>
                        <div className="col-4 text-right">
                            <small className="text-muted">{new Date(review.time).toLocaleString()}</small>
                        </div>
                    </div>
                    <img src={review.image} alt="Post Image"/>
                    <small>{review.rate}</small>
                    <p className="mt-3">{<caption>{review.body}</caption>}</p>
                    <p>{review.body}</p>
                </div>))}
        </div>);
    }

    function ReviewCard({time, name, image, caption, rate}) {
        return (<div className="card p-2 m-2 shadow mx-auto">
            <div className="row">
                <div className="col-8">
                    <h6 className="font-weight-bold">@{name}</h6>
                </div>
                <div className="col-4 text-right">
                    <small className="text-muted">{new Date(time).toLocaleString()}</small>
                </div>
            </div>
            <img src={image} alt="Post Image"/>
            <small>{rate}</small>
            <p className="mt-3">{<caption>{caption}</caption>}</p>
        </div>);
    }

    return (<div className="row mt-5">
        <div className="col-4">
            <div>
                <h4>{vendor.name}</h4>
                <p><i className="far fa-star"></i><i className="fas fa-star"></i> {vendor.rating}/5</p>
                <p><i className="far fa-clock"></i> {vendor.hours}</p>
                <p><i className="fas fa-location-dot"></i> {vendor.address}</p>
            </div>

            <div>
                <h5>What people are saying</h5>
                <small type={`button`} onClick={() => setShowReviews(true)}>View all</small>
                {reviews.slice(0, 5).map((review, reviewIndex) => (
                    <div key={reviewIndex}>
                        <ReviewCard
                            time={review.time}
                            image={review.image}
                            body={review.body}
                            name={review.name}
                            rate={review.rate}
                        />
                    </div>))}
            </div>
        </div>

        <div className="col-8">
            {posts.map((post, postIndex) => (<div key={postIndex}>
                <PostCard
                    time={post.time}
                    image={post.logo}
                    caption={post.caption}
                    likes={post.likes}
                    comments={post.comments}
                />
            </div>))}
        </div>

    </div>)
}

export default Feed