const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {

  describe('Normal input', () => {

    test('Check for normal input', () => {
      //(Problem Constraints)) Since the grid is valid, it should
    //retun the valid words
    
    let grid = [['T', 'W', 'Y', 'R'],
    ['E', 'N', 'P', 'H'],
    ['G', 'Z', 'Qu', 'R'],
    ['St', 'N', 'T', 'A']];
    let dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
    'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
    'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];
    let expected = [ 'ten','wet','went','net','new','newt','pry','prat',
    'get','gent','qua','quar','quart','quartz','rat','tar','tarp','art' ];
    
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    //Lowercasing for case-insensitive string array matching.
    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });
    
});

  
  describe('Problem contraints', () => {

    // Cases such as Qu
    test('Check Qu and St', () => {
      // (Problem Constraints)) Since the letters Q and S are by themself, it should
      //return an empty list
      let grid = [['H', 'L', 'I'],
              ['O', 'K', 'W','S'],
              ['Q', 'E','I','O'],
              ['I', 'N','L','R']];
      let dictionary = ['hey','hii','hello','helloo','wor','worl','world','too'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Check Q and S with invalid letter pairings', () => {
      // (Problem Constraints)) Since the letters Q  and S are paires with
      //invalid letters, it should return an empty list
      let grid = [['H', 'L', 'I'],
              ['O', 'K', 'W','Sv'],
              ['Qx', 'E','I','O'],
              ['I', 'N','L','R']];
      let dictionary = ['hey','hii','hello','helloo','wor','worl','world','too'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
 
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutions, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Grid is empty', () => {
      // (Edge case) Since the grid is empty, it should return an
      // empty list.
      let grid = [];
      let dictionary = ['H','hi','hii','hello','Wo','world'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Check if grid NXN', () => {
      // (Edge case) Since the grid is invalid, it should return an
      // empty list.
      let grid = [['h', 'K', 'i'],
              ['o', 'l', 'W'],
              ['D', 'e',],
              ['l', 'N']];
      let dictionary = ['H','hi','hii','hello','Wo','world'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Check for duplicate letters and short words', () => {
      // (Edge case) Only valid words should be returned. should
      //not return words that revisit letters or are less than three 
      //letters

      let grid = [['h', 'i','m','v'],
              ['o', 'u','l','a'],
              ['g','b','e','j'],
              ['st','w','k','x']];
      let dictionary = ['H','hi','hii','hou','hello','Wo','world','too'];
      let expected = ['hou'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

});
