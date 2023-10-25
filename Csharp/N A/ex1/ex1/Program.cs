using System;
using System.Globalization;

namespace Exercicio
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite seu nome completo");
            string nomeCompleto = Console.ReadLine();

            Console.WriteLine("Quantos quartos tem na sua casa?");
            int quartos = int.Parse(Console.ReadLine());

            Console.WriteLine("Informe o preço de um produto");
            double precoProd = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);


            Console.WriteLine("Digite seu último nome, idade e altura (mesma linha)");
            string[] vet = Console.ReadLine().Split(' ');
            string sobreNome = vet[0];
            int idade = int.Parse(vet[1]);
            double altura = double.Parse(vet[2], CultureInfo.InvariantCulture);





            Console.WriteLine(nomeCompleto);
            Console.WriteLine(quartos);
            Console.WriteLine(precoProd.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine(sobreNome);
            Console.WriteLine(idade);
            Console.WriteLine(altura.ToString("F2", CultureInfo.InvariantCulture));


        }
    }
}