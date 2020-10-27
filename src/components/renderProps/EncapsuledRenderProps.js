import React from 'react'

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="https://www.pngitem.com/pimgs/m/386-3863436_stickersalma-png-pngkawaii-cat-kitty-gatito-gato-kawaii.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} width = "50px" />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            En lugar de proporcionar una representación estática de lo que <Mouse> renderiza,
            usa la `render prop` para determinar dinámicamente qué renderizar.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }

  export default MouseTracker