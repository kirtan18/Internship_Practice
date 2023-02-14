//Promise

//Executer Function
const obj1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let rollNo = [1,2,3,4,5];
        resolve(rollNo);
        // reject('Error while communicating');
    },2000);
});
 
const getBioData =  (indexData) =>{
    return new Promise((resolve,reject) =>{
        setTimeout((indexData) =>{
            let bioData = {
                name : 'Vinod',
                age  : 26
            }
            resolve(`My roll no is ${indexData}. My name is ${bioData.name} ans I am ${bioData.age} years.`)
        }, 2000 , indexData)
    });
}

obj1.then((rollNo) =>{
    console.log(rollNo);
    getBioData(rollNo[1]).then((x) => {
        console.log(x); 
    });
}).catch((error) =>{
    console.log(error);
});


