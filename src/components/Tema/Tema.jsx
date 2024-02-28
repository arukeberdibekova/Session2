
import React, { useReducer } from "react";
import classes from '../App.module.css'
   const initialState={
    darkMode:false,
}


const reducer=(state,action)=>{
switch (action.type) {
    case "Theme":
        return {...state, darkMode: ! state.darkMode}
    default:        
        return state
}
}
const ChangeTema=()=>{
const [state,dispatch]=useReducer(reducer,initialState)

  const toggleTema=()=>{
    dispatch({type:"Theme"})
  }

    return(
        <div className={

            state.darkMode ? classes['blacker'] : classes["whiter"]
        }>
        <button onClick={toggleTema}>change</button>
         <h3 className={state.darkMode ? classes['black'] : classes['white']}>
            kjh
         </h3>
        </div>
    )
}

export default ChangeTema