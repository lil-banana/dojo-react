import React, { Component } from 'react';
import axios from 'axios';

import Cards from '../../components/Cards/Cards'

class Tasks extends Component {
    /*
    constructor(props) {
        super(props);
    }
    */
    state = {
        tasksData: []
    };
    
    componentDidMount() {
        axios.get('http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks',
        { headers: {'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc1NDYsImV4cCI6MTU4Mjk4MjM0Nn0.MJFQieixs2DL_XnIsJ7tw3xwsJdNYyRj3LIvBaqWTVw'} })
            .then(res => {
                this.setState({
                    tasksData: res.data.results
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const cardsView = (this.state.tasksData.length ?
            <Cards data={this.state.tasksData}/> :
            null);


        return(
            <div>
                {cardsView}
            </div>
        );
    }
}

export default Tasks;