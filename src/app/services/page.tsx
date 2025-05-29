import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Услуги | TechCorp",
  description: "Разгледайте нашите цялостни уеб разработка и дигитални услуги",
};

export default function ServicesPage() {
  return (
    <>      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Нашите услуги</h1>
            <p className="text-xl text-muted-foreground">
              Цялостни уеб решения, задвижвани от модерни технологии
            </p>
          </div>
        </div>
      </section>      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Какво предлагаме</h2>
            <p className="text-muted-foreground">
              Предоставяме цялостни услуги за уеб разработка, използвайки авангардни технологии, за да помогнем
              на бизнесите да създават влиятелни дигитални преживявания.
            </p>
          </div>          <Tabs defaultValue="web-development" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="web-development">Уеб разработка</TabsTrigger>
              <TabsTrigger value="ui-ux">UI/UX дизайн</TabsTrigger>
              <TabsTrigger value="ecommerce">Електронна търговия</TabsTrigger>
              <TabsTrigger value="digital-marketing">Дигитален маркетинг</TabsTrigger>
            </TabsList>
              <TabsContent value="web-development" className="mt-6 space-y-8">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Персонализирана уеб разработка</h3>
                  <p className="mb-4 text-muted-foreground">
                    Изграждаме персонализирани уебсайтове и уеб приложения, използвайки модерни фреймуърци и технологии,
                    които осигуряват изключителна производителност, мащабируемост и потребителско преживяване.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {webDevFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {webTechnologies.map((tech, index) => (
                      <Badge key={index} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-4/3">
                  <Image 
                    src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=800&auto=format&fit=crop" 
                    alt="Web Development" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ui-ux" className="mt-6 space-y-8">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="relative order-2 overflow-hidden rounded-lg md:order-1 aspect-4/3">
                  <Image 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" 
                    alt="UI/UX Design" 
                    fill
                    className="object-cover"
                  />
                </div>                <div className="order-1 md:order-2">
                  <h3 className="mb-4 text-2xl font-bold">UI/UX дизайн</h3>
                  <p className="mb-4 text-muted-foreground">
                    Създаваме красиви, интуитивни потребителски интерфейси, които предоставят изключителни потребителски преживявания
                    и помагат за постигането на вашите бизнес цели.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {uiUxFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {designTools.map((tool, index) => (
                      <Badge key={index} variant="outline">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-6 space-y-8">
              <div className="grid items-center gap-10 md:grid-cols-2">                <div>
                  <h3 className="mb-4 text-2xl font-bold">Решения за електронна търговия</h3>
                  <p className="mb-4 text-muted-foreground">
                    Изграждаме стабилни уебсайтове за електронна търговия, които предоставят безпроблемни пазарски преживявания,
                    сигурна обработка на плащания и ефикасно управление на инвентара.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {ecommerceFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {ecommercePlatforms.map((platform, index) => (
                      <Badge key={index} variant="outline">{platform}</Badge>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-4/3">
                  <Image 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" 
                    alt="E-commerce" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digital-marketing" className="mt-6 space-y-8">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="relative order-2 overflow-hidden rounded-lg md:order-1 aspect-4/3">
                  <Image 
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop" 
                    alt="Digital Marketing" 
                    fill
                    className="object-cover"
                  />
                </div>                <div className="order-1 md:order-2">
                  <h3 className="mb-4 text-2xl font-bold">Дигитален маркетинг и SEO</h3>
                  <p className="mb-4 text-muted-foreground">
                    Помагаме ви да достигнете до вашата целева аудитория чрез стратегически кампании за дигитален маркетинг
                    и SEO оптимизация за насочване на трафик и конверсии.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {marketingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {marketingTools.map((tool, index) => (
                      <Badge key={index} variant="outline">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>      {/* Service Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto mb-8 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Специализирани услуги</h2>            <p className="text-muted-foreground">
              Персонализирани решения за удовлетворяване на вашите специфични бизнес изисквания
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specializedServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Научете повече</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Нашият процес</h2>
            <p className="text-muted-foreground">
              Нашият оптимизиран подход осигурява успешно изпълнение на проекта
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute hidden w-full top-8 left-1/2 md:block">
                    <div className="h-0.5 bg-muted-foreground/20" />
                  </div>
                )}
                <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 text-xl font-bold rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Technologies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Технологии, които използваме</h2>
            <p className="text-muted-foreground">
              Използваме най-новите уеб технологии за доставка на високопроизводителни уебсайтове
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">            <div className="space-y-6">
              <h3 className="text-2xl font-medium">Frontend технологии</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {frontendTechnologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 space-y-3 text-center rounded-lg shadow bg-background">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      {tech.icon}
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>            <div className="space-y-6">
              <h3 className="text-2xl font-medium">Backend технологии</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {backendTechnologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 space-y-3 text-center rounded-lg shadow bg-background">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      {tech.icon}
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Представени проекти</h2>
            <p className="text-muted-foreground">
              Вижте как помогнахме на бизнесите да постигнат своите цели
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge>{project.category}</Badge>
                  </div>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>                <CardFooter className="p-4 border-t">
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/contact">Преглед на казуса</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Готови ли сте да започнете вашия проект?</h2>
            <p className="text-xl text-primary-foreground/90">
              Свържете се с нас днес, за да обсъдим как можем да ви помогнем да постигнете вашите цели за уеб разработка.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/about">Научете за нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Web Development
const webDevFeatures = [
  "Отзивчив дизайн за всички устройства",
  "Оптимизация за скорост и производителност",
  "SEO оптимизация за по-добра видимост",
  "Персонализирани CMS решения",
  "Интеграция с API и трети страни",
  "Облачно хостинг и SSL сигурност"
];

const webTechnologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL"
];

// UI/UX
const uiUxFeatures = [
  "Потребителско изследване и персони",
  "Wireframing и прототипиране", 
  "Визуален дизайн и брандиране",
  "Тестване на потребителско преживяване",
  "Дизайн система и компоненти",
  "Достъпност и използваемост"
];

const designTools = [
  "Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"
];

// E-commerce
const ecommerceFeatures = [
  "Каталог на продукти и управление на инвентар",
  "Сигурна обработка на плащания",
  "Система за пазарска количка и поръчки",
  "Потребителски акаунти и профили",
  "Интеграция с доставчици и логистика",
  "Аналитика и отчети за продажби"
];

const ecommercePlatforms = [
  "Shopify", "WooCommerce", "Magento", "BigCommerce", "Персонализирани решения"
];

// Digital Marketing
const marketingFeatures = [
  "SEO оптимизация и ключови думи", 
  "Google Ads и Facebook реклами",
  "Email маркетинг кампании",
  "Социални мрежи и съдържание",
  "Аналитика и проследяване на конверсии",
  "A/B тестване и оптимизация"
];

const marketingTools = [
  "Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Meta Ads"
];

// Specialized Services
const specializedServices = [
  {
    title: "Прогресивни уеб приложения",
    shortDesc: "Бързи, отзивчиви приложения, които работят офлайн",
    description: "Изграждаме прогресивни уеб приложения, които комбинират най-доброто от уеб и мобилните приложения, предоставяйки бързи, ангажиращи преживявания, които работят офлайн и на всяко устройство.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  },
  {
    title: "API разработка",
    shortDesc: "Персонализирани API за безпроблемна интеграция",
    description: "Проектираме и разработваме персонализирани API, които позволяват безпроблемна интеграция между вашите системи и услуги на трети страни, подобрявайки ефективността и потока от данни.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
  },
  {
    title: "Управление на съдържание",
    shortDesc: "Лесни за употреба системи за управление на съдържание",
    description: "Внедряваме удобни за потребителя системи за управление на съдържание, които правят лесно за вашия екип да актуализира и управлява съдържанието на уебсайта без технически знания.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  },
  {
    title: "Оптимизация на производителността",
    shortDesc: "Бързо зареждащи се уебсайтове за по-добро UX и SEO",
    description: "Оптимизираме производителността на вашия уебсайт, за да осигурим бързи времена за зареждане, плавни взаимодействия и отлични потребителски преживявания, които също подобряват класирането в търсачките.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
  },
  {
    title: "Съответствие с достъпността",
    shortDesc: "Приобщаващи уебсайтове за всички потребители",
    description: "Осигуряваме достъпност на вашия уебсайт за всички потребители, включително тези с увреждания, чрез внедряване на WCAG насоки и най-добри практики за дигитална достъпност.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
  },
  {
    title: "Поддръжка на уебсайтове",
    shortDesc: "Текуща поддръжка и актуализации",
    description: "Предоставяме текущи услуги за поддръжка и подкрепа, за да поддържаме вашия уебсайт сигурен, актуален и работещ оптимално с редовни актуализации и мониторинг.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
  }
];

// Process Steps
const processSteps = [
  {
    title: "Проучване",
    description: "Започваме с разбиране на вашите бизнес цели, целева аудитория и изисквания за проекта."
  },
  {
    title: "Дизайн",
    description: "Създаваме wireframes и визуални дизайни, които са в съответствие с вашата марка и потребителските нужди."
  },
  {
    title: "Разработка",
    description: "Нашият екип изгражда вашия уебсайт или приложение, използвайки модерни, ефективни технологии."
  },
  {
    title: "Внедряване",
    description: "Тестваме основно и пускаме вашия проект, осигурявайки, че всичко работи перфектно."
  }
];

// Frontend Technologies
const frontendTechnologies = [
  {
    name: "React",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
  },
  {
    name: "Next.js",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
  },
  {
    name: "TypeScript",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.8 4.2"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.27 6.96 12 12.01l8.73-5.05"></path><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    name: "Tailwind CSS",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path><path d="M10 14v.5"></path><path d="M14 14v.5"></path><path d="M10 19a4 4 0 0 0 4 0"></path></svg>
  },
  {
    name: "Redux",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"></path><path d="M19 6v3"></path><path d="M5 6v3"></path><path d="M12 19v3"></path><path d="M19 16v3"></path><path d="M5 16v3"></path><path d="M8.5 7.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path><path d="M16 9.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path><path d="M3 9.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path><path d="M8.5 16.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path><path d="M16 18.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path><path d="M3 18.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0Z"></path></svg>
  },
  {
    name: "Framer Motion",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
  }
];

// Backend Technologies
const backendTechnologies = [
  {
    name: "Node.js",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
  },
  {
    name: "Express",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
  },
  {
    name: "MongoDB",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8"></path><path d="M17 7H7"></path><path d="M15 21H9V11h6Z"></path><path d="M17 11a1 1 0 0 0-1 1v3h2v-3a1 1 0 0 0-1-1Z"></path><path d="M7 11a1 1 0 0 0-1 1v3h2v-3a1 1 0 0 0-1-1Z"></path></svg>
  },
  {
    name: "PostgreSQL",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
  },
  {
    name: "GraphQL",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16"></path><path d="M5 21h14"></path><rect x="4" y="3" width="16" height="8" rx="1"></rect><rect x="5" y="14" width="14" height="7" rx="1"></rect></svg>
  },
  {
    name: "AWS",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z"></path><path d="M12 7a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z"></path><path d="M12 17a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z"></path></svg>
  }
];

// Featured Projects
const projects = [
  {
    title: "Платформа за електронна търговия",
    client: "RetailCorp Inc.",
    category: "Електронна търговия",
    description: "Модерна платформа за електронна търговия с усъвършенствано филтриране, сигурни плащания и управление на инвентара в реално време.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Корпоративен уебсайт",
    client: "GlobalTech Solutions",
    category: "Корпоративен",
    description: "Отзивчив корпоративен уебсайт с модерен дизайн, интерактивни функции и система за управление на съдържание.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Мобилно банково приложение",
    client: "Finance Plus",
    category: "Финанси",
    description: "Сигурно и удобно за потребителя мобилно банково приложение с проследяване на транзакции в реално време и аналитика.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  }
];