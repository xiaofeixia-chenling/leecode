
const telComb = require('../../code/lesson2');

test('telComb23', ()=> {
  expect (telComb('23')).toEqual([ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ])
})