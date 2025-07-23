const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() *100);
    return {...obj, uid}
}

let docOne = addUID({name: 'yol', age: 40})
console.log(docOne)