
import './Ninjas.css'
const Ninjas = (props)=>{
   const{ninjas,setNinjas} = props
const handleDelete = (e)=>{
   e.preventDefault()
   const ninjaId = e.currentTarget.dataset.ninjaId
   
  let newNinjas =  ninjas.filter((ninja)=>{
      return ninja.id !== parseInt(ninjaId)
   })
   setNinjas([...newNinjas])
}

const ninjaList = ninjas.map((ninja)=>{
  return ninja.Age > 1?(
   <div className='ninja' key = {ninja.id}>
   <div>
      Name:{ninja.Name}
   </div>
   <div>
      Age: {ninja.Age}
   </div>
   <div>
      Belt:{ninja.Belt}
   </div>
   <button data-ninja-id={ninja.id} onClick={handleDelete}>Delete</button>
</div>
  ):null
 
})

   return(
      <div>
         {ninjaList}
      </div>

   )
}
export default Ninjas