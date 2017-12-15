var helloWorldReactElement = React.createElement(
  "h1",
  { style: "color: 'purple';" },
  "Hello, World!"
);

ReactDOM.render(helloWorldReactElement, document.getElementById('content'));
