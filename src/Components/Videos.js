import React from 'react';
import './Video.css'

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "John Doe",
            Comment: "I am a comment"
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

    }
    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleComment = (e) => {
        this.setState({ comment: e.target.value })
    }

    render() {
        return (
            <div className="videos">
                <p>A list of comments</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Name:</p>
                        <input type="text" value="state" onChange={this.handleName} />
                    </label>
                    <label>
                        <p>Comment:</p>
                        <input type="text" value="state" onChange={this.handleComment} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}
export default Videos;