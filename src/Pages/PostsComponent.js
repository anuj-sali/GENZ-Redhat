import React from "react";
import { EuiCard, EuiIcon } from "@elastic/eui";
import { Modal } from "react-bootstrap";
import { EuiText, EuiPanel, EuiHighlight } from "@elastic/eui";


function PostsComponent({ posts, searchTerm }) {

  const [showModal, setShowModal] = React.useState(false);
  let [selectedName, setSelectedName] = React.useState(false);
  console.log("from post compo",searchTerm)
  function handleModal(name) {
    setShowModal(true);
    console.log(name);
    setSelectedName(name);
  }


  return (
    <>
      {posts.map((item, index) => (
        <EuiCard
          key={index}
          layout="horizontal"
          title={
            <EuiHighlight
              search={searchTerm}
              highlightAll={true}
              className="mb-0"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Roboto Condensed",
              }}
            >
              {item._source.Name}
            </EuiHighlight>
          }
          icon={<EuiIcon size="l" type={"article"} />}

          description={
            <>
              <EuiHighlight
                search={searchTerm}
                highlightAll={true}
                className="mb-0"
                style={{ fontSize: 15, fontFamily: "Bitter" }}
              >
                {item._source.Description}
              </EuiHighlight>
            </>
          }

          titleSize="s"

          onClick={() => handleModal(item._source.Name)}

          style={{ marginBottom: "3px" }}

        />

      ))}




      <div

        className="modal show"

        style={{ display: "block", position: "initial" }}
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
              {selectedName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body">
              {posts.map((item, index) => (
                <div key={index}>
                  {item._source.Name === selectedName ? (
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
                          <dd>{item._source.Description}</dd>
                        <dt>
                            <h4>Breach Date</h4>
                          </dt>
                          <dd>{item._source["Breach Date"]}</dd>

                          <dt>
                            <h4>Published date to HIBP</h4>
                          </dt>

                          <dd>

                            {item._source["Added Date To HIBP"]

                              .toString()

                              .slice(0, 24) + " IST"}

                          </dd>


                          <dt>

                            <h4>Compromised Accounts</h4>

                          </dt>

                          <dd>{item._source["Compromised Accounts"]}</dd>


                          <dt>

                            <h4>Compromised Data</h4>

                          </dt>




                          {/* <dd>{this.state.selectedData["Compromised Data"]}</dd> */}




                          <dd>

                            {Object.values(

                              item._source["Compromised Data"]

                            ).map((a) => (

                              <li>{a}</li>

                            ))}

                          </dd>




                          <dt>

                            <h4>Reference Links</h4>

                          </dt>




                          <dd>

                            {Object.values(item._source["HyperLinks"]).map(

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

  );

}




export default PostsComponent;