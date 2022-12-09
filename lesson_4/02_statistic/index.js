// Необхідно зібрати статистику по всіх вузлах усередині елемента переданого у параметрі root і повернути її як об'єкт
// Статистика повинна містити:
// - кількість текстових вузлів
// - кількість елементів кожного класу
// - кількість елементів кожного тегу
// Для роботи з класами рекомендується використовувати classList

function collectDOMStat(root) {
  const nods = root.childNodes 
  console.log(nods)

  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };
  for (const elem of nods) {
    if (elem.nodeType === 3) {
      stat.texts += 1;   
    } else if (elem.nodeType === 1)
    {
      const tag = elem.tagName
      if (stat.tags[tag]) {
        stat.tags[tag]+=1
      } else { stat.tags[tag] = 1 } 

      const classes = elem.classList 
      for (const el of classes) {
        if (stat.classes[el]) {
           stat.classes[el]+=1
      } else { stat.classes[el] = 1 } 
        } 
    }  
}
  return stat;
}
console.log(collectDOMStat(document.querySelector('.container')))