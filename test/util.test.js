var expect = chai.expect;

describe('矩形面积函数测试',function(){
    it('area(10,5) = 50',function(){
        var r = rectangle();
        expect(r.area(10,5)).to.be.equal(50);
    })
});

describe('矩形周长函数测试',function(){
    it('area(10,5) = 30',function(){
        var r = rectangle();
        expect(r.perimeter(10,5)).to.be.equal(30);
    })
});
