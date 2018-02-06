//import {IOCContainer} from '/Core/Main/main.js';

function createUser()
{
    var main = new UserManagement();
    var user = main.Start();
    alert(user);
}