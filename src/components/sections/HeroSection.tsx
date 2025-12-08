import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  stats: { visitors: number; applications: number };
}

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/files/96cf52b8-61b7-48b3-87c6-47cf0c28a2a5.jpg"
          alt="Военная служба" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <div className="text-3xl font-bold">{stats.visitors}</div>
            <div className="text-sm opacity-80">Посетителей</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <div className="text-3xl font-bold">{stats.applications}</div>
            <div className="text-sm opacity-80">Заявок подано</div>
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Служба по контракту</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Защищай Родину. Строй карьеру. Обеспечь будущее.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
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
