import React from 'react';


const SearchBox = (props) => {

    return (
        <div className="search-area">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="Search books" type="text"/>
            <button type="submit">Search</button>
        </form>
        <div className="selectFlex">
            <div className='sel'>
            <select defaultValue='relevance' onChange={props.handleSort} >
                <option value="newest">Newest</option>
                <option value="relevance">Relevance </option>
            </select>
            </div>
            <div>
            <select defaultValue='all' onChange={props.handleChangeCategory} >
                 <option value="all">All</option>
                 <option value="art">Art</option>
                 <option value="biography">Biography</option>
                 <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
            </div>
        </div>
        </div>
      
    );
}

export default SearchBox;
