import { ThemeProvider } from "./components/ThemeProvider";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Header from "./components/pages/Header";
import Page from "./components/pages/Page";
import PageHeader from "./components/pages/PageHeader";
import DashboardCard from "./components/DashboardCard";
import AppBarChart from "./components/chart/AppBarChart";
import AppRadicalChartBar from "./components/chart/AppRadicalChartBar";
import { TrendingUpIcon } from "lucide-react";

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader />
              <div className="grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
                <DashboardCard
                  title="Vendor breakdown"
                  description="last 7 days"
                  buttonText="View all"
                >
                  <AppBarChart />
                </DashboardCard>
                <DashboardCard
                  title="Vendor monitorez"
                  description="last 7 days"
                  buttonText="View full report"
                >
                  <div className="flex justify-between items-start">
                    <AppRadicalChartBar />
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon
                        size={20}
                        className="text-emerald-500 dark:text-emerald-400"
                      />
                      <span className="text-emerald-500 dark:text-emerald-400">
                        10%
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-8">
                    <p className="font-medium">
                      You have almost reached your monthly limit
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Upgrade to a plan that suits your needs
                    </p>
                  </div>
                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
