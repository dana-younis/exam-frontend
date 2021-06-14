import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
class updateDeleteCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}  key={this.props.idx}>
          <Card.Img variant="top" src={this.props.digomon.img} />
          <Card.Body>
            <Card.Title>{this.props.digomon.name}</Card.Title>
            <Card.Text>
            {this.props.digomon.level}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.props.deleteDigimon(this.props.index)}>Delete</Button>
            <Button variant="primary" onClick={()=>this.props.updateDigimon(this.props.index)}>Update</Button>

          </Card.Body>
        </Card>
      </>
    );
  }
}

export default updateDeleteCard;
