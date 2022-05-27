import React, { Component } from 'react';
import classes from './RecentBlogs.module.css';
import Blog from './Blog';
import axios from 'axios';
import Card from '../../../Card/Card';

class RecentBlogs extends Component {
    state = {
        blogs: [],
    }

    componentDidMount() {
        axios.get('https://codechef-clone-default-rtdb.firebaseio.com/blog.json')
        .then(response => {
            console.log(response);
            this.setState({blogs: response.data})
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Card title="Recent Blog Posts">
                <ul className={classes.BlogList}>
                    {
                        this.state.blogs.map(blog => {
                            return (
                                <li key={blog.title}>
                                    <Blog {...blog} />
                                </li>
                            )
                        })
                    }
                </ul>
            </Card>
        )
    }
}

export default RecentBlogs;