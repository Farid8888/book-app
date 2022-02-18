


const initialState={
   volumeInfo:{},
   totalItems:''
}


const Reducer =(state=initialState,action)=>{
    if(action.type === 'FETCH'){
        return {...state,volumeInfo:action.volumeInfo}
    }
    if(action.type === 'TOTALITEMS'){
        return {...state,totalItems:action.totalItems}
    }
 
    return state
}
export default Reducer
