using System;
using System.Globalization;

namespace beecrowd
{
    class beecrowdd
    {
        static void Main(string[] args)
        {
            double a, b, c, media, aPonderado, bPonderado, cPonderado;

            a = double.Parse(Console.ReadLine());
            b = double.Parse(Console.ReadLine());
            c = double.Parse(Console.ReadLine());

            aPonderado = a * 2;
            bPonderado = b * 3;
            cPonderado = c * 5;

            media = (((bPonderado + aPonderado + cPonderado) / 10) / 10);

            Console.WriteLine("MEDIA = " + media.ToString("F1", CultureInfo.InvariantCulture));
        }
    }
}