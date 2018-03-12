import React, { Component } from 'react'
import './App.css'
import {
  MessageList,
  MessageInput,
  UserList,
  LoginDialog
} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginDialog />
      </div>
    )
  }
}

export default App
