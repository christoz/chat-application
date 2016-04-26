import React from 'react';

const Carousel = React.createClass({
   render(){
      return (
         <div className={(this.props.active === true ? 'carousel is-active' : 'carousel')}>
            Here goes the Carousel
         </div>
      )
   }
});

export default Carousel;
