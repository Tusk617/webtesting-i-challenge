module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  item = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement
  };

  // this if statement prevents the item to be enhanced beyond 20.
  if (item.enhancement > 20 || item.enhancement === 20) {
    let revertEnh = 20;
    item.enhancement = revertEnh;
    return {...item};
  } else {
    let newEnh = item.enhancement + 1;
    item.enhancement = newEnh;
    return {...item}
  }
}//working

function fail(item) {

  item = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement
  };

  if (item.enhancement < 15) {
    let newDur = item.durability - 5;
    item.durability = newDur;
    return {...item}
  } else if (item.enhancement === 15 || item.enhancement > 15) {
      let newDur = item.durability - 10;
      item.durability = newDur;
      if (item.enhancement > 16) {
        let newEnh = item.enhancement - 1;
        item.enhancement = newEnh;
        return {...item}
      } else {
      return {...item};
  }
}

  // return { ...item };
}

function repair(item) {
  
  item = {
    name: item.name,
    durability: 0,
    enhancement: 0
  };

  item.durability = 100;
  return { ...item };
}//working

function get(item) {
  return { ...item };
}
