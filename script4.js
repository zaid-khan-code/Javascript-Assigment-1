
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


// /*


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

console.log("Now Playing Playlist:");

for (const task of objs) {
    console.log(` ${task.title} (${task.timimg})`);
}

console.log("Tasklist finished.");


// */


// Task Fourth (iii)  Completed