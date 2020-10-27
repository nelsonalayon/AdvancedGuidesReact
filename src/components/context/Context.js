import React from 'react'
import { Button } from './Button'

// Context nos permite pasar un valor a lo profundo del árbol de componentes
// sin pasarlo explícitamente a través de cada componente.
// Crear un Context para el tema actual (con "light" como valor predeterminado).
const ThemeContext = React.createContext('light');

class Contextual extends React.Component {
  render() {
    // Usa un Provider para pasar el tema actual al árbol de abajo.
    // Cualquier componente puede leerlo, sin importar qué tan profundo se encuentre.
    // En este ejemplo, estamos pasando "dark" como valor actual.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Un componente en el medio no tiene que
// pasar el tema hacia abajo explícitamente.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Asigna un contextType para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  // En este ejemplo, el tema actual es "dark".
  static contextType = ThemeContext;
  render() {
    return (<>
        <p>this button receive prop directly from his grandfather. This prop saved to themecontext = react.createContext = "dark"</p>
    <Button theme={this.context} /></>);
  }
}

export default Contextual