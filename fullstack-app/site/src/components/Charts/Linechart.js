import React from "react";
import { Line } from "@ant-design/charts";

// Import Redux components
import { connect } from "react-redux";

const Linechart = ({ eventsWithDates }) => {
  const dates = eventsWithDates.map((event) => ({ date: event.occurredAt }));

  let timeStamp = [];
  let hash = {};
  for (let i = 0; i < eventsWithDates.length; i++) {
    let date = eventsWithDates[i].occurredAt.slice(0, 10);
    if (hash.hasOwnProperty(date)) {
      timeStamp[hash[date]].count++;
    } else {
      hash[date] = timeStamp.push({ date: date, count: 1 }) - 1;
    }
  }

  if (eventsWithDates.length > 0) {
    const data = timeStamp;

    const config = {
      data,
      title: {
        visible: false,
        text: "Events Over Time",
      },
      xField: "date",
      xAxis: {
        title: {
          visible: true,
          text: "Date for Events",
        },
      },
      yField: "count",
      yAxis: {
        title: {
          visible: true,
          text: "Count of Events",
        },
      },
      point: {
        visible: true,
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#2593fc",
          lineWidth: 2,
        },
      },
      label: {
        visible: true,
        position: "middle",
        adjustColor: true,
      },
    };

    return <Line {...config} />;
  } else {
    return <h3>No Data</h3>;
  }
};

const mapStateToProps = (state) => {
  const { eventsWithDates } = state.eventsReduc;
  return {
    eventsWithDates: eventsWithDates,
  };
};

export default connect(mapStateToProps)(Linechart);
