import data from "../../data.json";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import {EuiText,EuiPanel} from '@elastic/eui';
import {Modal, Button} from 'react-bootstrap';
import DashboardPost from "./DashboardPost";


function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function custom_sort(a, b) {
    return new Date(b["Breach Date"]) - new Date(a["Breach Date"]);
  }
let data_latest_10 = data.sort(custom_sort).slice(0,5)
let company_names = data_latest_10.map((item)=> item.Name);
let totalVarietiesOfCompromisedData = data_latest_10.map((item)=> item["Compromised Data"].length);
// console.log(company_names,totalVarietiesOfCompromisedData)

let result = [];
for(let i = 0; i < company_names.length; i++) {
  let obj = {};
  obj["Name"] = company_names[i];
  obj["VarietyCount"] = totalVarietiesOfCompromisedData[i];
  result.push(obj);
}
// console.log(result);


export default function BarChartComponent() {

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = result[activeIndex];

  const handleBarClick = (data, index) => {
    setActiveIndex(index);
    setShowModal(true);
    // alert(data)
  };

  return (
    // <div className="question" style={{width : "600px", height: "800px"}}>
      // <div className="question-container" style={{width : "50%", height: "75%"}} >
      <>
    <ResponsiveContainer  width={550} height= {450} >
        <BarChart
          width={120}
          height={100}
          data={result}
          barSize={40}
          
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
          <XAxis dataKey="Name"  style={{
        fontSize: '0.9rem',
        fontFamily: 'Times New Roman',
    }} />
          <YAxis />
          <Tooltip />
          <Legend  />
          <Bar dataKey="VarietyCount" fill="#12c3cc"  onClick={handleBarClick}/>
        </BarChart>
      </ResponsiveContainer>

<div
className="modal show"
style={{ display: 'block', position: 'initial'}}
>

<DashboardPost showModal={showModal} setShowModal={setShowModal} activeIndex={activeIndex} result ={result} parseISOString={parseISOString} data = {data}/>



</div>
     
     
      </>
  )
}
