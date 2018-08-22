import React, { Component } from 'react';
import axios from 'axios';

export default class AsyncAwait extends Component {
    state = {
        gods: [],
        error: null,
    }
    componentDidMount() {
        // axios.get('https://ancient-gods-api.now.sh/api/gods', {
        //     headers: {
        //         apiKey: 'ericrivera'
        //     }
        // }).then(response => {
        //     this.setState({gods: response.data})
        // })
        try {
        const response = await axios.get('https://google.com/api/gods2', {
            headers: {
               apiKey: 'ericrivera'
            }
        })
        this.setState({ gods: response.data })
    } catch (error) {
        console.log(error);
        this.setState({ error })
    }
    }

    render() {
        const { gods, error } = this.state;
        return (
            <div>
                {error 
                ? <div> oh noes! an Error!</div>
                : <div> 
                Here are the gods!
                {gods.map((x,i) => <div key={i}>{x.name}</div>)}
            </div>  
                }
               </div>  
                 
        );
    }
}