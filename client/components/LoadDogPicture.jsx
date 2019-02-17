import React from 'react'
import {connect} from 'react-redux'
import {getDogPicture} from '../actions'

class DogPicture extends React.Component {
  componentDidMount () {
    this.props.dispatch(getDogPicture())
  }

  render () {
    return null
  }
}

export default connect()(DogPicture)
