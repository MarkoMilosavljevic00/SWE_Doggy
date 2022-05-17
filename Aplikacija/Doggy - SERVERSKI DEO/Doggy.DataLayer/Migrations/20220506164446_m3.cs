using Microsoft.EntityFrameworkCore.Migrations;

namespace Doggy.DataLayer.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recenzije_Siteri_SiterId",
                table: "Recenzije");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Usluge",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "CenaPoSatu",
                table: "Siteri",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "Dostupan",
                table: "Siteri",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "ObavljeneUsluge",
                table: "Siteri",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "SiterId",
                table: "Recenzije",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PasId",
                table: "Recenzije",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Recenzije_PasId",
                table: "Recenzije",
                column: "PasId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recenzije_Psi_PasId",
                table: "Recenzije",
                column: "PasId",
                principalTable: "Psi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Recenzije_Siteri_SiterId",
                table: "Recenzije",
                column: "SiterId",
                principalTable: "Siteri",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recenzije_Psi_PasId",
                table: "Recenzije");

            migrationBuilder.DropForeignKey(
                name: "FK_Recenzije_Siteri_SiterId",
                table: "Recenzije");

            migrationBuilder.DropIndex(
                name: "IX_Recenzije_PasId",
                table: "Recenzije");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Usluge");

            migrationBuilder.DropColumn(
                name: "CenaPoSatu",
                table: "Siteri");

            migrationBuilder.DropColumn(
                name: "Dostupan",
                table: "Siteri");

            migrationBuilder.DropColumn(
                name: "ObavljeneUsluge",
                table: "Siteri");

            migrationBuilder.DropColumn(
                name: "PasId",
                table: "Recenzije");

            migrationBuilder.AlterColumn<int>(
                name: "SiterId",
                table: "Recenzije",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Recenzije_Siteri_SiterId",
                table: "Recenzije",
                column: "SiterId",
                principalTable: "Siteri",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
