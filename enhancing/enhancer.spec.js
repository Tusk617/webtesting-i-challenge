const enhancer = require('./enhancer.js');


// test("tests if jest is working", () => {
//     expect(true).toBe(true);
// })


describe("enhancer", () => {
    test("repair()", () => {

        let item = {
            name: "Blade of immortal steel",
            durability: 0,
            enhancement: 0
        }

        item = enhancer.repair(item)

        expect(item.durability).toBe(100);
        console.log({Item: item.name, Durability: item.durability})
    })

    test("succeed()", () => {

        let item = {
            name: "Blade of immortal steel",
            durability: 0,
            enhancement: 5
        }

        item = enhancer.succeed(item);

        expect(item.enhancement).toBe(6);
        console.log({Enhanced: item.enhancement})
    })
})//working