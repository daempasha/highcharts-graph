import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import Sidebar from './components/Sidebar/sidebar.component.jsx';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import {Row, Col} from 'antd';
import 'highcharts/css/stocktools/gui.css';
import 'highcharts/css/annotations/popup.css';

Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

function App() {
  const [state, setState] = useState({
    generateGraph: false
  })
  const [options, setOptions] = useState({
    title: {
    },
    contextButton: {
      align: 'right',
      verticalAlign: 'top',
    },
    yAxis: {
      min: 0,
      align: 'left',
      title: '',
      opposite: false,
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal'
    },
    credits: {  
      enabled: false,
    },
    xAxis: {
      type: "datetime",
    },
    rangeSelector: {
      enabled: false
    },
    series: [{
      data: [{
        x: 1599863835000,
        y: 40
      },
      {
        x: 1599863836000,
        y: 15
      },
      {
        x: 1599863846000,
        y: 16
      }
    ]
    }],
    tooltip: {
      backgroundColor: "white",
      borderWidth: 0,
      borderRadius: 0,
      headerFormat: "{point.key} ",
      pointFormat:
        ' | <span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
      positioner: function () {
        return {
          x: this.chart.plotLeft,
          y: this.chart.plotTop,
        };
      },
      shadow: false,
      shared: true,
      split: false,
    },
  });

  return (
      <SplitterLayout percentage={true} secondaryMinSize={75}>
        <Sidebar />
        <div style={{ backgroundColor: "grey", minHeight: '100vh'}}>
          <Row gutter={[12, 12]}>
            <Col>
              <button onClick={() => setState({generateGraph: !state.generateGraph})}>Generate graphs</button>
            </Col>
            { state.generateGraph &&
              <>
                <Col span={24}>
                  <HighchartsReact 
                    highcharts={Highcharts}  
                    constructorType={"stockChart"}
                    options={options} 
                  />
                </Col>
                <Col span={24}>
                  <HighchartsReact 
                    highcharts={Highcharts}  
                    constructorType={"stockChart"}
                    options={options} 
                  />
                </Col>
                <Col span={24}>
                  <HighchartsReact 
                    highcharts={Highcharts}  
                    constructorType={"stockChart"}
                    options={options} 
                  />
                </Col>
              </>
            }
          </Row>
        </div>
      </SplitterLayout>
  );
}

export default App;
