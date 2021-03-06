const { reverseSol1, reverseSol2, reverseSol3 }= require('./index');

// solution 1 
test('Reverse function exists', () => {
  expect(reverseSol1).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseSol1('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseSol1('  abcd')).toEqual('dcba  ');
});

//solution 2
test('Reverse function exists', () => {
  expect(reverseSol2).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseSol2('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseSol2('  abcd')).toEqual('dcba  ');
});

//solution 3
test('Reverse function exists', () => {
  expect(reverseSol3).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseSol3('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseSol3('  abcd')).toEqual('dcba  ');
});