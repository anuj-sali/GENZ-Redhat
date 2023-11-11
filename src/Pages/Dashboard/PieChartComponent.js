import data from "../../data.json";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell, Label, LabelList } from 'recharts';
import React,{ useState } from "react"
import {EuiText,EuiPanel} from '@elastic/eui';

import {Modal,Button} from 'react-bootstrap';
import DashboardPost from "./DashboardPost";
// import Modal from "./Modal";

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function custom_sort(a, b) {
  return new Date(b["Breach Date"]) - new Date(a["Breach Date"]);
}
let data_latest_10 = data.sort(custom_sort).slice(0,5)

let company_names = data_latest_10.map((item)=> item.Name);
let totalNumberOfCompromisedAccountsDesc = data_latest_10.map((item)=> item["Compromised Accounts"]);
// console.log(company_names, totalNumberOfCompromisedAccountsDesc)

let total_compromised_acc = 0;
for( var i = 0; i < totalNumberOfCompromisedAccountsDesc.length; i++ ){
  total_compromised_acc += parseInt( totalNumberOfCompromisedAccountsDesc[i], 10 ); //don't forget to add the base
}
// console.log(total_compromised_acc)

let result_k_v = [];

for(let i = 0; i < company_names.length; i++) {
  let obj = {};
  obj[company_names[i]] = totalNumberOfCompromisedAccountsDesc[i];
  result_k_v.push(obj);
}

// console.log(result_k_v);

let result = [];

for(let i = 0; i < company_names.length; i++) {
  let obj = {};
  obj["Name"] = company_names[i];
  obj["Acc"] = totalNumberOfCompromisedAccountsDesc[i];
  result.push(obj);
}
// console.log(result);

result.sort((a, b) => b.Acc - a.Acc);
// console.log("result after sorting: ",result);
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#e3270e"]

const renderCustomizedLabelPercentage = (data, total = total_compromised_acc) => {
  // console.log("Data", data);
  let percentageCalculated = (data.Acc / total) * 100;
  return percentageCalculated.toFixed(2).replace(".", ".").toString() + "%";
};

function PieChartComponent() {

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = result[activeIndex];

  const handlePieClick = (data, index) => {
    setActiveIndex(index);
    setShowModal(true);
    // alert(data)
  };
  return (
  <>
      {/* // <div className="question-container" style={{width : "100%", height: "50%"}} > */}
    <ResponsiveContainer  width={685} height= {400}  >
    <PieChart  >
      <Pie
        nameKey="Name"
        dataKey="Acc"
        isAnimationActive={false}
        data={result}
        cx={270}
        cy={200}
        outerRadius={173}
        fill="#f06c07"
        labelLine={true}
        label={({ name }) => name}
        onClick={handlePieClick}
        >
        <LabelList
          dy={-3}
          fill="white" 
          dataKey={renderCustomizedLabelPercentage}
          position="inside"
          angle="0"
          stroke="none" // Border of letters
          className="label-percentage"
        />
        
        {result.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}

        </Pie>
      <Tooltip />
    </PieChart>
   </ResponsiveContainer>
    {/* <p className="content">{`Uv of "${activeItem.Name}": ${activeItem.Acc}`}</p> */}
    
   {/* <Modal showModal={showModal} setShowModal={setShowModal} activeItem={activeItem} result ={result} parseISOString={parseISOString} /> */}
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
    <DashboardPost showModal={showModal} setShowModal={setShowModal} activeIndex={activeIndex} result ={result} parseISOString={parseISOString} data = {data}/>

      {/* <Modal
      show={showModal} 
      onHide={() => setShowModal(false)}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ padding: "20px" }}
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fs-1" style={{textAllign: "center"}} >
         {result[activeIndex]["Name"]}:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body">
      {data.map((item, index) => (
        <div key={index}>
          {item.Name === result[activeIndex]["Name"] ?
          (
            <EuiPanel className='eui-yScroll' style={{ maxHeight: '1000px'}} paddingSize={'s'}>
         <EuiText>
            <dl className="eui-definitionListReverse">
                <dt> <h4>Title</h4></dt>
                <dd>{item.Name}</dd>
                <dt><h4>Description</h4></dt>
                <dd>{item.Description}</dd>
                <dt><h4>Breach Date</h4></dt>
                <dd>{item["Breach Date"]}</dd>
                <dt><h4>Published date to HIBP</h4></dt>
                <dd>{parseISOString(item["Added Date To HIBP"]).toString().slice(0,24) + " IST"}</dd>
                <dt><h4>Compromised Accounts</h4></dt>
                <dd>{item["Compromised Accounts"]}</dd>
                <dt><h4>Compromised Data</h4></dt> */}
                {/* <dd>{this.state.selectedData["Compromised Data"]}</dd> */}
                {/* <dd>{Object.values(item["Compromised Data"]).map((a) => <li>{a}</li>)}</dd> */}
                {/* <dt><h4>Reference Links</h4></dt>
                <dd>{Object.values(item["HyperLinks"]).map((hurl) => <li key={hurl}>{<a href={hurl}>{hurl}</a>}</li>)}</dd> */}
                {/* <dd>{Object.values(this.state.selectedData["HyperLinks"]).map((b) => <li>{b}</li>)}</dd> */}
{/*                 
            </dl>
         </EuiText>
            </EuiPanel>
         )
        : 
        null
        }
        </div>
      ))}
       </div>
      </Modal.Body> */}
      {/* <Modal.Body>
        <div className="body">
      {data.map((item, index) => (
        <div key={index}>
          {item.Name === result[activeIndex]["Name"] ? (
            <>
          <h2 className="fs-2">{item.Name}</h2>
          <h1 className="fs-2">Description:</h1>
          <p> {item.Description}</p>
          <p>Breach Date: <br/> {item["Breach Date"]}</p> 
          </>)
        : 
        null}
        </div>
      ))}
       </div>
      </Modal.Body> */}
      {/* <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer> */}
    {/* </Modal> */}

    </div>
  
  </>
  
  );

 
  }


export default PieChartComponent;
