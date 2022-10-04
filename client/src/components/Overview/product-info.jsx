import React from 'react';
import Stars from '../FiveStars.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (<div>
      <Stars rating={this.props.rating}/>
      <div id="readAllRevies"><p>{'Read All '}</p></div>

    </div>)

  }
}

export default ProductInfo;