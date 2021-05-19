import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Home extends Component {
    constructor() {
        super();
        this.state = { userSearch: "", searchResult: [], isSearch: false };
    }

    handleUserInput = (e) => {
        this.setState({ userSearch: e.target.value });
    }
    submitUserSearch = async (e) => {
        e.preventDefault();
        const search = this.state.userSearch.trim();
        const searchText = search.includes(" ") ? search.split(" ").join("%20") : search;
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchText}&part=snippet&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`);
        this.setState({ userSearch: "", searchResult: data.items, isSearch: true });
    }

    render() {
        const { userSearch, searchResult, isSearch } = this.state;
        const videosList = searchResult.map(list => (
            <li key={list.id.videoId}>
                <Link to={`/video/${list.id.videoId}`}>
                    <img src={list.snippet.thumbnails.medium.url} alt="" />
                </Link>
                <Link to={`/video/${list.id.videoId}`}>
                    {list.snippet.title}
                </Link>
            </li>)
        )
        const displayInfo = !videosList.length ? <h2>No video found</h2> : <ul>{videosList}</ul>

        return (
            <div>
                <form onSubmit={this.submitUserSearch}>
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
