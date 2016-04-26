import React from 'react';
// Menu component
const Menu = React.createClass({
	getInitialState() {
	   return {
	   	active_tab : 0,
	   	className : ''
	   };
	},
	clickHandler(index){
		this.props.setPane(index);
		this.setState({
			active_tab : index
		});
		//EVT.emit('foo', this.state.active_tab);
	},
	render(){
		var that = this;
		var state = this.state;

		var pages = this.props.list.map(function(item, i){
			return (
            <MenuItem key={'page'+i} active={(state.active_tab === i ? 'true' : 'false')} icon={item.icon} pageName={item.page_name} onClick={that.clickHandler.bind(that, i)} />
         )
		});

		return (
			<nav className="nav">
				{pages}
			</nav>
		)
	}
});
// Menu item component
const MenuItem = React.createClass({
	render(){
		return (
			<button className={(this.props.active === 'false' ? 'nav-item' : 'nav-item selected')} data-active={this.props.active} onClick={this.props.onClick}>
				<i className={this.props.icon}></i>{this.props.pageName}
			</button>
		)
	}
})

export default Menu;
