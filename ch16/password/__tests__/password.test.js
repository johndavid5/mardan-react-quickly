// Example is in JSX because Jest automatically
// uses babel-jest when you have installed this
// module and set the Babel configuration to use
// "presets": ["react"].  You cannot use JSX in Jest
// if you don't want to include babel-jest.

describe('Password', function() {

	it('changes after clicking the Generate button', (done)={
		const TestUtils = require('react-dom/test-utils');

		// Use for shallow rendering...
    	const { createRenderer } = require('react-test-renderer/shallow')

		const React = require('react');
		const ReactDOM = require('react-dom');
		const Password = require('../jsx/password.jsx');

		const PasswordGenerate = require('../jsx/password-generate.jsx');	
		const PasswordInfo = require('../jsx/password-info.jsx');	
		const PasswordInput = require('../jsx/password-input.jsx');	
		const PasswordVisibility = require('../jsx/password-visibility.jsx');	

		// Create shortcut fD for ReactDOM.findDOMNode because
		// you'll use it a lot...
		const fD = ReactDOM.findDOMNode;

		let password = TestUtils.renderIntoDocument(<Password
		 upperCase={true}
		 lowerCase={true}
		 special={true}
		 number={true}
		 over6={true}
		 />
		);
		console.log("Normally rendered <Password> password = ", password );

		// Or, to show off at parties, use straight-up 
		// JavaScript instead of JSX...
		/*
		let password = TestUtils.renderIntoDocument(
			React.createElement(Password, {
				upperCase: true,
				lowerCase: true,
				special: true,
				number: true,
				over6: true
			});
		);
		*/

		// SHALLOW RENDERING - no children
		const passwordRenderer = createRenderer();
		passwordRenderer.render(<Password/>);
		// Perform shallow rendering...
		let p = passwordRenderer.getRenderOutput();
		console.log("Shallowly rendered <Password> p = ", p );
		// Perform assert on results of shallow rendering...
		expect(p.type).toBe('div');
		expect(p.props.children.length).toBe(6);

		// NORMAL RENDERING - with children

		let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li');

		// Item 1: There's a Password element with a list of
		// items (<li>) that are the strength criteria
		// or "rules"...
		//
		// toBe() is equivalent of "===" or strict equal:
		// type and value equality
		expect(rules.length).toBe(5); 

        // toEqual() checks that two object have the
		// same value...reference equality, that is...
		// But for literals such as the number 5 and the
		// string "Must have at least one uppercase character",
		// toBe() and toEqual() will produce the same result.
		expect(rules.length).toEqual(5); 

		// Item 2: The first element in strength list
		// has specific text.  
		expect(fd(rules[0]).textContent).toEqual("Must have at least one uppercase character");	

		// Item 3: The second item isn't fulfilled (strikethrough).
		// Item 4: There's a Generate button -- class "generate-btn" 
		//   click it!
		// Item 5: After you click Generate, the button generates
		// a random password that satisfies the second (rules[1])
		// criterion (as well as others), which is to have at least
		// one lowercase character, and the second list item
		// changes from text to strikethrough (fulfilled).
		let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn');
		expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text');
		TestUtils.Simulate.click(fD(generateButton));	
		expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike');
		
	});

});


