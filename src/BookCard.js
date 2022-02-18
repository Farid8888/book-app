import React from 'react';
import {useNavigate,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'



const BookCard = (props) => {
  const dispatch = useDispatch()
  console.log(props.info.id)
  const navigate = useNavigate()
    const { volumeInfo } = props.info;
    const {title, authors} = props.info.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') === false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') === false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;

    const bookOpenHandler =()=>{
      localStorage.setItem('key',props.info.id)
    }
    return (
      <Link to={`/book/${props.info.id}`}>
      <div className="card-container" onClick={bookOpenHandler}>
        <img src={thumbNail} alt=""/>
        <div className="desc">
          <h2>{title}</h2>
          <h3>Author: {authors}</h3>
          <p>Published: {publishYear === "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
        </div>
      </div>
      </Link>
      
    );
}

export default BookCard;
