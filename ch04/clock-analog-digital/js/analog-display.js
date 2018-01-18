const AnalogDisplay = function (props) {

  let date = props.dateObject;

  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    /* borderRadius: 20000, */
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'purple'
  };

  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };

  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };

  let threeMarker = {
    position: 'relative',
    top: 80,
    left: 180,
    border: '1px solid black',
    width: '10%',
    height: 1,
    transform: 'rotate(0deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'blak'
  };

  let sixMarker = {
    position: 'relative',
    top: 160,
    left: 100,
    border: '1px solid black',
    width: '10%',
    height: 1,
    transform: 'rotate(90deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'blak'
  };

  let nineMarker = {
    position: 'relative',
    top: 78,
    left: 0,
    border: '1px solid black',
    width: '10%',
    height: 1,
    transform: 'rotate(0deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'blak'
  };

  let twelveMarker = {
    position: 'relative',
    top: -26,
    left: 100,
    border: '1px solid black',
    width: '10%',
    height: 1,
    transform: 'rotate(90deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'blak'
  };

  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };

  return React.createElement(
    'div',
    { style: { paddingBottom: '10px' } },
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: hourHandStyle }),
      React.createElement('div', { style: threeMarker }),
      React.createElement('div', { style: sixMarker }),
      React.createElement('div', { style: nineMarker }),
      React.createElement('div', { style: twelveMarker })
    )
  );
};