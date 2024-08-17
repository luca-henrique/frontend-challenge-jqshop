import { Course } from "../@types/course";

export const courses: Course[] = [
  {
    title: "Curso de TypeScript Avançado",
    description: "Aprenda conceitos avançados de TypeScript e como aplicá-los em projetos reais.",
    countModules: 2,
    countLessons: 10,
    modules: [
      {
        id: "1",
        title: "Introdução ao TypeScript",
        description: "Entenda a base da linguagem e seus principais recursos.",
        lessons: [
          {
            id: "2",
            title: "O que é TypeScript?",
            description: "Uma visão geral sobre o TypeScript e suas vantagens sobre o JavaScript.",
            content: "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem. Ele é projetado para desenvolvimento em grande escala, proporcionando uma melhor experiência de desenvolvimento e maior confiabilidade no código."
          },
          {
            id: "1",
            title: "Configurando o Ambiente",
            description: "Aprenda a configurar um ambiente de desenvolvimento para TypeScript.",
            content: "Para começar a usar TypeScript, você precisa instalar o Node.js e o TypeScript via npm. Além disso, é recomendável configurar um editor de código como o Visual Studio Code, que oferece suporte avançado para TypeScript."
          }
        ]
      },
      {
        id: "2",
        title: "Conceitos Avançados",
        description: "Aprofunde-se em conceitos mais complexos do TypeScript.",
        lessons: [
          {
            id: "2",
            title: "Generics",
            description: "Compreenda o uso de Generics para criar componentes flexíveis e reutilizáveis.",
            content: "Generics permitem que você crie funções, classes e interfaces que não se limitam a um tipo específico, proporcionando maior flexibilidade e reutilização do código."
          },
          {
            id: "1",
            title: "Decorators",
            description: "Explore como Decorators podem ser usados para estender e modificar o comportamento de classes e métodos.",
            content: "Decorators são funções que podem ser aplicadas a classes, métodos, acessores, propriedades ou parâmetros, permitindo a adição de funcionalidades adicionais de forma declarativa."
          }
        ]
      }
    ]
  },
  {
    title: "Curso de Design de Interfaces de Usuário",
    description: "Aprenda a criar interfaces de usuário intuitivas e eficazes utilizando as melhores práticas de design.",
    countModules: 2,
    countLessons: 10,
    modules: [
      {
        id: "2",
        title: "Fundamentos do Design de Interfaces",
        description: "Conheça os princípios básicos do design de interfaces e como aplicá-los.",
        lessons: [
          {
            id: "1",
            title: "O que é UI Design?",
            description: "Uma introdução ao design de interfaces e sua importância na experiência do usuário.",
            content: "UI Design, ou Design de Interface de Usuário, refere-se à criação de interfaces gráficas para software, focando na aparência e interatividade. Um bom UI Design é crucial para garantir que os usuários possam interagir com o sistema de forma intuitiva e eficiente."
          },
          {
            id: "2",
            title: "Princípios de Design",
            description: "Explore os princípios fundamentais de design que guiam a criação de interfaces eficazes.",
            content: "Princípios como contraste, alinhamento, proximidade e repetição são essenciais para criar designs equilibrados e intuitivos. Esses princípios ajudam a organizar os elementos na tela de maneira que faça sentido para o usuário."
          }
        ]
      },
      {
        id: "1",
        title: "Ferramentas e Técnicas de Prototipagem",
        description: "Aprenda a usar ferramentas de design para criar protótipos funcionais.",
        lessons: [
          {
            id: "2",
            title: "Introdução ao Figma",
            description: "Aprenda a utilizar o Figma, uma das ferramentas mais populares para design de interfaces.",
            content: "O Figma é uma ferramenta de design baseada em nuvem que permite a colaboração em tempo real e a criação de protótipos interativos. Neste módulo, você aprenderá a configurar projetos, criar layouts e compartilhar seus designs com a equipe."
          },
          {
            id: "3",
            title: "Criando Prototótipos Interativos",
            description: "Descubra como criar protótipos interativos para testar a usabilidade das suas interfaces.",
            content: "Os protótipos interativos permitem simular a experiência do usuário final, identificando problemas de usabilidade antes do desenvolvimento. Você aprenderá a criar interações, animações e fluxos de usuário dentro do Figma."
          }
        ]
      }
    ]
  }

]