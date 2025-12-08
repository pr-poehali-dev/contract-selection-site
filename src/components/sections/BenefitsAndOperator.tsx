import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface BenefitsAndOperatorProps {
  scrollToSection: (sectionId: string) => void;
}

export default function BenefitsAndOperator({ scrollToSection }: BenefitsAndOperatorProps) {
  return (
    <>
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
    </>
  );
}
