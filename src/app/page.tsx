export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Masthead */}
      <header className="border-b-4 border-ink py-8 text-center bg-[#efe4cb]">
        <h1 className="font-display text-5xl md:text-7xl font-black text-ink tracking-tight uppercase">
          The Abhishek Times
        </h1>
        <p className="mt-2 text-xs font-mono uppercase tracking-widest text-muted font-medium">
          Est. 2026 · Vol. I · Edition No. 1 · Software & Systems Engineering
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main story */}
          <article className="lg:col-span-2">
            <h2 className="headline headline-lg mb-4">
              City Council Approves Historic Preservation Plan
            </h2>
            <p className="text-muted text-sm font-sans mb-6 uppercase tracking-wide">
              By Jane Doe · August 6, 2026
            </p>
            <p className="text-base leading-relaxed mb-4">
              In a decisive 7–2 vote last night, the City Council approved a 
              sweeping historic preservation ordinance that will protect 
              dozens of buildings in the downtown core...
            </p>
            <p className="text-base leading-relaxed">
              The measure, which had been under discussion for nearly two years...
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="section-title">Latest Briefs</h3>
              <ul className="space-y-4 text-sm">
                <li className="border-b border-border pb-3">
                  <a href="#" className="font-medium hover:text-accent">
                    Fire department receives new equipment
                  </a>
                </li>
                <li className="border-b border-border pb-3">
                  <a href="#" className="font-medium hover:text-accent">
                    Local library expands evening hours
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h4 className="font-serif font-bold text-lg mb-3">Opinion</h4>
              <p className="text-sm leading-relaxed">
                The preservation plan is a long-overdue recognition of our 
                city’s architectural heritage...
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}