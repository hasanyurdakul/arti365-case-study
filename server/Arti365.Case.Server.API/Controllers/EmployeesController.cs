using Arti365.Case.Server.API.Database;
using Arti365.Case.Server.API.DTOs;
using Arti365.Case.Server.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Arti365.Case.Server.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        /// <summary>
        /// Veritabanında kayıtlı tüm Employee'leri elde etmek için kullanılır.
        /// </summary>
        /// <returns>GetEmployees işleminin durumunu belirten, ResponseModel tipinde bir ActionResult.</returns>
        [HttpGet]
        public ActionResult<ResponseModel<List<Employee>>> GetEmployees()
        {
            var employees = EmployeeDatabase.Employees.ToList();
            return Ok(new ResponseModel<List<Employee>>(true, "Employees retrieved successfully", employees));
        }


        /// <summary>
        /// Id'si verilen Employee bilgilerini elde etmek için kullanılır.
        /// </summary>
        /// <param name="id">Bilgileri elde edilmek istenen Employee'nin Id'si.</param>
        /// <returns>GetEmployee işleminin durumunu belirten, ResponseModel tipinde bir ActionResult.</returns>
        [HttpGet("{id}")]
        public ActionResult<ResponseModel<Employee>> GetEmployee(int id)
        {
            var employee = EmployeeDatabase.Employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound(new ResponseModel<Employee>(false, "Employee not found", null));

            return Ok(new ResponseModel<Employee>(true, "Employee retrieved successfully", employee));
        }

        /// <summary>
        /// Gönderilen Employee'yi veritabanına ekler.
        /// </summary>
        /// <param name="createEmployeeDto">Eklenecek Employee bilgileri.</param>
        /// <returns>AddEmployee işleminin durumunu belirten, ResponseModel tipinde bir ActionResult.</returns>
        [HttpPost]
        public ActionResult<ResponseModel<Employee>> AddEmployee([FromBody] CreateEmployeeDTO createEmployeeDto)
        {
            var employee = new Employee
            {
                Id = EmployeeDatabase.Employees.Max(e => e.Id) + 1,
                Name = createEmployeeDto.Name,
                Age = createEmployeeDto.Age,
                Department = createEmployeeDto.Department
            };

            EmployeeDatabase.Employees.Add(employee);

            return Ok(new ResponseModel<Employee>(true, "Employee created successfully", employee));
        }


        /// <summary>
        /// Parametre olarak Id'si ve güncellenmiş versiyonu verilen Employee'yi veritabanında güncellemek için kullanılır.
        /// </summary>
        /// <param name="id">Güncellenecek Employee'nin Id'si.</param>
        /// <param name="updatedEmployee">Güncellenmiş Employee bilgileri.</param>
        /// <returns>UpdateEmployee işleminin durumunu belirten, ResponseModel tipinde bir ActionResult.</returns>
        [HttpPut("{id}")]
        public ActionResult<ResponseModel<Employee>> UpdateEmployee(int id, [FromBody] UpdateEmployeeDTO updatedEmployee)
        {
            var employee = EmployeeDatabase.Employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound(new ResponseModel<Employee>(false, "Employee not found", null));

            employee.Name = updatedEmployee.Name;
            employee.Age = updatedEmployee.Age;
            employee.Department = updatedEmployee.Department;

            var response = new ResponseModel<Employee>(true, "Employee updated successfully", employee);
            return Ok(response);
        }


        /// <summary>
        /// Parametre olarak Id'si verilen Employee'yi veritabanından silmek için kullanılır.
        /// </summary>
        /// <param name="id">Silinecek Employee'nin Id bilgisi.</param>
        /// <returns>DeleteEmployee işleminin durumunu belirten, ResponseModel tipinde bir ActionResult.</returns>
        [HttpDelete("{id}")]
        public ActionResult<ResponseModel<bool>> DeleteEmployee(int id)
        {
            var employee = EmployeeDatabase.Employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound(new ResponseModel<bool>(false, "Employee not found", false));

            EmployeeDatabase.Employees.Remove(employee);

            var response = new ResponseModel<bool>(true, "Employee deleted successfully", true);
            return Ok(response);
        }

    }

}
