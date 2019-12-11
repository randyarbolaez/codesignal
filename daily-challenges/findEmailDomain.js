// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

function findEmailDomain(address) {
  let addressArr = address.split("@");

  return addressArr[addressArr.length - 1];
}
