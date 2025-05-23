/**
* Функция принимает набор билетов, из которых
* можно построить единственный неразрывный маршрут.
* Петель и повторов в маршруте нет.
*
* Функция должна вернуть билеты 
* в порядке следования по маршруту.
*/
function getRoute(tickets) {
  const to = new Set();
  const from = {};
  const result = [];

  for (let ticket of tickets) {
    from[ticket.from] = ticket;
    to.add(ticket.to);
  }

  for (let ticket of Object.values(from)) {
    if (!to.has(ticket.from)) {
      result.push(ticket);
      break;
    }
  }

  while (result.length < tickets.length) {
    const curr = result[result.length - 1];
    result.push(from[curr.to]);
  }

  return result;
}

console.log(getRoute([
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
])); /* [
  { from: 'NY', to: 'London' },
  { from: 'London', to: 'Moscow' },
  { from: 'Moscow', to: 'SPb' },
] */