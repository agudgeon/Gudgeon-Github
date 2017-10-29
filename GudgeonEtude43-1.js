//Given an array of objects with "first_name" and "last_name" fields,
//write a callback for the ".sort" function to sort the names alphabetically
//by last name. If two last names are the same,
//then sort those by first name.

let person1 = {last_name: "Zalman", first_name: "Bob"};
let person2 = {last_name: "Case", first_name: "Andrew", };
let person3 = {last_name: "Johns", first_name: "Barb", };

function sorted(data){
   for (let key in data){
    let resorted = data.sort(function(a, b) {
   if ( a < 0 ) a = -a;
   if ( b < 0 ) b = -b;
   if ( a < b ) return -1;
   return 1;
 });


return resorted;
  }
}



console.log(sorted([person1, person2, person3]));
