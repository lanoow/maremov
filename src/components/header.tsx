import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16 mx-auto">
        <Link href="/" className="flex items-center mr-6 space-x-2">
          <Image
            src="/logo.svg"
            alt="Maremov"
            width={200}
            height={40}
          />
        </Link>        <nav className="flex items-center flex-1 space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Начало
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            За нас
          </Link>
          <Link href="/services" className="transition-colors hover:text-foreground/80">
            Услуги
          </Link>
          <Link href="/technologies" className="transition-colors hover:text-foreground/80">
            Технологии
          </Link>
          <Link href="/portfolio" className="transition-colors hover:text-foreground/80">
            Портфолио
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground/80">
            Блог
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80">
            Контакти
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Вход
          </Button>
          <Button size="sm">Започни сега</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;