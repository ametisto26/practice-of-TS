export const getName = () => {
       return "kristalo";
};

//export function getName() {
//        return "Kristalo"
// }

export class User {
       name: string = " ";
       age: number = 0;

       isAdult(): boolean {
              return this.age >= 20;
       }
}


// const name = "Kristalo"
// const age = 102;
// export {name as myName, age}