//Crear una promesa simulando una operación asincrona y darle manejo

const promiseExample = new Promise((resolve, reject) => {
    //Simulación código asincrono
    //
    //
    //
    let hypotheticalResultAsyncCode = 10;
    let expectedResultforSuccess = 10;

    if (expectedResultforSuccess === hypotheticalResultAsyncCode) {
        resolve(hypotheticalResultAsyncCode);
    } else {
        reject('El código asincrono no genero el resultado adecuado');
    }
});



promiseExample
    .then((resolveValue) => {
        console.log(`La promesa se resolvio con exito, resolveValue: ${resolveValue}`);
    })
    .catch((err) => {
        console.log(`La promesa se rechazo, motivo: ${err}`);
    })
    .finally(() => {
        console.log(`Fin promesa (Hola desde método finally)`);
    });

