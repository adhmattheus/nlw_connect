using TechLibrary.Api.Infraestructure.DataAccess;
using TechLibrary.Communication.Responses;

namespace TechLibrary.Api.UseCases.Users.Get;

public class GetUserUseCase
{
    public List<ResponseUserJson> Execute()
    {
        using var dbContext = new TechLibraryDbContext();
        var users = dbContext.Users.ToList();

        return users.Select(user => new ResponseUserJson
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        }).ToList();
    }
}