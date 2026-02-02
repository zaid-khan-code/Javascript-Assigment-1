// Task Fist (i) Started
/*  {
    var firstVar = "var";
    console.log(firstVar);
    }
    {
        let firstVar ="let" ;
        console.log(firstVar);
        }
        console.log(firstVar);
        */

// Task First (i)  Completed

// Task First (ii)  Started

/*
var firstVar = "hello var";
console.log(firstVar);
firstVar += " world";
console.log(firstVar);
let firstLet = "hello let";
console.log(firstLet);
firstLet += " world";
console.log(firstLet);
const fistCnst = "hello const";
try {
  fistCnst = "hello const";
} catch (error) {
  console.error(error);
}
*/


// Task First (ii)  Completed




// Task First (iii) Started

/*

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(` var ${i} and ${1000} ms`);

    }, 1000)
}


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(` let ${i} and ${2000} ms`);

    }, 2000)
}

try {

    for (const i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(`const ${i} and ${3000} ms`);

        }, 3000)
    }
} catch (error) {
    console.error(error);

}




*/


// Task First (iii) Completed



// Task Second (i) Started
/*
 function messageGenerator(user,  course,per) {
    let  message = `
    Hello ${user},
    You have received the Scholarship from the Umm Al-Qura University in Saudia Arabia.
    This is because of your Grades ${per} From ${course}.


    Thanks you will receive you other details via email`
 console.log(message);

 }


messageGenerator("Zaid Bin Asif Khan","BSEK 2 year",99.96)
*/

// Task Second (i) Completed


// Task Second (ii) Started


/*

function resultGen(percentage) {
    const grades = percentage > 50 ? `You have passed the Tougest exams of the centuries` : `You have failed the Easyest task of the history`;
    console.log(grades);
}

resultGen(90)

*/


// Task Second (ii)  Completed




// Task third (i)   Started

/*
const obj = {
    name: "Muhammad Zaid Bin Asif Bin Ashraf Khan Khalil", // i don't know more about my grand grand praents
    normalFun: function normalFunCtion() {
        console.log(`This is a normal function this ${this.name}`);

    },
    arrowFun: () => {
        console.log(`This is a Arrow function this ${this.name}`);

    },
}

obj.arrowFun()
obj.normalFun()
*/


// Task Third (i)  Completed


// Task Third (ii) Started
/*
const nums = [2, 4, 6, 8];

const implicitReturn = nums.map(num => num * 2);
const explicitReturn = nums.map(num => { return num * 2 });
console.log(implicitReturn);
console.log(explicitReturn);





*/
// Task Third (ii) Completed



// Task Third (iii) Started

/*
const arrowFun = (callback) => {
    console.log(callback());

}
function normalFun(callback) {
    console.log(callback());

}
arrowFun(writenWorld)
normalFun(writenWorld)


function writenWorld() {
    return "hello world"
}

*/




// Task Third (iii) Completed











// Task Fourth (i)   Started

/*

const objectedThatIcontrol = {
    starting:1,
    ending:20,
    steps:Math.random(),
    [Symbol.iterator](){
        let current = this.starting;
        const ending = this.ending;
        const skips= this.steps;

        return{
                next(){
                if (current <= ending) {
                    const value = current;
                    current += skips;
                    return {value,done:false};
                } else {
                    return {done:true};
                }
            }
        }
    }
}

 

console.group();

console.log('==========================================================================');
console.log("Itrating over Object with control powers ya");
console.log("==========================================================================");
console.groupEnd();

console.group();
console.log('==========================================================================');

for (const number of objectedThatIcontrol) {
    console.log(number);
}
console.log("==========================================================================");
console.groupEnd();

*/



// Task Fourth (i)  Completed

// Task Fourth (ii)  Started



    /*


let array = [4, 6, 5, 7, 3];
for (let i = 0; i < array.timimg; i++) {
    console.log(array[i]);
}
for (const key in array) {
    console.log(array[key]);
}
for (const keke of array) {
    console.log(keke);
    
}


*/

// Task Fourth (ii)  Completed


// Task Fourth (iii)  Started


/*


const objs = {
    tasks: [
        { title: "Midnight Drive", timimg: "3:45" },
        { title: "Ocean visit", timimg: "4:12" },
        { title: "sky diving", timimg: "2:58" }
    ],

    *[Symbol.iterator]() {
        for (let task of this.tasks) {
            yield task;
        }
    }
};


for (const task of objs) {
    console.log(` ${task.title} (${task.timimg})`);
}

console.log("Tasklist finished.");


*/


// Task Fourth (iii)  Completed