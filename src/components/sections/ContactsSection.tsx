import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { QRCodeSVG } from 'qrcode.react';

interface ContactsSectionProps {
  copyLink: () => void;
  shareLink: () => Promise<void>;
  downloadPrintable: () => void;
}

export default function ContactsSection({ copyLink, shareLink, downloadPrintable }: ContactsSectionProps) {
  return (
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
              <CardTitle className="text-white text-center text-2xl">Быстрый доступ к сайту</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="grid md:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <QRCodeSVG 
                        id="qr-code-print"
                        value={window.location.origin}
                        size={160}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                    <p className="text-white text-center text-xs opacity-80">
                      Наведите камеру для быстрого доступа
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="bg-white/20 p-6 rounded-lg border-2 border-secondary/50">
                      <Icon name="Share2" size={60} className="text-secondary" />
                    </div>
                    <p className="text-white text-center text-xs opacity-80">
                      Поделитесь с друзьями и знакомыми
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 flex-wrap justify-center">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-white"
                    onClick={shareLink}
                  >
                    <Icon name="Share" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    onClick={copyLink}
                  >
                    <Icon name="Copy" size={16} className="mr-2" />
                    Скопировать ссылку
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    onClick={downloadPrintable}
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать для печати
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
