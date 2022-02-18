import React,{useEffect} from 'react'
import request from 'superagent';
import {useSelector} from 'react-redux'

export default function BookOpened() {
    const volumeInfo = useSelector(state=>state.volumeInfo)
    console.log(volumeInfo)
 
 const categories = volumeInfo.categories ? volumeInfo.categories[0] : ''
 const thumbNail = volumeInfo.hasOwnProperty('imageLinks') === false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
 const publishYear = volumeInfo.hasOwnProperty('publishedDate') === false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
  return (
    <div className='cardFlex'>
    <div className="card-book" >
  <img src={thumbNail} alt=""/>
  </div>
  <div className="description">
      <h1>{categories}</h1>
    <h2>{volumeInfo.title}</h2>
    <h3>Author: {volumeInfo.authors}</h3>
    <p>Published: {publishYear === "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
  </div>
</div>
  )
}
