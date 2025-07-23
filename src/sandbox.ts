const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

// define our own type aliases
type StringOrNum = string | number;
type ObjectWithNum = {name: string, uid: StringOrNum};

const logDetailsWithAlias = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greetWithAlias = (user: ObjectWithNum) => {
    console.log(`${user.name} says hello`);
}