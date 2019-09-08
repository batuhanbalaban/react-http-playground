import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect}from 'react-router-dom';
import FullPost from './FullPost/FullPost';

import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav> 
                        <ul>
                            <li><NavLink to="/" 
                            exact 
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=><Posts/>} />*/}
                
                {/* IF ROUTES WRAPPED WITH Switch component then only first Route component will be rendered,  */}
                <Switch>
                    <Route path="/posts/:id" exact component={FullPost}/>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/new-post" exact component={AsyncNewPost}/>
                    <Route path="/" exact component={Posts}/>
                    {/* <Route path="/" exact component={Posts}/> */}
                    {/* <Redirect from="/" exact to="/posts"  /> */}
                    <Route render={()=><h1>Page not found!</h1>}/>
                    
                </Switch>

                
            </div>
        );
    }
}

export default Blog;