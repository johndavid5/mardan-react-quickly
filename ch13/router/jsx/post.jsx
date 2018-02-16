const React = require('react');

module.exports = function Product(props){

    console.log("props=",props);
    console.log("Looking for slug=props.params.id=", props.params.id);

	let post = props.route.posts.find(element=>element.slug===props.params.id);

	return(
	<div>
		<h3>{post.title}</h3>
		<p>{post.text}</p>
		<p><a href={post.link} target="_blank">Continue reading...</a></p>
	</div>
	);
}