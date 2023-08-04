import React from 'react';
import Board from '../board/Board';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            isErasing : false
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }


    erase = () => {
        this.setState((params) => ({
            color: params.isErasing ? '#000000' : '#ffffff',
            isErasing: !params.isErasing,
          }));
      };

    render() {

        return (
            <div className="container">
                <header className="header">
                    <h1 className="title">ChitraKatha</h1>
                </header>
                <div className="tools-section">
                
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                    <button id="eraserBtn" className={this.state.isErasing ? 'active' : ''}onClick={this.erase}>
                        {this.state.isErasing ? <i className="fa fa-pencil"></i> : <i className="fa fa-eraser"></i>}
                    </button>
                    <div>
                    
                    </div>

                </div>

                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }
}

export default Container