import React from 'react';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            comment: "",
            commentList: [],
            youtubeW: '640',
            youtubeH: '390'
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const listItem = (<li key={uuidv4()}>
        <div className = 'comments-container'>
            <span><strong> {this.state.userName} </strong></span>
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
    
    componentDidUpdate (){

        this.setState({
            youtubeH : (window.innerHeight > 380) ? '390' : '195',
            youtubeW: (window.innerWidth > 380) ? '640' : '320'
        })
    }

    render() {
        const { userName, comment, youtubeH, youtubeW } = this.state
        const {id} = this.props
        console.log( window.innerHeight)
        const opts = {
            height: youtubeH,
            width: youtubeW,
            playerVars: {
              autoplay: 1,
            },
          };
        return (
            <div className="videos">
                <Link to = '/'>go back</Link>
                <div>
                    <YouTube videoId={id} opts={opts}  />
                </div>
                <div className = 'comment-section'>
                <p>A list of comments</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input-name">
                        Name :
                        <input type="text" id='input-name' placeholder='Name...'value={userName} onChange={this.handleName} />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="input-comment">
                        Comment :
                        <input type="text" id='input-name' placeholder='...'value={comment} onChange={this.handleComment} />
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" id='submit'/>
                </form>
                <ul>{this.state.commentList}</ul>
                </div>
            </div>

        )
    }
}
export default Videos;