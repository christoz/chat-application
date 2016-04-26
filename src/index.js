import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter2 from 'eventemitter2';

// import components
import Menu from './javascripts/Menu.js';
import Chat from './javascripts/Chat.js';
import Carousel from './javascripts/Carousel.js';

window.EVT = new EventEmitter2();

var pages = [
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
	getInitialState(){
		return {
			currentPane : this.props.paneIndex
		}
	},
	render(){
		//console.log(this.state.currentPane)
		return (
			<div className="app-panes">
				<Chat active={0 === this.props.paneIndex} />
				<Carousel active={1 === this.props.paneIndex} />
			</div>
		)

	}
});
const App = React.createClass({
   getInitialState(){
      return {
         socket : null,
			activePane : 0
      }
   },
   componentDidMount(){

   },
	setPane(pane){
		this.setState({
			activePane : pane
		});
	},
	render() {
		return (
			<div className="app-container">
				<Menu list={pages} setPane={this.setPane}/>
				<Panes paneIndex={this.state.activePane} />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
