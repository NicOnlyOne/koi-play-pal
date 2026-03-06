import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Eye } from "lucide-react";

const ColorSwatch = ({ name, className, token }: { name: string; className: string; token: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-16 h-16 rounded-lg border border-border shadow-sm ${className}`} />
    <span className="text-xs font-body font-semibold text-foreground">{name}</span>
    <span className="text-[10px] font-body text-muted-foreground">{token}</span>
  </div>
);

const DesignSystem = () => {
  const { theme, setTheme } = useTheme();

  const semanticColors = [
    { name: "Background", className: "bg-background", token: "--background" },
    { name: "Foreground", className: "bg-foreground", token: "--foreground" },
    { name: "Primary", className: "bg-primary", token: "--primary" },
    { name: "Secondary", className: "bg-secondary", token: "--secondary" },
    { name: "Accent", className: "bg-accent", token: "--accent" },
    { name: "Muted", className: "bg-muted", token: "--muted" },
    { name: "Card", className: "bg-card", token: "--card" },
    { name: "Destructive", className: "bg-destructive", token: "--destructive" },
    { name: "Border", className: "bg-border", token: "--border" },
  ];

  const hanafudaColors = [
    { name: "Sakura", className: "bg-sakura", token: "--sakura" },
    { name: "Wisteria", className: "bg-wisteria", token: "--wisteria" },
    { name: "Chrysanthemum", className: "bg-chrysanthemum", token: "--chrysanthemum" },
    { name: "Maple", className: "bg-maple", token: "--maple" },
    { name: "Pine", className: "bg-pine", token: "--pine" },
    { name: "Moon", className: "bg-moon", token: "--moon" },
    { name: "Night", className: "bg-night", token: "--night" },
    { name: "Coral", className: "bg-coral", token: "--coral" },
    { name: "Teal", className: "bg-teal", token: "--teal" },
    { name: "Cream", className: "bg-cream", token: "--cream" },
  ];

  const difficultyColors = [
    { name: "Easy", className: "bg-difficulty-easy", token: "--difficulty-easy" },
    { name: "Medium", className: "bg-difficulty-medium", token: "--difficulty-medium" },
    { name: "Hard", className: "bg-difficulty-hard", token: "--difficulty-hard" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-display text-foreground">Design System</h1>
              <p className="text-sm text-muted-foreground font-body">Hanafuda — Token Reference</p>
            </div>
          </div>
          <div className="flex gap-2">
            {([
              { t: "light" as const, icon: <Sun className="w-4 h-4" />, label: "Light" },
              { t: "dark" as const, icon: <Moon className="w-4 h-4" />, label: "Dark" },
              { t: "dark-wcag" as const, icon: <Eye className="w-4 h-4" />, label: "WCAG" },
            ]).map(({ t, icon, label }) => (
              <Button
                key={t}
                variant={theme === t ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme(t)}
                className="gap-1"
              >
                {icon} {label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Colors — Semantic */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Semantic Colors</h2>
          <p className="text-muted-foreground font-body mb-6">Core palette mapped to CSS custom properties and Tailwind classes.</p>
          <div className="flex flex-wrap gap-6">
            {semanticColors.map(c => <ColorSwatch key={c.name} {...c} />)}
          </div>
        </section>

        {/* Colors — Hanafuda */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Hanafuda Colors</h2>
          <p className="text-muted-foreground font-body mb-6">Theme-specific botanical & seasonal accents.</p>
          <div className="flex flex-wrap gap-6">
            {hanafudaColors.map(c => <ColorSwatch key={c.name} {...c} />)}
          </div>
        </section>

        {/* Colors — Difficulty */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Difficulty Colors</h2>
          <p className="text-muted-foreground font-body mb-6">Semantic colors for game difficulty levels.</p>
          <div className="flex flex-wrap gap-6">
            {difficultyColors.map(c => <ColorSwatch key={c.name} {...c} />)}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Typography</h2>
          <p className="text-muted-foreground font-body mb-6">DM Serif Display for headings, DM Sans for body.</p>
          <div className="space-y-4 rounded-lg border border-border bg-card p-8">
            <h1 className="text-5xl font-display text-foreground">Heading 1 — Display</h1>
            <h2 className="text-4xl font-display text-foreground">Heading 2 — Display</h2>
            <h3 className="text-3xl font-display text-foreground">Heading 3 — Display</h3>
            <h4 className="text-2xl font-display text-foreground">Heading 4 — Display</h4>
            <hr className="border-border" />
            <p className="text-lg font-body text-foreground">Body Large — DM Sans 18px</p>
            <p className="text-base font-body text-foreground">Body Base — DM Sans 16px</p>
            <p className="text-sm font-body text-muted-foreground">Body Small — Muted foreground 14px</p>
            <p className="text-xs font-body text-muted-foreground">Caption — Muted foreground 12px</p>
          </div>
        </section>

        {/* Spacing & Radius */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Spacing & Radius Tokens</h2>
          <p className="text-muted-foreground font-body mb-6">CSS custom properties for consistent spacing and radii.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <h3 className="text-xl font-display text-foreground">Spacing</h3>
              {[
                { token: "--space-section", value: "6rem", desc: "Between sections" },
                { token: "--space-block", value: "2rem", desc: "Between blocks" },
                { token: "--space-element", value: "1rem", desc: "Between elements" },
                { token: "--space-inline", value: "0.5rem", desc: "Inline gaps" },
              ].map(s => (
                <div key={s.token} className="flex items-center justify-between text-sm font-body">
                  <code className="text-primary">{s.token}</code>
                  <span className="text-muted-foreground">{s.value} — {s.desc}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <h3 className="text-xl font-display text-foreground">Border Radius</h3>
              {[
                { token: "--radius", value: "0.75rem", preview: "rounded-lg" },
                { token: "--radius-card", value: "0.75rem", preview: "Card elements" },
                { token: "--radius-pill", value: "9999px", preview: "Pills/badges" },
                { token: "--radius-panel", value: "1rem", preview: "Large panels" },
              ].map(r => (
                <div key={r.token} className="flex items-center justify-between text-sm font-body">
                  <code className="text-primary">{r.token}</code>
                  <span className="text-muted-foreground">{r.value} — {r.preview}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gradients & Shadows */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Gradients & Shadows</h2>
          <p className="text-muted-foreground font-body mb-6">Themed gradient and shadow tokens.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Cream", style: { background: "var(--gradient-cream)" } },
              { name: "Coral", style: { background: "var(--gradient-coral)" } },
              { name: "Teal", style: { background: "var(--gradient-teal)" } },
              { name: "Card", style: { background: "var(--gradient-card)" } },
            ].map(g => (
              <div key={g.name} className="flex flex-col items-center gap-2">
                <div className="w-full h-20 rounded-lg border border-border" style={g.style} />
                <span className="text-xs font-body text-muted-foreground">--gradient-{g.name.toLowerCase()}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { name: "Soft", token: "--shadow-soft" },
              { name: "Card", token: "--shadow-card" },
              { name: "Hover", token: "--shadow-hover" },
            ].map(s => (
              <div key={s.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-full h-16 rounded-lg bg-card border border-border"
                  style={{ boxShadow: `var(${s.token})` }}
                />
                <span className="text-xs font-body text-muted-foreground">{s.token}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Buttons</h2>
          <p className="text-muted-foreground font-body mb-6">All button variants and sizes.</p>
          <div className="rounded-lg border border-border bg-card p-8 space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Sun className="w-4 h-4" /></Button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Cards</h2>
          <p className="text-muted-foreground font-body mb-6">Card component with all sub-components.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with semantic tokens.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Content area using muted-foreground.</p></CardContent>
              <CardFooter><Button size="sm">Action</Button></CardFooter>
            </Card>
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle>Highlighted</CardTitle>
                <CardDescription>Primary border accent.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Uses border-primary/30 modifier.</p></CardContent>
            </Card>
            <div className="hanafuda-card p-6 flex flex-col gap-2">
              <h3 className="text-lg font-display text-foreground">Hanafuda Card</h3>
              <p className="text-sm text-muted-foreground">Custom .hanafuda-card class with themed gradients and shadows.</p>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Badges</h2>
          <p className="text-muted-foreground font-body mb-6">Badge variants for labels and status indicators.</p>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Theme Modes */}
        <section>
          <h2 className="text-3xl font-display text-foreground mb-2">Theme Modes</h2>
          <p className="text-muted-foreground font-body mb-6">Three modes: Light (warm cream), Dark (deep navy), and WCAG AAA (high contrast 7:1+).</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Light", desc: "Warm cream & coral", bg: "hsl(38 40% 95%)", fg: "hsl(220 20% 18%)" },
              { name: "Dark", desc: "Deep navy & coral", bg: "hsl(200 25% 12%)", fg: "hsl(38 30% 90%)" },
              { name: "WCAG", desc: "Pure black & gold", bg: "hsl(0 0% 5%)", fg: "hsl(0 0% 100%)" },
            ].map(m => (
              <div
                key={m.name}
                className="rounded-lg border border-border p-6 text-center"
                style={{ background: m.bg, color: m.fg }}
              >
                <h3 className="text-xl font-display">{m.name}</h3>
                <p className="text-sm opacity-80">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          Hanafuda Design System — See <code className="text-primary">src/lib/design-tokens.ts</code> for full reference.
        </p>
      </footer>
    </div>
  );
};

export default DesignSystem;
