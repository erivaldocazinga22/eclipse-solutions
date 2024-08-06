import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export const navItems = [
    { label: "Início", href: "/" },
    { label: "Workflow", href: "#workflow" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre Nós", href: "/about" },
];

export const SociaisLinks = [
  {
    label: "Linkedin",
    href: "",
    icon: IconBrandLinkedin,
  },
  {
    label: "Instagram",
    href: "",
    icon: IconBrandInstagram,
  },
  {
    label: "Facebook",
    href: "",
    icon: IconBrandFacebook,
  }
]

export const suportLinks = [
  {
    href: "/suport/privacity",
    label: "Privaciade"
  },
  {
    href: "/suport/cookies",
    label: "Cookies"
  },
  {
    href: "/suport/terms",
    label: "Termos"
  }
]



export const servicesOptions = [
  {
    title: "Marketing Digital",
    features: [
      "Gerenciamento de campanhas publicitárias",
      "Análise de SEO e palavras-chave",
      "Automação de e-mails e marketing",
      "Relatórios detalhados de desempenho",
      "Gestão de redes sociais",
      "Análise de concorrência",
    ],
  },
  {
    title: "Desenvolvimento Web",
    features: [
      "Desenvolvimento de sites responsivos",
      "Integração com APIs de terceiros",
      "Desenvolvimento front-end e back-end",
      "Otimização de desempenho e velocidade",
      /* "Implementação de sistemas de gerenciamento de conteúdo (CMS)", */
      "Testes de segurança e vulnerabilidade",
    ],
  },
  {
    title: "Design Gráfico",
    features: [
      "Criação e design de logotipos",
      "Design de material promocional (flyers, banners, etc.)",
      /* "Design de interface de usuário (UI) e experiência de usuário (UX)", */
      "Edição e manipulação profissional de imagens",
      "Design de embalagens e rótulos",
      "Criação de identidade visual completa",
    ],
  },
];
