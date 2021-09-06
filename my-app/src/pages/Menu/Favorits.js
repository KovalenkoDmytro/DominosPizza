
function Favorits(props){
   
    return(
        <>
        <div className="content">favorits page</div>  
        {props.globalStore.map(elem=><li key={elem} >{elem}</li>  )}    
        </>
    )
}
 export default Favorits;