var assert = require("chai").assert,
    tags = require("../lib/tags.js"),
    randomNumber = require("random-js"),
    randomString = require('randomstring'),
    sinon = require("sinon"),
    sinonChai = require("sinon-chai");

describe("Tags", function(){
    describe("#parse()", function(){
        it("should parse long-formed tags", function(){
            var anyDepth = randomNumber.integer(0, 9)(randomNumber.engines.nativeMath),
                world = randomString.generate(),
                results;

            results = tags.parse([("--depth=" + anyDepth), ("--hello=" + world)]);

            assert.equal(results.depth, anyDepth);
            assert.equal(results.hello, world);
        });
     });

});
