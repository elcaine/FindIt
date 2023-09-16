var assert = require('assert');
const sequelize = require('../config/connection');
const { User, Category } = require('../models');


// GENERAL GROUPING OF TESTS 1..................... TODO:  maybe test http/controller file stuff here?
describe('Array', function () {
    // Specific test 1.1
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

//... end of Grouping 1
});


// GENERAL GROUPING OF TESTS 2.................... TODO:  This is kind of working out to be a DB testing suite
describe('MySQL models', function() {
    // Specific test 2.1
    describe('????', function(){
        it('should not suck', function(){
            assert.equal(1, 1);
        });
    });
    
    // Specific test 2.2
    describe('Should return user type when creating User', async function () {
            it('should be a user?????????', async function () {
                let x = '';
                await sequelize.sync({ force: false }).then( async ()=>{
                    // Capture all registered email addresses
                    const userData = await User.findAll();
                    currentEmails = userData.map(m => m.email);
                    
                    // Ensure that the test-case email is not present in the DB already
                    let i = 0;
                    let e;
                    do {
                        e = `test${i}@email.com`;
                        if(currentEmails.includes(e)){ i++;}
                        else { break;}
                    } while(true);
                    
                    // Create test User
                    const testUser = await User.create({
                        name: 'test name',
                        email: e,
                        password: 'password1',
                    });
                    
                    // Capture prototype class name
                    x = testUser.constructor.name;
                    
                    // Delete test user from DB
                    await User.destroy({
                        where: {
                            id: testUser.id,
                        },
                    });
                    return;
                });
                assert.equal(x, 'user');        
            });           
    });

//... end of Grouping 2
});