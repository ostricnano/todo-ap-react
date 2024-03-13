export const  generateColor = () => {
  // Generar valores aleatorios para los componentes RGB
  const r = Math.floor(Math.random() * 256); // Componente rojo
  const g = Math.floor(Math.random() * 256); // Componente verde
  const b = Math.floor(Math.random() * 256); // Componente azul

  // Construir el color en formato hexadecimal
  const colorHexadecimal = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return colorHexadecimal;
}