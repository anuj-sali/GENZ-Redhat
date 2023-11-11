import React from 'react';
import {
    EuiPageHeader, EuiButton,
    EuiFlexGroup, EuiFlexItem,
    EuiPanel, EuiSpacer,
    EuiText,
    EuiCard, EuiIcon, EuiImage
} from '@elastic/eui';
import moment from 'moment';
import data1 from "../../data.json"
import Client from "@searchkit/instantsearch-client";
import Searchkit from "searchkit";
import {RangeInput,RefinementList,InfiniteHits,InstantSearch, Hits, connectSearchBox, Highlight, connectRefinementList} from "react-instantsearch-dom";
import CardGrid from './CardGrid';

const SearchBox = ({currentRefinement, refine}) => (
    <input
    placeholder='Search here...'
    autoFocus
    style={{width:"400px",height:"40px",alignItems: "center",padding: "12px",backgroundColor:"#fbfcfd",borderRadius:"6px 6px 6px 6px",borderBlockWidth:"0.5px",borderColor:"#ab9b9b3d"}}
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
    // onClick={this.setSearch({search : false}) }
  />
  );
const CustomSearchBox = connectSearchBox(SearchBox);
  
const sk = new Searchkit({
    connection: {
      host: "https://localhost:9200",
      auth: {
        username: 'elastic',
        password: 'Gpu0lBQcCc0JItECSyx*'
      }
    },
    search_settings: {
      highlight_attributes: ["Description"],
      snippet_attributes: ["Description"],
      search_attributes: [ 'Name', 'Title'],
      result_attributes: ['Name', 'Title', 'Domain','Description','Breach Date', 'Added Date To HIBP','Compromised Accounts', 'Compromised Data','HyperLinks','LogoPath'],
      facet_attributes: [{
        field: "Name.keyword",
        type: "string",
        attribute: "Name"
      },{
        field: "Compromised Data.keyword",
        type: "string",
        attribute: "Compromised Data"
      }
    ]
    }
  })
const searchClient = Client(sk);

const startDate = moment();
const endDate = moment().add(11, 'd');
const data = data1.sort(custom_sort)

function custom_sort(a, b) {
    return new Date(b["Breach Date"]) - new Date(a["Breach Date"]); 

  }

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
let search;

const hitView = ({ hit }) => {
    console.log("HITS:",JSON.stringify(hit))
    console.log("Compromised DATA",JSON.stringify(hit["Compromised Data"]))
    return (
        <EuiCard key={hit}
        layout="horizontal"
        title={hit.Title}
        icon={<EuiIcon size="l" type={'sqlApp'} />}
        description={ "DESCRIPTION: "+ hit["Description"].slice(0,200) + "... |"+" Breach Date: ".toUpperCase()+hit["Breach Date"]+" | Compromised Data: ".toUpperCase()+hit["Compromised Data"]+" | Compromised Accounts: ".toUpperCase()+hit["Compromised Accounts"]}
        titleSize={'xs'}
        style={{marginBottom:'5px'}}
    />
    )
     }
     
class LatestBreaches extends React.Component {

    constructor() {
        super()
        // this.state = { show: false, selected: 0, selectedData: data[0] }
        
        this.state = { selected: 0, selectedData: data[0], search : false }
    }

    // setSearch = () => {
    //     this.setState( {search : false})
    // }


    // showModal = () => {
    //     this.setState({ show: true })
    // }

    // hideModal = () => {
    //     this.setState({ show: false })
    // }


