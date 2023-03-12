import React from 'react'
import style from "./ResultPage.module.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ResultPage() {
    const dataPackage=JSON.parse(localStorage.getItem("packageData")) || []
  return (
    <div className={style.main}>
      <h1>Welcome to the favroite NPM Packages</h1>
         <div className={style.container}>
        {dataPackage.map((item)=>
        <div className={style.list}>
             <li>{item.name}</li>
             <div className={style.iconlist}>
               <RemoveRedEyeIcon/>
               <EditIcon />
               <DeleteIcon />
             </div>
        </div>
           
        )}
        </div>
    </div>
  )
}

export default ResultPage
