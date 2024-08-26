
using System;

namespace Arti365.Case.Server.API.Database;

public static class EmployeeDatabase
{
    public static List<Employee> Employees { get; set; } = new List<Employee>
    {
        new Employee { Id = 1, Name = "Ahmet Yılmaz", Age = 35, Department = "İnsan Kaynakları" },
        new Employee { Id = 2, Name = "Elif Demir", Age = 28, Department = "Mühendislik" },
        new Employee { Id = 3, Name = "Merve Kaya", Age = 32, Department = "Pazarlama" },
        new Employee { Id = 4, Name = "Ali Vural", Age = 40, Department = "Finans" },
        new Employee { Id = 5, Name = "Serhat Çelik", Age = 30, Department = "Satış" },
        new Employee { Id = 6, Name = "Duygu Akın", Age = 25, Department = "Yazılım" },
        new Employee { Id = 7, Name = "Burak Yıldırım", Age = 38, Department = "Hukuk" },
        new Employee { Id = 8, Name="Esra Özcan", Age = 27, Department = "Muhasebe" },
        new Employee { Id = 9, Name = "Yiğit Arslan", Age = 33, Department = "Operasyon" },
        new Employee { Id = 10, Name = "Selen Karataş", Age = 29, Department = "Grafik Tasarım" },
        new Employee { Id = 11, Name = "Caner Aydın", Age = 42, Department = "Bilgi İşlem" },
        new Employee { Id = 12, Name = "Ebru Yılmaz", Age = 31, Department = "Satın Alma" },
        new Employee { Id = 13, Name = "Mehmet Kaya", Age = 37, Department = "Kalite Kontrol" },
        new Employee { Id = 14, Name = "Didem Koç", Age = 26, Department = "Ar-Ge" },
        new Employee { Id = 15, Name = "Kaan Yıldız", Age = 34, Department = "Üretim" }
    };
}