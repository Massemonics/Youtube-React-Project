import React from 'react';
import './Videos.css'

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "John Doe",
            comment: "I am a comment"
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

    }
    handleName = (e) => {
        this.setState({ userName: e.target.value })
    }
    handleComment = (e) => {
        this.setState({ comment: e.target.value })
    }

    render() {
        const { userName, comment } = this.state
        return (
            <div className="videos">
                <p>A list of comments</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Name:</p>
                        <input type="text" value={userName} onChange={this.handleName} />
                    </label>
                    <label>
                        <p>Comment:</p>
                        <input type="text" value={comment} onChange={this.handleComment} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}
export default Videos;