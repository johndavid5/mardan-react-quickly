// Render a React element in Jest...
describe('HelloWorld', ()=>{
	const TestUtils = require('react-dom/test-utils');
	const React = require('react');

	it('has props', (done)=>{
		class HelloWorld extends React.Component {
			render(){
				return <div>{this.props.children}</div>
			}
		}/* class HelloWorld extends React.Component */

		let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Node!</HelloWorld>);

		expect(hello.props).toBeDefined();

		// my div: Hello Node!
		console.log('my hello props:', hello.props);
		
		done();
	});
});
