// we create an auxiliary component in order to wrap the returns from other
//components (that saves up from having adjustent compontes which lead to an error)
//It's a functional component that doesn't have a state


const aux = ( props ) => props.children

export default aux;
