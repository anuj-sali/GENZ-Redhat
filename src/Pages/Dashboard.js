import React, { Component } from 'react'
// import {Chart} from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import 'chart.js-plugin-labels-dv';

import {
  EuiPageHeader,
  EuiFlexGroup, EuiFlexItem,
  EuiPanel, EuiSpacer,
  EuiStat
} from '@elastic/eui';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
} from "chart.js";
import { Bar, Line , Pie} from 'react-chartjs-2';
import ReactWordcloud from 'react-wordcloud';
import data1 from "../data.json"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
  );
// Register the plugin to all charts:
// Chart.register(ChartDataLabels);

function custom_sort(a, b) {
  return new Date(b["Breach Date"]) - new Date(a["Breach Date"]); 
}
const data2 = data1.sort(custom_sort).slice(0,10)

// function custom_sort_by_comp_acc(a,b){
//   return b["Compromised Accounts"] - a["Compromised Accounts"]; 
// }

console.log("Outside everything")
const wordData1 = []

var countOfBreaches = []
const _ = require("lodash");
const grouped = _.groupBy(data1, z => z["Breach Date"].slice(0,4,-3))
console.log(grouped)
var arrayList = []
var dateArrayList = []

var labels1=[]
const totalNumberOfCompromisedAccountsDesc=[]
var date = []
var totalVarietiesOfCompromisedData = []


const state1 = { 
  labels: labels1,
  datasets: [
    {
      label: "Compromised Accounts",
      backgroundColor: ["Tomato","Orange","DodgerBlue","Red","Violet","Pink","BlueViolet","LawnGreen","Magenta","SlateBlue","Purple"],
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 2,
      data: totalNumberOfCompromisedAccountsDesc
    }
  ]
}

const state2 = {
  labels: labels1,
  datasets: [
    {
      label: "Variety of Compromised Data",
      backgroundColor: '#00bfb3',
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 1,
      data: totalVarietiesOfCompromisedData
    }
  ]
}

const state3 = {
  labels: dateArrayList,
  datasets: [
    {
      label: "Count",
      backgroundColor: '#00bfb3',
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 1,
      data: countOfBreaches
    }
  ]
}

const state4 = {
  labels: dateArrayList,
  datasets: [
    {
      label: "Total Compromised Accounts",
      backgroundColor: '#0077cc',
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 1,
      data: arrayList
    }
  ]
}

const options1 = {
  
  hoverOffset: 5,
  responsive: true,
  radius:170,
  plugins: {
    legend: {
      display: false,

    },
    title: {
      display: true,
      text: 'Breach Statistics:',
      color: 'black',
      align: 'center',
      font: {
         size: '20'
      }
    },
    datalabels:{
      color: 'black'
    }
  }
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Compromised Data Count:',
      color: 'black',
      position: "top",
      align: 'center',
      font: {
         size: '17'
      }
    },
  },
  scales: {
    x: {
      stacked : true,
      display: true,
      title: {
        display: true,
        text: "Company Names --->"
      },
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 45,
        minRotation: 45
      }
    },
    y: {
      stacked:true,
      grace: 2,
      display: true,
      title: {
        display: true,
        text: "Variaties of Compromised Data ---> "
      },
      grid: {
        display: false
      }
    }
  }
};

const options3 = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Compromised Companies - Yearwise Statistics:',
      color: 'black',
      position: "top",
      align: 'center',
      font: {
         size: '17'
      }
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Date --->"
      },
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Count Of Breaches --->"
      },
      grid: {
        display: false
      }
    }
  }
};

const options4 = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Compromised Accounts - Yearwise Statistics:',
      color: 'black',
      position: "top",
      align: 'center',
      font: {
         size: '17'
      }
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Year--->"
      },
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Total Number Of Compromised Accounts--->"
      },
      grid: {
        display: false
      }
    }
  }
};



let temp = [];
export default class Dashboard extends Component {
//   constructor() {
//     super()
//     // this.state = { show: false, selected: 0, selectedData: data[0] }
    
// }


  render() {
    {data2.map((item, index) => {
      return(
          labels1.push(item.Name),
          totalNumberOfCompromisedAccountsDesc.push(item['Compromised Accounts']),
          date.push(item['Breach Date']),
          totalVarietiesOfCompromisedData.push(item['Compromised Data'].length)
          
          
      ) })}
        console.log("inside render")
      // console.log("data",data2)
      // console.log("labels",labels1)


      {data1.map((item, index) => {
       
            let num = {"text":item.Name,"value":item['Compromised Accounts']
          }
          wordData1.push(num)
         })}

         {Object.keys(grouped).map((date,i) => {
          let temp =0;
            return (
              // console.log(date),
              countOfBreaches.push(grouped[date].length),
              dateArrayList.push(date),
              grouped[date].map((dict_,index) => {
                temp+=dict_["Compromised Accounts"]
                // console.log(temp)
              }),
              arrayList.push(temp))
            
    })}
    
    return (
    
      <>
        {console.log("inside return ")}
        {console.log("data1:", totalNumberOfCompromisedAccountsDesc.sort(function(a, b){return a-b}))}
      <div className="mx-2 mt-2">
        <EuiPageHeader
          pageTitle="Dashboard"
          iconType="dashboardApp"
          rightSideItems={[
            <button type="button" className="btn btn-secondary">Refresh</button>,
          ]}
          alignItems={'center'}
        />
      </div>
        <EuiSpacer size='s'></EuiSpacer>
      
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              <EuiStat title={Object.keys(data1).length} titleColor='success' description="Compromised Organizations Count:" textAlign="center"/>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel>
              <div >
              <EuiStat title="1" titleColor='success' description="Data Sources Count" textAlign="center" />
              </div>
            </EuiPanel>
          </EuiFlexItem>
           <EuiFlexItem>
            <EuiPanel>
              <EuiStat title="HIBP" titleColor='success' description="Data Source Name" textAlign='center'/>
            </EuiPanel>
          </EuiFlexItem>
          {/* <EuiFlexItem>
            <EuiPanel>
            
            <EuiStat title="100" titleColor='accent' description="Total View" />
           
            </EuiPanel>
          </EuiFlexItem>  */}
        </EuiFlexGroup>

        <EuiSpacer size='s'></EuiSpacer>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel  paddingSize='s'>
            <div style={{ height: "60vh", position: "relative", marginBottom: "1%", marginLeft: "20%" }}>
            <Pie redraw={true} data={state1} options={options1} />
            </div>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel  paddingSize='s'>
            <div style={{  marginTop: "5%" }}>
              <Bar redraw={true} data={state2} options={options2} />
            </div>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size='s'></EuiSpacer>

        
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel paddingSize='s'>
            <div style={{  marginTop: "3%" }}>
              <Line redraw={true} data={state3} options={options3} />
              </div>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel  paddingSize='s'>
            <div style={{  marginTop: "3%" }}>
              <Line redraw={true} data={state4} options={options4} />
              </div>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size='s'></EuiSpacer>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              <div style={{fontWeight:"bold",textAlign:"center"}}>Word Cloud - Biggest Data Breaches</div>
              <div>
                    <ReactWordcloud words={wordData1} />      
              </div>
              
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}