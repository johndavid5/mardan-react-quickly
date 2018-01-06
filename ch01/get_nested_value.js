var profile = { account: '47574416' };
var profileDeep = { account: { number: 47574417 } };
var foo = { bar: { baz: { number: 47574418 } } };

var doers = [
  { object: profile, getter: "account" },
  { object: profileDeep, getter: "account.number" },
  { object: profileDeep, getter: "account.bummer" },
  { object: foo, getter: "bar.baz.number" },
];

doers.forEach( (doer)=>{
  console.log("getNestedValueImperatively(", doer.object, ", \"" + doer.getter + "\") = ", getNestedValueImperatively(doer.object, doer.getter) );

  console.log("getNestedValueDeclaratively(", doer.object, ", \"" + doer.getter + "\") = ", getNestedValueDeclaratively(doer.object, doer.getter) );

});

function getNestedValueImperatively(object, propertyName){
  var currentObject = object;
  var propertyNamesList = propertyName.split('.');
  var maxNestedLevel = propertyNamesList.length

  var currentNestedLevel;
  for(currentNestedLevel = 0; currentNestedLevel < maxNestedLevel; currentNestedLevel++){
    if( ! currentObject || typeof currentObject === 'undefined' ){
      return undefined;
    }
    currentObject = currentObject[propertyNamesList[currentNestedLevel]];
  }

  return currentObject;
}

function getValue(object, propertyName){
  return typeof object === 'undefined' ? undefined : object[propertyName];
}

function getNestedValueDeclaratively(object, propertyName){
  return propertyName.split('.').reduce(getValue, object);
}
