import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
  
  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      World = Matter.World,
      Body = Matter.Body,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;
      var engine = Engine.create({
      // positionIterations: 20
    });
    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 4000,
        height: window.innerHeight,
        wireframes: false
      }
    });
    var circ = Bodies.circle(1100, 500, 600, { restitution:.1,friction:.01,isStatic: false ,density:3})
    
    var rect1 = Bodies.rectangle(2000, window.innerHeight + 500, 4000, 30, { isStatic: true ,restitution:0,friction:.01,})
    var rect2 = Bodies.rectangle(2000, 1500, 4000, 30, { isStatic: true })

    
    World.add(engine.world, [
      // walls
    circ,rect1
      

    ]);
    Body.rotate(rect1, 0.32);

   
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
      

        // apply random forces every 5 secs
        setInterval(function(){         World.add(engine.world, Bodies.circle(300, 0, 600, { isStatic: false }));
    }, 5600)
    
      
   
    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(2000, 500, 600, { isStatic: false }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    
    return <div style={sceneStyles} ref="scene" />;
  }
}

const sceneStyles = {
position:"absolute",
zIndex:"-6"
}
export default Scene;