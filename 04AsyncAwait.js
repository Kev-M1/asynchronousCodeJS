// Crear un ejemplo de Encadenamiento con 3 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente. (Usar Async y Await para el manejo de las promesas)


const firstPromise = () => {
  const requiredResultAsyncCode = 100;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResultAsyncCode = 100;
    (hypotheticalResultAsyncCode === requiredResultAsyncCode)
      ? (resolve(hypotheticalResultAsyncCode))
      : (reject('Error en código asincrono (Promesa1)'));
  })
};

const secondPromise = (firstPromiseResolveValue) => {
  const requiredResultAsyncCode = 200;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResultAsyncCode = (firstPromiseResolveValue + 100);
    (hypotheticalResultAsyncCode === requiredResultAsyncCode)
      ? (resolve(hypotheticalResultAsyncCode))
      : (reject('Error en código asincrono (Promesa2)'));
  })
};

const thirdPromise = (firstPromiseResolveValue, secondPromiseResolveValue) => {
  const requiredResultAsyncCode = 500;
  return new Promise((resolve, reject) => {
    //Simulación código asincrono
    let hypotheticalResultAsyncCode = (firstPromiseResolveValue + secondPromiseResolveValue + 200);
    (hypotheticalResultAsyncCode === requiredResultAsyncCode)
      ? (resolve(hypotheticalResultAsyncCode))
      : (reject('Error en código asincrono (Promesa3)'));
  })
};


const treatmentOfPromises = async () => {
  try {
    const firstPromiseExecution = await firstPromise();
    console.log(`Promesa1 resuleta con exito, valor de resolución: ${firstPromiseExecution}`);

    const secondPromiseExecution = await secondPromise(firstPromiseExecution);
    console.log(`Promesa2 resuleta con exito, valor de resolución: ${secondPromiseExecution}`);

    const thirdPromiseExecution = await thirdPromise(firstPromiseExecution, secondPromiseExecution);
    console.log(`Promesa3 resuleta con exito, valor de resolución: ${thirdPromiseExecution}`);


  } catch (error) {
    console.log(`Error, motivo: ${error}`);
  }
};

const main = () => {
  treatmentOfPromises();
};
main();


