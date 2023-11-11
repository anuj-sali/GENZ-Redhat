import React from 'react'
import {
    EuiPageHeader, EuiSpacer,
    EuiFlexGroup, EuiFlexItem,
    EuiPanel, EuiFilePicker,
    EuiFormRow, EuiText,
    EuiHorizontalRule,
    EuiFieldSearch, EuiButton,
    EuiFieldText, EuiTextArea,
    EuiDatePicker, EuiSelect
} from '@elastic/eui';



function DataManagement1() {

    const [fileSelected, setFileSelected] = React.useState(false);
    const [file, setFile] = React.useState({});

    const onFileChange = (files) => {

        if (files.length > 0) {
            console.log(files)
            setFile(Array.from(files));
            setFileSelected(true)        
        }
        else {
            setFileSelected(false)
        }

    }


  return (
<>
   <div className="col-8 ml-3 mt-3">
     <EuiPageHeader
       style={{ marginLeft: 15 }}
       pageTitle={
         <span className="fs-2" style={{ marginRight: "20px" }}>
           Data Management:
         </span>
       }
       iconType="managementApp"
       alignItems={"center"}
     />
     </div>

     <EuiSpacer></EuiSpacer>
    <EuiFlexGroup  justifyContent={'spaceAround'}>
        <EuiFlexItem  grow={false} style={{ height: "200px" , minWidth: "500px" }}>
            <EuiPanel >
                <EuiFormRow style={{ marginLeft: "25px" }} label={'Upload Pdf File'}>
                    <EuiFilePicker
                        initialPromptText="Select or drag and drop file"
                        onChange={onFileChange}
                        aria-label="file upload"
                    />
                </EuiFormRow>
                    {/* <EuiHorizontalRule /> */}
            </EuiPanel>
        </EuiFlexItem>
    </EuiFlexGroup>

    

</>

    )
}

export default DataManagement1