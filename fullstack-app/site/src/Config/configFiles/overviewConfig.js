const overViewConfig = {
    id: "root",
    type: "root",
    children: 
    [
      {
        id: "rootDiv",
        component: "div",
        props: {
         className: "App",
        },
        children: 
        [
          {
            id: "layout",
            component: "layout",
            props: {
              fluid: "md",
              className: "overview"
            },
            children:
            [
                  {  //Row1
                    id: "row1",
                    component: "row",
                    props: {
                      className: "overview",
                    },
                    children: 
                      [
                      {
                        id: "row1col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row1col1h1",
                            component: "h1",
                            text: "Overview",
                            key: "row1col1h1"
                          }
                        ]
                      }
                      ]
                  },
                  {   //Row 2
                    id: "row2",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row2col1",
                        component: "col",
                        children:
                        [
                          {
                            id: "row2col1h3",
                            component: "h3",
                            text: "Events",
                            key: "row2col1h3"
                          }
                        ],
                      },
                      {
                        id: "row2col2",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row2col2h3",
                            component: "h3",
                            text: "Registered Events",
                            key: "row2col2h3"
                          }
                        ]
                      },
                      {
                        id: "row2col3",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row2col2h3",
                            component: "h3",
                            text: "Source"
                          }
                        ]
                      },
                      {
                        id: "row2col4",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row2col4h3",
                            component: "h3",
                            text: "Date Range"
                          }
                        ]
                      }
                    ]
                  },
                  {  //Row 3
                    id: "row3",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row3col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row3col1h1",
                            component: "count",
                            needsVariable: true,
                            props: {
                              item: "events"
                            },
                            variables:{
                              item: "events"
                            }
                          }
                        ],
                      },
                      {
                        id: "row3col2",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row3co21h1",
                            component: "count",
                            needsVariable: true,
                            props: {
                              item: "registeredEvents"
                            },
                            variables: {
                              item: "registeredEvents"
                            }
                          }
                        ],
                      },
                      {
                        id: "row3col3",
                        component: "col",
                        children: 
                        [
                          { 
                            id: "row3col3component",
                            component: "selectdropdown",
                          }
                        ]
                      },
                      {
                        id: "row3col4",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row3col4component",
                            component: "dateSelector",
                          }
                        ],
                      },
                    ]
                  }, 
                  {  // Row 4
                    id: "row4",
                    component: "row",
                    props:{
                      className:"overview"
                    },
                    children: 
                    [
                      {
                        id: "row4col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row4col1h4",
                            component: "h4",
                            text: "List of registered events for selected source"
                          }
                        ],
                      }
                    ]
                  },
                  {  // Row 5
                    id: "row5",
                    component: "row",
                    props:{
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row5col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row5col1component",
                            component: "csvdownload",
                            needsVariable: true,
                            props:
                            {
                              data: "filteredEvents",
                              filename: "report_data.csv",
                              className: "csvDownload"
                            },
                            variables: {
                              data: "filteredEvents"
                            }
                          },
                        ],
                      }
                    ]
                  },
                  {  // Row 6
                    id: "row6",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row6col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row6col1component",
                            component: "table",
                          }
                        ],
                      }
                    ]
                  },
                  {  // Row 7
                    id: "row7",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row7col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row7col1component",
                            component: "barchart",
                          }
                        ],
                      }
                    ]
                  },
                  { // Row 8
                    id: "EightRow",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row8col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row8col1h4",
                            component: "h4",
                            text: "Events Over Time"
                          }
                        ],
                      }
                    ]
                  },
                  { // Row 9
                  
                    id: "row9",
                    component: "row",
                    props: {
                      className: "overview"
                    },
                    children: 
                    [
                      {
                        id: "row9col1",
                        component: "col",
                        children: 
                        [
                          {
                            id: "row9col1component",
                            component: "linechart",
                          }
                        ],
                      }
                    ]
                  },
            ]
          }
        ]
      }
    ]
}
  
export default overViewConfig;
