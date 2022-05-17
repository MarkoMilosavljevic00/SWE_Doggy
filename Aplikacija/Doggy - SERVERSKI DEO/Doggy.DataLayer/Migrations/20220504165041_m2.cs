using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Doggy.DataLayer.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usluge",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VlasnikId = table.Column<int>(type: "int", nullable: false),
                    SiterId = table.Column<int>(type: "int", nullable: false),
                    Vrsta = table.Column<int>(type: "int", nullable: false),
                    Pocetak = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Kraj = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usluge", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Usluge_Siteri_SiterId",
                        column: x => x.SiterId,
                        principalTable: "Siteri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Usluge_Vlasnici_VlasnikId",
                        column: x => x.VlasnikId,
                        principalTable: "Vlasnici",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Usluge_SiterId",
                table: "Usluge",
                column: "SiterId");

            migrationBuilder.CreateIndex(
                name: "IX_Usluge_VlasnikId",
                table: "Usluge",
                column: "VlasnikId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usluge");
        }
    }
}
