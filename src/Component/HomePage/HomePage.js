import React, { useState ,useEffect } from 'react'
import style from "./HomePage.module.css"
import { useNavigate } from 'react-router-dom'




function HomePage() {
    const navigate=useNavigate()
const [data,setData] = useState([])
const [more,setMore] = useState(3)


const [text,setText] = useState("")
const [input ,setInput] = useState("")
const [showmore,setShowMore] = useState(true)

const [packages,setPackage] = useState("")


const saveData={
    name:packages,
    discription:text,
}

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
function handleSubmit(){
const dataPackage=JSON.parse(localStorage.getItem("packageData")) || []
let  data=[...dataPackage,saveData]
localStorage.setItem("packageData",JSON.stringify(data))
setText("")
alert("ho gaya bhai")
navigate("/ResultPage")
}
function handleChange(e){
    setPackage(e.target.value)
}

  console.log()

  return (
    <div  className={style.main}>
          <input  className={style.search} value={input} onChange={(e)=>setInput(e.target.value)} placeholder='search your favroite package'></input>
       
          <div className={style.package}>
          <h4>Result</h4>
        {data.slice(0,more).filter((item)=>
        {return item.package.name.toLowerCase().includes(input.toLowerCase()) }
        ).map((item ,index)=>
        <div  key={index}>

            <li>
            <input value={item.package.name}  onChange={handleChange} className={style.radiobtn} type="radio" id="package"  />
             <label for="package">{item.package.name}</label>
            </li>
           
        </div>
        )}
          {showmore ?  <button onClick={getAllData}>ShowMore</button> :    <button onClick={getlessData}>Showless</button>  }
        </div>
        <div className={style.textareabox}>
        <label>why is this your fav?</label>
        <textarea value={text} onChange={((e)=>setText(e.target.value))} className={style.textarea}  placeholder='write here' /> 
        <button onClick={handleSubmit} className={style.btn}>Submit</button>
        </div>
      
    </div>
  )
}

export default HomePage
