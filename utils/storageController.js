//Obtiene la informacion
export const getData = (key)=>{
    const res = JSON.parse(localStorage.getItem(key));
    return res ? res : [];
};
//Graba la informacion en el storage
export const setData = (key,arr) =>{
    try{
        localStorage.setItem(key, JSON.stringify(arr));        
    }catch(error){
        console.log(error);
    };    
};
//Borra la informacion del storage
export const deleteCollection = (key)=>{
    localStorage.removeItem(key);
};