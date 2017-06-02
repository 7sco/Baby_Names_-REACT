import React from 'react'

// class NamesList extends Component{
	
// 	render(){
	
// 	const {data, filterText}= this.props;
    
//     const namesList= data
//     .filter(name => {
//     	//remove names that do not match current filter text
//     	return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
//     })

//     .map(name => {//name will be the identifier of the object
//       //prints to consoe wht i have in name
//     	return(
//         	<li key={name.id} className={name.sex}>{name.name}</li>  
//       	)

//     })



//     return (
//       <div>
//           <ul>  
//             {namesList}
            
//           </ul>
//       </div>
//     );
// 	}
// }

// export default NamesList;




export default ({data, filterText, addFavourite}) =>{
	
    
    const namesList= data
    .filter(name => {
    	//remove names that do not match current filter text
    	return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })

    .map(name => {//name will be the identifier of the object
      //prints to consoe wht i have in name
    	return(
        	<li 
        		key={name.id} 
        		className={name.sex}
				onClick={()=> addFavourite(name.id)}
        		>{name.name}
				
        	</li>  
      	)

    })

    return (
      <div>
          <ul>  
            {namesList}
          </ul>
      </div>
    )

	
}
