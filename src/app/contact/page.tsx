import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import FormClient from "./_components/form";

export const metadata: Metadata = {
	title: "Свържете се с нас | TechCorp",
	description: "Свържете се с нашия екип, за да обсъдите вашите нужди за уеб разработка",
}

export default function ContactPage() {
	const form = {};

	const onSubmit = (data: any) => {
		console.log(data);
	}

	return (
		<>
			{/* Hero Section */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container mx-auto">					<div className="max-w-3xl mx-auto space-y-4 text-center">
						<h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Свържете се с нас</h1>
						<p className="text-xl text-muted-foreground">
							Свържете се с нашия екип, за да обсъдите вашите нужди за уеб разработка
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form & Information */}
			<FormClient />

			{/* FAQ Section */}
			<section className="py-16 bg-muted/30">
				<div className="container mx-auto">					<div className="max-w-3xl mx-auto mb-12 space-y-4 text-center">
						<h2 className="text-3xl font-bold tracking-tight">Често задавани въпроси</h2>
						<p className="text-muted-foreground">
							Намерете бързи отговори на честите въпроси относно нашите услуги.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2">
						{faqs.map((faq, index) => (
							<div key={index} className="p-6 border rounded-lg bg-background">
								<h3 className="mb-2 text-xl font-medium">{faq.question}</h3>
								<p className="text-muted-foreground">{faq.answer}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter */}
			<section className="py-16 bg-primary text-primary-foreground">
				<div className="container mx-auto">					<div className="max-w-3xl mx-auto space-y-6 text-center">
						<h2 className="text-3xl font-bold tracking-tight">Останете информирани</h2>
						<p className="text-xl text-primary-foreground/90">
							Абонирайте се за нашия бюлетин, за да получавате актуализации за уеб технологии и индустриални прозрения.
						</p>
						<div className="flex flex-col gap-4 mx-auto sm:flex-row sm:max-w-md">
							<Input
								type="email"
								placeholder="Въведете вашия имейл"
								className="bg-primary-foreground text-foreground"
							/>
							<Button variant="secondary">
								Абонирайте се
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const faqs = [
	{
		question: "С кои технологии работите?",
		answer: "Специализираме се в модерни уеб технологии, включително React, Next.js, TypeScript, Tailwind CSS и различни backend фреймуърци. Избираме най-добрия технологичен стек въз основа на специфичните изисквания на вашия проект."
	},
	{
		question: "Колко време отнема да се изгради уебсайт?",
		answer: "Времевите рамки на проектите варират в зависимост от сложността. Прост уебсайт може да отнеме 2-4 седмици, докато по-сложни приложения могат да отнемат 3-6 месеца. Ще предоставим подробен график по време на първоначалната ни консултация."
	},
	{
		question: "Колко струва уебсайт?",
		answer: "Всеки проект е уникален и разходите зависят от изискванията, сложността и функциите. Предлагаме персонализирани решения, започвайки от 5000$ за основни уебсайтове. Свържете се с нас за персонализирана оферта."
	},
	{
		question: "Предлагате ли услуги за поддръжка на уебсайтове?",
		answer: "Да, предлагаме пакети за текуща поддръжка и подкрепа, за да поддържаме вашия уебсайт актуален, сигурен и работещ оптимално. Нашите пакети включват редовни актуализации, наблюдение на сигурността и техническа поддръжка."
	},
	{
		question: "Можете ли да помогнете със SEO и маркетинг?",
		answer: "Абсолютно! Изграждаме уебсайтове с най-добри SEO практики и можем също да предоставим допълнителни услуги за SEO оптимизация, стратегия за съдържание и поддръжка на дигитален маркетинг, за да ви помогнем да достигнете до вашата целева аудитория."
	},
	{
		question: "Какъв е вашият процес на дизайн?",
		answer: "Нашият процес на дизайн е съвместен и включва разбиране на вашите цели, създаване на wireframes, разработване на визуални дизайни и итериране въз основа на вашата обратна връзка. Осигуряваме, че окончателният дизайн отговаря на вашите брандови насоки и бизнес цели."
	}
];