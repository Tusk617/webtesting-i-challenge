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
  if (item.enhancement > 20) {
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
  return { ...item };
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
