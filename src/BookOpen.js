import React,{useEffect,useState,memo}  from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import request from 'superagent';
import BookOpened from './BookOpened';


export default memo(function BookOpen() {
  const query =useParams()
  const dispatch = useDispatch()
  const key = localStorage.getItem('key')
  console.log(key)
 
  useEffect(()=>{
    request
    .get(`https://www.googleapis.com/books/v1/volumes/${key}`)
    .then((data) => {
        dispatch({type:'FETCH',volumeInfo:data.body.volumeInfo})
    })
  },[key,dispatch])
 

  return (
    <div className='cardFlex'>
  <BookOpened/>
</div>
  )
})
