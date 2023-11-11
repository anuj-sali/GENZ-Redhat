import React, { useState } from "react"
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiIcon, EuiFlexItem,
  EuiShowFor, EuiLink,
  EuiListGroupItem,
  useGeneratedHtmlId,
  EuiListGroup
} from "@elastic/eui";
import {Link} from "react-router-dom"

function SideNav() {
  const [navIsOpen, setNavIsOpen] = useState(
    JSON.parse(String(localStorage.getItem('navIsDocked'))) || false
  );
  const [navIsDocked, setNavIsDocked] = useState(
    JSON.parse(String(localStorage.getItem('navIsDocked'))) || false
  );
  const guideHeaderCollapsibleNavId = useGeneratedHtmlId({
    prefix: 'guideHeaderCollapsibleNav',
  });
  const ExternalLinks = [
    { label: 'Malware Analysis', onClick: () => {} },
    { label: 'Lex', onClick: () => {} }
  ];
  return (
    <div className="mx-3" >
    <EuiCollapsibleNav
      id={guideHeaderCollapsibleNavId}
      style={{ top: 48, paddingBottom: 48}}
      size={250}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      isDocked={navIsDocked}
      button={
        <EuiHeaderSectionItemButton
          style = {{"backgroundColor": "#25282f"}}
          aria-label="Toggle main navigation"
            onClick={() => setNavIsOpen(!navIsOpen)
          // onClick={() => setNavIsOpen(false)
          }
        >
          <EuiIcon type={'menu'} size="m" aria-hidden="true"  />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}
    >
      <div  className="eui-yScroll">
      <EuiFlexItem>
      <Link to="/" >
      <EuiCollapsibleNavGroup 
          title="Dashboard"
          iconType="dashboardApp"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem>
      <Link to="/latestBreaches" >
      <EuiCollapsibleNavGroup 
          title="Latest Breaches"
          iconType="launch"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem>
      <Link to="/breaches" >
      <EuiCollapsibleNavGroup 
          title="Breach Database"
          iconType="reportingApp"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem>
      <Link to="/search">
      <EuiCollapsibleNavGroup 
          title="Advanced Search"
          iconType="searchProfilerApp"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem>
      <EuiLink href="/data">
      <EuiCollapsibleNavGroup 
          title="Data Management"
          iconType="managementApp"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </EuiLink>
      </EuiFlexItem>
      {/* <EuiFlexItem>
      <EuiLink href="/user">
      <EuiCollapsibleNavGroup 
          title="User Management"
          iconType="usersRolesApp"
          isCollapsible={false}
          background="none"
        >
        </EuiCollapsibleNavGroup>
        </EuiLink>
      </EuiFlexItem> */}
      {/* <EuiFlexItem>
      <EuiCollapsibleNavGroup 
          title="Other Links"
          iconType="link"
          isCollapsible={true}
          initialIsOpen={false}
          background="none"
        >
          <EuiListGroup listItems={ExternalLinks}></EuiListGroup>
        </EuiCollapsibleNavGroup>
      </EuiFlexItem> */}
      </div>

      <EuiFlexItem grow={false}>
        <EuiShowFor sizes={['l', 'xl']}>
          <EuiCollapsibleNavGroup>
            <EuiListGroupItem
              size="xs"
              color="primary"
              label={`${navIsDocked ? 'Undock' : 'Dock'} navigation`}
              onClick={() => {
                setNavIsDocked(!navIsDocked);
                localStorage.setItem(
                  'navIsDocked',
                  JSON.stringify(!navIsDocked)
                );
              }}
              iconType={navIsDocked ? 'lock' : 'lockOpen'}
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
      </EuiFlexItem>
    </EuiCollapsibleNav>
    </div>
  );
}

export default SideNav;