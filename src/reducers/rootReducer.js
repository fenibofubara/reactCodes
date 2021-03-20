const initState = {
    comment:[],
    posts:[
        {id:1, title:'Vestibulum ante',body:'ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliq.'},
        {id:2, title:'Vestibulum ante',body:'ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliq.'},
        {id:3, title:'Vestibulum ante',body:' ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliq.'}
    ]
}


const rootReducer = (state=initState,action)=>{
    
    if(action.type ==='DELETE_POST'){
        
    let newPost = state.posts.filter((post)=>{
            return action.id !== post.id
           
        })
    return {...state,posts:newPost}
    }
    return state
}

export default rootReducer