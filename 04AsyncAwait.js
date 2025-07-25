// Crear un ejemplo de Encadenamiento con 3 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente. (Usar Async y Await para el manejo de las promesas)



const promise1 = () => {
  const requiredResult = 100;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResult = 100;
    (hypotheticalResult === requiredResult)
      ? resolve(hypotheticalResult)
      : reject('Error en código asincrono (Promesa1)');
  })
};

const promise2 = (promise1Result) => {
  const requiredResult = 300;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResult = promise1Result + 200;
    (hypotheticalResult === requiredResult)
      ? resolve(hypotheticalResult)
      : reject('Error en código asincrono (Promesa2)');
  })
};

const promise3 = (promise1Result, promise2Result) => {
  const requiredResult = 500;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResult = promise1Result + promise2Result + 100;
    (hypotheticalResult === requiredResult)
      ? resolve(hypotheticalResult)
      : reject('Error en código asincrono (Promesa3)');
  })
};


const managePromises = async () => {
  try {
    let promise1Execution = await promise1();
    console.log(`Promesa1 resuelta con exito, resolveValue: ${promise1Execution}`);

    let promise2Execution = await promise2(promise1Execution);
    console.log(`Promesa2 resuelta con exito, resolveValue: ${promise2Execution}`);

    let promise3Execution = await promise3(promise1Execution, promise2Execution);
    console.log(`Promesa2 resuelta con exito, resolveValue: ${promise3Execution}`);

  } catch (error) {
    console.log(`Error, motivo: ${error}`);
  }
}


const main = () => {
  managePromises();
};
main();