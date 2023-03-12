import React,{useState} from 'react'
import style from "./ResultPage.module.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ResultPage() {
  
    const [dataPackage,setDataPackage] = useState(JSON.parse(localStorage.getItem("packageData")) || [])
    const [showPackageData,setShowPackageData] =useState([])
    const [show,setShow] =useState(false)
    
console.log(showPackageData)

    function handleDelete( index){
       
            const confirmed = window.confirm("Are you sure you want to delete this item?");
            if (confirmed) {
                const newPackage=dataPackage.filter((item,i)=>
                i !== index
                )
                localStorage.setItem("packageData",JSON.stringify(newPackage))
                setDataPackage(newPackage)
            }   
    }
    function handleShowData( index){
                const showData=dataPackage.filter((item,i)=>
                i === index
                )
              
           setShowPackageData(showData)
           setShow(!show)
    }
    
  return (
    <div className={style.main}>
      <h1>Welcome to the favroite NPM Packages</h1>
      {show ? <> {showPackageData.map((item)=>
      <div className={style.container2}>
        <div>
        <h3>Package Name ➡️ {item.name}</h3> 
         <h5>discription ➡️ {item.discription}</h5>
        </div>
          <span onClick={()=>setShow(false)}><RemoveRedEyeIcon/></span> 
      </div>

      )} </> :      <div className={style.container}>
        {dataPackage.map((item,index)=>
        <div key={index} className={style.list}>
             <li>{item.name}</li>
             <div className={style.iconlist}>
              <span onClick={()=>handleShowData(index)}><RemoveRedEyeIcon/></span> 
              <span><EditIcon /></span>
              <span onClick={()=>handleDelete(index)}>< DeleteIcon /></span>
             </div>
        </div>
           
        )}
        </div>
         }
    
    </div>
  )
}

export default ResultPage
