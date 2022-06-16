import React, { useEffect, useState } from 'react'
import AboutToCarusela from './aboutToCarusela'
import FrontrunnerRecipes from './frontrunnerRecipes'

export default function About() {

    const [currentPage, setCurrentPage] = useState(1)
    const [numPages, setNumPages] = useState(2)

    useEffect(()=>{
        const aaa = setInterval(() => {
            setCurrentPage((val=>(val+ 0.5)%numPages+1) )
        }, 3500)
    }, [])

    function show(){
        if(currentPage==0)
            return <FrontrunnerRecipes></FrontrunnerRecipes>
        if(currentPage==1)
            return <AboutToCarusela></AboutToCarusela>
    }

    return (
        <>
        <h1>{currentPage}</h1>
      {currentPage ==1 &&  <FrontrunnerRecipes></FrontrunnerRecipes>}
      {currentPage ==2 && <AboutToCarusela></AboutToCarusela>}
       
        </>
    )
}