    render() {
        return (
            <>
            <EuiSpacer size='s'></EuiSpacer>
            {this.state.search ? 
            <InstantSearch indexName="apt_data" searchClient={searchClient} >
                <div className="mx-4 mt-3">
                <EuiPageHeader
                    pageTitle={<span className="fs-1" style={{"marginRight": "20px"}} >Breach Database:</span>}
                    iconType="reportingApp"
                    rightSideItems={[
                        <CustomSearchBox />
                        // <button type="button" className="btn btn-secondary">Refresh</button>
                        // <EuiButton className="btn btn-secondary me-md-5" iconType={'refresh'} size='s' >Refresh</EuiButton>,x``
                    ]}
                    alignItems={'center'}
                />
                </div>
                <EuiSpacer size='s'></EuiSpacer>
                <EuiFlexGroup>
                    <EuiFlexItem grow={7}>
                        <EuiPanel className='eui-yScroll' style={{ maxHeight: '1000px'}} paddingSize={'m'}>
                            {data.map((item, index) => {
                                return (index === this.state.selected ?
                                    <div className="">
                                    <EuiCard key={index}
                                        layout="horizontal"
                                        title={item.Name + " - "+item["Compromised Accounts"] + " Accounts Compromised!!!"}
                                        icon={<EuiIcon size="l" type={'sqlApp'} />}
                                        style={{ marginBottom: '1px',height:'50px' }}
                                        titleSize={'xs'}
                                        display={index === this.state.selected ? 'success' : undefined}
                                        
                                    /> 
                                    </div>
                                    : 
                                    <EuiCard key={index}
                                        layout="horizontal"
                                        title={item.Name + " - "+item["Compromised Accounts"] + " Accounts Compromised!!!"}
                                        icon={<EuiIcon size="l" type={'sqlApp'} />}
                                        style={{ marginBottom: '1px',height:'50px' }}
                                        onClick={() => { this.setState({ selected: index, selectedData: item }) }}
                                        titleSize={'xs'}
                                    />)
                            })}
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem grow={5}>
                        <EuiPanel  className='eui-yScroll' paddingSize='l' style={{ maxHeight: '500px', position: "fixed"}}>
                            <EuiText>
                                <dl className="eui-definitionListReverse">
                                    <dt> <h4>Title</h4></dt>
                                    <dd>{this.state.selectedData.Name}</dd>
                                    <dt><h4>Description</h4></dt>
                                    <dd>{this.state.selectedData.Description.slice(0,200) + "..." }</dd>
                                    <dt><h4>Breach Date</h4></dt>
                                    <dd>{this.state.selectedData["Breach Date"]}</dd>
                                    <dt><h4>Published date to HIBP</h4></dt>
                                    <dd>{parseISOString(this.state.selectedData["Added Date To HIBP"]).toString().slice(0,24) + " IST"}</dd>
                                    <dt><h4>Compromised Accounts</h4></dt>
                                    <dd>{this.state.selectedData["Compromised Accounts"]}</dd>
                                    <dt><h4>Compromised Data</h4></dt>
                                    {/* <dd>{this.state.selectedData["Compromised Data"]}</dd> */}
                                    <dd>{Object.values(this.state.selectedData["Compromised Data"]).map((a) => <li>{a}</li>)}</dd>
                                    <dt><h4>Reference Links</h4></dt>
                                    <dd>{Object.values(this.state.selectedData["HyperLinks"]).map((hurl) => <li key={hurl}>{<a href={hurl}>{hurl}</a>}</li>)}</dd>
                                    {/* <dd>{Object.values(this.state.selectedData["HyperLinks"]).map((b) => <li>{b}</li>)}</dd> */}
                                    
                                </dl>
                            </EuiText>
                            <EuiSpacer size={'l'}></EuiSpacer>
                            <EuiButton color='primary' fill size={'s'} onClick={this.showModal}>View Details</EuiButton>
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGroup>
                {/* {this.state.selectedData ? <PdfModal url={this.state.selectedData.FileUrl} mShow={this.state.show} closeModal={this.hideModal} /> : ''} */}
            </InstantSearch>
            :
            <InstantSearch indexName="apt_data" searchClient={searchClient} >
            <div className="mx-4 mt-3">
            <EuiPageHeader
                pageTitle={<span className="fs-1" style={{"marginRight": "20px"}} >Breach Database:</span>}
                iconType="reportingApp"
                rightSideItems={[
                    <CustomSearchBox />
                    // <button type="button" className="btn btn-secondary">Refresh</button>
                    // <EuiButton className="btn btn-secondary me-md-5" iconType={'refresh'} size='s' >Refresh</EuiButton>,x``
                ]}
                alignItems={'center'}
            />
            </div>
            </InstantSearch> }


            
            </>

            // <>
            // <InstantSearch indexName="apt_data" searchClient={searchClient} >
            // <div className="mx-4 mt-3">
            //      <EuiPageHeader
            //          pageTitle={<span className="fs-1" style={{"marginRight": "20px"}} >Breach Database:</span>}
            //          iconType="reportingApp"
            //          rightSideItems={[
            //              <CustomSearchBox />
            //              // <button type="button" className="btn btn-secondary">Refresh</button>
            //              // <EuiButton className="btn btn-secondary me-md-5" iconType={'refresh'} size='s' >Refresh</EuiButton>,x``
            //          ]}
            //          alignItems={'center'}
            //   />
            //     </div>
            // <EuiSpacer size='s'></EuiSpacer>
            // <EuiFlexGroup>
            // <Hits hitComponent={hitView}/>
            // </EuiFlexGroup> 
            // </InstantSearch>
            // </>


        );
    }

}

export default LatestBreaches;