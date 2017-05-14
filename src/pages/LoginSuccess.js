import React,{Component} from 'react'
import Qs from 'query-string'

class Page2 extends Component {

  render(){
    console.log(Qs.parse(this.props.location.search))
    return (
      <div>
        <div className="">
          <h3 className="center">SUCCES</h3>

          <div className="row">
            descr...
          </div>
        </div>

      </div>
    )
  }
}

export default Page2
