class Link extends React.Component {
	static makeUrlSlug(label){		
		return label
		.toLowerCase()
		.trim()
		//.replace(',','')
		//.replace('!','')
		//.replace('.','')
		//.replace(' ','-'); // Sorry, Marzipan, ya gotta use a reg-ex /.../g to do _multiple_ replaces...
		.replace(/,|!|\?|:|;|\./g,'') // strip punctuation...
		.replace(/\s+/g,'-');
	}

	render(){
		const url = '/' + Link.makeUrlSlug(this.props.label);

		return (
			<div>
				<a href={url}>{this.props.label}</a>
				<br />
			</div>
		);
	}/* render() */
}/* class Link */

class Menu extends React.Component {
	render(){
		let menus = [
			'Home',
			'About',
			'I\'ll be back, Bennett!',
			'Services',
			'Portfolio',
			'Contact Us',
			'Let off some steam, Bennett!'
		];

		return <div>
		{menus.map((v,i)=>{
			return <div key={i}><Link label={v}/></div>
		})}
		</div>

	}/* render() */
}/* class Menu */

ReactDOM.render(
	React.createElement(
		Menu,
		null
	),
	document.getElementById('menu')
);
