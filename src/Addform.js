

const Addform = ({todos,setTodos})=>{
const handleOnSubmit = (e)=>{
    e.preventDefault()

const newInput = document.getElementById('1').value
console.log(newInput,'hey')
setTodos([...todos,{id:Math.random(),content:newInput}])
document.getElementById('1').value = ''
}

return(
    <div>
    <h6 className="center">Add To Do</h6>
            <form onSubmit={handleOnSubmit}>
            <input type="text"  id='1'/>
            <button>Add To Do</button>
            </form>
            
        </div>
        
    )
}

export default Addform