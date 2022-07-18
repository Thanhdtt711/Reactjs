import React, { Component } from 'react'
import Chat1 from "./Chat1";
import Chat2 from "./Chat2";
export default class content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item1: [],
            item2: [],
        }
    }
    addText = (item) => {
        this.state.item1.push(item);
        this.setState({
            data: this.state.item1
        })
    }
    addText2 = (item) => {
        this.state.item2.push(item);
        this.setState({
            data: this.state.item2
        })
    }
    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col-4">
                        <Chat1 add={this.addText} />
                    </div>
                    <div className="col-4">
                        <h3>Nội dung</h3>
                        <div className="border p-3">
                            {
                                this.state.item1.map((item,index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <p className="mb-0">{index}</p>
                                            <p className="mb-0">1: {item.chat1}</p>
                                        </div>
                                    )
                                })
                            }
                            {
                                this.state.item2.map((item,index) => {
                                    return (
                                        <div className="item text-end" key={index}>
                                            <p className="mb-0">{index}</p>
                                            <p className="mb-0">2: {item.chat2}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <Chat2 add={this.addText2} />
                    </div>
                </div>
            </div >
        )
    }
}
