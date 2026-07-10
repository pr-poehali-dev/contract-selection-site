import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  stats: { visitors: number; applications: number };
}

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section id="hero" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/files/96cf52b8-61b7-48b3-87c6-47cf0c28a2a5.jpg"
          alt="Военная служба" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <div className="flex justify-center gap-4 mb-10 animate-fade-in-up">
          <div className="glass-dark rounded-2xl px-6 py-4 hover-lift">
            <div className="text-3xl font-extrabold">{stats.visitors}</div>
            <div className="text-sm opacity-80 mt-1">Посетителей</div>
          </div>
          <div className="glass-dark rounded-2xl px-6 py-4 hover-lift">
            <div className="text-3xl font-extrabold">{stats.applications}</div>
            <div className="text-sm opacity-80 mt-1">Заявок подано</div>
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Служба по контракту
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Защищай Родину. Строй карьеру. Обеспечь будущее.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            variant="default" 
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
            onClick={() => window.open('https://wa.me/79146153928?text=Здравствуйте!%20Хочу%20подать%20заявку%20на%20службу%20по%20контракту', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" />
            Подать заявку в WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-dark border-white/40 text-white hover:bg-white/20 text-lg px-8 py-6"
            onClick={() => window.open('tel:+79146153928', '_blank')}
          >
            <Icon name="Phone" className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  );
}
