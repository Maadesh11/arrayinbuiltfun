let ar=new Array(5);
ar[0]="nana";
ar[1]="komala";
ar[2]="madesh";
ar[3]="yuvaraj";
ar[4]="fam";



document.write(ar,"<br>");
let ar1=[1,2,3,4,5,6,7,6,8];
// document.write(ar1);
// push used to add last element in array
ar1.push("maadesh");
// pop delete last element in array
ar1.pop()
// unshift used to add first element in array 

ar1.unshift("love");
// remove the first element in array
ar1.shift()
// splice is used to delete particular indexes first parameter is index and second parameter is how many we haveto delete
ar1.splice(2,3);
// slice is used for to get the values first parameter is starting index and second parameter is ending index
ar2=ar1.slice(3,6);
document.write(ar2,"<br>");
// sort is used to maintain the asennding order
ar1.sort();
// reverse the array
ar1.reverse();

document.write(ar1);
