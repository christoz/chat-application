//var React = require('React');
import React from 'react';
import io from 'socket.io-client';

var ChatMsg = React.createClass({
   render(){
      return (
         <li className={(this.props.user==='chris' ? 'chat-msg text-right' : 'chat-msg')}>
            <strong>{this.props.user} :</strong>
            <span>{this.props.message}</span>
         </li>
      )
   }
});

var ChatMessages = React.createClass({
   render: function(){
      return (
         <ul id="messages">
            {
               this.props.messages.map((msg, index) => {

                  return (
                     <ChatMsg key={index} user={msg.user} message={msg.message} />
                  )
               })
            }
         </ul>
      )
   }
});

var ChatForm = React.createClass({
   getInitialState(){
      return {
         text : null,
         user : 'chris'
      }
   },
   handleSubmit(e) {
		e.preventDefault();
		var msg = {
			message : this.state.text,
         user : this.state.user
		}
		this.props.onMsgSubmit(msg);
		this.setState({ text: '' });
	},
   update(e){
      this.setState({
         text : e.target.value
      })
   },
   render(){
      return (
         <form className="chat-form" onSubmit={this.handleSubmit}>
           <input id="m" ref="msg" autoComplete="off" value={this.state.text} onChange={this.update} />
           <button className="chat-submit" type="submit">Send</button>
         </form>
      )
   }
});

var socket = io.connect('http://185.13.90.140:8081');

var Chat = React.createClass({
   getInitialState(){
      return {
         socket : null,
         messages : []
      }
   },
   componentDidMount(){
      socket.on('message', this.msgReceive);
   },
   msgReceive(msg){
      var messages = this.state.messages;
      messages.push(msg);
      this.setState({
         messages : messages
      });
   },
   handleMsgSubmit(msg){
      var messages = this.state.messages;
      messages.push(msg);
      this.setState({
         messages : messages
      });
      socket.emit('message', msg);
   },
   render : function(){
      return(
         <div>
            <ChatMessages messages={this.state.messages} />
            <ChatForm onMsgSubmit={this.handleMsgSubmit} />
         </div>
      )
   }
});

module.exports = Chat
