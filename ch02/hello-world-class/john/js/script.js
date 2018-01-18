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
    //);

     const colors=['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];

     		let linkElementOne = React.createElement( 'a', {href: 'http://webapplog.com'}, React.createElement('div', {style: { fontStyle: 'italic', fontSize: '150%'}}, 'Webapplog.com') );

			let br = React.createElement( 'br', null, null);

			let linkElementTwo = React.createElement( 'a', {href: 'http://cnn.com'}, React.createElement('h1', null, 'cnn.com') );

	 		// react.js:20209 Warning: Each child in an array or iterator should have a unique "key" prop.
		    // Check the top-level render call using <div>.
		    // See https://fb.me/react-warning-keys for more information.
			let my_array = ["Moe", "Larry", "Curly", "Shemp", "Joe", "Emil", "React"].map(function(name, index){
	 			return React.createElement('h1', {key: index, name: name, style: {color: colors[index]}}, "Hello, " + name + "!")
	 		});


     class HelloWorld extends React.Component {


		render(){
			//return React.createElement('div', null, this.linkElementOne, this.br, this.linkElementTwo, this.my_array.filter( function(val){ return val.toUpperCase.indexOf("REACT")!= 0 }), this.linkElementTwo, this.my_array.filter( function(val){ return val.toUpperCase.indexOf("REACT")== 0 }), this.linkElementTwo ); 

			//return React.createElement('div', null, this.linkElementOne, this.br, this.linkElementTwo, this.my_array, this.linkElementTwo, this.linkElementTwo ); 

			//return React.createElement('div', null, this.linkElementOne, this.br, this.linkElementTwo );
			
			//return React.createElement('div', null, linkElementOne, br, linkElementTwo, my_array.filter(function(val){ return ! val.name.match(/^React/i);}) , linkElementTwo );
			
			return React.createElement('div', null, linkElementOne, br, linkElementTwo, my_array, linkElementTwo );

			console.log("Let off some steam, Bennett!");
		}

	}/* class HelloWorld */

	ReactDOM.render(
		React.createElement(HelloWorld, null),
		document.getElementById('content')
	);


//let h1 = React.createElement('h1', null, 'Hello world!')
//
//class HelloWorld extends React.Component {
//  render() {
//    return React.createElement('div', null, h1, h1)
//  }
//}
//
//ReactDOM.render(
//  React.createElement(HelloWorld, null),
//  document.getElementById('content')
//)
