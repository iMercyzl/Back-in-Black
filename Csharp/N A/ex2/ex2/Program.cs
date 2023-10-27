using System;
using System.Globalization;

namespace curso
{
    class Program
    {
        static void Main(string[] args)
        {
            double largura, comprimento, precoMetroQuadrado, area, preco;

            Console.WriteLine("Digite a largura do terreno");
            largura = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("Digite o comprimento do terreno");
            comprimento = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("Digite o Preço por metro quadrado");
            precoMetroQuadrado = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            area = largura * comprimento;
            preco = area * precoMetroQuadrado;

            Console.WriteLine("area do terreno = " + area.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("preço do terreno = " + preco.ToString("F2", CultureInfo.InvariantCulture));


            Console.ReadLine();
        }
    }
}

