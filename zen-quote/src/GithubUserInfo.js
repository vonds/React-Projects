import React, { Component } from 'react'
import axios from "axios"

class GithubUserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = { imgUrl: '', name: ''}
    }

    async componentDidMount() {
        const { username } = this.props
        const url = `https://api.github.com/users/${username}`
        const response = await axios.get(url)
        const data = response.data
        this.setState({ imgUrl: data.avatar_url, name: data.name})
    }

    render() {
        const { imgUrl, name } = this.state
        return (
            <section>
                <h1>Github User: {name}</h1>
                <img src={imgUrl} />
            </section>
        )
    }
}

export default GithubUserInfo