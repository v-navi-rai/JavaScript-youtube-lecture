const accountId="12345"
let accountEmail="vrai@gmail.com"
var accountPassword="2211234"
accountCity="Bengaluru"
let accountState;
//accountId="12"
//console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="sakshi@gmail.com"
accountPassword="22114"
accountCity="Goa"
console.log(accountCity)
console.log(accountEmail)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])