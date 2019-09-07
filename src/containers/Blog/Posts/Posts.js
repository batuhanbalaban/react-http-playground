import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.css';
//import {Link} from 'react-router-dom';

class Posts extends Component{

    state = {
        posts:[]
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response =>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post =>{
                return {
                    ...post,
                    author:'Batu'
                }
            })
            this.setState({posts:updatedPosts});
            //console.log(response);
        })
        .catch(error =>{
            //this.setState({error:true});
            console.log(error);
        });
    }

    postSelectedHandler = (id) =>{
        this.props.history.push({pathname:'/posts/'+id});
    }

    render(){

        let posts = this.state.posts.map(
            post=>{
                return (
                        //<Link key={post.id}  to={'/posts/'+post.id}>
                            <Post 
                                key={post.id} 
                                title={post.title} 
                                author={post.author}
                                clicked={()=>this.postSelectedHandler(post.id)}/>
                        //</Link>
                        )
            }
        );

        return(
            <section className="Posts">
            {posts}
            </section>
        );
    }
}

export default Posts;