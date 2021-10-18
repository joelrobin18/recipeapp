import React from 'react'

function SpecialDishes(props) {
    console.log(props.data);

    let maxspcl=10;

    let specialmenu = props.data.map((menuItem,index)=> {
        if(index<maxspcl)
        {
            return(
                <li className="list1">
                <img class="img1"src={menuItem.strMealThumb} alt="" />
                <h6>{menuItem.strMeal}</h6>
            </li>
           
            )
        }

    })
   {/*let specialmenu1 = props.data.map((menuItem,index)=> {
        if(index>maxspcl&&index<11)
        {
            return(
                <li className="list1">
                <img class="img1"src={menuItem.strMealThumb} alt="" />
                <h6>{menuItem.strMeal}</h6>
            </li>
           
            )
        }

    }) */}


    return (
     <div className="container-fluid">
         <div className="specialdishes col-lg-12 col-md-6">
               <div className="specialdishes-content text-center col-lg-12 col-md-6 col-sm-6">               
                <h1>Our Special Dishes</h1>
               </div>
               <div className="specialdishes-content col-lg-12 col-md-6 col-sm-6">
               <p>Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                   
               </div>
               <div className="specialdishes-menu" >  
              <ul className="d-flex flex-wrap specialdishes-menu1">
              {specialmenu}
                  </ul>
                {/* <ul className="d-flex specialdishes-menu1">
              {specialmenu1}
                 </ul>  */}
               </div>
           
       </div>
     </div>
    )
}

export default SpecialDishes
