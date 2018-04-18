import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
      headers: {
        Authorization: 'Client-ID 1bc79cfd78e50bc'
      }
    }).then(response => this.setState(() => ({ images: response.data.data })));
  }
  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});