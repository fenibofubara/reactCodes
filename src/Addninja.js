

const Addninja =({ninjas,setNinjas})=>{
   
    const handleOnSubmit =(e)=>{
        e.preventDefault()
       const userName =  document.getElementById('n').value
       const userAge = document.getElementById('a').value
       const userBelt = document.getElementById('b').value
       setNinjas([...ninjas,{Name:userName,Age:userAge,Belt:userBelt,id:5}])
        }   

    return( 
       <div>
           <h2>Update Ninja List</h2>
           <form onSubmit={handleOnSubmit}>
               <input type='text' placeholder='Name' id ='n'/>
               <input type='text' placeholder='Age' id ="a"/>
               <input type='text' placeholder='Belt' id ="b"/>
               <button>Update Ninja</button>
           </form>
       </div>
    )
}

export default Addninja