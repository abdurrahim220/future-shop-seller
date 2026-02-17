import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  type ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";
import { VENDOR_BREAKDOWN } from "@/constants";

const chartConfig: ChartConfig = {
  eu: { label: "EU", color: "var(--chart-1" },
  us: { label: "US", color: "var(--chart-2" },
  asia: { label: "Asia", color: "var(--chart-3" },
};

const AppBarChart = () => {
  const isMobile = useIsMobile();
  return (
    <ChartContainer config={chartConfig} className="h-70 lg:h-52 w-full">
      <BarChart
        accessibilityLayer
        data={VENDOR_BREAKDOWN}
        barSize={isMobile ? 12 : 30}
      >
        <CartesianGrid vertical={false} />

        <Bar dataKey="asia" stackId="a" fill="var(--chart-3)" />
        <Bar dataKey="us" stackId="a" fill="var(--chart-2)" />
        <Bar
          dataKey="eu"
          stackId="a"
          fill="var(--chart-1)"
          radius={[8, 8, 0, 0]}
        />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        {!isMobile && (
          <YAxis tickLine={false} axisLine={false} tickMargin={10} />
        )}
        <ChartTooltip content={<ChartTooltipContent />} />
        {!isMobile && (
          <ChartLegend
            content={
              <p className="font-semibold text-muted-foreground mt-2">Month</p>
            }
          />
        )}
      </BarChart>
    </ChartContainer>
  );
};

export default AppBarChart;
