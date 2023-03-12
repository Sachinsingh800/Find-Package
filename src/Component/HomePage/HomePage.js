import React, { useState ,useEffect } from 'react'
import style from "./HomePage.module.css"




function HomePage() {
const [data,setData] = useState([])
const [more,setMore] = useState(3)
const [storeTxt,setStoreTxt] = useState([])
const [packages,setPackage] = useState("")
console.log(packages,"sjhdkjahjkhdjhs")

const [text,setText] = useState("")
const [input ,setInput] = useState("")
const [showmore,setShowMore] = useState(true)


    useEffect(()=>{
        fetch("https://api.npms.io/v2/search?q=reactjs")
        .then((response)=>response.json())
        .then((data)=>setData(data.results  ))
        .catch((error)=>console.log(error))
      },[])
function getAllData(){
    setMore(25)
    setShowMore(!showmore)
}
function getlessData(){
    setMore(3)
    setShowMore(!showmore)
}
function handleText(){
  setStoreTxt([text,...storeTxt])
  setText("")
}

  return (
    <div  className={style.main}>
          <input  className={style.search} value={input} onChange={(e)=>setInput(e.target.value)} placeholder='search your favroite package'></input>
       
          <div className={style.package}>
          <h4>Result</h4>
        {data.slice(0,more).filter((item)=>
        {return item.package.name.toLowerCase().includes(input.toLowerCase()) }
        ).map((item ,i)=>
        <div  key={i}>

            <li>
            <input value={packages}  onChange={(e)=>setPackage(e.target.value)} className={style.radiobtn} type="radio" id="package"  />
             <label for="package">{item.package.name}</label>
            </li>
           
        </div>
        )}
          {showmore ?  <button onClick={getAllData}>ShowMore</button> :    <button onClick={getlessData}>Showless</button>  }
        </div>
        <div className={style.textareabox}>
        <label>why is this your fav?</label>
        <textarea value={text} onChange={((e)=>setText(e.target.value))} className={style.textarea}  placeholder='write here' /> 
        <button onClick={handleText} className={style.btn}>Submit</button>
        </div>
      
    </div>
  )
}

export default HomePage
