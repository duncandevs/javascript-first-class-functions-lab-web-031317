  // 4) index Multiplier functions created with `createMultiplierBonus` should have a doubler function:
  //    ReferenceError: doubler is not defined
  //     at Context.<anonymous> (test/index-test.js:53:14)
  //
  // 5) index Multiplier functions created with `createMultiplierBonus` should have a tripler function:
  //    ReferenceError: tripler is not defined
  //     at Context.<anonymous> (test/index-test.js:59:14)
  //
  // 6) index `multiplier()` with partial application should exist:
  //    ReferenceError: multiplier is not defined
  //     at Context.<anonymous> (test/index-test.js:67:14)
  //
  // 7) index `multiplier()` with partial application should have a doubler function created using `.bind()`:
  //    Error: No cheating! Make sure to use `.bind()` for this solution!
  //     at Context.<anonymous> (test/index-test.js:72:15)

function countdown(callback){
  window.setTimeout(callback,2000)
}

function createMultiplier(multiplier){
  return function(num){
    return num * multiplier
  }
}

function multiplier(multiplierValue, value){
  multiplierValue * value
}

function doublerWithBind(value){
  multiplier(2,value)
}

function triplerWithBind(value){
  multiplier(3,value)
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
