import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "За нас | Maremov",
  description: "Научете повече за нашата компания и мисията ни да изграждаме иновативни уеб решения",
};

export default function AboutPage() {
  return (
    <>      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">За Maremov</h1>
            <p className="text-xl text-muted-foreground">
              Изграждаме иновативни уеб решения с авангардни технологии
            </p>
          </div>
        </div>
      </section>      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Нашата история</h2>
              <p className="text-muted-foreground">
                Maremov бе основана през 2020 г. с мисията да помогне на бизнесите да използват модерни уеб технологии 
                за създаване на изключителни дигитални преживявания. Това, което започна като малък екип от страстни разработчици, 
                се разрасна до пълноценна агенция за уеб разработка.
              </p>
              <p className="text-muted-foreground">
                Вярваме в силата на модерните уеб технологии да трансформират бизнесите. Нашият подход 
                комбинира техническа експертиза с творческо мислене, за да предоставя решения, които не само изглеждат 
                великолепно, но и работят изключително добре.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 text-center rounded-lg bg-muted/50">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Завършени проекти</div>
                </div>
                <div className="p-4 text-center rounded-lg bg-muted/50">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Доволни клиенти</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Нашият екип в сътрудничество" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Нашата мисия и ценности</h2>
            <p className="text-muted-foreground">
              Движени сме от набор от основни ценности, които ръководят всичко, което правим.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="p-6 space-y-3 border-b-4 border-primary">
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Запознайте се с нашия екип</h2>
            <p className="text-muted-foreground">
              Нашите талантливи професионалисти са страстни за създаването на изключителни уеб преживявания.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Technologies We Use */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Технологии, които използваме</h2>
            <p className="text-muted-foreground">
              Използваме най-новите уеб технологии за изграждане на бързи, отзивчиви и мащабируеми уебсайтове.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-medium">{tech.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Защо да изберете нас</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-full bg-primary/10 text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg aspect-square">
                <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden -translate-y-4 rounded-lg aspect-square">
                <Image src="https://images.unsplash.com/photo-1703355685722-2996b01483be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Modern office" 
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden translate-y-4 rounded-lg aspect-square">
                <Image src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=500&auto=format&fit=crop" 
                  alt="Code on screen" 
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg aspect-square translate-y--4">
                <Image src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=500&auto=format&fit=crop" 
                  alt="Client meeting" 
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Готови ли сте да работите с нас?</h2>
            <p className="text-xl text-primary-foreground/90">
              Нека обсъдим как можем да ви помогнем да постигнете вашите дигитални цели с нашите модерни уеб решения.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/services">Нашите услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    title: "Иновация",
    description: "Непрекъснато изследваме и внедряваме най-новите уеб технологии, за да останем в челните редици.",
  },
  {
    title: "Качество",
    description: "Ангажирани сме да доставяме висококачествени уебсайтове, които надминават очакванията по производителност и дизайн.",
  },
  {
    title: "Ориентираност към клиента",
    description: "Приоритизираме нуждите на нашите клиенти и работим в тясно сътрудничество с тях за постигане на бизнес целите им.",
  },
  {
    title: "Надеждност",
    description: "Доставяме проекти навреме и предоставяме постоянна поддръжка, за да гарантираме безпроблемно функциониране.",
  },
  {
    title: "Достъпност",
    description: "Изграждаме уебсайтове, които са достъпни за всички потребители, независимо от техните способности или устройства.",
  },
  {
    title: "Сигурност",
    description: "Внедряваме надеждни мерки за сигурност, за да защитим данните на нашите клиенти и техните потребители.",
  },
];

const team = [
  {
    name: "Алекс Джонсън",
    role: "Главен изпълнителен директор и основател",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Сара Паркър",
    role: "Водещ дизайнер",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Михаел Чен",
    role: "Старши разработчик",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Емили Родригес",
    role: "Мениджър проекти",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
  },
];

const technologies = [
  {
    name: "Next.js",
    description: "React фреймуърк, който позволява рендериране от страна на сървъра, генериране на статични сайтове и други функции за оптимална производителност и SEO.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-5v5h5v-5Z"/><path d="M18 22V8h-8v14h8Z"/></svg>,
    tags: ["Рендериране от сървъра", "Генериране на статични сайтове", "API маршрути", "Бързо обновяване"]
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS фреймуърк за бързо изграждане на персонализирани потребителски интерфейси без напускане на HTML.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>,
    tags: ["Utility-първи", "Отзивчив дизайн", "Тъмен режим", "Персонализирани варианти"]
  },
  {
    name: "TypeScript",
    description: "Силно типизиран програмен език, който се изгражда върху JavaScript, предоставяйки по-добри инструменти на всякакъв мащаб.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 3 5 3-5 3-5-3 5-3Z"/><path d="m19 3 5 3-5 3-5-3 5-3Z"/><path d="m12 10 5 3-5 3-5-3 5-3Z"/><path d="m12 17 5 3-5 3-5-3 5-3Z"/></svg>,
    tags: ["Типова безопасност", "По-добри инструменти", "Предотвратяване на грешки", "IDE поддръжка"]
  },
  {
    name: "React",
    description: "JavaScript библиотека за изграждане на потребителски интерфейси с компонентна архитектура.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><path d="M11 12h2"/><path d="M21 9a3 3 0 0 0-3-3h-1a4 4 0 0 0-4 4v9l3-4 4 4v-9Z"/><path d="M3 9h1a4 4 0 0 1 4 4v9l-3-4-3 4v-9a3 3 0 0 1 1-4Z"/></svg>,
    tags: ["Компоненти", "Виртуален DOM", "React Hook-ове", "JSX"]
  },
  {
    name: "Shadcn UI",
    description: "Колекция от многократно използваеми компоненти, изградени върху Radix UI и Tailwind CSS за създаване на висококачествени интерфейси.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 10 10-5 5V2l5 5L7 17"/></svg>,
    tags: ["Достъпни", "Персонализируеми", "Темируеми", "Добре документирани"]
  },
  {
    name: "API интеграция",
    description: "Безпроблемно свързване на вашия уебсайт с външни услуги и източници на данни чрез модерни API технологии.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>,
    tags: ["RESTful API", "GraphQL", "В реално време", "Удостоверяване"]
  }
];

const benefits = [
  {
    title: "Експертен екип",
    description: "Нашият екип се състои от опитни разработчици, дизайнери и мениджъри на проекти, които са експерти в своите области.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: "Модерен стек",
    description: "Използваме най-новите технологии, които гарантират, че вашият уебсайт е бърз, сигурен и подготвен за бъдещето.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  },
  {
    title: "Персонализирани решения",
    description: "Създаваме персонализирани уебсайтове и приложения, които са специално проектирани да отговарят на вашите уникални бизнес нужди.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h8"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m7 20.66 1-1.73"/></svg>
  },
  {
    title: "Фокус върху производителността",
    description: "Приоритизираме оптимизацията на производителността, за да гарантираме, че вашият уебсайт се зарежда бързо и се класира добре в търсачките.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
  {
    title: "Постоянна поддръжка",
    description: "Нашата връзка не приключва след стартирането - предоставяме продължителна поддръжка и поддържане на вашия уебсайт.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
  },
  {
    title: "SEO оптимизиран",
    description: "Всеки уебсайт, който изграждаме, е оптимизиран за търсачки, за да помогне на вашия бизнес да бъде намиран онлайн.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  },
];