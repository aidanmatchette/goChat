var socket = new WebSocket("ws://localhost:8080/ws")

let connect = cb => {
    console.log("Attempting connection ...")

    socket.onopen = () => {
        console.log("Successfully Connected")
    }

    socket.onmessage = msg => {
        console.log(msg)
        cb(msg)
    }

    socket.onclose = event => {
        console.log("Socket closed conection", event)
    }

    socket.onerror = err => {
        console.log("Socket Error: ", err)
    }
}

let sendMsg = msg => {
    console.log("sending message", msg)
    socket.send(msg)
}

export {connect, sendMsg}
