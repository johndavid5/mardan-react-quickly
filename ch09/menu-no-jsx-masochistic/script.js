class Menu extends React.Component {
  render() {
    let menus = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us']

	let lines = [
	"MARZIPAN(SINGING): Take your cigarette from its holder",
	"And burn your initials in my shoulder",
	"Fracture my spine",
	"And swear that you're mine",
	"As we dance to the without-JSX-masochism tango...!"
	];

    return React.createElement('div',
	      null,
	      menus.map((v, i) => {
	        return React.createElement('div',
	          {key: i},
	          React.createElement(Link, {label: v})
	        )
	      }),
		  React.createElement('p',
			{style: {fontFamily: 'courier', color: 'green', fontSize: '125%'}},
			lines.map((line,i)=>{
			return React.createElement('div',{key: i}, line )
		    })
	      )
		);
	}/* render() */

}/* class Menu */

class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return React.createElement('div',
      null,
      React.createElement(
        'a',
        {href: url},
        this.props.label
      ),
      React.createElement('br')
      )
  }
}

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
)
