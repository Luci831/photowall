
import React, { Component } from "react";

class Addphoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const link=(event.target.elements.Link.value);
        const description=(event.target.elements.Description.value);
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:link
            
        }
        if(link &&description)
        {
            this.props.onAddPhoto(post)
        }

    }
    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="Link" />
                        <input type="text" placeholder="Description" name="Description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Addphoto