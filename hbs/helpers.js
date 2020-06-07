const hbs = require('hbs');
//helpers
/**funciones que se ejecutan en el servidor al momento de ejecutar una
 * vista hbs
 */
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

//poner la primera letra mayuscula
hbs.registerHelper('capitalize', (text) => {
  let palabras = text.split(' ');
  palabras.forEach((palabra, index) => {
    palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(' ');
});
