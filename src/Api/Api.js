import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { packagedata } from '../Recoil/Recoil'

export  function Api() {
    const [data,setData ] =useSetRecoilState(packagedata)
    console.log(data)

    useEffect(()=>{
      fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((response)=>response.json())
      .then((data)=>setData(data))
      .catch((error)=>console.log(error))
    },[])
}




