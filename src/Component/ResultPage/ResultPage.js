import React,{useState} from 'react'
import style from "./ResultPage.module.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ResultPage() {
    
    const dataPackage=JSON.parse(localStorage.getItem("packageData")) || []

    function handleDelete( index){
        const newPackage=dataPackage.filter((item,i)=>
        i !== index
        )
        localStorage.setItem("packageData",JSON.stringify(newPackage))
    }
    
  return (
    <div className={style.main}>
      <h1>Welcome to the favroite NPM Packages</h1>
         <div className={style.container}>
        {dataPackage.map((item,index)=>
        <div key={index} className={style.list}>
             <li>{item.name}</li>
             <div className={style.iconlist}>
              <span ><RemoveRedEyeIcon/></span> 
              <span><EditIcon /></span>
              <span onClick={()=>handleDelete(index)}>< DeleteIcon /></span>
             </div>
        </div>
           
        )}
        </div>
    </div>
  )
}

export default ResultPage
