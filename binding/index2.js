/**
 * hasOwnProperty
 */
function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}

const person = {
  name: "hyeonseok",
};

console.log(hasOwnProp(person, "name"));

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty!!";
  },
  bar: "string",
};

console.log(foo.hasOwnProperty("bar"));
console.log(Object.prototype.hasOwnProperty.call(foo, "bar"));

console.log(hasOwnProp(foo, "hasOwnProperty"));
