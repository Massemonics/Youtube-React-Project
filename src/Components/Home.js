import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import 'moment-duration-format'
import "./Home.css"

export default class Home extends Component {
    constructor() {
        super();
        this.state = { userSearch: "", searchResult: [], videosStats: [], isSearch: false };
    }

    formatDuration = (time) => {
        return "0";
        const duration = moment.duration(time).format('h:mm:ss').padStart(4, '0:0');
        return duration === "0:00" ? "LIVE" : duration;
    }

    handleUserInput = (e) => {
        this.setState({ userSearch: e.target.value });
    }
    submitUserSearch = async (e) => {
        e.preventDefault();
        const { data: { items: searchResult } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.userSearch}&type=video&key=${process.env.REACT_APP_API_KEY}`);
        const videosIds = searchResult.map(video => video.id.videoId).join(",");
        const { data: { items: videosStats } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videosIds}&part=snippet,contentDetails,statistics&key=${process.env.REACT_APP_API_KEY}`);
        this.setState({ userSearch: "", searchResult, videosStats, isSearch: true });
    }

    render() {
        const { userSearch, videosStats, isSearch } = this.state;
        const videosList = videosStats.map(list => {
            const duration = this.formatDuration(list.contentDetails.duration)
            return (
                <li key={list.id} className="single-video">
                    <div className="video-img">
                        <Link to={`/videos/${list.id}`}>
                            <img src={list.snippet.thumbnails.medium.url} alt="" />
                        <span className={duration === "LIVE" ? "stat-duration-live" : "stat-duration"}>{duration}</span>
                        </Link>
                    </div>
                    <div className='video-card'>
                        <Link to={`/videos/${list.id}`}>
                            <span className="video-title">{list.snippet.title}</span>
                        </Link>
                        <p className="stat">Channel: {list.snippet.channelTitle}</p>
                        <p className="stat">Posted: {list.snippet.publishedAt}</p>
                        <p className="stat">Views: {parseInt(list.statistics.viewCount).toLocaleString()} <img src="https://api.iconify.design/bx:bxs-like.svg" /> {list.statistics.likeCount} <img src="https://api.iconify.design/bx:bxs-dislike.svg" /> {list.statistics.dislikeCount}</p>
                    </div>
                </li>
            )
        })
        const displayInfo = !videosList.length ? <h2>No video found</h2> : <ul className='videos-list'>{videosList}</ul>

        return (
            <div className='centered-div'>
                <form onSubmit={this.submitUserSearch} className='search-box'>
                    <input
                        type="text"
                        placeholder="Search for videos"
                        onChange={this.handleUserInput}
                        value={userSearch}
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                {isSearch && displayInfo}
            </div>
        )
    }
}
