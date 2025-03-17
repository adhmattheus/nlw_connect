﻿namespace TechLibrary.Api.UseCases.Users.Get;

public class ResponseUserJson
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}