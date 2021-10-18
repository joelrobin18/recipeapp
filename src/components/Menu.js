import React, {useEffect, useState} from 'react'
import MainMenu from './MainMenu'
import '../App.scss'
import SpecialDishes from './SpecialDishes'
import Filter from './Filter'

function Menu() {

    let[menu,setMenu]=useState([])
    let[categorymenu,setCategorymenu]=useState([])
    let[loading,setLoading]=useState(true)
    let[singleDish,setsingleDish]=useState([])

 const getallmenu = async()=>{
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let datacaller = await fetch(API_URL)
        let data = await datacaller.json()
        setMenu(data.meals)
        setLoading(false)
      }

 async function getallcat(){
     const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
     let catdatacaller=await fetch(API_URL)
     let catedata= await catdatacaller.json()
     setCategorymenu(catedata.categories)
 }





 async function getonedish(){
    const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    let catdatacaller=await fetch(API_URL)
    let SingleDish= await catdatacaller.json()
    setsingleDish(SingleDish.meals)
}


console.log(categorymenu)
    useEffect(()=>{
    getallmenu()
    getallcat()
    getonedish()
    }, [])

  /*  let menudetails = menu.map((item)=>{
        return(
            <div>
            <h1>{item.strCategory}</h1>    
            <h1>{item.strMeal}</h1> 
            <img src={item.strMealThumb} alt="" />
            </div>
            )
    })*/

    return (
        <div>
            <MainMenu/>
            { !loading ?  <SpecialDishes data={menu}/>: <h1>Loading</h1>}
            { !loading ?  <Filter catdata={categorymenu}
             allMenus={menu} 
             singleDish={singleDish}
             setsingleDish={setsingleDish}/> : null}
           
           
        </div>
    )
}

export default Menu

