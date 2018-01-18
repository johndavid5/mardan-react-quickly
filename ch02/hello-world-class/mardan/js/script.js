let h1_black = React.createElement('h1', {style: {color: 'black'}}, 'Hello, World!');
let h1_brown = React.createElement('h1', {style: {color: 'brown'}}, 'Hello, World!');

let h1_array = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"].map(
  //( le_color ) =>{ return React.createElement('h1', {style: {color: le_color }}, 'Hello, World!') }
  le_color =>( React.createElement('h1', {style: {color: le_color }}, 'Hello, World!') )
);
	

class HelloWorld extends React.Component {
  render(){
    return React.createElement('div', null, h1_black, h1_array, h1_brown);
  }
}
ReactDOM.render(
  React.createElement(HelloWorld, null),
  React.createElement(HelloWorld, null),
  document.getElementById('content')
);
