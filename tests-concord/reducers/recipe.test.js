import {expect} from 'chai';
import recipeReducer, {initialState} from 'src/reducers/recipes';
import {
  FETCH_RECIPES_SUCCESS, 
  FETCH_RECIPES,
  FETCH_RECIPES_ERROR,
  fetchRecipesSuccess,
  fetchRecipes,
  fetchRecipesError
} from 'src/actions/recipes';


describe('Reducer recipe', () => {
  // Décrire chaque attente sur l'élément testé.
  it('is a function', () => {
    expect(recipeReducer).to.be.a('function');
  });
  
  it('returns an object', () => {
    expect(recipeReducer()).to.be.an('object');
  });
  
  it('Should return an initial state by default if no params given', () => {
    expect(recipeReducer()).to.be.equal(initialState)
  })
  
  it('FETCH_RECIPES should return same state but loading: true', () => {
    expect(recipeReducer(initialState, {type: FETCH_RECIPES})).to.contain({...initialState, loading: true});
  })
  
  const list = ['param1', 'param2'];  
  it('FETCH_RECIPES_SUCCESS should set prop list with given list and prop loading to false', () => {
    expect(recipeReducer(initialState, fetchRecipesSuccess(list))).to.contain({...initialState, list, loading: false});
  })
  
  it('FETCH_RECIPE-ERROR should set loading to false', () => {
    expect(recipeReducer(initialState, fetchRecipesError())).contains({...initialState, loading: false});
  })

})
