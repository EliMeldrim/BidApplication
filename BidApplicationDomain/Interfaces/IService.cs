using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BidApplication.Domain.Models;

namespace BidApplication.Domain.Interfaces
{
    public interface IService
    {
       List<ExtraJSON> GetExtras();   
    }
}
