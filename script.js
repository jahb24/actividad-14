const comprarCasco = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar casco")
        },1000)
    })
}

const comprarGuantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("comprar guantes")
        },2000)
    })
}

const paseo = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("pasear en bici")
        },8000)
    })
}

const paseoBici = async() => {
    const cCasco = await comprarCasco();
    const cGuantes = await comprarGuantes();
    const paseoB = await paseo();
    return ([cCasco, cGuantes, paseoB]);
}

paseoBici().then(res => console.log(res));