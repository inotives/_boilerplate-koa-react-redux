import React, {Component} from 'react';
import NavBar from '../modules/navbar/NavBar';
import Counter from '../modules/_sample-counter/Counter';


class MainLayout extends Component {
    render(){

        return (
            <div>
                Navbar ...
                <NavBar />
                <hr />
                CONTENT AREA
                <Counter />
                <hr />
                Footer ...
            </div>
        );
    }

}

export default MainLayout