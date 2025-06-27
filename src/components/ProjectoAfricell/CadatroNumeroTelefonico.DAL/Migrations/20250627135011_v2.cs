using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CadastroNumeroTelefonico.DAL.Migrations
{
    /// <inheritdoc />
    public partial class v2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ClienteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeCompleto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascimento = table.Column<DateOnly>(type: "date", nullable: false),
                    NumeroBI = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dataValidadeBI = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FotoFacial = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FotoBIFrente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FotoBIVerso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroTelefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ClienteId);
                });

            migrationBuilder.CreateTable(
                name: "CartoesSims",
                columns: table => new
                {
                    CartaoSimId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroSIM = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroTelefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartoesSims", x => x.CartaoSimId);
                    table.ForeignKey(
                        name: "FK_CartoesSims_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "ClienteId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartoesSims_ClienteId",
                table: "CartoesSims",
                column: "ClienteId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartoesSims");

            migrationBuilder.DropTable(
                name: "Clientes");
        }
    }
}
