import React,{useState} from 'react' 

function Filter(props) {


  //UseState function According to our need

 let[allMenus,setAllMenus]=useState(props.allMenus);
 let[filteredDishes,setFilteredDishes]=useState([])
 let[activeclass,setActiveClass]=useState("Beef")
 console.log("Try are", props.singleDish)

   //UseState function According to our need ends

//Try One Dish
    let singleDishitem = props.singleDish.map((item)=>{
        return(
            <li className='list1'>                          
            <img src={item.strMealThumb} alt=""/>       
            <h6>{item.strMeal}</h6></li>                      
        )
    
    })


//Try One Dish ends




   //Condition to check whether category defined is same or Condition for filtering the program

        function showFilterDishesHandler(category){
            setActiveClass(category) 
            props.setsingleDish([])                             //This is used to make the clicked class active. 
         let filteredDishesAre =  allMenus.filter((itemnew)=>{
                return itemnew.strCategory===category             //The term itemnew.category is different from the one present in the function categorymenu. i.e item.category. the term itemnew.category is the category of dishes which we got after the filtering process whereas the item.strcategory is read directly from the API using API_URL
            }).map((item)=>{
                    return(
                        <li className='list1'>                          
                        <img src={item.strMealThumb} alt=""/>       
                        <h6>{item.strMeal}</h6></li>                //Here after filtering we get a new array. So get the details from that array we need to use the map statement again. otherwise we wont be able to fetch The data from the API=IMP Point
                    
                    )
                
            })
            setFilteredDishes(filteredDishesAre)
        }

        console.log(filteredDishes.length)

//Condition to check whether category defined is same or Condition for filtering the program end
        
//Code to Display all the 14 categories



       let categorymenu = props.catdata.map((item) =>{

        return(
            <li class={ item.strCategory===activeclass ?"active":''} onClick={()=>{showFilterDishesHandler(item.strCategory)}}>{item.strCategory}</li>)
            } )
    console.log(props.catdata);



//Code to Display all the 14 categories  end



//Displaying all the 14 categories and the dishes we want section



    return (
        <div className="filtered-dishes allign-content-center">
                <div className="container">
                <div className="text-center">
                <h1>Choose Your Dish Category</h1>
                <div className="col-lg-12 col-md-6">     
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                 It has roots in a piece of classical Latin literature from 45 BC, 
                 making it over 2000 years old.</p>  
                </div>
                 <div>
                     <ul className="filtered-dishes-list d-flex flex-wrap text-center align-content-center">
                         {categorymenu}
                     </ul>  
                     </div>    
                     <div className='specialdishes-menu'>
                     <ul className=" d-flex flex-wrap text-center align-content-center specialdishes-menu1">
                     {singleDishitem}
                     {filteredDishes.length != 0 ||singleDishitem.length !=0 ? filteredDishes:<div class="notfound">Dish Not Found <br/>Try Another </div>}
                     </ul>  
                     </div> 
                </div>
            </div>

              
        </div>
    )
}



//Displaying all the 14 categories and the dishes we want section end



export default Filter
