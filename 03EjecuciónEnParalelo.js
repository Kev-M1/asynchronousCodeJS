let promesa1 = new Promise((resolve, reject) => {
    resolve(12);
})

let promesa2 = new Promise((resolve, reject) => {
    resolve(15);
})

let promesa3 = Promise.all([promesa1, promesa2]);

promesa3
    .then((resolveValue) => {
        console.log(resolveValue);
    })
    .catch((err) => {
        console.log(`Error, motivo: ${err}`);
    })