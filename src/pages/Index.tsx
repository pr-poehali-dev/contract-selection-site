import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { QRCodeSVG } from 'qrcode.react';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');
  const [stats, setStats] = useState({ visitors: 0, applications: 0 });

  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.fillStyle = 'white';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      ctx!.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob!);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qr-code-belogorsk.png';
        a.click();
        URL.revokeObjectURL(url);
      });
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
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

      <section id="benefits" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Преимущества службы по контракту</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="Wallet" size={40} className="text-primary mb-4" />
                <CardTitle>Достойная зарплата</CardTitle>
                <CardDescription>Конкурентная оплата труда с регулярными надбавками и премиями</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="Home" size={40} className="text-primary mb-4" />
                <CardTitle>Жилье военнослужащим</CardTitle>
                <CardDescription>Программа обеспечения служебным и постоянным жильем</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="Heart" size={40} className="text-primary mb-4" />
                <CardTitle>Медицинское обслуживание</CardTitle>
                <CardDescription>Бесплатное медицинское обслуживание для вас и вашей семьи</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="GraduationCap" size={40} className="text-primary mb-4" />
                <CardTitle>Образование и обучение</CardTitle>
                <CardDescription>Возможность получить высшее образование и профессиональную переподготовку</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="Plane" size={40} className="text-primary mb-4" />
                <CardTitle>Отпуск 30 дней</CardTitle>
                <CardDescription>Ежегодный оплачиваемый отпуск с компенсацией проезда</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <Icon name="Award" size={40} className="text-primary mb-4" />
                <CardTitle>Карьерный рост</CardTitle>
                <CardDescription>Четкая система продвижения по службе и повышения квалификации</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="operator" className="py-16 bg-gradient-to-b from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Icon name="Crosshair" size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Набор на должность ОПЕРАТОР</h2>
              <p className="text-xl text-muted-foreground">Специальная военная специальность с повышенными выплатами</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Icon name="Banknote" size={32} />
                    Заработная плата
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-primary mb-2">от 250 000 ₽</p>
                  <p className="text-muted-foreground">+ надбавки и премии за выполнение задач</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary shadow-lg">
                <CardHeader className="bg-secondary/5">
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <Icon name="Target" size={32} />
                    Специализация
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold mb-2">Оператор БПЛА</p>
                  <p className="text-muted-foreground">Управление беспилотными летательными аппаратами</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Icon name="FileText" className="text-primary" />
                  Требования к кандидатам на должность ОПЕРАТОР
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Возраст от 18 до 45 лет</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Гражданство РФ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Хорошее зрение (корригированное допускается)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Базовые навыки работы с компьютером</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Стрессоустойчивость и быстрая реакция</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Отсутствие судимости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Icon name="Star" className="text-secondary" />
                  Что входит в обучение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Теоретическая подготовка (3 недели)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Практика на тренажерах</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Управление БПЛА различных типов</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Тактическая подготовка</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Работа с картами и навигацией</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-primary mt-2 flex-shrink-0" />
                    <span>Техническое обслуживание</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" className="mr-2" size={24} />
                Подать заявку на должность ОПЕРАТОР
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="conditions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Условия службы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Users" className="text-secondary" />
                    Требования к кандидатам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Гражданство Российской Федерации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Возраст от 18 до 40 лет (до 50 для отдельных специальностей)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Соответствие требованиям по состоянию здоровья</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Отсутствие судимости</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Clock" className="text-secondary" />
                    Срок контракта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Первый контракт заключается на срок от 1 года до 3 лет. Повторные контракты могут заключаться на срок до 5 лет.</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-secondary" />
                    Места службы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Возможность выбора региона службы с учетом потребностей Вооруженных Сил и вашей специальности. Предоставляется служебное жилье в гарнизоне.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Briefcase" className="text-secondary" />
                    Специальности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Командные должности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Технические специальности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Медицинская служба</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Служба связи и IT-специалисты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Необходимые документы</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="FileCheck" className="text-secondary" />
                  Документы для поступления на службу
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    'Паспорт гражданина РФ (оригинал и копия)',
                    'Военный билет или приписное свидетельство',
                    'Документ об образовании (аттестат, диплом)',
                    'СНИЛС',
                    'ИНН',
                    'Медицинские документы (справка формы 086/у)',
                    'Фотографии 3×4 (6 штук)',
                    'Свидетельство о браке (при наличии)',
                    'Свидетельства о рождении детей (при наличии)',
                    'Справка об отсутствии судимости'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border hover:border-primary transition-colors">
                      <Icon name="FileText" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Icon name="Info" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Все документы предоставляются в оригиналах и копиях. Копии заверяются при подаче документов.</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Какая зарплата у военнослужащих по контракту?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Денежное довольствие зависит от звания, должности, выслуги лет и региона службы. Минимальный оклад начинается от 35 000 рублей, с учетом всех надбавок может составлять от 60 000 до 150 000 рублей и выше.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Можно ли служить в своем регионе?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  При заключении контракта учитываются ваши пожелания по месту службы. Однако окончательное решение зависит от потребностей Вооруженных Сил и наличия вакансий в выбранном регионе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Как происходит процесс отбора?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Процесс включает: подачу документов, медицинское освидетельствование, профессионально-психологический отбор, проверку физической подготовки и собеседование с представителями воинской части.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Что происходит после подписания контракта?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  После подписания контракта вы направляетесь в учебное подразделение для прохождения курса молодого бойца (КМБ) продолжительностью от 1 до 3 месяцев, после чего приступаете к службе в воинской части.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Можно ли расторгнуть контракт досрочно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Досрочное расторжение контракта возможно по ряду оснований: семейные обстоятельства, состояние здоровья, невозможность дальнейшего прохождения службы. Каждый случай рассматривается индивидуально.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Предоставляется ли жилье семье военнослужащего?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, военнослужащие имеют право на служебное жилье в гарнизоне, где они проходят службу. Также предусмотрена программа накопительно-ипотечной системы для приобретения постоянного жилья.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты пункта отбора г. Белогорск</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="MapPin" size={40} className="mb-4 text-secondary" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p>676805, Белогорск, Амурская область</p>
                <p className="mt-1">ул. Ленина, 93</p>
                <p className="text-sm mt-2 opacity-80">1 этаж, пункт отбора по контракту</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-3 bg-white/20 border-white/40 text-white hover:bg-white/30"
                  onClick={() => window.open('https://yandex.ru/maps/?text=Белогорск,%20Амурская%20область,%20улица%20Ленина,%2093', '_blank')}
                >
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="Phone" size={40} className="mb-4 text-secondary" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (914) 615-39-28</p>
                <p className="text-sm mt-2 opacity-80">Звонок бесплатный</p>
                <p className="text-sm opacity-80">Пн-Пт: 9:00 - 18:00</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-3 bg-white/20 border-white/40 text-white hover:bg-white/30"
                  onClick={() => window.location.href = 'tel:+79146153928'}
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="Mail" size={40} className="mb-4 text-secondary" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p>belogorskvoenkomat@gmail.com</p>
                <p className="text-sm mt-2 opacity-80">Ответим в течение 24 часов</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-3 bg-white/20 border-white/40 text-white hover:bg-white/30"
                  onClick={() => window.location.href = 'mailto:belogorskvoenkomat@gmail.com?subject=Заявка на службу по контракту&body=Здравствуйте! Хочу подать заявку на службу по контракту.'}
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">График работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-white">
                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-secondary" />
                      Понедельник - Пятница
                    </p>
                    <p className="text-lg">09:00 - 18:00</p>
                    <p className="text-sm opacity-80">Обед: 13:00 - 14:00</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-secondary" />
                      Суббота
                    </p>
                    <p className="text-lg">10:00 - 15:00</p>
                    <p className="text-sm opacity-80">Без перерыва</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-sm opacity-80">Воскресенье - выходной день</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">QR-код сайта</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <QRCodeSVG 
                      id="qr-code-svg"
                      value={window.location.origin}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <p className="text-white text-center text-sm opacity-80">
                    Наведите камеру телефона для быстрого доступа к сайту
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    onClick={downloadQRCode}
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать QR-код
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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