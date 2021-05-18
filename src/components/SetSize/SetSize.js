import React, {useEffect} from 'react';

const SetSize = ({setWindowSize}) => {
    // Ici on ecoute l'évenement resize afin de gérer la prop 'windowSize' dans appReducer, cette prop est utilisée comme référence pour l'affichage de certains éléments de menu ou boutons... la mise à jour du state au resize sur cette prop permet le rendu responsive notamment des composant semantic-ui.
  const updateSize = () => {
    setWindowSize(window.innerWidth)
  };
  
  useEffect(() => {

    setWindowSize(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, []);
  
  return (<div className='setWindowSize' />)
}

export default SetSize;
