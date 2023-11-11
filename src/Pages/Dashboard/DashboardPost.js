import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import {EuiText,EuiPanel} from '@elastic/eui';


function DashboardPost({showModal, setShowModal,activeIndex, result, parseISOString, data}) {
  return (
    <>
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
<Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ padding: "20px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fs-1"
              style={{ textAllign: "center" }}
            >
              {result[activeIndex]["Name"]}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body">
              {data.map((item, index) => (
                <div key={index}>
                  {item.Name === result[activeIndex]["Name"] ?  (
                    <EuiPanel
                      className="eui-yScroll"
                      style={{ maxHeight: "1000px" }}
                      paddingSize={"s"}
                    >
                      <EuiText style={{ fontFamily: "bitter", padding: "3%" }}>
                        <dl className="eui-definitionListReverse">
                          <dt> {/* <h4>Title</h4> */}</dt>
                          {/* <dd>{item._source.Name}</dd> */}
                          <dt>{/* <h4>Description</h4> */}</dt>
                          <dd>{item.Description}</dd>
                        <dt>
                            <h4>Breach Date</h4>
                          </dt>
                          <dd>{item["Breach Date"]}</dd>

                          <dt>
                            <h4>Published date to HIBP</h4>
                          </dt>

                          <dd>

                            {item["Added Date To HIBP"]

                              .toString()

                              .slice(0, 24) + " IST"}

                          </dd>


                          <dt>

                            <h4>Compromised Accounts</h4>

                          </dt>

                          <dd>{item["Compromised Accounts"]}</dd>


                          <dt>

                            <h4>Compromised Data</h4>

                          </dt>




                          {/* <dd>{this.state.selectedData["Compromised Data"]}</dd> */}




                          <dd>

                            {Object.values(

                              item["Compromised Data"]

                            ).map((a) => (

                              <li>{a}</li>

                            ))}

                          </dd>




                          <dt>

                            <h4>Reference Links</h4>

                          </dt>




                          <dd>

                            {Object.values(item["HyperLinks"]).map(

                              (hurl) => (

                                <li key={hurl}>{<a href={hurl}>{hurl}</a>}</li>

                              )

                            )}

                          </dd>




                          {/* <dd>{Object.values(this.state.selectedData["HyperLinks"]).map((b) => <li>{b}</li>)}</dd> */}

                        </dl>

                      </EuiText>

                    </EuiPanel>

                  ) : null}

                </div>

              ))}

            </div>

          </Modal.Body>

</Modal>


    </div>
    </>
  )
}

export default DashboardPost