import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const revenueSummary = [
  { year: "Year 1", sales: "$468K", subscriptions: 65, payroll: "$214K" },
  { year: "Year 2", sales: "$684K", subscriptions: 95, payroll: "$377K" },
  { year: "Year 3", sales: "$821K", subscriptions: 114, payroll: "$423K" },
  { year: "Year 4", sales: "$1.48M", subscriptions: 206, payroll: "$771K" },
  { year: "Year 5", sales: "$1.69M", subscriptions: 235, payroll: "$866K" },
];

const investmentHighlights = [
  {
    title: "Self-funded launch",
    description:
      "Founder invests $35K to cover initial product build, infrastructure, and go-to-market efforts without external debt.",
  },
  {
    title: "Healthy margins",
    description:
      "75% gross margin maintained across five-year plan with direct costs capped at 25% of revenue.",
  },
  {
    title: "Scalable pricing",
    description:
      "Average annual subscription priced at $7,200 with premium tiers for advanced AI capabilities.",
  },
];

const profitability = [
  { year: "Year 1", ebitda: "$29.9K", taxes: "$25.7K", netIncome: "$21.7K" },
  { year: "Year 2", ebitda: "$63.6K", taxes: "$48.3K", netIncome: "$46.2K" },
  { year: "Year 3", ebitda: "$114.7K", taxes: "$62.5K", netIncome: "$83.3K" },
  { year: "Year 4", ebitda: "$232.3K", taxes: "$126.3K", netIncome: "$169.0K" },
  { year: "Year 5", ebitda: "$283.2K", taxes: "$147.9K", netIncome: "$206.1K" },
];

export default function FinancialsPage() {
  return (
    <main className="relative isolate bg-gradient-to-br from-foregroundRed/5 via-white to-white py-20 text-foreground dark:from-black dark:via-zinc-950 dark:to-black">
      <div className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-foregroundRed/10 via-transparent to-transparent blur-3xl" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-foregroundRed/10 px-4 py-1 text-sm font-medium text-foregroundRed">
            Financial outlook
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Sustainable SaaS economics with strong recurring revenue growth.
          </h1>
          <p className="text-lg text-muted-foreground">
            BuilderStack reaches profitability in Year 1 and reinvests into team expansion, AI R&D, and market development while keeping gross margins at 75%.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl space-y-8 px-6">
        <div className="rounded-3xl border border-foregroundRed/10 bg-white/80 p-8 backdrop-blur dark:bg-black/60">
          <h2 className="text-3xl font-semibold tracking-tight">Revenue trajectory</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Subscription expansion accelerates through digital marketing, partnerships, and pilots with Canadian builders.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-foregroundRed/10 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-3 pr-6">Year</th>
                  <th className="py-3 pr-6">Revenue</th>
                  <th className="py-3 pr-6">Subscriptions</th>
                  <th className="py-3 pr-6">Payroll investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foregroundRed/10">
                {revenueSummary.map((row) => (
                  <tr key={row.year} className="text-foreground">
                    <td className="py-3 pr-6 font-medium">{row.year}</td>
                    <td className="py-3 pr-6">{row.sales}</td>
                    <td className="py-3 pr-6">{row.subscriptions}</td>
                    <td className="py-3 pr-6">{row.payroll}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {investmentHighlights.map((item) => (
            <Card
              key={item.title}
              className="border-foregroundRed/10 bg-white/80 p-6 backdrop-blur dark:bg-black/60"
            >
              <CardHeader className="space-y-2 p-0">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Funding insight</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-sm text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-6">
        <Card className="border-foregroundRed/10 bg-white/80 p-6 backdrop-blur dark:bg-black/60">
          <CardHeader className="space-y-2 p-0">
            <CardTitle>Profitability snapshot</CardTitle>
            <CardDescription>Positive EBITDA and net income from Year 1 onward.</CardDescription>
          </CardHeader>
          <CardContent className="mt-6 overflow-x-auto p-0">
            <table className="min-w-full divide-y divide-foregroundRed/10 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-3 pr-6">Year</th>
                  <th className="py-3 pr-6">EBITDA</th>
                  <th className="py-3 pr-6">Taxes paid</th>
                  <th className="py-3 pr-6">Net income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foregroundRed/10">
                {profitability.map((row) => (
                  <tr key={row.year} className="text-foreground">
                    <td className="py-3 pr-6 font-medium">{row.year}</td>
                    <td className="py-3 pr-6">{row.ebitda}</td>
                    <td className="py-3 pr-6">{row.taxes}</td>
                    <td className="py-3 pr-6">{row.netIncome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
