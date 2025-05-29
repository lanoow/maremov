"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Search,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award
} from "lucide-react"

export default function TechnologiesPage() {
  const frontendTechs = [
    {
      name: "Next.js",
      description: "React framework за production-готови приложения с SSR, SSG и API routes",
      logo: "/next.svg",
      proficiency: 95,
      features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Оптимизация на изображения"],
      category: "Framework"
    },
    {
      name: "React",
      description: "JavaScript библиотека за изграждане на потребителски интерфейси с компонентна архитектура",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      proficiency: 98,
      features: ["Компонентна архитектура", "Virtual DOM", "Hooks", "Управление на състояние"],
      category: "Библиотека"
    },
    {
      name: "TypeScript",
      description: "Типизиран надмножество на JavaScript, който се компилира до обикновен JavaScript",
      logo: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=100&h=100&fit=crop&crop=center",
      proficiency: 92,
      features: ["Сигурност на типове", "IntelliSense", "Предотвратяване на грешки", "По-добро рефакториране"],
      category: "Език"
    },
    {
      name: "TailwindCSS",
      description: "Utility-first CSS framework за бързо изграждане на персонализирани потребителски интерфейси",
      logo: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=100&h=100&fit=crop&crop=center",
      proficiency: 96,
      features: ["Utility класове", "Отзивчив дизайн", "Dark Mode", "Персонализирани компоненти"],
      category: "CSS Framework"
    }
  ]

  const backendTechs = [
    {
      name: "Node.js",
      description: "JavaScript runtime базиран на Chrome's V8 JavaScript engine за server-side разработка",
      logo: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center",
      proficiency: 94,
      features: ["Event-Driven", "Non-Blocking I/O", "NPM екосистема", "Микросервиси"],
      category: "Runtime"
    },
    {
      name: "Express.js",
      description: "Бърз, безпристрастен, минималистичен уеб framework за Node.js приложения",
      logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center",
      proficiency: 93,
      features: ["Middleware", "Рутиране", "Template Engines", "Обработка на грешки"],
      category: "Framework"
    },
    {
      name: "MongoDB",
      description: "NoSQL документна база данни за модерни приложения с гъвкава схема",
      logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center",
      proficiency: 89,
      features: ["Документно съхранение", "Хоризонтално мащабиране", "Агрегация", "Atlas Cloud"],
      category: "База данни"
    },
    {
      name: "PostgreSQL",
      description: "Усъвършенствана open-source релационна база данни със строго съответствие със стандартите",
      logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center",
      proficiency: 87,
      features: ["ACID съответствие", "JSON поддръжка", "Усъвършенствани заявки", "Разширения"],
      category: "База данни"
    }
  ]

  const devOpsTechs = [
    {
      name: "Vercel",
      description: "Платформа за frontend frameworks и статични сайтове, създадена за интеграция с headless съдържание",
      logo: "/vercel.svg",
      proficiency: 91,
      features: ["Моментални деплойменти", "Edge мрежа", "Аналитика", "Preview деплойменти"],
      category: "Платформа"
    },
    {
      name: "AWS",
      description: "Цялостна cloud computing платформа с обширно портфолио от услуги",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center",
      proficiency: 85,
      features: ["EC2", "S3", "Lambda", "RDS"],
      category: "Cloud"
    },
    {
      name: "Docker",
      description: "Платформа за разработка, доставка и стартиране на приложения чрез контейнеризация",
      logo: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=100&h=100&fit=crop&crop=center",
      proficiency: 88,
      features: ["Контейнеризация", "Микросервиси", "DevOps", "Оркестрация"],
      category: "Контейнер"
    },
    {
      name: "Git",
      description: "Разпределена система за контрол на версии за проследяване на промени в изходния код",
      logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=center",
      proficiency: 97,
      features: ["Контрол на версии", "Разклоняване", "Сътрудничество", "GitHub интеграция"],
      category: "Инструмент"
    }
  ]

  const technologyCategories = [
    {
      icon: Code,
      title: "Frontend разработка",
      description: "Модерни client-side технологии за изключителни потребителски преживявания",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "ShadcnUI"],
      color: "bg-blue-500"
    },
    {
      icon: Database,
      title: "Backend разработка",
      description: "Солидни server-side решения и управление на бази данни",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API дизайн"],
      color: "bg-green-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Мащабируема инфраструктура и автоматизация на внедряване",
      technologies: ["Vercel", "AWS", "Docker", "CI/CD", "Мониторинг"],
      color: "bg-purple-500"
    },
    {
      icon: Smartphone,
      title: "Мобилни & PWA",
      description: "Кросплатформени мобилни решения и прогресивни уеб приложения",
      technologies: ["React Native", "PWA", "Отзивчив дизайн", "Mobile-First"],
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Сигурност",
      description: "Корпоративна сигурност с високо ниво",
      technologies: ["Удостоверяване", "Оторизация", "HTTPS", "Защита на данни"],
      color: "bg-red-500"
    },
    {
      icon: Search,
      title: "SEO & Аналитика",
      description: "Оптимизация за търсачки и проследяване на производителността",
      technologies: ["Google Analytics", "SEO", "Core Web Vitals", "Производителност"],
      color: "bg-indigo-500"
    }
  ]

  const implementationProcess = [
    {
      step: 1,
      title: "Оценка на технологиите",
      description: "Анализираме изискванията на проекта и избираме оптимален технологичен стек",
      icon: BarChart3
    },
    {
      step: 2,
      title: "Дизайн на архитектурата",
      description: "Проектираме мащабируема системна архитектура и дефинираме модели за разработка",
      icon: Globe
    },
    {
      step: 3,
      title: "Настройка за разработка",
      description: "Конфигурираме среда за разработка и установяваме стандарти за кодиране",
      icon: Code
    },
    {
      step: 4,
      title: "Реализация",
      description: "Изграждаме функционалности, използвайки най-добри практики и модерни методологии",
      icon: Zap
    },
    {
      step: 5,
      title: "Тестване и оптимизация",
      description: "Цялостно тестване и оптимизация на производителността",
      icon: CheckCircle
    },
    {
      step: 6,
      title: "Внедряване и мониторинг",
      description: "Пускаме в производство и внедряваме решения за мониторинг",
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Производителност",
      description: "Светкавично бързи времена за зареждане и оптимално потребителско преживяване"
    },
    {
      icon: Shield,
      title: "Сигурност",
      description: "Корпоративна сигурност с най-новите практики за защита"
    },
    {
      icon: Smartphone,
      title: "Отзивчив",
      description: "Перфектно преживяване на всички устройства и размери на екрана"
    },
    {
      icon: Search,
      title: "SEO оптимизиран",
      description: "Изграден за търсачки с отлична SEO производителност"
    },
    {
      icon: Users,
      title: "Мащабируем",
      description: "Проектиран да расте с нуждите на вашия бизнес"
    },
    {
      icon: Award,
      title: "Най-добри практики",
      description: "Следвайки индустриалните стандарти и модерни практики за разработка"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Модерни уеб технологии
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Авангардни технологии за
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              модерно уеб разработване
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Използваме най-новите и мощни уеб технологии за създаване на изключителни дигитални преживявания, 
            които стимулират растежа на бизнеса и потребителското взаимодействие.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Разгледайте нашия стак
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-black">
              Вижте казуси
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Categories Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цялостен технологичен експертиз
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Нашият технологичен стек обхваща всички аспекти на модерното уеб разработване, 
              осигурявайки пълни решения за всеки проект.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technology Stack */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Нашият технологичен стек в детайли
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Разгледайте конкретните технологии, които използваме, и нашето ниво на експертиза в всяка област.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {frontendTechs.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {tech.name}
                            <Badge variant="outline">{tech.category}</Badge>
                          </CardTitle>
                          <CardDescription>{tech.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Компетентност</span>
                            <span className="text-sm text-gray-600">{tech.proficiency}%</span>
                          </div>
                          <Progress value={tech.proficiency} className="h-2" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Ключови функционалности</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {backendTechs.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {tech.name}
                            <Badge variant="outline">{tech.category}</Badge>
                          </CardTitle>
                          <CardDescription>{tech.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Компетентност</span>
                            <span className="text-sm text-gray-600">{tech.proficiency}%</span>
                          </div>
                          <Progress value={tech.proficiency} className="h-2" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Ключови функционалности</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devops" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {devOpsTechs.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {tech.name}
                            <Badge variant="outline">{tech.category}</Badge>
                          </CardTitle>
                          <CardDescription>{tech.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Компетентност</span>
                            <span className="text-sm text-gray-600">{tech.proficiency}%</span>
                          </div>
                          <Progress value={tech.proficiency} className="h-2" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Ключови функционалности</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Нашият процес на внедряване на технологии
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Следваме структуриран подход за внедряване на правилните технологии за вашия проект.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationProcess.map((process, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <process.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Защо да изберете модерни технологии?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Нашият внимателно подбран технологичен стек носи конкретни ползи за вашия бизнес.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови да изградите с модерни технологии?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Нека обсъдим как нашият технологичен експертиз може да трансформира бизнес идеите ви в реалност.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                Започнете вашия проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black" asChild>
              <Link href="/services">
                Вижте нашите услуги
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
