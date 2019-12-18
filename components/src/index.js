import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'

const App = () => {
    return (
    <div className='ui container comments'>
        <Comment name='bleep bloop' post='DONT MESS WITH MY MAN' time='2:00AM'/>
        <Comment name='Kaniah BLAP BLAP BLAP BLAP!!!!' post='cause Imma be the one to break it to ya'  time='11:00AM'/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)