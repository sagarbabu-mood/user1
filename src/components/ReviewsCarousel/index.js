import {useState} from 'react'
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props

  const [count, setCount] = useState(0)

  const rightArrow = () => {
    setCount(index => (index === reviewsList.length - 1 ? index : count + 1))
  }
  const leftArrow = () => {
    setCount(index => (index === 0 ? index : count - 1))
  }
  const currentReview = reviewsList[count]
  return (
    <div className="review-container">
      <h1 className="review-heading">Reviews</h1>
      <div className="content-container">
        <button type="button" onClick={leftArrow} className="change-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="desc-container">
          <img src={currentReview.imgUrl} alt={reviewsList.username} />
          <p className="review-name">{currentReview.username}</p>
          <p className="review-company">{currentReview.companyName}</p>
          <p className="review-company">{currentReview.description}</p>
        </div>
        <button type="button" onClick={rightArrow} className="change-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
