import React from 'react';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import './Videos.css'

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            comment: "",
            commentList: []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const listItem = (<li key={uuidv4()}>
        <div>
            <span>{this.state.userName} </span>
            <span> {this.state.comment}</span>
        </div>
    </li>)
        this.setState({
            commentList: [...this.state.commentList,listItem],
            userName: "",
            comment: "",
        })

    }
    handleName = (e) => {
        this.setState({ userName: e.target.value })
    }
    handleComment = (e) => {
        this.setState({ comment: e.target.value })
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    

    render() {
        const { userName, comment } = this.state
        const {id} = this.props
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
            },
          };
        return (
            <div className="videos">
                <Link to = '/'>go back</Link>
                <div>
                    <YouTube videoId={id} opts={opts} onReady={this._onReady} />
                </div>
                <div>
                <p>A list of comments</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input-name">
                        Name :
                        <input type="text" id='input-name' placeholder='your name'value={userName} onChange={this.handleName} />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="input-comment">
                        Comment :
                        <input type="text" id='input-name' placeholder='your comment'value={comment} onChange={this.handleComment} />
                    </label>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <ul>{this.state.commentList}</ul>
                </div>
            </div>

        )
    }
}
export default Videos;