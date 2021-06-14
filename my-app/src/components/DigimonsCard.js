import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';

class DigimonsCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}  key={this.props.idx}>
          <Card.Img variant="top" src={this.props.Digimon.img} />
          <Card.Body>
            <Card.Title>{this.props.Digimon.name}</Card.Title>
            <Card.Text>
            {this.props.Digimon.level}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.props.addToFav(this.props.Digimon)}>add To fav</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default DigimonsCard;
