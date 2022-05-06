﻿// <auto-generated />
using System;
using Doggy.DataLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Doggy.DataLayer.Migrations
{
    [DbContext(typeof(DoggyContext))]
    partial class DoggyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Doggy.Model.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KorisnickoIme")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sifra")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Admini");
                });

            modelBuilder.Entity("Doggy.Model.Pas", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Opis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pol")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rasa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Slika")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Tezina")
                        .HasColumnType("float");

                    b.Property<double>("Visina")
                        .HasColumnType("float");

                    b.Property<int>("VlasnikId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("VlasnikId");

                    b.ToTable("Psi");
                });

            modelBuilder.Entity("Doggy.Model.Recenzija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Komentar")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Ocena")
                        .HasColumnType("float");

                    b.Property<int>("PasId")
                        .HasColumnType("int");

                    b.Property<int>("SiterId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Vreme")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("PasId");

                    b.HasIndex("SiterId");

                    b.ToTable("Recenzije");
                });

            modelBuilder.Entity("Doggy.Model.Siter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("CenaPoSatu")
                        .HasColumnType("float");

                    b.Property<bool>("Dostupan")
                        .HasColumnType("bit");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KorisnickoIme")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ObavljeneUsluge")
                        .HasColumnType("int");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sifra")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Slika")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Siteri");
                });

            modelBuilder.Entity("Doggy.Model.Usluga", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Kraj")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Pocetak")
                        .HasColumnType("datetime2");

                    b.Property<int>("SiterId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("VlasnikId")
                        .HasColumnType("int");

                    b.Property<int>("Vrsta")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SiterId");

                    b.HasIndex("VlasnikId");

                    b.ToTable("Usluge");
                });

            modelBuilder.Entity("Doggy.Model.Vlasnik", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KorisnickoIme")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sifra")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Vlasnici");
                });

            modelBuilder.Entity("Doggy.Model.Pas", b =>
                {
                    b.HasOne("Doggy.Model.Vlasnik", "Vlasnik")
                        .WithMany("Psi")
                        .HasForeignKey("VlasnikId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Vlasnik");
                });

            modelBuilder.Entity("Doggy.Model.Recenzija", b =>
                {
                    b.HasOne("Doggy.Model.Pas", "Pas")
                        .WithMany("Recenzije")
                        .HasForeignKey("PasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Doggy.Model.Siter", "Siter")
                        .WithMany("Recenzije")
                        .HasForeignKey("SiterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pas");

                    b.Navigation("Siter");
                });

            modelBuilder.Entity("Doggy.Model.Usluga", b =>
                {
                    b.HasOne("Doggy.Model.Siter", "Siter")
                        .WithMany()
                        .HasForeignKey("SiterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Doggy.Model.Vlasnik", "Vlasnik")
                        .WithMany()
                        .HasForeignKey("VlasnikId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Siter");

                    b.Navigation("Vlasnik");
                });

            modelBuilder.Entity("Doggy.Model.Pas", b =>
                {
                    b.Navigation("Recenzije");
                });

            modelBuilder.Entity("Doggy.Model.Siter", b =>
                {
                    b.Navigation("Recenzije");
                });

            modelBuilder.Entity("Doggy.Model.Vlasnik", b =>
                {
                    b.Navigation("Psi");
                });
#pragma warning restore 612, 618
        }
    }
}
