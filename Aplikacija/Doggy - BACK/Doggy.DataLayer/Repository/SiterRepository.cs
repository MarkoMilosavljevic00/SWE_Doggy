﻿using Doggy.DataLayer.Repository.Interfaces;
using Doggy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer.Repository
{
    public class SiterRepository : Repository<Siter>, ISiterRepository
    {
        public SiterRepository(DoggyContext context) : base(context)
        {

        }
    }
}
