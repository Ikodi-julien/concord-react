import {expect} from 'chai';
import {findRecipe} from 'src/selectors/recipes';
/* 
  1- écrire un test qui échoue (simple),
  2- coder dans la fonction pour qu'elle passe le test,
  3- refaire avec fonctionnalité supplémentaire
*/

describe('findRecipe Selector', () => {
  
  // doit être une fonction
  it('need to be a function', () => {
    expect(findRecipe).to.be.a('function');
  })
  // doit retourner un objet
  it('need to return undefined with no params given', () => {
    expect(findRecipe()).to.equal(undefined);
  })
  // si on lui donne une liste en 1er param, doit retourner un des objet de la liste
  it('should return the first element of list given if no second param', () => {
    const list = [{id: 1}, {id: 2}];
    expect(findRecipe(list)).eqls(list[0]);
  })
  // si je lui donne en 1er param un tableau d'objet et en deuxième un id, je veux obtenir l'objet du tableau qui a le meme id que la string reçue.
  it('if given a list and id, should return an object with the given id', () => {
    const list = [{id: 1}, {id: 2}];
    expect(findRecipe(list, '2')).to.eql({id:2});
  })
  // si je ne donne pas le bon type de param ? Ou pas de param ?

})
