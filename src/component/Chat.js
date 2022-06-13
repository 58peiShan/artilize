import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { io } from 'socket.io-client'
import { FaRocketchat } from 'react-icons/fa'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'

function Chat() {
  let socket = null
  useEffect(() => {
    const userId = localStorage.getItem('userAccount')
    const msgInput = document.getElementById('msg-input')
    if (socket) return
    socket = io('http://localhost:1337')
    socket.on('connect', () => {
      displayMessage(`您已連線`)
      $('#connect-status').text('已連線')
    })
    socket.on('receive-message', (userId, message) => {
      displayMessage(`${userId}:${message}`)
    })

    $('#form1').submit((e) => {
      e.preventDefault()
      const message = msgInput.value

      if (message === '') return
      displayMessage(`${userId}: ${message}`)
      console.log(`${userId}, ${message}`)
      socket.emit('send-message', message, userId)
      msgInput.value = ''
    })
  }, [])

  function displayMessage(message) {
    const div = document.createElement('div')
    div.textContent = message
    document.getElementById('msg-io').append(div)
  }
  const auth = localStorage.getItem('auth')
  const [show, setShow] = useState('none')
  // const [text, setText] = useState('none')

  function showChatRoom() {
    if (show === 'none') {
      // ws.emit('login', { username: userId })
      setShow('block')
    } else {
      setShow('none')
    }
  }
  function closeChatRoom() {
    setShow('none')
  }

  return (
    <>
      <div
        id="chatRoomtoggle"
        className="displayN fs-1 position-fixed position-absolute"
        onClick={showChatRoom}
        style={{ display: auth ? 'block' : 'none' }}
      >
        <FaRocketchat />
      </div>
      <div
        id="chatRoom"
        className="BorderRadius shadow frContainer mt-5"
        style={{ display: show }}
      >
        <div className="row">
          <div className="p-5">
            <Button
              variant="outline-primary"
              id="disconnect-btn"
              className="float-end"
              onClick={closeChatRoom}
            >
              X
            </Button>
            <h4 className="text-center pb-3">即時討論區</h4>
            <h5>
              <span
                className="h6 badge bg-secondary float-start"
                id="connect-status"
              >
                已離線
              </span>
            </h5>
            <form id="form1" className="p-5">
              <div className="mb-3">
                <div
                  className="form-control"
                  style={{ height: '250px', overflow: 'auto' }}
                  id="msg-io"
                ></div>
              </div>
              <hr />
              <InputGroup className="mb-3">
                <FormControl
                  name="msg-input"
                  id="msg-input"
                  aria-describedby="basic-addon2"
                  // onChange={(e)=>{setText(e.target.value)}}
                />
                <Button type="submit" variant="outline-primary">
                  傳送
                </Button>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
