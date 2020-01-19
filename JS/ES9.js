//Object spread operator
const animals = {
    tiger: 1,
    lion: 2,
    monkey: 3,
    bird: 4
};

const { tiger, ...rest } = animals; //rest will get b and c
// a = 1
// x = { b: 2, c: 3 }

restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
    console.log(p1); // p1 = 1
    console.log(p2); // p2 = 2
    console.log(p3); // p3 = [3, 4, 5]
}

const { tiger, lion, ...rest } = animals;

restParam(tiger, lion, bird);
