// novo recurso do ES2015
function rand([min = 1, max = 60]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log(rand([50, 40]));
