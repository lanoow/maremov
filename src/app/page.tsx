import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container flex flex-col items-center mx-auto space-y-10 text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Модерни уеб решения за дигиталното предприятие
            </h1>
            <p className="text-xl text-muted-foreground">
              Използвайте най-новите технологии, за да трансформирате бизнеса си с нашите иновативни уеб решения.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Започни сега</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Разгледай услугите</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-4xl overflow-hidden border rounded-lg shadow-xl aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop"
              alt="Модерен dashboard за уеб разработка"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto space-y-12">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Модерни технологии</h2>
            <p className="text-lg text-muted-foreground">
              Нашите уебсайтове са изградени с най-новите технологии, които гарантират скорост, сигурност и мащабируемост.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Next.js Framework</CardTitle>
                <CardDescription>React-базирана рамка за модерни уеб приложения</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Server-side рендериране, статично генериране на сайтове и API routes за оптимална производителност и SEO.</p>
                <div className="mt-4">
                  <Link href="/technologies" className="text-primary hover:underline">
                    Научи повече →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>Utility-first CSS framework</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Създавайте красиви, отзивчиви дизайни, без да напускате HTML-а си, с разширени опции за персонализация.</p>
                <div className="mt-4">
                  <Link href="/technologies" className="text-primary hover:underline">
                    Научи повече →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>Типизиран JavaScript за по-сигурен код</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Открийте грешките рано в разработката със силно типизиране и подобрена поддръжка на редактора.</p>
                <div className="mt-4">
                  <Link href="/technologies" className="text-primary hover:underline">
                    Научи повече →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto space-y-12">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Нашите услуги</h2>
            <p className="text-lg text-muted-foreground">
              Цялостни уеб решения, съобразени с нуждите на вашия бизнес.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-8 mx-auto md:flex-row">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Готови сте да трансформирате онлайн присъствието си?</h2>
            <p className="text-lg text-primary-foreground/90">
              Нека обсъдим как нашите модерни уеб решения могат да помогнат на бизнеса ви да процъфтява в дигиталния свят.
            </p>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Свържете се с нас днес</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Уеб разработка",
    description: "Персонализирани уебсайтове и уеб приложения, изградени с модерни технологии.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
    ),
  },
  {
    title: "UI/UX дизайн",
    description: "Потребителски-центриран дизайн, който предоставя изключителни дигитални преживявания.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
    ),
  },
  {
    title: "E-commerce решения",
    description: "Онлайн магазини със сигурни платежни системи и управление на инвентара.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
  {
    title: "SEO и аналитика",
    description: "Оптимизирайте сайта си за търсачки и следете показателите за производителност.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"></path>
        <path d="M5 16h2v4H5z"></path>
        <path d="M9 11h2v9H9z"></path>
        <path d="M13 7h2v13h-2z"></path>
        <path d="M17 3h2v17h-2z"></path>
      </svg>
    ),
  },
];
