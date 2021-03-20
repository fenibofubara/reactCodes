import {useState,useEffect} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'



const Post = (props)=>{
    // const [states, setstates] = useState({post:null})
    // const id = props.match.params.post_id
    // const newId = id-1
    const states =  props.posts
    // useEffect(async()=>{
    //     await Axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res =>{
    //         setstates({post:res.data})
    //        })
    // },[])

    const handleClick = (e)=>{
     e.preventDefault()
     props.deletePost(props.posts.id)
     props.history.push('/')
    console.log(props)
   }
   

   return(
    states?(
        <div className='container'>
        <h4 className='center'>{states.title}</h4>
        <p>{states.body}</p>
        <div className='center'>
        <button className='btn grey' onClick={handleClick}>Delete Post</button>
        </div>
        </div>
      ): <div className='center'>Empty content..</div>
    )
}

const mapStateToProps = (state,ownProps)=>{
const id = ownProps.match.params.post_id
    return{
        posts:state.posts.find(post=>post.id==id)
    }
}

const mapDispatchToProps = (dispatch)=>{
   return {
       deletePost: (id)=>{dispatch(deletePost(id))}
   }
}



export default connect(mapStateToProps,mapDispatchToProps)(Post)