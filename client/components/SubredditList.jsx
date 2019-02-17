import React from 'react'
import {connect} from 'react-redux'
import {sortSubreddit} from '../actions'
import Post from './Post'

class Subreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sort: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    if (this.state.sort === 'date') this.props.dispatch(sortSubreddit(byDate))
    if (this.state.sort === 'title') this.props.dispatch(sortSubreddit(byTitle))
    event.preventDefault()
  }

  handleChange (event) {
    this.setState({sort: event.target.value})
  }

  render () {
    return (
      <div>
        <img src={this.props.dog}/>
        <div>
          <p>Sort by:</p>
          <form className="dropdown" onSubmit={this.handleSubmit}>
            <label>
              <div className="button">
              </div>
              <div className="selection">
                <select value={this.state.sort} onChange={this.handleChange}>
                  <option value='default' >default</option>
                  <option value='date' >date</option>
                  <option value='title' >title</option>
                </select>
                <input type="submit" value="Submit"/>
              </div>
            </label>
          </form>
        </div>
        {this.props.subreddits.map((post, i) =>
          <Post
            key={i}
            post={post}
          />
        )}
      </div>
    )
  }
}

function byDate (posts) {
  return posts.sort((a, b) => a.created > b.created)
}

function byTitle (posts) {
  return posts.sort((a, b) => a.title > b.title)
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    dog: state.dog
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
