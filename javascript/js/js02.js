const num1 = parseInt(prompt("첫 번째 숫자 : ")); //parseInt("120px")>120
                                                 //Number("120")    >120
                                                 //prompt는 문자 
const num2 = parseInt(prompt("두 번째 숫자 : "));
const result = addNumber(num1,num2);

alert("두 수를 더한 값은 " +result+ "입니다.");

function addNumber(a,b){
  const sum=a+b;
  return sum;
}