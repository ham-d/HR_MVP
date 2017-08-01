import React, { Component } from 'react';
import axios from 'axios';
class ShowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
    // this.handlePostRequest = this.handlePostRequest.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handlePostRequest(input) {
  //   axios.post('/api/shows/addShow', {title:input})
  //     .then(res => {
  //       console.log('successful post', res);
  //       this.state.shows.push(res);
  //       this.setState({shows: this.state.shows})
  //     })
  //     .catch(err => {
  //       console.log('error in posting ', err);
  //     })
  // }
  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      inputVal: event.target.value
    })
    console.log(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleInputChange} type="text"></input>
          <button onClick={(e) => {e.preventDefault(); this.props.handlePostRequest(this.state.inputVal); this.setState({inputVal: ''})}}>Add Show</button>
        </form>
      </div>
    );
  }
} 

export default ShowInput;