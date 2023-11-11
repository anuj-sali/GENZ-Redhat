import React from "react";
import { EuiCard, EuiIcon } from "@elastic/eui";
import { Modal } from "react-bootstrap";
import { EuiText, EuiPanel, EuiHighlight } from "@elastic/eui";


function PostsComponent({ posts, searchTerm }) {

  const [showModal, setShowModal] = React.useState(false);
  let [selectedHeadline, setSelectedHeadline] = React.useState(false);
  let [selectedCompromisedCompanyName, setSelectedCompromisedCompanyName] = React.useState("");
  console.log("from post compo",searchTerm)
  function handleModal(clicked_obj) {
    setShowModal(true);
    console.log(clicked_obj);
    setSelectedHeadline(clicked_obj.Headline);
    setSelectedCompromisedCompanyName(clicked_obj.Compromised_Company_Name)
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
              {item._source.Headline}
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
                {item._source.Summary}
              </EuiHighlight>
            </>
          }

          titleSize="s"

          onClick={() => handleModal(item._source)}

          style={{ marginBottom: "3px" }}

        />

      ))}




      <div

        className="modal show"

        style={{ display: "block", position: "initial" }}
      >
        <Modal
          size="xl"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ padding: "10px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fs-1"
              style={{ textAllign: "center" }}setSelectedHeadline
            >
              {selectedCompromisedCompanyName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body">
              {posts.map((item, index) => (
                <div key={index}>
                  {item._source.Headline === selectedHeadline ? (
                    
                    <EuiPanel
                      className="eui-yScroll"
                      style={{ maxHeight: "1000px",padding: "1px" }}
                    //   paddingSize={"s"}
                    >
                      <EuiText style={{ fontFamily: "bitter", padding: "3%" }}>
                        <dl className="eui-definitionListReverse">
                          <dd>{item._source.Summary}</dd>
                          
                        <dt>
                            <h4>Actor:</h4>
                        </dt>
                        <dd>{item._source["Actor_or_Group"]}</dd>
                    
                        <dt>
                            <h4>Victim Country:</h4>
                        </dt>
                        <dd>{item._source["Victim_Country"]}</dd>
                        <dt>
                            <h4>Victim Revenue:</h4>
                        </dt>
                        <dd>{item._source["Victim_Revenue"]}</dd>
                        <dt>
                            <h4>Breach Date:</h4>
                        </dt>
                        <dd>{item._source["Breach_Date"]}</dd>

                          <dt>
                            <h4>Reference Links:</h4>
                          </dt>
                          <dd>
                            {Object.values(item._source["HyperLinks"]).map(
                              (hurl) => (
                                <li key={hurl}>{<a href={hurl}>{hurl}</a>}</li>
                              )
                            )}
                          </dd>
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