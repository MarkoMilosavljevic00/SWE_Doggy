using Microsoft.EntityFrameworkCore.Migrations;

namespace Doggy.DataLayer.Migrations
{
    public partial class m5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Psi_Vlasnici_VlasnikId",
                table: "Psi");

            migrationBuilder.RenameColumn(
                name: "ObavljeneUsluge",
                table: "Siteri",
                newName: "BrObavljenihUsluga");

            migrationBuilder.AddColumn<bool>(
                name: "Validan",
                table: "Siteri",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<int>(
                name: "VlasnikId",
                table: "Psi",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Usluge_PasId",
                table: "Usluge",
                column: "PasId");

            migrationBuilder.AddForeignKey(
                name: "FK_Psi_Vlasnici_VlasnikId",
                table: "Psi",
                column: "VlasnikId",
                principalTable: "Vlasnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Usluge_Psi_PasId",
                table: "Usluge",
                column: "PasId",
                principalTable: "Psi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Psi_Vlasnici_VlasnikId",
                table: "Psi");

            migrationBuilder.DropForeignKey(
                name: "FK_Usluge_Psi_PasId",
                table: "Usluge");

            migrationBuilder.DropIndex(
                name: "IX_Usluge_PasId",
                table: "Usluge");

            migrationBuilder.DropColumn(
                name: "Validan",
                table: "Siteri");

            migrationBuilder.RenameColumn(
                name: "BrObavljenihUsluga",
                table: "Siteri",
                newName: "ObavljeneUsluge");

            migrationBuilder.AlterColumn<int>(
                name: "VlasnikId",
                table: "Psi",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Psi_Vlasnici_VlasnikId",
                table: "Psi",
                column: "VlasnikId",
                principalTable: "Vlasnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
