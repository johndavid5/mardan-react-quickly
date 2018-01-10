
class Clock extends React.Component {

  constructor(props) {

    /* Don't forget to invoke `super()` with properties;
    * otherwise the logic in the parent (`React.Component`)
    * won't work.
    */
    super(props);

    this.launchClock();

    this.state = {
      currentDateObject: new Date()
    };
  } /* constructor() */

  launchClock() {

    setInterval(() => {

      console.log('Clock::Updating date...');

      this.setState({
        currentDateObject: new Date()
      });
    }, 1000);
  } /* launchClock() */

  render() {

    console.log('Clock::render()...');

    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { dateObject: this.state.currentDateObject }),
      React.createElement(DigitalDisplay, { dateObject: this.state.currentDateObject })
    );
  }

}