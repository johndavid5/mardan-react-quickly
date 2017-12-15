//
// React.createElement(
//  type,
//  [props],
//  [...children]
// )
//
//
// ReactDOM.render(
//  hOne,
//  document.getElementById('content')
// )
//

class HelloWorld extends React.Component {
  render(){
    return React.createElement(
      'h1',
	  this.props,
	  'Hello, ' + this.props.frameworkName + ' world!'
    )
  }
}

let propsArray = [
   {
     id: 'ember',
     frameworkName: 'Ember.js',
     title: 'A framework for creating ambitious web applications.',
     style: { color: 'blue'},
   },

   {
     id: 'backbone',
     frameworkName: 'Backbone.js',
     title: 'Backbone.js gives structure to web applications...',
     style: { color: 'indigo'},
   },
   {
     id: 'angular',
     frameworkName: 'Angular.js',
     title: 'Superheroic JavaScript MVW Framework',
     style: { color: 'violet'},
   }
];

let elementArray = propsArray.map( (props) => (
   React.createElement(HelloWorld, props )	
));

ReactDOM.render(
  React.createElement(
  'div',
  null,
  elementArray,
  ),
  document.getElementById('content')
);
