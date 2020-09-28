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
          id: "reactFragment",
          component: "reactfragment",
          props: {
            key: "reactFragment"
          },
          children:
          [
            {
            id: "layout",
            component: "layout",
            props: {
              className: "overview",
              key:"layout"
            },
            children:
            [
                  {  //Row1
                    id: "row1",
                    component: "row",
                    props: {
                      key: "row1",
                      style: {
                        marginBottom: 10
                      },
                    },
                    children: 
                      [
                      {
                        id: "row1col1",
                        component: "col",
                        props: {
                          key: "row1col1",
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row1col1Breadcrumb",
                            component: "breadcrumb",
                            props: {
                              key: "row1col1Breadcrumb",
                            },
                            children: [
                              {
                                id: "row1col1h4",
                                component: "h4",
                                props: {
                                  key: "row1col1h4",
                                },
                                children: [
                                      {
                                      id: "row1col1h4breadcrumb1",
                                      component: "breadcrumbItem",
                                      props: {
                                        key: "row1col1h4breadcrumb1"
                                      },                                      
                                      children: [
                                        {
                                            id: "row1col1h4breadcrumb1Link1",
                                            component: "link",
                                            props: {
                                              key: "row1col1h4breadcrumb1Link1",
                                              to: "/"
                                            },
                                            text: "Home",
                                            
                                        }]
                                      },
                                      {
                                          id: "row1col1h4breadcrumb2",
                                          component: "breadcrumbItem",
                                          props: {
                                            key: "row1col1h4breadcrumb2"
                                          },
                                          children: 
                                          [
                                           {
                                              id: "row1col1h4breadcrumb1Link2",
                                              
                                              component: "link",
                                              props: {
                                              key: "row1col1h4breadcrumb1Link2",
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
                    props: {
                      key: "row2",
                      style: {
                        marginBottom: 20
                      }
                    },
                    children: 
                    [
                      { id: "row2div1",
                        component: "div",
                        props: {
                          key: "row2div1",
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div2",
                            component: "div",
                            props: {
                              key: "row2div2",
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#7b94b7",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            children: [
                              {    
                              id: "row2div3",
                              component: "div",
                              props: {
                                key: "row2div3",
                              className: "ant-card-body",
                              },
                              
                              children: [
                                {    
                                  id: "row2div4",
                                  component: "div",
                                  props: {
                                    key: "row2div4",
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  
                                  children: [
                                    {    
                                      id: "row2div5",
                                      component: "div",
                                      props: {
                                        key: "row2div5",
                                      className: "ant-col",
                                      },
                                      
                                      children: [
                                        {
                                          id: "row2div5h4",
                                          component: "h4",
                                          props: {
                                            key: "row2div5h4",
                                            className: "text-white",
                                          },
                                          text: "Events",
                                        },
                                        {
                                          id: "row2div5h3",
                                          component: "h3",
                                          props: {
                                            key: "row2div5h3",
                                            className: "text-white",
                                          },
                                          children: [
                                            {
                                                id: "row2div5h3count",
                                                component: "count",
                                                needsVariable: true,
                                                props: {
                                                  key: "row2div5h3count",
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
                                        key: "row2span1",
                                        className: "mr-auto",
                                      },
                                      
                                    },
                                    {    
                                      id: "row2div6",
                                      component: "div",
                                      props: {
                                        key: "row2div6",
                                        className: "ant-col",
                                      },
                                      
                                    },
                                  ]
                                }
                              ]
                              }
                            ]

                          }
                        ],
                      },
                      
                      {id: "row2div21",
                        component: "div",
                        props: {
                          key: "row2div21",
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div22",
                            component: "div",
                            props: {
                              key: "row2div22",
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#fada15",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            children: [
                              {    
                              id: "row2div23",
                              component: "div",
                              props: {
                              key:  "row2div23",
                              className: "ant-card-body",
                              },
                              
                              children: [
                                {    
                                  id: "row2div24",
                                  component: "div",
                                  props: {
                                    key: "row2div24",
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  
                                  children: [
                                    {    
                                      id: "row2div25",
                                      component: "div",
                                      props: {
                                        key:"row2div25",
                                      className: "ant-col",
                                      },
                                      
                                      children: [
                                        {
                                          id: "row2div25h4",
                                          component: "h4",
                                          props: {
                                            key: "row2div25h4",
                                          className: "text-white",
                                          },
                                          text: "Registered Events",
                                          
                                        },
                                        {
                                          id: "row2div25h3",
                                          component: "h3",
                                          props: {
                                            key: "row2div25h3"
                                          },
                                          children: [
                                            {
                                                id: "row2div25h3count",
                                                component: "count",
                                                needsVariable: true,
                                                props: {
                                                  key: "row2div25h3count",
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
                                        key: "row2span21",
                                      className: "mr-auto",
                                      },
                                      
                                    },
                                    {    
                                      id: "row2div26",
                                      component: "div",
                                      props: {
                                        key: "row2div26",
                                      className: "ant-col",
                                      },
                                      
                                    },
                                  ]
                                }
                              ]}
                            ]

                          }
                        ],
                      },
                      
                       { id: "row2div31",
                        component: "div",
                        props: {
                          key: "row2div31",
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div32",
                            component: "div",
                            props: {
                              key: "row2div32",
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#fa8b15",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            children: 
                            [
                            {    
                              id: "row2div33",
                              component: "div",
                              props: {
                                key: "row2div33",
                                className: "ant-card-body",
                              },
                              children: 
                              [
                                {    
                                  id: "row2div34",
                                  component: "div",
                                  props: {
                                    key: "row2div34",
                                    className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  children: [
                                    {    
                                      id: "row2div35",
                                      component: "div",
                                      props: {
                                        key: "row2div35",
                                      className: "ant-col",
                                      },
                                      children: [
                                        {
                                          id: "row2div35h4",
                                          component: "h4",
                                          props: {
                                            key: "row2div35h4",
                                            className: "text-white",
                                          },
                                          text: "Source",
                                        },
                                        {
                                          id: "row2div35h3",
                                          component: "h3",
                                          props: {
                                            key: "row2div35h3",
                                          },
                                          children: [
                                            {
                                              id: "row2div35h3dropdown",
                                              component:"selectdropdown",
                                              props: {
                                                key: "row2div35h3dropdown"
                                              }                                    
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span31",
                                      component: "span",
                                      props: {
                                        key: "row2span31",
                                      className: "mr-auto",
                                      }                                      
                                    },
                                    {    
                                      id: "row2div37",
                                      component: "div",
                                      props: {
                                        key: "row2div37",
                                        className: "ant-col",
                                      }
                                    },
                                  ]
                                }
                              ]
                            }
                            ]
                          }
                        ],
                      },
                      
                       { id: "row2div41",
                        component: "div",
                        props: {
                          key: "row2div41",
                          className: "antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6"
                        },
                        children:
                        [
                          {
                            id: "row2div42",
                            component: "div",
                            props: {
                              key: "row2div42",
                              className: "antd-card ant-card mb-4 ant-card-bordered",
                              style: {
                                backgroundColor: "#f6222e",
                                borderRadius: 5, 
                                minHeight: 144
                              }
                            },
                            
                            children: [
                              {    
                              id: "row2div43",
                              component: "div",
                              props: {
                                key: "row2div43",
                              className: "ant-card-body",
                              },
                              
                              children: [
                                {    
                                  id: "row2div44",
                                  component: "div",
                                  props: {
                                    key:"row2div44",
                                  className: "ant-row-flex ant-row-flex-start ant-row-flex-middle",
                                  },
                                  
                                  children: [
                                    {    
                                      id: "row2div45",
                                      component: "div",
                                      props: {
                                        key: "row2div45",
                                      className: "ant-col",
                                      },
                                      
                                      children: [
                                        {
                                          id: "row2div45h4",
                                          component: "h4",
                                          props: {
                                            key: "row2div45h4",
                                          className: "text-white",
                                          },
                                          text: "Date Range",
                                          
                                        },
                                        {
                                          id: "row2div45h3",
                                          component: "h3",
                                          props: {
                                            key: "row2div45h3",
                                          },
                                          children: [
                                            {
                                              id: "row2div45h3dropdown",
                                              component: "dateselector",
                                              props: {
                                                key: "row2div45h3dropdown",
                                              }
                                              
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {    
                                      id: "row2span41",
                                      component: "span",
                                      props: {
                                        key: "row2span41",
                                      className: "mr-auto",
                                      },
                                      
                                    },
                                    {    
                                      id: "row2div46",
                                      component: "div",
                                      props: {
                                        key: "row2div46",
                                      className: "ant-col",
                                      },
                                      
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
                    props: {
                      key: "row3"
                    },
                    children: 
                    [
                      {
                        id: "row3col1",
                        component: "col",
                        
                        props: {
                          key: "row3col1",
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row3col1div1",
                            component: "div",
                            props: {
                              key: "row3col1div1",
                            },
                            children: [
                              {
                                id: "row3col1div1Button",
                                component: "refreshbutton",
                                props: {
                                  key: "row3col1div1Button",
                                }
                              },
                              {
                                id: "row3col1div1CSV",
                                component: "csvdownload",
                                needsVariable: true,
                                variables: {
                                  data: "filteredEvents"
                                },
                                props: {
                                  key: "row3col1div1CSV",
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
                                    props: {
                                      key: "row3col1div1Button2",
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
                                        
                                        component: "i",
                                        props: {
                                          key: "row3col1div1Buttoni2",
                                          "aria-label" : "icon: download",
                                          className: "anticon anticon-download"
                                        },
                                        children: 
                                        [
                                          {
                                            id: "row3col1div1Buttoni1svg2",
                                            
                                            component: "svg",
                                            props: 
                                            {
                                              key: "row3col1div1Buttoni1svg2",
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
                                              
                                              component: "path",
                                              props: {
                                                key: "row3col1div1Buttoni1svg1path2",
                                              d : "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                            }
                                            }
                                          ]
                                          },
                                        ]
                                      },
                                      {
                                        id: "row3col1div1Buttonspan2",
                                        
                                        component: "span",
                                        props: {
                                          key: "row3col1div1Buttonspan2",
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
                    
                    props:{
                      key: "row4",
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
                        
                        props: {
                          key: "row4col1",
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row4col1Table",
                            component: "table",
                            props: {
                              key: "row4col1Table",
                            }
                            
                          }
                        ],
                      }
                    ]
                  },
                  {  // Row 5
                    id: "row5",
                    component: "row",
                    
                    props:{
                      key: "row5",
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
                        
                        props: {
                          key: "row5col1",
                          span: 24
                        },
                        children: 
                        [
                          {
                            id: "row5col1div1",
                            component: "div",
                            
                            props: {
                              key: "row5col1div1",
                              className: "ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 barchart",
                            },
                            
                            children: [
                              {
                                id: "row5col1div2",
                                
                                component: "div",
                                props: {
                                  key: "row5col1div2",
                                  className: "ant-card mb-24 ant-card-bordered",
                                },                                
                                children: [
                                 { 
                                  id: "row5col1div3",
                                  
                                  component: "div",
                                  props: {
                                    key: "row5col1div3",
                                    className: "ant-card-head",
                                  },
                                 
                                  children: [
                                    { 
                                      id: "row5col1div4",
                                      
                                      component: "div",
                                      props: {
                                        key: "row5col1div4",
                                        className: "ant-card-head-wrapper",
                                      },
                                     
                                      children: [
                                        { 
                                          id: "row5col1div5",
                                          
                                          component: "div",
                                          props: {
                                            key: "row5col1div5",
                                            className: "ant-card-head-title",
                                          },
                                          children: [
                                            { 
                                              id: "row5col1dive5h4",
                                              component: "h4",
                                              
                                              props: {
                                                key: "row5col1dive5h4",
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
                                   
                                   props: {
                                     key: "row5col1barchart",
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
           props: {
             key: "footer"
           },
           component: "footer",
         }
          ]
          }
        ] 
      }
  ]
}
  
export default overViewConfig;
