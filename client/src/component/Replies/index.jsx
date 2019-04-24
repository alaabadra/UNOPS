import React , { Component } from 'react';
import Conversation from '.';
import './style.css';
const Replies = props =>(
    <div className="replies-component">
        <p className="replies-component__p"> The Replies</p>
        <div>
            {props.replies.map(reply => <Conversation key={reply.id} reply={reply}/>)}
        </div>
    </div>
)
export default Replies