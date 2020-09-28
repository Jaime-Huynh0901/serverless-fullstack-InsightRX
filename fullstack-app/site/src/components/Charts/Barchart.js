import React from 'react';
import { Bar } from '@ant-design/charts'; 

// Import Redux components
import { connect } from 'react-redux';

const Barchart = ({ eventsReport }) => {
 const data = eventsReport;
 if ( eventsReport || eventsReport.length > 0 ) {

  const config = { 
    data,
    forceFit:true, 
    title: { 
      visible: true, 
      text : 'Events Report' , 
    },
    description:{ 
      visible: false, 
      text:
        'Events' ,
    },
    xField: 'eventCount',
    xAxis: {
      title: {
        visible: true,
        text: 'Count of Events'
      }
    },
    yField: 'typeName',
    yAxis: {
      title: {
        visible: true,
        text: 'Event Type Name'
      }
    },
    colorField: 'eventCount',
    color: ['#55A6F3', '#CED4DE', '#55A6F3', '#55A6F3', '#55A6F3'],
    label: {
      visible: true, 
      position: 'middle',
      adjustColor: true,
    }
  };

   return <Bar {...config} />;

} else {
    
      return <h3>No Data</h3>
 
 }
           
};

const mapStateToProps = state => {
    const { eventsReport } = state.eventsReduc;
    return {
      eventsReport: eventsReport
    };
  }
  
export default connect(mapStateToProps)(Barchart);