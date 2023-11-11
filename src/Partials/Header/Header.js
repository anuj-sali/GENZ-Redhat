import React from "react"
import { 
  EuiText,EuiHeader,
  useEuiTheme, EuiImage,
  EuiHeaderSectionItemButton,
  EuiIcon, EuiToolTip
} from "@elastic/eui";
import SideNav from "../SideNavigation/SideNav.jsx";
import  HeaderUserMenu  from "./HeaderUserMenu.jsx";
import  logo  from "../../Images/logo.png"

function Header(){

  const { euiTheme }=useEuiTheme();

  var logoclass={
    color:euiTheme.colors.emptyShade
  }

  const siteName = (
    <EuiText >
      <span className={"mt-1 fs-3"} style={logoclass}>&nbsp;| Mart</span>
    </EuiText>
  );

  const infyLogo=(
    <EuiImage
  src={logo}
  alt="image_alt"
  size={100}
  float="left"
  />
  )

  const helpButton=(
    <EuiHeaderSectionItemButton
      aria-label="Help Button"
    >
      <EuiToolTip
      position="bottom"
      content={
        <p>
          Click here to know more about "Infy Mart".
        </p>
      }
    >
      <EuiIcon type="questionInCircle" size="xxl" />
    </EuiToolTip>
      
    </EuiHeaderSectionItemButton>
  )

  const sections = [
    {
      items: [<SideNav/>,infyLogo,siteName],
      borders: 'right'
    },
    {
      items:[<HeaderUserMenu/>,helpButton],
      borders:'right'
    }
  ]

  return (
     <> 
        <EuiHeader position="fixed" theme='dark' style={{zIndex:5999, height:"56px"}} sections={sections} />
        {/* <EuiHeader position="fixed" theme='dark' style={{zIndex:5999}} sections={sections} /> */}
    </>

  );
}




export default Header;

