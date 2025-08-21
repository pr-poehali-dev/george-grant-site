import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const concerts = [
    {
      date: "25 Декабря 2024",
      city: "Москва",
      venue: "Крокус Сити Холл",
      status: "available"
    },
    {
      date: "15 Января 2025", 
      city: "Санкт-Петербург",
      venue: "БКЗ «Октябрьский»",
      status: "available"
    },
    {
      date: "20 Февраля 2025",
      city: "Екатеринбург",
      venue: "Дворец спорта",
      status: "sold-out"
    }
  ];

  const songs = [
    { title: "Звёздная ночь", duration: "3:42", isPlaying: false },
    { title: "Морской бриз", duration: "4:15", isPlaying: false },
    { title: "Родные берега", duration: "3:28", isPlaying: true },
    { title: "Танго до рассвета", duration: "4:01", isPlaying: false }
  ];

  const gallery = [
    { id: 1, type: "photo", url: "/img/79de2da6-121e-4201-bbe2-a05c9c854291.jpg" },
    { id: 2, type: "photo", url: "/img/f8292f3c-3ee2-4cee-89f0-d46a9f0a6167.jpg" },
    { id: 3, type: "video", url: "/img/79de2da6-121e-4201-bbe2-a05c9c854291.jpg" },
    { id: 4, type: "photo", url: "/img/f8292f3c-3ee2-4cee-89f0-d46a9f0a6167.jpg" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-primary">GEORGE GRANT</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#concerts" className="hover:text-primary transition-colors">Концерты</a>
              <a href="#music" className="hover:text-primary transition-colors">Музыка</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#about" className="hover:text-primary transition-colors">О художнике</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/79de2da6-121e-4201-bbe2-a05c9c854291.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 text-white">
            GEORGE
            <span className="block text-primary">GRANT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Русско-греческий певец | Официальный сайт
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Play" className="mr-2" size={20} />
              Слушать музыку
            </Button>
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" className="mr-2" size={20} />
              Ближайшие концерты
            </Button>
          </div>
        </div>
      </section>

      {/* Concert Section */}
      <section id="concerts" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">Концерты</h2>
          <p className="text-xl text-muted-foreground">Предстоящие выступления</p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {concerts.map((concert, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Calendar" className="text-primary" size={20} />
                      <span className="text-lg font-semibold">{concert.date}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <span className="text-lg">{concert.city}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Music" className="text-primary" size={20} />
                      <span className="text-muted-foreground">{concert.venue}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {concert.status === "sold-out" ? (
                      <span className="px-4 py-2 bg-destructive/20 text-destructive rounded-lg font-semibold">
                        Sold Out
                      </span>
                    ) : (
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Icon name="Ticket" className="mr-2" size={16} />
                        Купить билет
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4">Музыка</h2>
            <p className="text-xl text-muted-foreground">Популярные треки</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {songs.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/30 rounded-lg transition-colors group">
                      <div className="flex items-center gap-4">
                        <Button size="sm" variant={song.isPlaying ? "default" : "ghost"}>
                          <Icon name={song.isPlaying ? "Pause" : "Play"} size={16} />
                        </Button>
                        <div>
                          <h4 className="font-semibold">{song.title}</h4>
                          <p className="text-sm text-muted-foreground">{song.duration}</p>
                        </div>
                      </div>
                      {song.isPlaying && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-sm text-primary">Играет</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Music" className="mr-2" size={16} />
                    Spotify
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Youtube" className="mr-2" size={16} />
                    YouTube
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Music2" className="mr-2" size={16} />
                    Я.Музыка
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">Галерея</h2>
          <p className="text-xl text-muted-foreground">Фото и видео</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-square">
                <img 
                  src={item.url} 
                  alt="Gallery item"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Icon 
                    name={item.type === "video" ? "Play" : "Eye"} 
                    className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300" 
                    size={32} 
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-playfair font-bold mb-8">О George Grant</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                George Grant — талантливый русско-греческий певец, чьё творчество соединяет в себе 
                богатство славянской души и средиземноморский темперамент. Его уникальный голос и 
                харизматичная подача покорили сердца тысяч поклонников по всему миру.
              </p>
              <p>
                Начав свою карьеру в небольших клубах Москвы, George быстро завоевал признание 
                благодаря своему неповторимому стилю, сочетающему элементы поп-музыки, 
                фолка и средиземноморских мелодий.
              </p>
              <p>
                Сегодня George Grant — это не просто певец, а настоящий артист, создающий 
                атмосферу праздника и единения на каждом своём выступлении.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">Свяжитесь с нами</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Для поклонников</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span>fans@georgegrant.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Instagram" className="text-primary" size={20} />
                  <span>@georgegrantofficial</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Youtube" className="text-primary" size={20} />
                  <span>George Grant Music</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Для сотрудничества</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Briefcase" className="text-primary" size={20} />
                  <span>booking@georgerant.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Send" className="mr-2" size={20} />
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-playfair font-bold text-primary">GEORGE GRANT</h3>
              <p className="text-muted-foreground text-sm">Официальный сайт</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Music" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; 2024 George Grant. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;