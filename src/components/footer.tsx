import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-muted/40">
      <div className="container grid grid-cols-2 gap-8 mx-auto md:grid-cols-4">        <div>
          <h3 className="mb-3 text-lg font-bold">TechCorp</h3>
          <p className="text-muted-foreground">
            Изграждаме бъдещето с модерни уеб технологии.
          </p>
        </div>
        
        <div>
          <h4 className="mb-3 font-medium">Компания</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="transition-colors text-muted-foreground hover:text-foreground">
                За нас
              </Link>
            </li>
            <li>
              <Link href="/careers" className="transition-colors text-muted-foreground hover:text-foreground">
                Кариери
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors text-muted-foreground hover:text-foreground">
                Контакти
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-3 font-medium">Услуги</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="transition-colors text-muted-foreground hover:text-foreground">
                Уеб разработка
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors text-muted-foreground hover:text-foreground">
                UI/UX дизайн
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors text-muted-foreground hover:text-foreground">
                E-commerce решения
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-3 font-medium">Ресурси</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog" className="transition-colors text-muted-foreground hover:text-foreground">
                Блог
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition-colors text-muted-foreground hover:text-foreground">
                Портфолио
              </Link>
            </li>
            <li>
              <Link href="/technologies" className="transition-colors text-muted-foreground hover:text-foreground">
                Технологии
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container pt-8 mx-auto mt-8 border-t">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">          <p className="text-sm text-muted-foreground">
            © 2025 TechCorp. Всички права запазени.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Политика за поверителност
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Условия за ползване
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;