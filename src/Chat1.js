import React, { Component } from 'react'

export default class Chat1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat1: '',
        }
    }

    checkInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }   
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset()
        let item = {};
        item.chat1 = this.state.chat1;
        console.log(item)
        this.props.add(item)
        this.setState({
            chat1: ''
        })
    }

    render() {
        return (
            <>
                <h3>chat 1</h3>
                <form onSubmit={this.submitForm}>
                    <textarea 
                    onChange={this.checkInput} 
                    name="chat1" 
                    className='form-control' 
                    placeholder='Chat1'
                    >
                    </textarea>
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </form>
            </>
        )
    }
}
