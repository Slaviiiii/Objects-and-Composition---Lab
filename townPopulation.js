function townPopulation(townArr) {
  let obj = {}
  for (let element of townArr) {
    let [town, population] = element.split(' <-> ');
    if (obj.hasOwnProperty(town)) {
      obj[town] += Number(population);
    } else {
      obj[town] = Number(population);
    }
  }
  let entries = Object.entries(obj);
  for (let [key, value] of entries) {
    console.log(`${key} : ${value}`);
  }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']) 