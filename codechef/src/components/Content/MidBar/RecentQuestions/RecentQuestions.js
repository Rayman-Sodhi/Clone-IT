import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../../Card/Card';
import Question from './Question';
import classes from './Question.module.css';


class RecentQuestions extends Component {

    state = {
        questions: [],
    }

    componentDidMount() {
        axios.get('https://codechef-clone-default-rtdb.firebaseio.com/questions.json')
        .then(response => {
            this.setState({questions: response.data})
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <Card title="Recent Questions">
                <ul className={classes.QList}>

                    {
                        this.state.questions.map(question => {
                            return <li key={question.title}><Question  {...question} /></li>;
                        })
                    }

                </ul>
            </Card>
        );
    }
    
}

export default RecentQuestions;