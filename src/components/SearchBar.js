
import React, {useState} from "react";
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa";
import {AiOutlineCloseCircle} from "react-icons/ai";

function SearchBar({data}) {
     const [filtereddata, setfilteredData]=useState([])
    const [enteredWord, sertEnteredWord]=useState("")
     const handleData=(event)=>{
      

        const searchWord = event.target.value;
        sertEnteredWord(searchWord);
        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
       if (searchWord===""){
        setfilteredData([])
       }else{
        setfilteredData(newFilter)
       }
            
     }
const close=()=>{
  setfilteredData([])
  sertEnteredWord("")
}
return (
<div className="inputcon">
    
    <div className="searchInput-con">
        <input  className="input" type="text" value={enteredWord} onChange={handleData} />
        <div className="searchIcon">
             {enteredWord.length!==0 ?(<AiOutlineCloseCircle  onClick={close}/>):(<FaSearch />)}
        </div>
          
    </div>
        
        <div className="data" >
            {filtereddata.slice(0,6).map((each)=>{
           return <p>{each.title }</p>
            }
           )}
        </div>
</div>
   
)
    
}

export default SearchBar