import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "../../data.json";
import { useState } from 'react';
import {EuiText,EuiPanel} from '@elastic/eui';
import {Modal} from 'react-bootstrap';
// import "./LineChartComponent.css"

const _ = require("lodash");
const grouped = _.groupBy(data, z => z["Breach Date"].slice(0,4,-3))
// console.log("grouped:",grouped)

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

let countOfBreaches = Object.keys(grouped).map((date,index) => grouped[date].length);
let dateArrayList = Object.keys(grouped).map((date) => date);

let company_names_per_year = [];
let years = Object.keys(grouped)

for (let year in grouped){
  // console.log(year)
  let temp = []
  for (let item of grouped[year]) {
      // console.log(item["Name"])
      temp.push(item["Name"])
  }
  company_names_per_year.push(temp)
}

const callout_for_linechart = {};
for (let i = 0; i < countOfBreaches.length && i < company_names_per_year.length; i++) {
  callout_for_linechart[countOfBreaches[i]] = company_names_per_year[i]; // Add a key-value pair to the object for each element in the arrays
  // console.log(countOfBreaches[i], company_names_per_year[i] )
}

// console.log("callout_for_linechart",callout_for_linechart)
// console.log("company_names_per_year",company_names_per_year)
// console.log("countOfBreaches:",countOfBreaches)
// console.log("dateArrayList:",dateArrayList)


let result = [];
for(let i = 0; i < dateArrayList.length; i++) {
  let obj = {};
  obj["Date"] = dateArrayList[i];
  obj["BreachCount"] = countOfBreaches[i];
  result.push(obj);
}
// console.log(result);

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x-10} y={y} dy={-4} fill={stroke} fontSize={15} textAnchor="middle">
        {value}
      </text>
    );
  }
}
  
export default function LineChartComponent() {

  const [showModal, setShowModal] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [date, setDate] = useState(null)
  

  const handleLineClick = (data, index) => {
    setActiveItem(index["payload"]["BreachCount"]);
    setDate(index["payload"]["Date"]);
    setShowModal(true);
    console.log("linechart data",index["payload"])
  };
  return (
    // <div className="question" style={{width : "600px", height: "800px"}} >
      // <div className="question-container" style={{width : "150%", height: "80%"}} >
      <>
    <ResponsiveContainer  width={600} height= {530} >
    <LineChart
      width={300}
      height={150}
      data={result}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="BreachCount" stroke="#0a0af2" activeDot={{ r: 8 , onClick: handleLineClick}} label={<CustomizedLabel  />}/>
    </LineChart>
  </ResponsiveContainer>

  <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ padding: "20px" }}
        >

          <Modal.Header closeButton
          style={{ padding: "10px" }}
          >
            <Modal.Title id="contained-modal-title-vcenter" className="fs-3" style={{ textAllign: "center" }} >
              Breached Companies At {date} Year:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
          style={{ padding: "5px" }}
          >
            <div className="body">
              {Object.keys(callout_for_linechart).map((index) => (
                <div key={index}>
                  {/* {console.log(index,callout_for_linechart_2[index])}
      {console.log( activeItem) } */}
                  {index === activeItem.toString() ?
                    (

                      <EuiPanel className='eui-yScroll' style={{ maxHeight: '1000px' }} paddingSize={'s'}>
                        <EuiText>
                          <dl className="eui-definitionListReverse">
                            {/* <dt> <h4>Title</h4></dt> */}

                          
                              {/* <h3>Company Names:</h3> */}
                              {/* <ul>
                                {callout_for_linechart_2[index].map((item) => (
                                  data.map((dict_) => (dict_["Name"] === item) ? (
                                    <>
                                    <li key={item.id}>
                                      <div className="column-1">{item} </div>
                                      <div className="column-2">{dict_["Compromised Accounts"]}</div>
                                    </li>
                                    </>
                                  ) : null )))}

                              </ul> */}


                              <table className='table table-bordered table-hover'
                              style={{marginTop: "5px"}}
                              >
                                <thead>
                                          <tr className="table-info"> 
                                            <th scope="col">Company Name</th>
                                           
                                          </tr>
                                </thead>

                                {callout_for_linechart[index].map((item) => {
                                  const dict_ = data.find((obj) => obj.Name === item);
                                  if (dict_) {
                                    return (
                                      <>
                                      {/* <li className="list-group-item" key={item}>
                                        <span className='column1'>{item}</span>
                                      </li>
                                      <li>
                                        <span className='column2'>{dict_["Compromised Accounts"]}
                                        </span></li> */}

                                      
                                        
                                        <tbody className="table-light">
                                          <tr >
                                            {/* <th scope="row">*</th> */}
                                            
                                            <td >{item}</td>
                                           
              
                                          </tr>
                                        </tbody>
                                      
                                      </>
                                    );
                                  } else {
                                    return null;
                                  }
                                })}
                              </table>
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
          </Modal.Body>
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
        </Modal>
      </div>

</>
 
  )
}
