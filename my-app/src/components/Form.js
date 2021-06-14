import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <form onSubmit={(e) => this.props.updateFunc(e)}>
          <label> digimon Name</label>
          <input type='text' value={this.props.newName} onChange={this.props.updateNameFunc}></input>
          <label> digimon Img</label>
          <input type='text' value={this.props.newImg} onChange={this.props.updateImgFunc}></input>
          <label> digimon level</label>
          <input type='text' value={this.props.newLevel} onChange={this.props.updateLevelFunc}></input>

          <input type='submit' value='update Task'/>
        </form>
      </>
    );
  }
}

export default Form;
