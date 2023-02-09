(async()=>{

const orders = [
    {fruits: "mango", qty:10},
    {fruits: "banana", qty: 20},
]

function order(){
    setTimeout(() =>{
        console.log(orders);
    },3000);
}

function getOrderItem(){
    console.log("getOrderItem ===",orders);
}

//-----------------callback----------------------
// function addNewItem(getOrderItem){
//     setTimeout(() =>{
//         orders.push({fruits:"apple",qty:20});
//         getOrderItem();
//     },6000);
// }

// addNewItem(getOrderItem);


//-------------------promise---------------------
// function addNewItem(){
//     return new Promise((resolve,reject) =>{
//         const err = false;
//         setTimeout(() =>{
//             orders.push({fruits:"apple",qty:20});
//             if(err)
//             reject();
//             resolve(true);
//         },6000);
//     })
// }

// addNewItem().then(Response =>{
//     console.log("response success ===");
//     getOrderItem();
// }).catch((err)=>{
//     console.log("err ===");
// });

//-------------------asnc & await--------------------
// async function addNewItem(){
//     orders.push({fruits:"apple",qty:20});    
//     orders.push({fruits:"apple",qty:20});
//     orders.push({fruits:"apple",qty:20});    
//     orders.push({fruits:"apple",qty:20});
//     orders.push({fruits:"apple",qty:20});    
//     orders.push({fruits:"apple",qty:20});
//     orders.push({fruits:"apple",qty:20});    
//     orders.push({fruits:"apple",qty:20});
// }

// await addNewItem();

function addNewItem(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            orders.push({fruits:"apple",qty:20});
            resolve(true);
        },6000);
    })
}

await addNewItem();

getOrderItem();

})()