// Rainbow(About)

const Rainbow = (WrappedComponent)=>{

    const colours = ['pink','blue','red','orange','purple','green']
    const randomColours = colours[Math.floor(Math.random() * 5)]
    const className = randomColours +'-text'
    return (props)=>{
        return (
         <div className={className}>
            <WrappedComponent {...props}/>
         </div>
        )
    }
  

}
export default Rainbow