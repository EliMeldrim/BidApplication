using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

using BidApplication.Domain.Interfaces;
using BidApplication.Domain.Models;


namespace BidApplication.Dal
{
    public class Dal : IDal
    {

        public List<ExtraJSON> GetExtras()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "data", "Extras.json");
            Console.WriteLine("Current Directory: " + Directory.GetCurrentDirectory());
            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException("The specified file does not exist.", filePath);
            }

            string jsonContent = File.ReadAllText(filePath);



            return JsonSerializer.Deserialize<List<ExtraJSON>>(jsonContent);
        }
    }
}
