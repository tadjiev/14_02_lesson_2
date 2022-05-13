// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[8])
//
// let obj = {
//     username: 'john',
//     followers: [
//         {
//             username: 'John'
//         },
//         {
//           username: 'John',
//           followers: [
//               {
//                   username: 'jack'
//               },
//               {
//                   username: 'joe'
//               },
//               {
//                   username: 'john'
//               },
//           ]
//         }
//     ]
// }
// console.log(obj.followers[1].followers[1].username)



// let i = 0;
// i++ --- это увеличивает на 1  а если 2 i++  то тогда на 2 увеличивает //
//
// const arr = [
//     {
//         Username: 'John',
//         full_name: 'John Wick'
//     },
//     {
//         Username: 'John',
//         full_name: 'John Wick'
//     },
//     {
//         Username: 'John',
//         full_name: 'John Wick'
//     },
//     {
//         Username: 'John',
//         full_name: 'John Wick'
//     },
//     {
//         Username: 'John',
//         full_name: 'John Wick'
//     },
// ]
// for (let i = 0; i < arr. length; i++ ){
//     console.log(arr [i])      //// а здесь можно ограничить //////   берет только индекцы
// }
//
// for (let user of arr ){
//     console.log( user)      здесь ограничение нет //// невозможно ограничить ///
// }

// for (let i = 0; i < arr. length; i++ ){
//     if(i===2){                /// когда ИФ равно 2 то тогда остановиться действие ///
//         break;                /// с помощью break можно остановить действие ///
//     } else {
//     console.log(arr [i])
//      }
// }
//
// const obj = {
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//     key7:'b7',
//     key8:'b8',
//     key9:'b9',
//     key10:'b10',
// }
// for ( let key in obj ){    /// а в ... for in ... и в ... for of ...  они сразу показывают элементы ///
//     console.log(obj)
// }

// let i = 0
//
// while( i < 5){
//     console.log( 'hello')
//     i++   /// с помощью ... i++ ... можно остановить этот бесконечность
       ///  и с помощью ... break ... тоже можно остановить этот цикл ///
// }

//
// const users = [
//     {
//         username: 'jack',
//         salary: 1000
//     },
//     {
//         username: 'jack',
//         salary: 500
//     },
//     {
//         username: 'jack',
//         salary: 2000
//     },
// ]
// for (let user of users ){
//     if (user.salary > 500){
//         console.log(user)
//     }
// }


// const filteredUsers = users. filter( user=> user.salary > 500 )
// console.log(filteredUsers)    /// здесь мы использовали Методы ... Методы - это укороченный способ фильтрации ///



const array = [
    {
        robot: "a",
        ability: 20,
        power: 60
    },
    {
        robot: "b",
        ability: 15,
        power: 55
    },
    {
        robot: "c",
        ability: 30,
        power: 65
    }
    ]
const  robots = array.filter (robot => robot.ability > 15, robot => robot .power > 55 )
console.log(robots)
