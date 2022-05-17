using Microsoft.EntityFrameworkCore.Migrations;

namespace Doggy.DataLayer.Migrations
{
    public partial class m4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Drzava",
                table: "Vlasnici");

            migrationBuilder.DropColumn(
                name: "Drzava",
                table: "Siteri");

            migrationBuilder.DropColumn(
                name: "Drzava",
                table: "Admini");

            migrationBuilder.AddColumn<string>(
                name: "AdresaPreuzimanjaPsa",
                table: "Usluge",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PasId",
                table: "Usluge",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "ProsecnaOcena",
                table: "Siteri",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdresaPreuzimanjaPsa",
                table: "Usluge");

            migrationBuilder.DropColumn(
                name: "PasId",
                table: "Usluge");

            migrationBuilder.DropColumn(
                name: "ProsecnaOcena",
                table: "Siteri");

            migrationBuilder.AddColumn<string>(
                name: "Drzava",
                table: "Vlasnici",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Drzava",
                table: "Siteri",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Drzava",
                table: "Admini",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
