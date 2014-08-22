var assert = require("chai").assert,
    tags = require("../lib/tags.js"),
    randomNumber = require("random-js"),
    randomString = require('randomstring'),
    sinon = require("sinon"),
    sinonChai = require("sinon-chai");

describe("Tags", function(){
    describe("#parse()", function () {
        var anyDepth = randomNumber.integer(0, 9)(randomNumber.engines.nativeMath),
            world = randomString.generate(),
            args = [("--depth=" + anyDepth), ("--hello=" + world)];

        it("should parse long-formed tags", function(){
            var results = tags.parse(args);

            assert.deepEqual(results.depth, anyDepth);
            assert.deepEqual(results.hello, world);
        });

        it("should fallback to defaults", function () {
            var results = tags.parse(args);

            assert.deepEqual({
                depth: anyDepth,
                hello: world,
                foo: 'bar'
            }, results);
        });
     });
});
