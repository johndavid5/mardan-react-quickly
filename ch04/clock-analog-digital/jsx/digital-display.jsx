const DigitalDisplay = function(props){

  const getTimeString = (date) => {

    const sWho="Clock::getTimeString";

    let hours_24 = date.getHours();
	let hours_12 = 0;
	let am_pm = "";

    if( hours_24 == 0 || hours_24 == 24 ){
      hours_12 = 12;
      am_pm = "AM";
    }
    else if( hours_24 >= 1 && hours_24 <= 12 ){
      hours_12 = hours_24;
      am_pm = "AM";
    }
    else if( hours_24 >= 13 && hours_24 <= 23 ){
      hours_12 = hours_24 - 12;
      am_pm = "PM";
    }

    //console.log(`${sWho}(): lpad(${hours_12},'0',2)=${lpad(hours_12,'0',2)}...`);
    //return "" + lpad(hours_12, '0', 2) + ":" + lpad(date.getMinutes(),'0', 2) + ":" + lpad(date.getSeconds(),'0', 2) + " " + am_pm;
    return "" + hours_12 + ":" + lpad(date.getMinutes(),'0', 2) + ":" + lpad(date.getSeconds(),'0', 2) + " " + am_pm;
  }; /* getTimeString=>() */

  const getDateString = (date) => {
    return "" + (date.getMonth()+1) + "\/" + date.getDate() + "\/" + date.getFullYear();
  };

  const lpad = (input, padString, length) => {

    const sWho = "Clock::lpad2";

    //console.log(`${sWho}(): input='${input}', padString='${padString}', length=${length}...`);

    var output = "" + input; // Important: coerce to a string...

    while (output.length < length){
      output = padString + output;
    }

    //console.log(`${sWho}(): returning output='${output}'...`);

    return output;
  }/* lpad => () */

  //return <div>{props.dateObject}</div>

  console.log("DigitalDisplay()...");

  return <div style={{backgroundColor: 'black', color: 'green', fontFamily: 'courier', fontWeight: 'bold', fontSize: '200%', display: 'inline-block', padding: '10px 12px 10px 10px'}}>{getTimeString(props.dateObject)}<br />{getDateString(props.dateObject)}</div>

}
