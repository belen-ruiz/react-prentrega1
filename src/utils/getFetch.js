

let productos = [
    { id: '1' ,categoria: 'interior', name: " Monstera ",   price: 37, foto:'' , info: "extra info"},
    { id: '2' ,categoria: 'interior', name: " Potus ", price: 27, foto:' ' , info: "extra info"},
    { id: '3' ,categoria: 'interior', name: " Sanvinera ",    price: 40, foto:' ', info: "extra info" },
    { id: '4' ,categoria: 'exterior', name: " Rosario ", price: 55, foto:' ' , info: "extra info"}  
  ] 
  
  export const getFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 1000) 
   })
  
  } 
