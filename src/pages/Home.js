import React,{Component} from 'react'
import {Row, Col, Card} from 'react-materialize'

class Home extends Component {
  render(){
    console.log(this)
    return (
      <Row>
        <Col s={12}>
          <h1 className="center">HOMEPAGE</h1>
        </Col>

        <Col m={12} s={12} l={12}>
          <Card className='' textClassName='' title='Card title' >
          HOME PAGE of the application ....

          </Card>
        </Col>


      </Row>
    )
  }
}

export default Home
