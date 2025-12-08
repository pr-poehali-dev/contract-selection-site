import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function ConditionsAndFAQ() {
  return (
    <>
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
    </>
  );
}
