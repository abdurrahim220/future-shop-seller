import { RadialBar, RadialBarChart, Label, PolarRadiusAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { VENDOR_MONITORED } from "@/constants";

const chartConfig: ChartConfig = {
  monitored: {
    label: "Total monitored",
    color: "var(--chart-1)",
  },
  limit: {
    label: "Available limit",
    color: "var(--color-secondary)",
  },
};

const AppRadicalChartBar = () => {
  const totalLimits = VENDOR_MONITORED[0].monitored + VENDOR_MONITORED[0].limit;
  return (
    <ChartContainer config={chartConfig} className="w-64 h-52">
      <RadialBarChart
        data={VENDOR_MONITORED}
        innerRadius={90}
        outerRadius={140}
        cy={140}
        startAngle={0}
        endAngle={180}
      >
        <RadialBar
          dataKey={"limit"}
          stackId={"a"}
          fill="var(--color-limit)"
          cornerRadius={20}
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey={"monitored"}
          stackId={"a"}
          fill="var(--color-monitored)"
          cornerRadius={20}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy || 0 - 16}
                      className="fill-foreground text-2xl font-semibold"
                    >
                      {totalLimits.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      </RadialBarChart>
    </ChartContainer>
  );
};

export default AppRadicalChartBar;
