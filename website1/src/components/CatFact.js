import React, { Component } from 'react';
import "../App.css"
import axios from 'axios';

class FoxPic extends Component {
    constructor(props){
        super(props);
        this.state={
          data: null
        }
    }

    fetchData = () => {
        axios.get("https://randomfox.ca/floof/")

        .then((response) => {
        console.log(response);
        this.setState({data: response.data})
        console.log(this.state.data);
        }).catch((error) => {
        console.log(error)
        })
    }

    renderData = () => {
        if(this.state.data) {
          return(
            <div>
              <img className="fox" src={this.state.data.image} alt=""/>
            </div>
          )
        }else{
          return null
        }
    }

    render () {
        return (
            <div>
                <button onClick = {this.fetchData}>click for a picture of a fox</button>
                {this.renderData()}
            </div>
        );
    }
}
export default FoxPic;