import React,{Component} from 'react'
import {Row, Col, Card} from 'react-materialize'

class Dashboard extends Component {

  render(){
    return (
      <Row>
        <Col s={12}>
          <h1 className="center">Dashboard</h1>
        </Col>

        <Col m={4} s={4} l={4}>
          <Card className='' textClassName='' title='Card title' >
            CARD-1
          </Card>
        </Col>

        <Col m={4} s={4} l={4}>
          <Card className='' textClassName='' title='Card title' >
            CARD-1
          </Card>
        </Col>

        <Col m={4} s={4} l={4}>
          <Card className='' textClassName='' title='Card title' >
            CARD-1
          </Card>
        </Col>


      </Row>
    )
  }
}

export default Dashboard
