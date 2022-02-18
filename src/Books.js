import React, { useState,useEffect } from 'react';
import BookList from './BookList';
import SearchBox from './SearchBox';
import request from 'superagent';
import {useDispatch,useSelector} from 'react-redux'


const Books =()=> {
     const dispatch =useDispatch()
     const totalItems = useSelector(state=>state.totalItems)
     console.log(totalItems)
    const[books,setBooks] = useState([])
    console.log(books)
    const [searchField,setSearchField] = useState('')
    const [sort,setSort] = useState('relevance')
    const [category,setCategory] = useState('all')
     const [start,setStart] = useState(1)

    const loadmoreHandler =()=>{
        setStart(prevst=>{
            return prevst + 30 
        }) 
    }

    const prevHandler=()=>{
        setStart(prevst=>{
            return prevst - 30
        })
    }

    const url = category === 'all' ?
    `https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=30&startIndex=${start === 1 ? 0 : start}&orderBy=${sort}` 
    :
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=30&startIndex=${start === 1 ? 0 : start}&orderBy=${sort}`
    

    const searchurl = category === 'all'?
    `https://www.googleapis.com/books/v1/volumes?q=search+terms+${searchField}&maxResults=30&startIndex=${start === 1 ? 0 : start}&orderBy=${sort}`
    :
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}+${searchField}&maxResults=30&startIndex=${start === 1 ? 0 : start}&orderBy=${sort}`

    useEffect(()=>{
        if(searchField.length !== 0){
            request
            .get(searchurl)
            .then((data) => {
                setBooks([...data.body.items])
                dispatch({type:'TOTALITEMS',totalItems:data.body.totalItems})
            })
        }else{
            request
        .get(url)
        .then((data) => {
            setBooks([...data.body.items])
            dispatch({type:'TOTALITEMS',totalItems:data.body.totalItems})
        })
        }
    },[url,sort,searchurl,searchField,dispatch])



    const handleSubmit = (e) => {
        e.preventDefault();
        request
            .get(searchurl)
            .then((data) => {
                console.log(data);
                setBooks( [...data.body.items] )
                // dispatch({type:'TOTALITEMS',totalItems:data.body.totalItems})
        })
    }

    const handleChange = (e) => {
        setSearchField(e.target.value )
    }

    const handleSort = (e) => {
        setSort(e.target.value);
    }
    
const handleChangeCategory =(e)=>{
   setCategory(e.target.value)
   dispatch({type:'CATEGORY',ctg:e.target.value})
}
    
        return (
            <div className="wrapper">
                <SearchBox 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    handleSort={handleSort}
                    handleChangeCategory={handleChangeCategory}
                    sort={sort}
                />
                <div style={{textAlign:'center',fontWeight:'bold',marginTop:'20px'}}>Found {totalItems} {totalItems === 1 ? 'result' : 'results'}</div>
                <BookList books={books}/>
                <div className="btnFlex">
                <button onClick={prevHandler} type='button'>Prev</button>
                <button onClick={loadmoreHandler} type='button'>Load more</button>
                </div>
            </div>
        );
    }

export default Books;
