using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using BidApplication.Domain.Interfaces;
using BidApplication.Domain.Models;


namespace BidApplication.Service
{
    public class Service : IService
    {
        private readonly IDal _s;
        public Service(IDal s)
        {
            _s = s;
        }

        public List<ExtraJSON> GetExtras()
        {
            return _s.GetExtras(); 
        }
    }
}
