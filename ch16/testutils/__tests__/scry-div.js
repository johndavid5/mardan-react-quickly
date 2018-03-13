// Find a React element's child element <div>
describe('HelloWorld', ()=>{
	const TestUtils = require('react-dom/test-utils');

	const React = require('react');

	it('has a div', (done)=>{
		class HelloWorld extends React.Component {	
			render(){
				return <div>{this.props.children}</div>
			}
		}

		let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Kitty!</HelloWorld>);

		// scryRenderedDOMComponentsWithTag(): 
		// get an array of elements by their tag names
		// (such as div)
		expect(TestUtils.scryRenderedDOMComponentsWithTag( hello, 'div').length).toBe(1);

		console.log('found this many divs: ', TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length);

		console.log('divs: ', TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div'));

		let helloWorlds = TestUtils.scryRenderedComponentsWithType( hello, 'HelloWorld');

		//expect(TestUtils.scryRenderedComponentsWithType( hello, 'HelloWorld').length).toBe(1);

		//console.log('found this many HelloWorld\'s: ', TestUtils.scryRenderedComponentsWithType( hello, 'HelloWorld').length );

		//console.log('HelloWorld\'s: ', TestUtils.scryRenderedComponentsWithType( hello, 'HelloWorld'));
		
		//expect(helloWorlds.length).toBe(1);

		//console.log('found this many HelloWorld\'s: ', helloWorlds.length);

		//console.log('HelloWorld\'s: ', helloWorlds );

		done();

	});

});
