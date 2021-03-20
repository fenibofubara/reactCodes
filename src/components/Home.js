import React, {Component} from 'react'
import Axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Pics from '../../src/download.jpeg'
import {connect} from 'react-redux'

const Home =(props)=>{
  console.log(props.posts,'helllooo')
        const posts = props.posts
        //  const [posts, setposts] = useState([])
        //  console.log(...posts,'s')
        //  useEffect(async () => {
        //  await Axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
        //  setposts(res.data.slice(1,10))
        // })
        // },[]);
       
      
       const stateArrayy =  posts.length?(posts.map((state)=>{

        return (
            <div className='post card' key = {state.id}>
          
            <div className='card-content'>
            <Link to={"/"+state.id}><span className='card-title'>{state.title}</span></Link>  
            <img src={Pics} alt='' className='center'/>  
            <p>{state.body}</p>
            </div>
           
            </div>
            )
            })):(
          <div className='center'>No post yet.</div>
          )
 
        return(
            <div>{stateArrayy}</div>
        )
    
}

const mapStateToProps = (state)=>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)