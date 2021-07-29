using Dapper;
using Data.Concrete.EfCore.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        // GET: api/<HomeController>
        [HttpGet]
        public IActionResult get1()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                var query = context.Shippers.Select(x => x).ToList();
                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get2()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                var query = context.Categories.Select(c => new
                {
                    c.CategoryName,
                    c.Description
                }
                ).ToList();
                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get3()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                var query = context.Employees.Where(c => c.Title == "Sales Representative").Select(c => new
                {
                    c.FirstName,

                }
                ).ToList();
                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get7()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                /*
                var query = from e in context.Products
                            where EF.Functions.Like(e.ProductName,"%queso%")
                            select e;
                */

                var query = context.Products.Where(c => c.ProductName.Contains("queso")).Select(c => new
                {
                    c.ProductId
                }).ToList();

                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get7q()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                var query = context.Products.FromSqlRaw($"SELECT * FROM Products").Select(p => new
                {
                    p.ProductId
                }).ToList();
                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get7p()
        {
            var result = "";
            using (var context = new NorthWindContext())
            {
                var query = context.Products.FromSqlRaw("EXEC usp_GetAllProducts ").ToList();
                Console.WriteLine(query[0].ProductName);
                result = JsonConvert.SerializeObject(query);
            }

            return Ok(result);
        }
        public IActionResult get7vanilla()
        {
            using (var context = new NorthWindContext())
            {
                using (var con = context.Database.GetDbConnection())
                {
                    if (con.State != ConnectionState.Open)
                        con.Open();
                    using (var cmd = con.CreateCommand())
                    {
                        cmd.CommandText = "EXEC dbo.[usp_GetAllProducts]";
                        cmd.CommandType = CommandType.Text;

                        var reader = cmd.ExecuteReader();

                        List<string> result = new List<string>();
                        while (reader.Read())
                        {
                            Console.WriteLine("{0}", reader.GetString(0));
                            result.Add(reader.GetString(0));
                        }

                        reader.Close();

                        if (con.State != ConnectionState.Closed)
                            con.Close();

                        return Ok(result);
                    }

                }

            }
        }
        public IActionResult get7dapper()
        {
            using (var context = new NorthWindContext())
            {
                using (var connection = context.Database.GetDbConnection())
                {
                    var orderDetail = connection.Query("EXEC dbo.[usp_GetAllProducts]").ToList();

                    Console.WriteLine(orderDetail);

                    return Ok(orderDetail);
                }
            }
        }
        public IActionResult get20dapper()
        {
            using (var context = new NorthWindContext())
            {
                using (var connection = context.Database.GetDbConnection())
                {
                    var result = connection.Query("EXEC [dbo].[usp_GetProductsNumbersByCategory]");

                    return Ok(result);

                }
            }

        }
    }
}
