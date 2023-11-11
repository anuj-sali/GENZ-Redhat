import React from 'react'
import {
    EuiPageHeader,
    EuiHeaderLogo,
    EuiHeaderSectionItem,
    EuiPageHeaderSection,
    EuiTitle,
    EuiButton,
    EuiFieldSearch,
    EuiFieldText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiFormRow,
    EuiPanel,
    EuiSpacer,
    EuiText,
    EuiCard,
    EuiIcon,
    EuiImage,
    EuiSwitch,
    EuiButtonIcon,
  } from "@elastic/eui";
import axios from "axios";
import PostsComponent from "./PostsComponent1";


function Intel471Page() {
    let searchTerm = "";
    let searchOffset = 0;
    const defaultResponse = {
        hits: {
          hits: [],
    
          total: {
            value: 1,
          },
        },
      };      
    const [isClearable, setIsClearable] = React.useState(false);
    const [responseData, setResponseData] = React.useState(defaultResponse);
    const [freeSearchInput, setFreeSearchInput] = React.useState("");
    React.useEffect(() => {
        // to diable overflow scrolling //
    
        document.body.style.overflow = "hidden";
    
        console.log("Hi");
    
        axios
    
          .get(
            "http://localhost:3000/api/v1/breach-analysis/intel471/all-sorted-by-breach-date"
          )
    
          .then((response) => {
            console.log(response.data)
            setResponseData(response.data.body);  // .body in 7.17 not in 8.X
          });
      }, [isClearable]);
      const baseURL = "http://localhost:3000/api/v1/breach-analysis";

      
      const handleFreeSearchChange = (e) => {
        setFreeSearchInput(e.target.value);
        searchTerm = e.target.value;
        setIsClearable(true);
        freeSearch(searchTerm);
      };
      function freeSearch(searchTerm) {
        console.log("Free Search  func called");
    
        console.log(searchTerm);
    
        if (searchTerm.length === 0) {
          setIsClearable(false);
          return;
        }
    
        axios
    
          .get(`${baseURL}/intel471/breach-page/free-search`, {
            params: { term: searchTerm, offset: searchOffset },
          })
    
          .then((response) => {
            // console.log(response.data.hits.hits);
            // var ws = XLSX.utils.json_to_sheet(response.data);
            // let tempJ = response.data.body.hits.hits
            // dealWithJson(tempJ);
           
            setResponseData(response.data.body);
          })
    
          .catch((error) => {
            console.log(error);
          });
      }

  return (
    <>
    <div class="mx-4 mt-3">
    <EuiPageHeader>
          <EuiHeaderSectionItem>
            {/* <EuiTitle size="l">
              <h1>Breach Database</h1>
            </EuiTitle>
          
           <EuiSpacer/> */}
              <EuiPageHeader
            style={{ marginLeft: 15 }}
            pageTitle={
              <span className="fs-2" style={{ marginRight: "20px" }}>
                Latest Breaches:
              </span>
            }
            iconType="launch"
            alignItems={"center"}
          />
          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem style={{ minWidth: 425 }}>
            <>
            {/* <div className="ml-2">
              Download Results as Excel:
            <EuiButtonIcon
            // onClick={downloadExcel}
            iconType="download"
            aria-label="download"
            // isDisabled={downloadBtnDisabled}
          />
            </div> */}
              <EuiFieldSearch
                fullWidth="true"
                placeholder="Search here..."
                value={freeSearchInput}
                onChange={(e) => handleFreeSearchChange(e)}
                isClearable={isClearable}
                aria-label="Use aria labels when no actual label is in use"
              />
            </>
          </EuiHeaderSectionItem>
    </EuiPageHeader>

    <EuiPanel
          className="eui-yScroll"
          style={{ maxHeight: "1000px", marginTop: "10px" }}
          paddingSize={"m"}
        >

          {responseData.hits.hits.length ? (
            <PostsComponent posts={responseData.hits.hits} searchTerm={freeSearchInput}/>
          ) : (
            <div style={{ marginTop: 10 }}>
              <EuiCard
                icon={<EuiIcon size="xxl" type="searchProfilerApp" />}
                title="Search Contents"
                description="Apologies, there seems to be a problem retrieving the data. Please check your network connection or try searching again."
              />
            </div>
          )}

          {/* {responseData.hits.hits.length ? (
            <PostsComponent posts={responseData.hits.hits} />
          ) : (
            <div style={{ marginTop: 10 }}>
              <EuiCard
                icon={<EuiIcon size="xxl" type="searchProfilerApp" />}
                title="Search Contents"
                description="Apologies, there seems to be a problem retrieving the data. Please check your network connection or try searching again."
              />
            </div>
          )} */}
        </EuiPanel>

    </div>
    
    </>
  )
}

export default Intel471Page