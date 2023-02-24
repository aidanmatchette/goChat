import logo from './logo.svg';
import './App.css';
import {connect, sendMsg} from "./api"
import Header from "./components/Header/Header"
import { useEffect, useState } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';

function App() {

    const [chatHistory, setChatHistory] = useState([])

    useEffect(() => {
        connect((msg) => {
            console.log("New Message")
            setChatHistory(prevHistory => [...prevHistory, msg]);
        });
    }, []);

    function send() {
        console.log("Hello");
        sendMsg("hello");
    }


    return (
        <div className='App'>
            <Header/>
            <ChatHistory chatHistory={chatHistory} />
            <button onClick={send}>Hit</button>
        </div>
    );
}

export default App;
