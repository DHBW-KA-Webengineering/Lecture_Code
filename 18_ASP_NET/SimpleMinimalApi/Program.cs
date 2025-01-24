using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using SimpleMinimalApi;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<UserContext>(opt => opt.UseInMemoryDatabase("Users"));
var app = builder.Build();

app.MapGet("/api/users", async (UserContext context) => await context.Users.ToListAsync());
app.MapGet("/api/users/{id}", async (UserContext context, long id) =>
    await context.Users.FindAsync(id) is User user
        ? Results.Ok(user)
        : Results.NotFound());

app.MapPut("/api/users/{id}", async (UserContext context, long id, User user) =>
{
    var existingUser = await context.Users.FindAsync(id);
    if (existingUser == null) return Results.NotFound();
    // create new user with updated properties and replace existing

    var newUser = new User(id, user.Username ?? existingUser.Username, user.Email ?? existingUser.Email);
    context.Entry(existingUser).CurrentValues.SetValues(newUser);

    await context.SaveChangesAsync();
    return Results.Ok(newUser);
});

app.MapPost("/api/users", async (UserContext context, User user) =>
{
    context.Users.Add(user);
    await context.SaveChangesAsync();
    return Results.Created($"/api/users/{user.Id}", user);
});

app.MapDelete("/api/users/{id}", async (UserContext context, long id) =>
{
    var user = await context.Users.FindAsync(id);
    if (user == null) return Results.NotFound();
    context.Users.Remove(user);
    await context.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();
