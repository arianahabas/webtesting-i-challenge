const enhancer = require('./enhancer.js');
// test away!

describe('enhancer unit tests' , () => {
    it('repairs', () => {
        expect(enhancer.repair({
            name: 'hello',
            durability: 4,
            enhancement: 20,
        })).toEqual({
            name: 'hello',
            durability: 100,
            enhancement: 20
        })
        expect(enhancer.repair({
            name: 'goodbye',
            durability: 0,
            enhancement: 40,
        })).toEqual({
            name: 'goodbye',
            durability: 100,
            enhancement: 40
        })
    })

    it('enhancement succeeds' , () => {
        expect(enhancer.success({
            name:'hello',
            durability: 22,
            enhancement: 18,
        })).toEqual({
            name:'hello',
            durability: 22,
            enhancement: 19
        })
        expect(enhancer.success({
            name:'hello',
            durability: 22,
            enhancement: 20,
        })).toEqual({
            name:'hello',
            durability: 22,
            enhancement: 20
        })
        expect(enhancer.success({
            name:'hello',
            durability: 22,
            enhancement: 0,
        })).toEqual({
            name:'hello',
            durability: 22,
            enhancement: 1
        })
    })

    it('enhancement fails' , () => {
        expect(enhancer.fail({
            name:'hello',
            durability:10,
            enhancement: 14,
        })).toEqual({
            name:'hello',
            durability:5,
            enhancement: 14,
        })
        expect(enhancer.fail({
            name:'hello',
            durability:10,
            enhancement: 15,
        })).toEqual({
            name:'hello',
            durability:0,
            enhancement: 15,
        })
        expect(enhancer.fail({
            name:'hello',
            durability:10,
            enhancement: 17,
        })).toEqual({
            name:'hello',
            durability:0,
            enhancement: 16,
        })
        expect(enhancer.fail({
            name:'hello',
            durability:18,
            enhancement: 18,
        })).toEqual({
            name:'hello',
            durability:8,
            enhancement: 17,
        })
    })
})
//- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
//- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
//- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).