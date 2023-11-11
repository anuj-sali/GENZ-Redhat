import React, {useState} from 'react'
import "./FreeTextSearch.css"
import {
    EuiPageHeader, EuiButton,
    EuiFlexGroup, EuiFlexItem,
    EuiPanel, EuiSpacer,
    EuiFieldText, EuiDatePicker,
    EuiFormRow, EuiDatePickerRange,
    EuiCard, EuiIcon
} from '@elastic/eui';
import moment from 'moment';
import Client from "@searchkit/instantsearch-client";
import Searchkit from "searchkit";
import {RangeInput,RefinementList,InfiniteHits,InstantSearch, Hits, connectSearchBox, Highlight, connectRefinementList} from "react-instantsearch-dom";

const SearchBox = ({currentRefinement, refine}) => (
    <input
    placeholder='Search here...'
    autoFocus
    style={{width:"400px",height:"40px",alignItems: "center",padding: "12px",backgroundColor:"#fbfcfd",borderRadius:"6px 6px 6px 6px",borderBlockWidth:"0.5px",borderColor:"#ab9b9b3d"}}
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
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
      search_attributes: [ 'Name', 'Title','Description'],
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
  
const hitView = ({ hit }) => {
    console.log(JSON.stringify(hit["Compromised Data"]))
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

export default function FreeTextSearch() {

const [reset, setReset] = useState(false);
const startDate = moment();
const endDate = moment().add(11, 'd');
const [value, setValue] = useState('');
const onChange = (e) => {
        setValue(e.target.value);
    };

const [search, setSearch] = useState(false);
const onSearch = () => {
        setSearch(true);
};

const onReset= () => {
    setReset(true);
    setSearch(false);
};

  return (
    <>
   
    <InstantSearch indexName="apt_data" searchClient={searchClient} >
    <div className="mx-4 mt-3">
        <EuiPageHeader
            pageTitle={<span className="fs-1" style={{"marginRight": "20px"}} >Advanced Search:</span>}
            iconType="searchProfilerApp"
            rightSideItems={[
                // <button type="button" className="btn btn-secondary btn-m">Reset</button>,
            ]}
            alignItems={'center'}
        />
        </div>
        <EuiSpacer size='s'></EuiSpacer>
       
        <EuiFlexGroup>
            <EuiFlexItem grow={4}>
                <EuiPanel>       
                    <EuiFormRow label="Free Text Search" helpText="Search in all available columns">
                    <CustomSearchBox />
                    {/* <EuiFieldText  value={value}  onChange={onChange}/> */}
                    </EuiFormRow>

                    <EuiFormRow label="Compromised Company Name">
                    <RefinementList attribute="Name" searchable={true} limit={5} showMore/> 
                        {/* <EuiFieldText prepend={"Contains"}  />  */}
                    </EuiFormRow>
                    <EuiFormRow label="Compromised Data">
                    <RefinementList attribute="Compromised Data" limit={5} showMore/> 
                        {/* <EuiFieldText prepend={"Comma Separated"} /> */}
                    </EuiFormRow>
                    {/* <EuiFormRow label="Malwares">
                        <EuiFieldText prepend={"Comma Separated"} />
                    </EuiFormRow> */}
                    {/* <div className="mt-1" >
                        <h5>Filter By Breach Date:</h5>
                        <RangeInput
                        attribute="Breach Date"
                        />

                    </div> */}

                    {/* <div className='row mt-2'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <EuiButton color='primary' size={'s'} onClick={onSearch} >Search</EuiButton>
                        </div>
                        <div className='col-md-4'>
                            <EuiButton color={'danger'} size={'s'} onClick={onReset} >Reset</EuiButton>
                        </div>
                    </div> */}
                   
                </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem grow={8}>
                <EuiPanel className='eui-yScroll' style={{maxHeight:'600px'}}>
                <Hits hitComponent={hitView}/>
                    {/* {search? searchResult : <EuiCard
                        icon={<EuiIcon size="xxl" type="searchProfilerApp" />}
                        title="Search Contents"
                        description="All given fields are not required for searching. You can search with one or more fields."
                    />} */}
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
    </InstantSearch>
   
  
                    
</>
  )
}
