// let str="rajesh"
// let x=""
// for(let i=str.length-1;i>=0;i--)
// {
//     x=x+str[i]
// }
// console.log(x);

// let num1=17;
// let num2=16;
// const num3=78
// console.log(num1-100);
// console.log(num2+100);
// var num4=199
// console.log(num1+100);



// reverse string

// let str="sandhya";
// let  rev=" ";
// for(let i=str.length-1;i>=0;i--)
// 		{
// 			rev=rev+str.charAt(i);
//         }
// console.log(rev);

// revpalindrome

// let str="sandhya";
// let  rev=" ";
// for(let i=str.length-1;i>=0;i--)
// 		{
// 			rev=rev+str.charAt(i);
//         }
//         if(str.equalIgnoreCase)
// console.log(rev);


// let str ="sandhya";
// let  rev=" ";

// function Palindrome() 
// {
// 	for (let i = 0; i < str.length-1; i++) 
//     {
// 		rev=rev+str.charAt(i);
//         {
// 			if(str.equalIgnoreCase(rev))
//             {
//                 return "Palindrome";
//             }
//             return "notPalindrome";
// 		}
// 	}
// }

// let isEven=x=>x%2===0
// let isOdd=y=>y%2!==0
// function fetchDigit(x,cb,msg)
// {
//   while(x!==0)
//   {
//   let rem=x%10;
//  if(cb(rem))
//  {
//     console.log(rem+" is a"+ msg);
//  }
//  x=parseInt(x/10)
// }
// }
// fetchDigit(123456,isOdd,"odd")
// fetchDigit(123456,isEven,"even")


// function* test()
// {
//    let i=0;
//    while(true)
//    {
//       yield i
//       i++
//    }
// }
// let genObj=test()
// console.log(genObj.next().value);
// console.log("hello");
// console.log(genObj.next().value);
// console.log(genObj.next().value);
// console.log("hey");

// let arr=[10,"hi",true,undefined,null,45n,Symbol(10),()=>(console.log("i am as fnc")),["200",300]]
// console.log(arr);
// console.log(typeof arr);
// console.log(Array.isArray(arr));



// console.log(1);
// console.log(2);
// let myPromise=new Promise((res, rej) => {
//    res("iam a resolve");
//    //rej(iam a reject);
// }).then((msg1)=>{
//    console.log(msg1);
// }).catch((err)=>{
//    console.log("iam a catch block");
// })
// console.log(myPromise);
// console.log(3);
// console.log(4);

 console.log(1);
 console.log(2);

let adityapromise=new Promise((res, rej) => {
   res("proposal accepted");
  // rej("proposal rejected");
}).then((msg1)=>{
   console.log(msg1);
   return "lets go to coffe";
}).then((msg2)=>{
   console.log(msg2);
   return "let go to movie";
}).then((msg3)=>{
   console.log(msg3);
   return "long drive";
}).then((msg4)=>{
   console.log(msg4);
   return "meeting parents";
}).then((msg5)=>{
   console.log(msg5);
   return "Marriage";
}).then((msg6)=>{
   console.log(msg6);
   return "happy ending";
})
// }).catch((e)=>{
//  console.log(e);
//  console.log("dont worry try for new one");
// })
console.log(3);
console.log(4);




