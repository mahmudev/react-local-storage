const addToDb = (id) => {
  let addFriend = {};

  const getAddFriend = localStorage.getItem("add-friends");

  if (getAddFriend) {
    addFriend = JSON.parse(getAddFriend);
  }
  const quantity = addFriend[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    addFriend[id] = newQuantity;
  } else {
    addFriend[id] = 1;
  }
  localStorage.setItem("add-friends", JSON.stringify(addFriend));
};
const removeToDb = (id) => {
  const getAddFriend = localStorage.getItem("add-friends");
  if (getAddFriend) {
    const addFriend = JSON.parse(getAddFriend);
    if (id in addFriend) {
      delete addFriend[id];
      localStorage.setItem("add-friends", JSON.stringify(addFriend));
    }
  }
};
export { addToDb, removeToDb };
