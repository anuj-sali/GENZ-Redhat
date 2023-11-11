import React from 'react';
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
import moment from 'moment';


class DataManagement extends React.Component {

    constructor() {
        super();
        this.state = {
            file: {},
            value: '',
            fileSelected: false,
            indexedData: {
                Title: '',
                Description: '',
                RecordType: '',
                BreachDate: moment(),
                PublishedDate: moment(),
                IpAddresses: [],
                ThreatActor: '',
                Malware: ''
            }
        }
    }

    onFileChange = (files) => {
        if (files.length > 0) {
            this.setState({ file: Array.from(files), fileSelected: true });
        }
        else {
            this.setState({ fileSelected: false });
        }

    }

    onChangeInputs = (eve, type) => {
        switch (type) {
            case "Title":
                this.setState(prevState => (
                    {
                        indexedData: {
                            ...prevState.indexedData,
                            Title: eve.target.value
                        }
                    }
                ))
                break;
            case "ThreatActor":
                this.setState(prevState => (
                    {
                        indexedData: {
                            ...prevState.indexedData,
                            ThreatActor: eve.target.value
                        }
                    }
                ))
                break;
            case "Malware":
                this.setState(prevState => (
                    {
                        indexedData: {
                            ...prevState.indexedData,
                            Malware: eve.target.value
                        }
                    }
                ))
                break;
            case "Description":
                this.setState(prevState => (
                    {
                        indexedData: {
                            ...prevState.indexedData,
                            Description: eve.target.value
                        }
                    }
                ))
                break;


            default:
                break;
        }
    }

    onSearchChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleBreachDate = (date) => {
        this.setState(prevState => (
            {
                indexedData: {
                    ...prevState.indexedData,
                    BreachDate: date
                }
            }
        ))
    }

    handlePublishedDate=(date)=>{
        this.setState(prevState => (
            {
                indexedData: {
                    ...prevState.indexedData,
                    PublishedDate: date
                }
            }
        ))
    }

    render() {
        return (
            <>
                <EuiPageHeader
                    pageTitle="Data Management"
                    iconType="managementApp"
                    alignItems={'center'}
                />
                <EuiSpacer></EuiSpacer>
                <EuiFlexGroup alignItems={'center'} justifyContent={'spaceAround'}>
                    <EuiFlexItem grow={4}>
                        <EuiPanel>
                            <EuiFormRow label={'Upload Pdf File'}>
                                <EuiFilePicker
                                    initialPromptText="Select or drag and drop file"
                                    onChange={this.onFileChange}
                                    aria-label="file upload"
                                />
                            </EuiFormRow>
                            <EuiHorizontalRule />
                            <EuiText textAlign={'center'}>
                                <h3>OR</h3>
                            </EuiText>
                            <EuiHorizontalRule />
                            <EuiFormRow label={'Search PDF Document to Update'}>
                                <EuiFieldSearch
                                    placeholder="Search indexed documents"
                                    value={this.state.value}
                                    onChange={(e) => this.onSearchChange(e)}
                                    isClearable={true}
                                    aria-label="indexed document search"
                                    append={
                                        <EuiButton size={'s'}>Search</EuiButton>
                                    }
                                />
                            </EuiFormRow>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem grow={8}>
                        {this.state.fileSelected ?

                            <EuiPanel className='animateIn'>
                                <EuiFlexGroup>
                                    <EuiFlexItem>
                                        <EuiFormRow label="Title">
                                            <EuiFieldText
                                                placeholder="Enter Title"
                                                value={this.state.indexedData.Title}
                                                onChange={(e) => this.onChangeInputs(e, "Title")}
                                            />
                                        </EuiFormRow>
                                        <EuiFormRow label="Threat Actor">
                                            <EuiFieldText
                                                placeholder="Enter Threat Actor"
                                                value={this.state.indexedData.ThreatActor}
                                                onChange={(e) => this.onChangeInputs(e, "ThreatActor")}
                                            />
                                        </EuiFormRow>
                                        <EuiFormRow label="Malware">
                                            <EuiFieldText
                                                placeholder="Enter Malware Name"
                                                value={this.state.indexedData.Malware}
                                                onChange={(e) => this.onChangeInputs(e, "Malware")}
                                            />
                                        </EuiFormRow>
                                        <EuiFormRow label="Breach Date">
                                            <EuiDatePicker
                                                selected={this.state.indexedData.BreachDate}
                                                onChange={this.handleBreachDate}
                                            />
                                        </EuiFormRow>
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiFormRow label="Document Type">
                                            <EuiSelect 
                                                options={[
                                                    {value:1,text:"Informational"},
                                                    {value:2,text:"Breach"}
                                                ]}
                                            />
                                        </EuiFormRow>
                                        <EuiFormRow label="Description">
                                            <EuiTextArea
                                                placeholder='Enter Description'
                                                value={this.state.indexedData.Description}
                                                onChange={(e) => this.onChangeInputs(e, "Description")}
                                                style={{height:"113px"}}
                                            />
                                        </EuiFormRow>
                                        <EuiFormRow label="Published Date">
                                            <EuiDatePicker
                                                selected={this.state.indexedData.PublishedDate}
                                                onChange={this.handlePublishedDate}
                                            />
                                        </EuiFormRow>
                                    </EuiFlexItem>
                                </EuiFlexGroup>
                                <EuiSpacer size={'s'}></EuiSpacer>
                                <div className='row'>
                                    <div className='col-md-10'></div>
                                    <div className='col-md-2'>
                                        <EuiButton size={'s'}>Update Data</EuiButton>
                                    </div>
                                </div>
                            </EuiPanel>
                            : ''
                        }
                    </EuiFlexItem>
                </EuiFlexGroup>
            </>
        );
    }

}

export default DataManagement;