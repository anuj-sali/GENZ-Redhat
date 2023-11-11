import React from 'react';
import {
    EuiPageHeader, EuiButton,
    EuiFlexGroup, EuiFlexItem,
    EuiPanel, EuiSpacer,
    EuiFieldText, EuiDatePicker,
    EuiFormRow, EuiDatePickerRange,
    EuiCard, EuiIcon
} from '@elastic/eui';
import moment from 'moment';
// import PdfModal from "../partials/PdfModal/PdfModal.jsx";

const data = [
    {
        Title: "BlackCat Ransomware affiliates target unpatched Microsoft Exchange servers",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/BlackCat%20Ransomware%20affiliates%20target%20unpatched%20Microsoft%20Exchange%20servers.pdf",
        BreachDate: "2022-06-16",
        PublishDate: "2022-06-16",
        IpAddresses: [],
        ThreatActor: "DEV0504",
        Malware: "BlackCat",
        Urls: [
            "https://securityaffairs.co/wordpress/132339/malware/blackcat-ransomware-clear-web.html",
            "https://msrc-blog.microsoft.com/2021/03/16/guidance-for-responders-investigating-and-remediating-on-premises-exchange-server-vulnerabilities/",
            "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/#DEV-0237",
            "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/#DEV-0504",
            "https://www.microsoft.com/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/",
            "https://adsecurity.org/?p=462",
            "https://docs.microsoft.com/sysinternals/downloads/psexec",
            "https://securityaffairs.co/wordpress/126880/cyber-crime/alphv-blackcat-ransomware-hit-moncler.html"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "Hertzbleed - New AMD & Intel CPUs Bug Let Hackers Extract Crypto-Keys From Remote Servers",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/Hertzbleed%20%E2%80%93%20New%20AMD%20&%20Intel%20CPUs%20Bug%20Let%20Hackers%20Extract%20Crypto-Keys%20From%20Remote%20Servers.pdf",
        BreachDate: "2022-06-16",
        PublishDate: "2022-06-16",
        IpAddresses: [],
        ThreatActor: "Vulnerability",
        Malware: "Hertzbleed",
        Urls: [
            "https://www.hertzbleed.com/",
            "https://en.wikipedia.org/wiki/DVFS",
            "http://chrome-extension/efaidnbmnnnibpcajpcglclefindmkaj/https:/www.hertzbleed.com/hertzbleed.pdf"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "SideWinder carried out over 1,000 attacks since April 2020",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/SideWinder%20carried%20out%20over%201,000%20attacks%20since%20April%202020.pdf",
        BreachDate: "2022-05-31",
        PublishDate: "2022-05-31",
        IpAddresses: [],
        ThreatActor: "RattleSnake",
        Malware: "SideWinder",
        Urls: [
            "https://securityaffairs.co/wordpress/96074/hacking/apps-exploit-cve-2019-2215.html",
            "https://www.blackhat.com/asia-22/briefings/schedule/index.html#sidewinder-uncoils-to-strike-26513"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "Phishing Campaign Delivering Three Fileless Malware: AveMariaRAT / BitRAT / PandoraHVNC - Part I",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/Phishing%20Campaign%20Delivering%20Three%20Fileless%20Malware_%20AveMariaRAT.pdf",
        BreachDate: "2022-05-12",
        PublishDate: "2022-05-12",
        IpAddresses: [],
        ThreatActor: "Phishing",
        Malware: "AveMariaRAT",
        Urls: [
            "https://www.fortinet.com/blog/search?author=Xiaopeng+Zhang",
            "hxxps://taxfile[.]mediafire[.]com/file/6hxdxdkgeyq0z1o/APRL27[.]htm/file",
            "hxxps://www[.]mediafire[.]com/file/c3zcoq7ay6nql9i/back[.]htm/file",
            "hxxps://www[.]mediafire[.]com/file/jjyy2npmnhx6o49/Start[.]htm/file",
            "hxxps://taxmogalupupitpamobitola[.]blogspot[.]com/atom[.]xml"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "A New Android Malware that Talks to Victim in Guise of a Bank Employee",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/A%20New%20Android%20Malware%20that%20Talks%20to%20Victim%20in%20Guise%20of%20a%20Bank%20Employee.pdf",
        BreachDate: "2022-04-13",
        PublishDate: "2022-04-13",
        IpAddresses: [],
        ThreatActor: "Phishing",
        Malware: "FakeCalls",
        Urls: [
            "https://www.kaspersky.com/blog/fakecalls-banking-trojan/44072/"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "Cash App Data Breach - Over 8.2 Million Customers' Data Exposed",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/Cash%20App%20Data%20Breach%20%E2%80%93%20Over%208.2%20Million%20Customers%E2%80%99%20Data%20Exposed.pdf",
        BreachDate: "2022-04-04",
        PublishDate: "2022-04-07",
        IpAddresses: [],
        ThreatActor: "Human",
        Malware: "",
        Urls: [
            "https://techcrunch.com/2022/04/05/block-cash-app-data-breach/"
        ],
        Domains: [],
        Organization: "Block",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "Volvo Cars discloses security breach leading to R&D data theft",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/Volvo%20Cars%20discloses%20security%20breach%20leading%20to%20R&D%20data%20theft.pdf",
        BreachDate: "2021-11-30",
        PublishDate: "2021-12-07",
        IpAddresses: [],
        ThreatActor: "ALPHV",
        Malware: "BlackCat",
        Urls: [
            "https://www.media.volvocars.com/global/en-gb/media/pressreleases/292817/notice-of-cyber-security-breach-by-third-party-1"
        ],
        Domains: [],
        Organization: "Volvo",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "TA505 exploits SolarWinds Serv-U vulnerability (CVE2021-35211) for initial access",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/TA505%20exploits%20SolarWinds%20Serv-U%20vulnerability%20(CVE-2021-35211)%20for%20initial%20access%20%E2%80%93%20NCC%20Group%20Research.pdf",
        BreachDate: "2021-11-08",
        PublishDate: "2021-11-08",
        IpAddresses: [],
        ThreatActor: "TA505",
        Malware: "CLOP",
        Urls: [
            "https://research.nccgroup.com/2021/11/08/ta505-exploits-solarwinds-serv-u-vulnerability-cve-2021-35211-for-initial-access/"
        ],
        Domains: [],
        Organization: "SolarWinds",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "Whatta TA: TA505 Ramps Up Activity, Delivers New FlawedGrace Variant",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/Whatta%20TA_%20TA505%20Ramps%20Up%20Activity,%20Delivers%20New%20FlawedGrace%20Variant%20_%20Proofpoint%20US.pdf",
        BreachDate: "2021-10-10",
        PublishDate: "2021-10-15",
        IpAddresses: [],
        ThreatActor: "TA505",
        Malware: "FlawedGrace",
        Urls: [
            "https://www.proofpoint.com/us/blog/threat-insight/whatta-ta-ta505-ramps-activity-delivers-new-flawedgrace-variant"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "APT35 'Charming Kitten' discovered in a pre-infected environment",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/APT35%20%E2%80%98Charming%20Kitten'%20discovered%20in%20a%20pre-infected%20environment%20_%20Blog%20_%20Darktrace.pdf",
        BreachDate: "2021-04-23",
        PublishDate: "2021-04-23",
        IpAddresses: [],
        ThreatActor: "APT35",
        Malware: "Darktrace",
        Urls: [
            "https://www.darktrace.com/en/blog/apt-35-charming-kitten-discovered-in-a-pre-infected-environment/"
        ],
        Domains: [],
        Organization: "",
        EmailAddresses: [],
        BitcoinWalletAddresses: []
    },
    {
        Title: "BadBlood: TA453 Targets US and Israeli Medical Research Personnel in Credential Phishing Campaigns",
        RecordType: "PDF",
        FileUrl: "http://blrkec8806s:8000/BadBlood_%20TA453%20Targets%20US%20and%20Israeli%20Medical%20Research%20Personnel%20in%20Credential%20Phishing%20Campaigns%20_%20Proofpoint%20US.pdf",
        BreachDate: "2021-03-31",
        PublishDate: "2021-03-30",
        IpAddresses: [],
        ThreatActor: "TA453",
        Malware: "Phishing",
        Urls: [
            "https://blogs.microsoft.com/on-the-issues/2019/03/27/new-steps-to-protect-customers-from-hacking"
        ],
        Domains: [
            "1drv[.]casa"
        ],
        Organization: "",
        EmailAddresses: [
            "zajfman.daniel[@]gmail.com"
        ],
        BitcoinWalletAddresses: []
    }
]

const startDate = moment();
const endDate = moment().add(11, 'd');

// const onChange = (e) => {
//     this.showfreeTextSearch(e.target.value);
//   };

class AdvancedSearch extends React.Component {

    constructor() {
        super()
        this.state = { search: false,show:false,url:null, freeTextSearch:"" }
    }

    showfreeTextSearch = (text) => {
        this.setState({ freeTextSearch: text })
    }

    showSearch = () => {
        this.setState({ search: true })
    }

    resetSearch = () => {
        this.setState({ search: false })
    }

    showModal=(url)=>{
        this.setState({show:true, url:url})
    }

    hideModal=()=>{
        this.setState({show:false,url:null})
    }


    searchResult = (
        data.map((item,index) => {
            return (<EuiCard key={index}
                layout="horizontal"
                title={item.Title}
                icon={<EuiIcon size="l" type={'sqlApp'} />}
                description={"Breach Date: "+item.BreachDate+" | Threat Actor: "+item.ThreatActor+" | Malware: "+item.Malware+" | Record Type: "+item.RecordType}
                // onClick={()=>{this.showModal(item.FileUrl)}}
                onClick={()=>{this.showModal("https://bayes.wustl.edu/etj/articles/random.pdf")}}
                titleSize={'xs'}
                style={{marginBottom:'5px'}}
            />)
        })
    )

    render() {
        return (
            <>
            <div className="mx-4 mt-1">
                <EuiPageHeader
                    // pageTitle="Advanced Search"
                    pageTitle={<span className="fs-1" style={{"marginRight": "20px"}} >Advanced Search:</span>}
                    iconType="searchProfilerApp"
                    rightSideItems={[
                        // <EuiButton iconType={'refresh'} size='s' >Reset</EuiButton>,
                        <button type="button" className="btn btn-secondary btn-m">Reset</button>,
                    ]}
                    alignItems={'center'}
                />
                </div>
                <EuiSpacer size='s'></EuiSpacer>
                <EuiFlexGroup>
                    <EuiFlexItem grow={4}>
                        <EuiPanel>
                            <EuiFormRow label="Free Text Search" helpText="Search in all available columns">
                                <EuiFieldText value={this.state.freeTextSearch}  onChange={this.showfreeTextSearch}/>
                            </EuiFormRow>
                            <EuiFormRow label="Compromised Company Name">
                                <EuiFieldText prepend={"Contains"} />
                            </EuiFormRow>
                            <EuiFormRow label="Compromised Data">
                                <EuiFieldText prepend={"Comma Separated"} />
                            </EuiFormRow>
                            {/* <EuiFormRow label="Malwares">
                                <EuiFieldText prepend={"Comma Separated"} />
                            </EuiFormRow> */}
                            <EuiFormRow label="Published Date">
                                <EuiDatePickerRange
                                    isInvalid={startDate > endDate}
                                    startDateControl={
                                        <EuiDatePicker
                                            selected={startDate}
                                            startDate={startDate}
                                            endDate={endDate}
                                            aria-label="Start date"
                                        />
                                    }
                                    endDateControl={
                                        <EuiDatePicker
                                            selected={endDate}
                                            startDate={startDate}
                                            endDate={endDate}
                                            aria-label="End date"
                                        />
                                    }
                                />
                            </EuiFormRow>
                            <div className='row mt-2'>
                                <div className='col-md-4'></div>
                                <div className='col-md-4'>
                                    <EuiButton color='primary' size={'s'} onClick={this.showSearch} >Search</EuiButton>
                                </div>
                                <div className='col-md-4'>
                                    <EuiButton color={'danger'} size={'s'} onClick={this.resetSearch} >Reset</EuiButton>
                                </div>
                            </div>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem grow={8}>
                        <EuiPanel className='eui-yScroll' style={{maxHeight:'455px'}}>
                            {this.state.search ? this.searchResult : <EuiCard
                                icon={<EuiIcon size="xxl" type="searchProfilerApp" />}
                                title="Search Contents"
                                description="All given fields are not required for searching. You can search with one or more fields."
                            />}
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGroup>
                {/* {this.state.url? <PdfModal url={this.state.url} mShow={this.state.show} closeModal={this.hideModal} />:''} */}
            </>
        );
    }

}

export default AdvancedSearch;