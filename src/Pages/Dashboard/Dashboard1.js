import React from 'react'
import {
  EuiResizableContainer,
  EuiTitle,
  EuiPageHeader,
  EuiFlexGroup, EuiFlexItem,
  EuiPanel, EuiSpacer,
  EuiStat
} from '@elastic/eui';

import data from "../../data.json"
import BarChartComponent from "./BarChartComponent";
import LineChartComponent2 from "./LineChartComponent2";
import LineChartComponent from "./LineChartComponent";
import Pie from "./PieChartComponent"

export default function Dashboard1() {


  React.useEffect(()=>{
    // enable overflow scroll bar
    document.body.style.overflow='visible'

  },[])


  return (
    <>
    <EuiPanel color="black" style={{width:"1350px"}}>
    <div className="mx-2 mt-2">
        <EuiPageHeader
          pageTitle="Dashboard"
          iconType="dashboardApp"
          rightSideItems={[
            // <button type="button" className="btn btn-secondary">Refresh</button>,
          ]}
          alignItems={'center'}
        />
    </div>

    <EuiSpacer size='s'></EuiSpacer>

    <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              <EuiStat title={data.length} titleColor='success' description="Compromised Organizations Count:" textAlign="center"/>
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
     <EuiPanel  paddingSize='m' grow={false} style={{height: "510px", width:"632px"}}>
          <EuiFlexItem > 
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Breach Statistics:</div>
            <Pie/>
          </EuiFlexItem>
     </EuiPanel>
     <EuiPanel  paddingSize='m' grow={true} style={{height: "510px"}}>
          <EuiFlexItem >
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Compromised Data Count:</div>
            <BarChartComponent/> 
          </EuiFlexItem>
          </EuiPanel>
      
     </EuiFlexGroup>

      <EuiSpacer size='s'></EuiSpacer>  
       
      <EuiFlexGroup>
     <EuiPanel  paddingSize='m' grow={false} style={{height: "600px", width:"650px"}}>
          <EuiFlexItem > 
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Breach Count Statistics:</div>
            <LineChartComponent/>
          </EuiFlexItem>
     </EuiPanel>
     <EuiPanel  paddingSize='m' grow={true} style={{height: "600px"}}>
          <EuiFlexItem >
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Compromised Data Count:</div>
            <LineChartComponent2/> 
          </EuiFlexItem>
          </EuiPanel>
      
      </EuiFlexGroup>



     {/* <div class="row" style={{maxHeight: "40%"}}>
          <EuiFlexItem >
            <EuiPanel  paddingSize='m' >
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Compromised Companies - Yearwise Statistics:</div>
            <LineChartComponent/>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel  paddingSize='s'>
            <div class="fs-2 fw-medium" style={{textAlign : "center"}} >Compromised Accounts - Yearwise Statistics:</div>
            <LineChartComponent2/>
            </EuiPanel>
          </EuiFlexItem>
    </div> */}
  

  {/* <EuiFlexGroup>
  <EuiPanel grow={false} style={{height: "450px"}}>
    <EuiFlexItem> 
      <Pie/>
    </EuiFlexItem>
    </EuiPanel>
    <EuiPanel grow={false} style={{height: "450px"}}>
    <EuiFlexItem>
   
      <BarChartComponent/>
  
    </EuiFlexItem>
    </EuiPanel>
  </EuiFlexGroup> */}
    

    



 
    </EuiPanel>
  
    </>
  )
}
