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
            enhancement: 25
        }

        item = enhancer.succeed(item);

        expect(item.enhancement).toBe(20);
        console.log({Enhanced: item.enhancement})
    })

    test("fail()", () => {
        let item = {
            name: "Blade of immortal steel",
            durability: 85,
            enhancement: 17
        };

        item = enhancer.fail(item);

        expect(item.durability).toBe(75);
        expect(item.enhancement).toBe(16);
        console.log({Failure: item.durability})
        console.log({MajorFail: item.enhancement})
    })
})//working