function UserManagement()
{
    //Resolve The Dependency
    var repo = IOCContainer.GetService("IUser");
    this.IUserRepository = repo;
}

UserManagement.prototype.Start = function()
{
    var response = this.IUserRepository.CreateUser();

    return response;
}

