import React from "react";
import {
  EuiFieldSearch,
  EuiPageHeader,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiSplitPanel,
  EuiFieldText,
  EuiDatePicker,
  EuiFormRow,
  EuiDatePickerRange,
  EuiCard,
  EuiIcon,

} from "@elastic/eui";
import axios from "axios";
import moment from "moment";
import PostsComponent from "./PostsComponent";
const baseURL = "http://localhost:3000/api/v1/breach-analysis";


function AdvancedSearch1() {
  const defaultResponse = {
    hits: {
      hits: [],
      total: {
        value: 1,
      },
    },
  };
  const InitialState = {

    showSearch: false,
    IsfreeSearchChanged: true,
    isCompanySearchChanged: true,
    isCalenderSearchChanged: true,
    searchTerm: "",
    searchOffset: 0,
    startDate: null,
    endDate: null,
    totalPages: 0,

  };

  const [searchOffset, setSearchOffset] = React.useState(0);
  const [freeSearchInput, setFreeSearchInput] = React.useState("");
  const [companyNameSearchInput, setCompanyNameSearchInput] = React.useState("");
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [posts, setPost] = React.useState([]);
  const [responseData, setResponseData] = React.useState(defaultResponse);
  const [searchState, setSearchState] = React.useState(InitialState);

  React.useEffect(() => {
    console.log("Inside the Search State use Effect:");
    console.log(searchState);
    console.log(responseData);
    console.log(responseData.hits.total.value);
    if (searchState.showSearch === false) {

      setResponseData(defaultResponse);

    } else if (

      searchState.searchTerm.length === 0 &&

      searchState.isCalenderSearchChanged === false

    ) {

      setResponseData(defaultResponse);
      setSearchState(InitialState);

    } else if (searchState.IsfreeSearchChanged) {
      console.log("Free Search Text Changed ");
      axios
        .get(`${baseURL}/free-search`, {
          params: {
            term: searchState.searchTerm,
            offset: searchState.searchOffset,
          },

        })




        .then((response) => {

          console.log(response.data);




          //   setPost(response.data.hits.hits);




          setResponseData(response.data.body);

        })




        .catch((error) => {

          console.log(error);

        });

    } else if (searchState.isCompanySearchChanged) {
      console.log("Company Name Search Text Changed ");
      axios
        .get(`${baseURL}/search-by-company`, {
          params: {
            term: searchState.searchTerm,
            offset: searchState.searchOffset,
          },

        })




        .then((response) => {

          console.log(response.data.body.hits.total.value);




          //setPost(response.data);




          setResponseData(response.data.body);




          console.log(responseData);

        })




        .catch((error) => {

          console.log(error);

        });

    } else if (searchState.isCalenderSearchChanged) {
      console.log("Calander Search Text Changed ");
      axios
        .get(`${baseURL}/search-by-date-range`, {

        params: {
            start: searchState.startDate.format("YYYY-MM-DD"),

            end: searchState.endDate.format("YYYY-MM-DD"),

            offset: searchState.searchOffset,

          },

        })
       .then((response) => {

          console.log(response.data);




          setResponseData(response.data.body);

        })




        .catch((error) => {

          console.log(error);

        });

    }
    console.log("Search State use Effect End :");

  }, [searchState]);


  function setSearchStateHelper(

    showSearch,




    IsfreeSearchChanged,




    isCompanySearchChanged,




    isCalenderSearchChanged,




    searchTerm,




    searchOffset,




    startDate,




    endDate,




    totalPages

  ) {

    setSearchState({

      showSearch: showSearch,




      IsfreeSearchChanged: IsfreeSearchChanged,




      isCompanySearchChanged: isCompanySearchChanged,




      isCalenderSearchChanged: isCalenderSearchChanged,




      searchTerm: searchTerm,




      searchOffset: searchOffset,




      startDate: startDate,




      endDate: endDate,




      totalPages: totalPages,

    });

  }




  const handlePreviousPage = async () => {

    console.log("Inside Previous Page");


    setSearchStateHelper(

      searchState.showSearch,




      searchState.IsfreeSearchChanged,




      searchState.isCompanySearchChanged,




      searchState.isCalenderSearchChanged,




      searchState.searchTerm,




      searchState.searchOffset - 1,




      searchState.startDate,




      searchState.endDate,




      searchState.totalPages

    );




    if (searchOffset > 0) {

      setSearchOffset(searchOffset - 1);

    }

  };




  const handleNextPage = async () => {

    setSearchStateHelper(

      searchState.showSearch,




      searchState.IsfreeSearchChanged,




      searchState.isCompanySearchChanged,




      searchState.isCalenderSearchChanged,




      searchState.searchTerm,




      searchState.searchOffset + 1,




      searchState.startDate,




      searchState.endDate,




      searchState.totalPages

    );




    if (searchOffset <= responseData.body.hits.total.value) {

      setSearchOffset(searchOffset + 1);

    }

  };




  const handleFreeSearchChange = (e) => {

    setSearchStateHelper(

      true,




      true,




      false,




      false,




      e.target.value,




      0,




      moment(),




      moment().add(1, "d"),




      responseData.length

    );




    setFreeSearchInput(e.target.value);

  };




  const handleCompanyNameChange = (e) => {

    setSearchStateHelper(

      true,




      false,




      true,




      false,




      e.target.value,




      0,




      moment(),




      moment().add(1, "d"),




      responseData.length

    );




    setCompanyNameSearchInput(e.target.value);

  };




  const handleStartDateChange = (date) => {

    setStartDate(date);

  };




  const handleEndDateChange = (date) => {

    setEndDate(date);

  };




  const handleSearchBetweenDate = () => {

    setSearchStateHelper(

      true,




      false,




      false,




      true,




      "",




      0,




      startDate,




      endDate,




      responseData.length

    );

  };




  React.useEffect(() => {

    // to disable rightScroller //




    document.body.style.overflow = "hidden";




    axios




      .get("http://localhost:3000/api/v1/breach-analysis/all")




      .then((response) => {

        setPost(response.data.body);

      });

  }, []);




  function handleResetClick() {

    setSearchState(InitialState);




    handleStartDateChange(null);




    handleEndDateChange(null);

  }




  return (

    <>

      <div className="row mt-3 justify-content-end">

        <div className="col-8 ml-3">

          <EuiPageHeader

            style={{ marginLeft: 15 }}

            pageTitle={

              <span className="fs-2" style={{ marginRight: "20px" }}>

                Advanced Search:

              </span>

            }

            iconType="searchProfilerApp"

            alignItems={"center"}

          />

        </div>




        <div className="col-4 mt-2">

          <div className="row  mr-5 justify-content-center">

            <EuiButton

              className={`col-4 ${(searchState.showSearch===false)?'d-none':'d-flex'}`}

              style={{ width: 50, marginRight: 25 }}

              color="primary"

              size={"s"}

              onClick={handlePreviousPage}

              disabled={searchState.searchOffset == 0}

            >

              Previous

            </EuiButton>




            <EuiButton

               className={`col-4 ${(searchState.showSearch===false)?'d-none':'d-flex'}`}

              style={{ width: 50 }}

              color="primary"

              size={"s"}

              onClick={handleNextPage}

              disabled={

                !searchState.showSearch ||

                searchState.searchOffset == responseData.hits.total.value - 1 || responseData.hits.hits.length==0

              }

            >

              Next

            </EuiButton>

          </div>

        </div>

      </div>




      <EuiSpacer size="s"></EuiSpacer>




      <EuiFlexGroup style={{ minHeight: 500 }}>

        <EuiFlexItem grow={4}>

          <EuiPanel>

            <p

              style={{

                fontSize: 15,




                marginBottom: 3,




                fontWeight: 300,




                fontFamily: "Roboto Condensed",

              }}

            >

              Free Text Search

            </p>




            <EuiFieldSearch

              placeholder="Search here..."

              value={freeSearchInput}

              onChange={(e) => handleFreeSearchChange(e)}

              disabled={!searchState.IsfreeSearchChanged}

              isClearable={true}

            />




            <p style={{ fontSize: 13, marginBottom: 25, fontWeight: 300 }}>

              Search in all available columns

            </p>




            <p

              style={{

                fontSize: 15,




                marginBottom: 3,




                fontWeight: 300,




                fontFamily: "Roboto Condensed",

              }}

            >

              Compromised Company Name

            </p>




            <EuiFieldSearch

              placeholder="Search here..."

              // prepend={"Contains"}




              value={companyNameSearchInput}

              onChange={(e) => handleCompanyNameChange(e)}

              disabled={!searchState.isCompanySearchChanged}

              isClearable={true}

            />




            <div style={{ marginTop: 25 }}>

              <p

                style={{

                  fontSize: 15,




                  marginBottom: 3,




                  fontWeight: 300,




                  fontFamily: "Roboto Condensed",

                }}

              >

                Breach Date

              </p>




              <EuiDatePicker

              className="mt-2"

                selected={startDate}

                onChange={handleStartDateChange}

                placeholder="Start Date"

              />




              <EuiDatePicker

                className="mt-1"

                selected={endDate}

                onChange={handleEndDateChange}

                isInvalid={startDate>endDate}

                placeholder="End Date"

              />




              {/* </EuiFormRow> */}

            </div>




            <div className="row mt-4 justify-content-md-center">

              <div className="col-md-4">

                <EuiButton

                  color="primary"

                  size={"s"}

                  onClick={handleSearchBetweenDate}

                  isDisabled={!searchState.isCalenderSearchChanged || startDate>endDate || startDate==null || endDate==null}

                >

                  Search

                </EuiButton>

              </div>




              <div className="col-md-4">

                <EuiButton

                  color={"danger"}

                  size={"s"}

                  onClick={handleResetClick}

                >

                  Reset

                </EuiButton>

              </div>

            </div>

          </EuiPanel>

        </EuiFlexItem>




        <EuiFlexItem grow={8}>

          <EuiPanel className="" style={{ minHeight: "500px" }}>

            {responseData.hits.hits.length ? (

              <PostsComponent posts={responseData.hits.hits} searchTerm={searchState.searchTerm} />

            ) : (

              <div style={{ marginTop: 10 }}>

                <EuiCard

                  icon={<EuiIcon size="xxl" type="searchProfilerApp" />}

                  title="Search Contents"

                  description="All given fields are not required for searching. You can search with one or more fields."

                />

              </div>

            )}

          </EuiPanel>

        </EuiFlexItem>

      </EuiFlexGroup>

    </>

  );

}




export default AdvancedSearch1;