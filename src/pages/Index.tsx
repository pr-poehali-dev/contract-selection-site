import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsAndOperator from '@/components/sections/BenefitsAndOperator';
import ConditionsAndFAQ from '@/components/sections/ConditionsAndFAQ';
import ContactsSection from '@/components/sections/ContactsSection';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');
  const [stats, setStats] = useState({ visitors: 0, applications: 0 });

  const copyLink = () => {
    const link = window.location.origin;
    navigator.clipboard.writeText(link).then(() => {
      alert('Ссылка скопирована!');
    });
  };

  const shareLink = async () => {
    const link = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Пункт отбора г. Белогорск',
          text: 'Служба по контракту в Вооруженных Силах РФ',
          url: link
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      copyLink();
    }
  };

  const downloadPrintable = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 1000;

    ctx.fillStyle = '#1a472a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Пункт отбора г. Белогорск', canvas.width / 2, 60);

    ctx.font = '20px Arial';
    ctx.fillText('Служба по контракту в Вооруженных Силах РФ', canvas.width / 2, 100);

    const qrSvg = document.querySelector('#qr-code-print') as SVGElement;
    if (qrSvg) {
      const svgData = new XMLSerializer().serializeToString(qrSvg);
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, (canvas.width - 200) / 2, 140, 200, 200);

        ctx.font = '18px Arial';
        ctx.fillText('Наведите камеру для быстрого доступа', canvas.width / 2, 370);

        ctx.textAlign = 'left';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('Контакты:', 80, 440);

        ctx.font = '20px Arial';
        ctx.fillText('📍 г. Белогорск, ул. Ленина, 93', 80, 490);
        ctx.fillText('📞 +7 (914) 615-39-28', 80, 540);
        ctx.fillText('✉️  belogorskvoenkomat@gmail.com', 80, 590);

        ctx.font = 'bold 24px Arial';
        ctx.fillText('График работы:', 80, 660);
        ctx.font = '20px Arial';
        ctx.fillText('Пн-Пт: 09:00 - 18:00', 80, 710);
        ctx.fillText('Сб: 10:00 - 15:00', 80, 750);
        ctx.fillText('Вс: выходной', 80, 790);

        ctx.textAlign = 'center';
        ctx.font = '18px Arial';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('contract-selection-site.poehali.dev', canvas.width / 2, 870);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'italic 16px Arial';
        ctx.fillText('Служи России с честью и достоинством', canvas.width / 2, 940);

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'punkt-otbora-belogorsk.png';
            a.click();
            URL.revokeObjectURL(url);
          }
        });
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    }
  };

  useEffect(() => {
    fetch('https://functions.poehali.dev/8b07c457-bcd0-43aa-be26-b124e61d3f1e')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
    
    fetch('https://functions.poehali.dev/8b07c457-bcd0-43aa-be26-b124e61d3f1e', { method: 'POST' })
      .catch(console.error);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={32} className="text-white" />
              <h1 className="text-xl md:text-2xl font-bold text-white">Пункт Отбора г. Белогорск</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">Главная</button>
              <button onClick={() => scrollToSection('operator')} className="text-white hover:text-secondary transition-colors text-sm md:text-base font-semibold">🎯 Оператор</button>
              <button onClick={() => scrollToSection('benefits')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">Преимущества</button>
              <button onClick={() => scrollToSection('conditions')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">Условия</button>
              <button onClick={() => scrollToSection('documents')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">Документы</button>
              <button onClick={() => scrollToSection('faq')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-secondary transition-colors text-sm md:text-base">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection stats={stats} />
      <BenefitsAndOperator scrollToSection={scrollToSection} />
      <ConditionsAndFAQ />
      <ContactsSection 
        copyLink={copyLink}
        shareLink={shareLink}
        downloadPrintable={downloadPrintable}
      />

      <footer className="bg-primary/90 text-white py-8 border-t border-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2024 Пункт отбора г. Белогорск</p>
          <p className="text-xs mt-2 opacity-60">Служи России с честью и достоинством</p>
        </div>
      </footer>

      <button
        onClick={() => window.open('https://wa.me/79146153928?text=Здравствуйте!%20Хочу%20подать%20заявку%20на%20службу%20по%20контракту', '_blank')}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Написать в WhatsApp
        </span>
      </button>
    </div>
  );
}