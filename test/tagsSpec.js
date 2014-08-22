var assert = require("chai").assert;
var tags = require("../lib/tags.js");

describe("Tags", function(){
    describe("#parse()", function(){
        it("should parse long formed tags", function(){
            var args = ["--depth=4", "--hello=world"];
            var results = tags.parse(args);

            assert.equal(results.depth, 4);
            assert.equal(results.hello, 'world');
        });
     });

});
