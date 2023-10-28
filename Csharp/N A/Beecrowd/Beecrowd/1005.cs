using System;
using System.Globalization;

namespace beecrowd
{
    class Program
    {
        static void Main(string[] args)
        {
            double A, B, media, Aponderado, Bponderado;

            A = double.Parse(Console.ReadLine());
            B = double.Parse(Console.ReadLine());

            Aponderado = A * 3.5;
            Bponderado = B * 7.5;



            media = (((Aponderado + Bponderado) / 11)/ 10);

            Console.WriteLine("MEDIA = " + media.ToString("F5", CultureInfo.InvariantCulture));
        }
    }
}