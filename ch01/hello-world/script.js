	//
	// React.createElement(
	//  type,
	//  [props],
	//  [...children]
	// )
	//
	// var hOne = React.createElement('h1', {style: {color: 'purple'}}, 'Hello, World!');
	//
	// ReactDOM.render(element, container[, callback])
	//
    // ReactDOM.render(
    //  hOne,
    //  document.getElementById('content')
    //);

     var colors=['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];

     var my_array = ["Moe", "Larry", "Curly", "Shemp", "Joe", "Emil", "React"].map(function(name, index){
	 			return React.createElement('h1', {style: {color: colors[index]}}, "Hello, " + name + "!")
	 });

     ReactDOM.render(
		//React.createElement('h1', {style: {color: 'purple'}}, 'Hello, React!'),
		React.createElement('div', null, my_array),
		document.getElementById('content')
    );
