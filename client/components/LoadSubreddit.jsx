import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import WaitIndicator from './WaitIndicator'

class LoadSubreddit extends React.Component {

  state = {
    subreddit: ''
  }

  handleChange = (event) => {
    this.setState({
      subreddit: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input type='text' name='subreddit' value={this.state.subreddit} onChange={this.handleChange}/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
      Fetch Posts
        </button>
        <WaitIndicator />
        {/* {this.props.children} this does nothing */}
      </div>
    )
  }
}

function mapStateToProps ({children, dispatch}) {
  return {
    children,
    dispatch
  }
}

export default connect(mapStateToProps)(LoadSubreddit)
