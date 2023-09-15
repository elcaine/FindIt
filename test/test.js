var assert = require('assert');
const sequelize = require('../config/connection');
const { User, Category } = require('../models');


// GENERAL GROUPING OF TESTS 1
describe('Array', function () {
    // Specific test 1.1
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

//... end of Grouping 1
});


// GENERAL GROUPING OF TESTS 2
describe('MySQL models', function() {
    // Specific test 2.1
    describe('????', function(){
        it('should not suck', function(){
            assert.equal(1, 1);
        });
    });
    
    // Specific test 2.2
    describe('Should return user type when creating User', function () {
        it('should be a user', async function () {
            const startDB = async () => {
                sequelize.sync().then( async ()=>{
                    // NOTE:  This test is problematic because it will fail on duplicate email
                    const testUser = await User.create({
                        name: 'test name',
                        email: 'test-email@test9.com',
                        password: 'password1',
                    });
                    return testUser;
                });
            };
            startDB().then((testUser)=>{
                assert.equal(testUser.constructor.name, 'user');
            });            
        });
    });

//... end of Grouping 2
});