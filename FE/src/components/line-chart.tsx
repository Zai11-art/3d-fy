// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import useMode from "../hooks/state";
import { useEffect, useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = ({ data /* see data tab */ }) => {
  const lightmode = useMode((state) => state.isDarkMode);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(data);
  }, [graphData]);

  return (
    <ResponsiveLine
      tooltip={({ point }) => {
        return (
          <div
            className={`${
              lightmode
                ? "bg-zinc-100 border-zinc-300 shadow-zinc-950/30 text-zinc-950 font-normal"
                : "bg-gradient-gray border-zinc-500 shadow-zinc-400/30 text-zinc-100 font-light"
            }  shadow-lg  border-[1px]  py-3 px-3 rounded-lg text-normal `}
          >
            <div className="text-[13px]">
              Time:
              <span
                className={`text-[13px] ${
                  lightmode ? "text-orange-700" : "text-orange-300"
                } `}
              >
                {" "}
                {point?.data.x}
              </span>
            </div>
            <div className="text-[13px]">
              Impressions:
              <span
                className={`text-[13px] ${
                  lightmode ? "text-orange-700" : "text-orange-300"
                } `}
              >
                {" "}
                {point?.data.y}
              </span>
            </div>
          </div>
        );
      }}
      data={graphData}
      curve="monotoneX"
      colors={"orange"}
      margin={{ top: 20, right: 20, bottom: 30, left: 35 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      lineWidth={1.5}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: "gray",
            },
            text: {
              fill: "gray",
            },
          },
        },
        grid: {
          line: {
            stroke: "gray",
            strokeWidth: 0.15,
          },
        },
      }}
    />
  );
};

export default LineChart;
