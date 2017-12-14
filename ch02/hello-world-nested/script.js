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

     var colors=['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];

	 // react.js:20209 Warning: Each child in an array or iterator should have a unique "key" prop.
     // Check the top-level render call using <div>.
     // See https://fb.me/react-warning-keys for more information.
     var my_array = ["Moe", "Larry", "Curly", "Shemp", "Joe", "Emil", "React"].map(function(name, index){
	 			return React.createElement('h1', {key: index, style: {color: colors[index]}}, "Hello, " + name + "!")
	 });


     let linkElementOne = React.createElement( 'a', {href: 'http://webapplog.com'}, React.createElement('div', {style: { fontStyle: 'italic', fontSize: '150%'}}, 'Webapplog.com') );

     let br = React.createElement( 'br', null, null);

     let linkElementTwo = React.createElement( 'a', {href: 'http://cnn.com'}, React.createElement('h1', null, 'cnn.com') );

     ReactDOM.render(
		React.createElement('div', null, linkElementOne, br, linkElementTwo, my_array, linkElementTwo ),
		document.getElementById('content')
    );
