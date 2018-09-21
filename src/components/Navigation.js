import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar">
                <a href="" className="text-white text-left">
                    { this.props.titulo } 
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.count}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;