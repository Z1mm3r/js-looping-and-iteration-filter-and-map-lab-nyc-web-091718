// Code your solution here:

function driversWithRevenueOver(array,revenue)
{
  return array.filter(function(driver){

    return driver['revenue'] > revenue});
}

function driverNamesWithRevenueOver(array,revenue)
{
  return driversWithRevenueOver(array,revenue).map(function(driver){
    return driver.name
  });
}

function exactMatch(array,valueIn)
{
  return array.filter(function(driver){
    let equal = false;
    for(const key in valueIn)
    {
    equal = driver[key] === valueIn[key]
    }
    return equal;
  });
}

function exactMatchToList (drivers, matcher) {
 return exactMatch(drivers, matcher)
   .map(function (driver) {
     return driver.name;
   });
}
