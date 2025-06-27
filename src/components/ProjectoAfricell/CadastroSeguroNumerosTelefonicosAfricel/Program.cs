using CadastroNumeroTelefonico.DAL;
using CadastroNumeroTelefonico.DAL.Repositories;
using CadastroNumeroTelefonico.Services;
using CadrastroNumeroTelefonico.Interfaces.Repositories;
using CadrastroNumeroTelefonico.Interfaces.Services;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<CadastroNumeroTelefonicoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//IOS
builder.Services.AddScoped<IClienteRepository, ClienteRepository>();
builder.Services.AddScoped<ICartaoSimRepository, CartaoSimRepository>();
builder.Services.AddScoped<ICartaoSimServices, CartaoSimServices>();
builder.Services.AddScoped<IClienteServices, ClienteServices>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
