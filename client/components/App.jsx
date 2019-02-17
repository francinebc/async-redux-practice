import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import DogPicture from './LoadDogPicture'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <DogPicture />
    <SubredditList />
  </div>
)

export default App
