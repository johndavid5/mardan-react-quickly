// Include React because it is used implicitly
// when JSX becomes JS via React.createElement()...
const React = require('react');

module.exports = function About(){
	return <div>
	<a href="http://Shemp.University" target="_blank">Shemp.University</a> is home to top-notch Shemp education which
		brings joy to Shemp engineers.
    <img src="/common/images/shemp-three-stooges-dot-com.jpg" title="shemp-three-stooges-dot-com"/>	
	</div>
}

