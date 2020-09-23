import React from 'react';
import { Bar } from '@ant-design/charts'; 

// Import Redux components
import { connect } from 'react-redux';

const Barchart = ({ eventsReport }) => {
 const data = eventsReport;
 if ( eventsReport ) {

  const config = { 
    data,
    forceFit:true, 
    title:{ 
      visible: true, 
      text : 'Events Report' , 
    },
    description:{ 
      visible: false, 
      text:
        'Events' ,
    },
    xField: 'eventCount',
    yField: 'typeName',
    colorField: 'eventCount',
    color: ['#55A6F3', '#CED4DE', '#55A6F3', '#55A6F3', '#55A6F3'],
    point: {
        visible: true,
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#2593fc',
          lineWidth: 2,
        }
    },
    label: {
      visible:true, 
      position: 'middle',
      adjustColor: true,
    },
  };
  // try {

   return <Bar {...config} />;
  // }

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