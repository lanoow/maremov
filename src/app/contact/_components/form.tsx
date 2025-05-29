"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormClient = () => {
	const [isPending, startTransition] = useTransition();

	const form = useForm({});

	const onSubmit = (data: any) => {
		startTransition(() => {
			console.log(data);
		});
	}

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<div className="grid gap-10 lg:grid-cols-2">
					{/* Contact Form */}
					<div className="space-y-8">						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tight">Изпратете ни съобщение</h2>
							<p className="text-muted-foreground">
								Попълнете формата по-долу и ние ще се свържем с вас възможно най-скоро.
							</p>
						</div>

						<div className="p-6 space-y-6 rounded-lg bg-muted/30">
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<div className="grid gap-4 sm:grid-cols-2">
										<FormField
											name="firstName"
											render={({ field }) => (											<FormItem>
													<FormLabel>Име</FormLabel>
													<FormControl>
														<Input placeholder="Иван" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											name="lastName"
											render={({ field }) => (											<FormItem>
													<FormLabel>Фамилия</FormLabel>
													<FormControl>
														<Input placeholder="Петров" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>									<FormField
										name="email"
										render={({ field }) => (
											<FormItem className="mt-4">
												<FormLabel>Имейл адрес</FormLabel>
												<FormControl>
													<Input placeholder="ivan.petrov@example.com" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>									<FormField
										name="subject"
										render={({ field }) => (
											<FormItem className="mt-4">
												<FormLabel>Тема</FormLabel>
												<FormControl>
													<Input placeholder="Как можем да ви помогнем?" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>									<FormField
										name="message"
										render={({ field }) => (
											<FormItem className="mt-4">
												<FormLabel>Съобщение</FormLabel>
												<FormControl>
													<Textarea
														rows={5}
														placeholder="Моля, предоставете подробности за вашия проект или запитване..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>									<Button type="submit" size="lg" className="mt-6">
										Изпратете съобщение
									</Button>
								</form>
							</Form>
						</div>
					</div>

					{/* Contact Information & Map */}
					<div className="space-y-8">						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tight">Информация за контакт</h2>
							<p className="text-muted-foreground">
								Можете също да се свържете с нас чрез следните канали.
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2">
							<Card>
								<CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
									<div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-primary/10 text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>									<h3 className="text-xl font-medium">Телефон</h3>
									<p className="text-muted-foreground">+1 (555) 123-4567</p>
									<p className="text-muted-foreground">Пон-Пет: 9:00 - 17:00</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
									<div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-primary/10 text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<h3 className="text-xl font-medium">Имейл</h3>
									<p className="text-muted-foreground">info@techcorp.com</p>
									<p className="text-muted-foreground">support@techcorp.com</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
									<div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-primary/10 text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</div>									<h3 className="text-xl font-medium">Офис</h3>
									<p className="text-muted-foreground">ул. Технология 123</p>
									<p className="text-muted-foreground">София, България 1000</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
									<div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-primary/10 text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M17 2.1l4 4-4 4" />
											<path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4" />
											<path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
										</svg>
									</div>
									<h3 className="text-xl font-medium">Социални мрежи</h3>
									<div className="flex gap-3 mt-2">
										<Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
										</Link>
										<Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
										</Link>
										<Link href="https://github.com" className="text-muted-foreground hover:text-primary">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Map */}
						<div className="relative w-full overflow-hidden border rounded-lg h-80">							<Image
								src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.4194,37.7749,12,0/1200x400?access_token=pk.example"
								alt="Карта с местоположението на офиса"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="p-3 bg-white rounded-lg shadow-lg">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default FormClient;