module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const newItem = {...item}
  if (item.enhancement < 20) {
    newItem.enhancement = item.enhancement + 1
  }
  return newItem;
}
//- The item's enhancement increases by 1.
//If the item enhancement level is 20, the enhancement level is not changed.
//The durability of the item is not changed.

function fail(item) {
  const newItem = {...item}
  
  if(item.enhancement < 15) {
    newItem.durability = item.durability - 5 
  } else {
    newItem.durability = item.durability - 10 
  } 

  if (item.enhancement > 16) {
    newItem.enhancement = item.enhancement - 1
  }

  return newItem
}
//- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
//- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
//- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function repair(item) {
  let newItem = {...item};
  newItem.durability = 100; 
  return newItem;
}

function get(item) {
  return { ...item };
}
