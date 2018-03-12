import React, { Component } from 'react'
import './css/LoginDialog.css'

class LoginDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      alreadyExists: false,
      done: false
    }

    this.inputHandler = this.inputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  inputHandler(e) {
    this.setState({
      username: e.target.value,
      alreadyExists: false
    })
  }

  submitHandler() {
    // TODO submit
  }

  render() {
    const {
      inputHandler,
      submitHandler,
      state: {
        done,
        username,
        alreadyExists
      }
    } = this

    return (
      <div className={`LoginDialog${done ? ' hidden' : ''}`}>
        <header className="LoginDialog_header">
          Добро пожаловать!
        </header>

        <main className={`LoginDialog_content${alreadyExists ? ' error' : ''}`}>
          <input
            type="text"
            value={username}
            onChange={inputHandler}
            placeholder={alreadyExists ? 'Никнейм занят' : 'Введите никнейм'}
            className="LoginDialog_username-input"
          />

          <button onClick={submitHandler} className="LoginDialog_submit-button">
            Войти
          </button>
        </main>
      </div>
    )
  }
}

export default LoginDialog