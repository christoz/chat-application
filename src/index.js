import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter2 from 'eventemitter2';

// import components
import Menu from './javascripts/Menu.js';
import Chat from './javascripts/Chat.js';


window.EVT = new EventEmitter2();

let pages = [
	{
		page_name : 'Chat',
		icon : 'fa fa-comment'
	},
	{
		page_name : 'Photos',
		icon : 'fa fa-camera-retro'
	},
	{
		page_name : 'Settings',
		icon : 'fa fa-cog'
	}
];

const Panes = React.createClass({
	render(){
		return (
			<div className="app-panes">
				<Chat />
			</div>
		)

	}
});
const App = React.createClass({
   getInitialState(){
      return {
         socket : null
      }
   },
   componentDidMount(){
      let that = this;
      /**
      socket.on('connect', function(that){

      });
      */
   },
	render() {
		return (
			<div className="app-container">
				<Menu list={pages} />
				<Panes />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
