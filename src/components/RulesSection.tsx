import { YAKU_LIST } from '@/lib/hanafuda';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useScrollReveal } from '@/hooks/use-scroll-animations';
import { cn } from '@/lib/utils';

export function RulesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="rules" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div
            ref={headerRef}
            className={cn(
              'text-center mb-16 transition-all duration-700',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <span className="text-4xl text-primary/30 font-display">遊び方</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mt-2 mb-4">
              How to Play Koi-Koi
            </h2>
            <div className={cn(
              'h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto transition-all duration-1000 delay-300',
              headerVisible ? 'w-24' : 'w-0'
            )} />
          </div>
          
          <div
            ref={contentRef}
            className={cn(
              'transition-all duration-700 delay-200',
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
                <TabsTrigger value="basics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Basics
                </TabsTrigger>
                <TabsTrigger value="gameplay" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Gameplay
                </TabsTrigger>
                <TabsTrigger value="yaku" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Yaku (Combos)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-primary font-display">Setup</CardTitle>
                    </CardHeader>
                    <CardContent className="text-foreground/80 space-y-3">
                      <p>• Each player receives <strong>8 cards</strong></p>
                      <p>• <strong>8 cards</strong> are placed face-up on the field</p>
                      <p>• Remaining cards form the draw pile</p>
                      <p>• The goal is to collect scoring card combinations</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-primary font-display">Card Matching</CardTitle>
                    </CardHeader>
                    <CardContent className="text-foreground/80 space-y-3">
                      <p>• Cards are matched by <strong>month</strong> (suit)</p>
                      <p>• Each month has exactly <strong>4 cards</strong></p>
                      <p>• Match cards from your hand with field cards</p>
                      <p>• Matched pairs go to your capture pile</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="gameplay" className="mt-8">
                <div className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-primary font-display">Your Turn</CardTitle>
                    </CardHeader>
                    <CardContent className="text-foreground/80">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span>
                          <div>
                            <strong>Play a card from your hand</strong>
                            <p className="text-sm text-muted-foreground">If it matches a card on the field, take both. Otherwise, it stays on the field.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span>
                          <div>
                            <strong>Draw a card from the deck</strong>
                            <p className="text-sm text-muted-foreground">Same rules apply - match or place on field.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</span>
                          <div>
                            <strong>Check for Yaku</strong>
                            <p className="text-sm text-muted-foreground">If you've completed a scoring combination, choose to end or call "Koi-Koi"!</p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-secondary font-display">Koi-Koi Decision</CardTitle>
                    </CardHeader>
                    <CardContent className="text-foreground/80 space-y-3">
                      <p>When you complete a yaku, you can:</p>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-lg bg-muted/50 border border-border">
                          <h4 className="font-bold text-foreground mb-2">End the Round</h4>
                          <p className="text-sm">Score your points safely and start a new round.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                          <h4 className="font-bold text-primary mb-2">Call "Koi-Koi"</h4>
                          <p className="text-sm">Continue playing to build bigger combinations, but risk losing everything if opponent scores first!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="yaku" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {YAKU_LIST.map((yaku) => (
                    <Card key={yaku.name} className="bg-card border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-display flex items-center justify-between">
                          <span className="text-foreground">{yaku.name}</span>
                          <span className="text-primary text-sm">{yaku.points}+ pts</span>
                        </CardTitle>
                        <p className="text-sm text-secondary">{yaku.japaneseName}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{yaku.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
