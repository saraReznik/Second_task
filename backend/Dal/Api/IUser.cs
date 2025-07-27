﻿using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api
{
    public interface IUser :ICrud<User>
    {
        Task<User?> GetByEmailAsync(string email);
    }
}
