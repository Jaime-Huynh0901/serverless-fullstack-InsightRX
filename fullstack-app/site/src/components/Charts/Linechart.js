import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Line } from '@ant-design/charts';

// Import Redux components
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { fetchDatedEvents, fetchEvents, fetchRegisteredEvents, fetchSources } from '../../utils/actions';

const Linechart = ({ eventsWithDates }) => {
	const events = eventsWithDates.map(events => ({...events,...events.eventData}));
		
	console.log(events);

	if (eventsWithDates.length > 0) {
		const data = events;

	// console.log(typeof (data[0].eventData.linkClicked));

		const config = {
			data,
			title: {
			  visible: false,
			  text: 'Events Over Time',
			},
			xField: 'occurredAt',
			yField: 'clinicianId',
			point: {
			  visible: true,
			  size: 5,
			  shape: 'diamond',
			  style: {
				fill: 'white',
				stroke: '#2593fc',
				lineWidth: 2,
			  },
			},
		}

	// try {
		return <Line {...config} />;   
						
	} else {
		
		return <h3>No Data</h3>
	}
};

const mapStateToProps = state => {
    const { eventsWithDates } = state.eventsReduc;
    return {
      eventsWithDates: eventsWithDates
    };
  }

export default connect(mapStateToProps)(Linechart);