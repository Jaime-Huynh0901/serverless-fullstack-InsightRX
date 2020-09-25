const overViewConfig = {
    id: "root",
    type: "root",
    children: 
    [
      {
        id: "rootDiv",
        component: "div",
        key: "rootDiv",
        props: {
         className: "App",
        },
        children: 
        [ 
          {
          id: "reactFragment",
          component: "reactfragment",
          key: 'reactfragment',
          children:
        [
         {
            id: "layout",
            component: "layout",
            key: "layout",
            props: {
              className: "overview"
            },
            children:
            [
                  {  //Row1
                    id: "row1",
                    component: "row",
                    key: "row1",
                    props: {
                      style: {
                        marginBottom: 10
                      },
                    },
                    children: 
                      [
                      {
                        id: "row1col1",
                        component: "col",
                        key: "row1col1",
                        props: {
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row1col1Breadcrumb",
                            component: "breadcrumb",
                            key: "row1col1Breadcrumb",
                            children: [
                              {
                                id: "row1col1h4",
                                component: "h4",
                                key: "row1col1h4",
                                children: [
                                      {
                                      id: "row1col1h4breadcrumb1",
                                      component: "breadcrumbItem",
                                      key: "row1col1h4breadcrumb1",
                                      children: [
                                        {
                                            id: "row1col1h4breadcrumb1Link1",
                                            component: "link",
                                            props: {
                                              to: "/"
                                            },
                                            text: "Home",
                                            key: "row1col1h4breadcrumb1Link1"
                                        }]
                                      },
                                      {
                                          id: "row1col1h4breadcrumb2",
                                          component: "breadcrumbItem",
                                          key: "row1col1h4breadcrumb2",
                                          children: 
                                          [
                                           {
                                              id: "row1col1h4breadcrumb1Link2",
                                              key: "row1col1h4breadcrumb1Link2",
                                              component: "link",
                                              props: {
                                              to: "/overview",
                                              style: {
                                              color: "#183045"
                                              }
                                              },
                                              text: "Dashboard",
                                          
                                            },
                                          ]
                                      }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                      ]
                  },
                  {   //Row 2
                    id: "row2",
                    component: "row",
                    key: "row2",
                    props: {
                      style: {
                        marginBottom: 20
                      }
                   
                    },
                    children: 
                    [
                      {
                        id: "row2div1",
                        component: "div",
                        key: "row2div1",
                        props: {
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div2",
                            component: "div",
                            props: {
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#7b94b7",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            key: "row2div2",
                            children: [
                              {    
                              id: "row2div3",
                              component: "div",
                              props: {
                              className: "ant-card-body",
                              },
                              key: "row2div3",
                              children: [
                                {    
                                  id: "row2div4",
                                  component: "div",
                                  props: {
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  key: "row2div4",
                                  children: [
                                    {    
                                      id: "row2div5",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div5",
                                      children: [
                                        {
                                          id: "row2div5h4",
                                          component: "h4",
                                          props: {
                                          key: "row2div5h4",
                                          className: "text-white",
                                          },
                                          text: "Events",
                                          key: "row2div5h4",
                                        },
                                        {
                                          id: "row2div5h3",
                                          component: "h3",
                                          props: {
                                            key: "row2div5h3",
                                            className: "text-white",
                                          },
                                          key: "row2div5h3",
                                          children: [
                                            {
                                                id: "row2div5h3count",
                                                component: "count",
                                                key: "row2div5h3count",
                                                needsVariable: true,
                                                props: {
                                                  item: "eventswithdates",
                                                  className: "text-white"
                                                },
                                                variables:{
                                                  item: "eventsWithDates"
                                                }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span1",
                                      component: "span",
                                      props: {
                                      className: "mr-auto",
                                      },
                                      key: "row2span1",                          
                                    },
                                    {    
                                      id: "row2div6",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div6",                          
                                    },
                                  ]
                                }
                              ]
                              }
                            ]

                          }
                        ],
                      },
                      {
                        id: "row2div21",
                        component: "div",
                        key: "row2div21",
                        props: {
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div22",
                            component: "div",
                            props: {
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#fada15",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            key: "row2div22",
                            children: [
                              {    
                              id: "row2div23",
                              component: "div",
                              props: {
                              className: "ant-card-body",
                              },
                              key: "row2div23",
                              children: [
                                {    
                                  id: "row2div24",
                                  component: "div",
                                  props: {
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  key: "row2div24",
                                  children: [
                                    {    
                                      id: "row2div25",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div25",
                                      children: [
                                        {
                                          id: "row2div25h4",
                                          component: "h4",
                                          props: {
                                          className: "text-white",
                                          },
                                          text: "Registered Events",
                                          key: "row2div25h4",
                                        },
                                        {
                                          id: "row2div25h3",
                                          component: "h3",
                                          key: "row2div25h3",
                                          children: [
                                            {
                                                id: "row2div25h3count",
                                                component: "count",
                                                key: "row2div25h3count",
                                                needsVariable: true,
                                                props: {
                                                  item: "registeredEvents"
                                                },
                                                variables:{
                                                  item: "registeredEvents"
                                                }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span21",
                                      component: "span",
                                      props: {
                                      className: "mr-auto",
                                      },
                                      key: "row2span21",                          
                                    },
                                    {    
                                      id: "row2div26",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div26",                          
                                    },
                                  ]
                                }
                              ]}
                            ]

                          }
                        ],
                      },
                      {
                        id: "row2div31",
                        component: "div",
                        key: "row2div31",
                        props: {
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div32",
                            component: "div",
                            props: {
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#fa8b15",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            key: "row2div32",
                            children: [
                              {    
                              id: "row2div33",
                              component: "div",
                              props: {
                              className: "ant-card-body",
                              },
                              key: "row2div33",
                              children: [
                                {    
                                  id: "row2div34",
                                  component: "div",
                                  props: {
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  key: "row2div34",
                                  children: [
                                    {    
                                      id: "row2div35",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div35",
                                      children: [
                                        {
                                          id: "row2div35h4",
                                          component: "h4",
                                          props: {
                                          className: "text-white",
                                          },
                                          text: "Source",
                                          key: "row2div35h4",
                                        },
                                        {
                                          id: "row2div35h3",
                                          component: "h3",
                                          key: "row2div35h3",
                                          children: [
                                            {
                                              id: "row2div35h3dropdown",
                                              component: "selectdropdown",
                                              key: "row2div35h3dropdown"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span31",
                                      component: "span",
                                      props: {
                                      className: "mr-auto",
                                      },
                                      key: "row2span31",                          
                                    },
                                    {    
                                      id: "row2div36",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div36",                          
                                    },
                                  ]
                                }
                              ]}
                            ]

                          }
                        ],
                      },
                      {
                        id: "row2div41",
                        key: "row2div41",
                        component: "div",
                        props: {
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div42",
                            component: "div",
                            props: {
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#f6222e",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            key: "row2div42",
                            children: [
                              {    
                              id: "row2div43",
                              component: "div",
                              props: {
                              className: "ant-card-body",
                              },
                              key: "row2div43",
                              children: [
                                {    
                                  id: "row2div44",
                                  component: "div",
                                  props: {
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  key: "row2div44",
                                  children: [
                                    {    
                                      id: "row2div45",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div45",
                                      children: [
                                        {
                                          id: "row2div45h4",
                                          component: "h4",
                                          props: {
                                          className: "text-white",
                                          },
                                          text: "Date Range",
                                          key: "row2div45h4",
                                        },
                                        {
                                          id: "row2div45h3",
                                          component: "h3",
                                          key: "row2div45h3",
                                          children: [
                                            {
                                              id: "row2div45h3dropdown",
                                              component: "dateselector",
                                              key: "row2div45h3dropdown"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span31",
                                      component: "span",
                                      props: {
                                      className: "mr-auto",
                                      },
                                      key: "row2span31",                          
                                    },
                                    {    
                                      id: "row2div36",
                                      component: "div",
                                      props: {
                                      className: "ant-col",
                                      },
                                      key: "row2div36",                          
                                    },
                                  ]
                                }
                              ]}
                            ]

                          }
                        ],
                      },
                    ]
                  },
                  {  //Row 3
                    id: "row3",
                    component: "row",
                    key: "row3",
                    children: 
                    [
                      {
                        id: "row3col1",
                        component: "col",
                        key: "row3col1",
                        props: {
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row3col1div1",
                            component: "div",
                            key: "row3col1div1",
                            children: [
                              {
                                id: "row3col1div1Button",
                                component: "button",
                                key: "row3col1div1Button",
                                props: {
                                  type: "button",
                                  className: "ant-btn ant-btn-lg ant-btn-circle ant-btn-loading",
                                  style: {
                                    backgroundColor: "#7b94b7",
                                    borderRadius: 5,
                                    marginLeft: 7,
                                    paddingLeft: 10,
                                    paddingRight: 10
                                  }
                                },
                                children: 
                                [
                                  // {
                                  //   id: "row3col1div1Buttoni1",
                                  //   component: "i",
                                  //   key: "row3col1div1Buttoni1",
                                  //   props: {
                                  //     "aria-label" : "icon:refresh",
                                  //     className: "anticon anticon-refresh",
                                  //   },
                                  //   children: 
                                  //   [
                                  //     {
                                  //       id: "row3col1div1Buttoni1svg1",
                                  //       key: "row3col1div1Buttoni1svg1",
                                  //       component: "svg",
                                  //       props: 
                                  //       {
                                  //         xmlns : "http://www.w3.org/2000/svg",
                                  //         width: "24",
                                  //         height: "24",
                                  //         viewBox: "0 0 24 24",
                                  //         fill: "#ffffff",
                                  //         "aria-hidden": "true",
                                  //         focusable: "true",
                                  //         style: {
                                  //           paddingBottom: 6
                                  //           },
                                  //         children: [
                                  //           {
                                  //             id: "row3col1div1Buttoni1svg1path1",
                                  //             key:"row3col1div1Buttoni1svg1path",
                                  //             component: "path",
                                  //             props: {
                                  //              d : "M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"
                                  //             }
                                  //           }
                                  //           ]
                                  //         },
                                  //     }
                                  //   ]
                                  // },
                                  {
                                    id: "row3col1div1Buttonspan1",
                                    key: "row3col1div1Buttonspan1",
                                    component: "span",
                                    props: {
                                      style: {
                                        color: "#ffffff",
                                      }
                                    },
                                    text: "REFRESH CHART"
                                  }
                                ]
                              },
                              {
                                id: "row3col1div1CSV",
                                key: "row3col1div1CSV",
                                component: "csvdownload",
                                needsVariable: true,
                                variables: {
                                  data: "filteredEvents"
                                },
                                props: {
                                  data: "filteredEvents",
                                  filename: "report_date.csv",
                                  style: {
                                    border: 0,
                                  }
                                },
                                children: [
                                  {
                                    id: "row3col1div1Button2",
                                    component: "button",
                                    key: "row3col1div1Button2",
                                    props: {
                                      type: "button",
                                      className: "ant-btn ant-btn-lg",
                                      style: {
                                        backgroundColor: "#36bcb2",
                                        borderRadius: 5,
                                      }
                                      },
                                    children: [
                                      {
                                        id: "row3col1div1Buttoni2",
                                        key: "row3col1div1Buttoni2",
                                        component: "i",
                                        props: {
                                          "aria-label" : "icon: download",
                                          className: "anticon anticon-download"
                                        },
                                        children: 
                                        [
                                          {
                                            id: "row3col1div1Buttoni1svg2",
                                            key: "row3col1div1Buttoni1svg2",
                                            component: "svg",
                                            props: 
                                            {
                                              "aria-label":"icon: download",
                                              "data-icon": "download",
                                              width: "2em",
                                              height: "2em",
                                              viewBox: "64 64 896 896",
                                              fill: "#ffffff",
                                              "aria-hidden": "true",
                                              focusable: "true",
                                              style: {
                                                paddingBottom: 4
                                              }
                                            },
                                          children: 
                                          [
                                            {
                                              id: "row3col1div1Buttoni1svg1path2",
                                              key: "row3col1div1Buttoni1svg1path2",
                                              component: "path",
                                              props: {
                                              d : "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                            }
                                            }
                                          ]
                                          },
                                        ]
                                      },
                                      {
                                        id: "row3col1div1Buttonspan2",
                                        key: "row3col1div1Buttonspan2",
                                        component: "span",
                                        props: {
                                          style: {
                                            color: "#ffffff",
                                          }
                                        },
                                        text: "Download"
                                      }
                                    ]
                                  },
                                ]
                              },
                            ]
                          }
                        ],
                      },
                    ]
                  }, 
                  {  // Row 4
                    id: "row4",
                    component: "row",
                    key: "row4",
                    props:{
                     style:{
                       width: "100%",
                       padding: 0,
                       margin: 0,
                       marginTop: 20
                     }
                    },
                    children: 
                    [
                      {
                        id: "row4col1",
                        component: "col",
                        key: "row4col1",
                        props: {
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row4col1Table",
                            component: "table",
                            key: "row4col1Table"
                          }
                        ],
                      }
                    ]
                  },
                  {  // Row 5
                    id: "row5",
                    component: "row",
                    key: "row5",
                    props:{
                      type: "flex",
                      align: "middle",
                      justify: "center",
                      className: "barchart",
                      style: {
                        backgroundColor: "#fa8b15",
                      }                      
                    },
                    children: 
                    [
                      {
                        id: "row5col1",
                        component: "col",
                        key: "row5col1",
                        props: {
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row5col1div1",
                            component: "div",
                            key: "row5col1div1",
                            props: {
                              className: "ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 barchart",
                            },
                            
                            children: [
                              {
                                id: "row5col1div2",
                                key: "row5col1div2",
                                component: "div",
                                props: {
                                  className: "ant-card mb-24 ant-card-bordered",
                                },                                
                                children: [
                                 { 
                                  id: "row5col1div3",
                                  key: "row5col1div3",
                                  component: "div",
                                  props: {
                                    className: "ant-card-head",
                                  },
                                 
                                  children: [
                                    { 
                                      id: "row5col1div4",
                                      key: "row5col1div4",
                                      component: "div",
                                      props: {
                                        className: "ant-card-head-wrapper",
                                      },
                                     
                                      children: [
                                        { 
                                          id: "row5col1div5",
                                          key: "row5col1div5",
                                          component: "div",
                                          props: {
                                            className: "ant-card-head-title",
                                          },
                                          children: [
                                            { 
                                              id: "row5col1dive5h4",
                                              component: "h4",
                                              key: "row5col1dive5h4",
                                              props: {
                                                style: {
                                                  color: "#fa8b15"
                                                }
                                              },
                                              text: "Count of Event Types"
                                             }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                 },
                                 {
                                   id: "row5col1barchart",
                                   component: "barchart",
                                   key: "row5col1barchart",
                                   props: {
                                     className: "ant-card-body"
                                   }
                                 }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                    ],
                  }
            ]
         },
         {
           id: "footer",
           key: "footer",
           component: "footer",
         }
        ]
          }
       ] 
      }
  ]
}
  
export default overViewConfig;
