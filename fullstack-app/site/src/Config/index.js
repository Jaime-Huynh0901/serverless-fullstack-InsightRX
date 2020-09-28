import React from "react";
import { Link } from 'react-router-dom';

import SelectDropdown from '../components/Dropdown'
import Table from '../components/Table';
import DateSelector from '../components/DateSelector';
import Barchart from '../components/Charts/Barchart';
import Linechart from '../components/Charts/Linechart';
import CsvDownload from 'react-json-to-csv'; // download json table into a csv report 
import Count from '../components/Count';
import RefreshButton from "../components/RefreshButton";
import { Layout, Breadcrumb, Row, Col, Button } from 'antd';
import Footer from '../components/Footer';


// Map all components that are created in this object
const KeysToComponentMap = {
    refreshbutton: RefreshButton,
    layout: Layout,
    breadcrumb: Breadcrumb,
    breadcrumbItem: Breadcrumb.Item,
    link: Link,
    button: Button,
    footer: Footer,
    row: Row,
    col: Col,
    selectdropdown: SelectDropdown,
    count: Count,
    reactfragment: React.Fragment,
    dateselector: DateSelector,
    csvdownload: CsvDownload,
    table: Table,
    barchart: Barchart,
    linechart: Linechart,
    div: "div",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    span: "span",
    i: "i",
    svg: "svg",
    path: "path"
   };

// Implement graph to structure the elements
const jsonToGraph = obj => {
    const graph = {};
    const traverse = node => {
   
        if (!graph[node.id]){
            graph[node.id] = []
        }

        if (node.children){
            node.children.forEach(child => {
                // recursion
                traverse(child); 
                // push component metadata into graph
                const { children, ...rest } = child;
                graph[node.id].push(rest)
            })
        }
    }
    traverse(obj);
    return graph
};

const graphToComponents = (graph, extraProps) => {
  const traverse = (node /* parent Node */) => {

      // Base case: If the current node has no children, we have reached a leaf node so make React component and return
      if (graph[node.id].length === 0){
          return makeReactComponent(node, extraProps)
      }

      const children = graph[node.id];
      let childComponents = [];

      children.forEach((child, index) => {

          const reactComponent = traverse(child);

          // all components in the same 'level' of the tree are concatenated into an array to be passed as children to its parent below
          childComponents = [...childComponents, reactComponent]
      });

      // the 'node' object is the parent component
      // make the childComponents children of the parent component
      // and return the parent component (with the child components as node's children)

      // child components should set as children of 'node'
      if (node.id !== 'root'){

          const component = makeReactComponent(node, extraProps);

          return React.cloneElement(component, {
              key: node.id,
              children: childComponents
          })
      } else {
          return childComponents
      }
  }

  return graph.root.map(node => {
      return traverse(node);
  });
};

const makeReactComponent = (node, extraProps) => {
  const component = KeysToComponentMap[node.component];
  let componentProps = node.props;
  let componentChildren = node.text;
  
  if (typeof component !== "undefined") {
    if (node.needsVariable){
        componentProps = bindToPassedProps(node.variables, node.props, extraProps )
    } 
    return React.createElement(component, componentProps, componentChildren);
    }
}


const bindToPassedProps = (nodeVariables, nodeProps, extraProps) => {
    for (const [key, value] of Object.entries(nodeVariables)) {
        if (extraProps.hasOwnProperty(value)){
            nodeProps[key] = extraProps[value]
        }else {
            console.log("no variables set");
        }
    }
    return nodeProps;
}


const RenderPage = (obj, extraProps) => {
  const graph = jsonToGraph(obj);
  return graphToComponents(graph, extraProps);
};

export default RenderPage;