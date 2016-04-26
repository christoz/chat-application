import React from 'react';

const Carousel = React.createClass({
   getInitialState(){
      return {
         directionClass : null
      }
   },
   bindEvents(){

   },
   componentDidMount(){
      this.bindEvents();
   },
   left(){

   },
   move(direction){

   },
   render(){
      return (
         <div className={(this.props.active === true ? 'carousel is-active' : 'carousel')}>
            <div className="carousel-track" style={this.state.directionClass}>
               <div className="item">
                  <img src="http://lorempixel.com/640/480/sports/1/" />
               </div>
               <div className="item">
                  <img src="http://lorempixel.com/640/480/sports/2/" />
               </div>
               <div className="item">
                  <img src="http://lorempixel.com/640/480/sports/3/" />
               </div>
               <div className="item">
                  <img src="http://lorempixel.com/640/480/sports/4/" />
               </div>
            </div>
            <button onClick={this.move.bind(this, 'left')} className="btn arrow arrow-left"><i className="fa fa-chevron-left"></i></button>
            <button onClick={this.move.bind(this, 'right')} className="btn arrow arrow-right"><i className="fa fa-chevron-right"></i></button>
         </div>
      )
   }
});

export default Carousel;
