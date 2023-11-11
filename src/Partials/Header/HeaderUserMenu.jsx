import React,{ useState } from "react"
import { 
  EuiText,EuiAvatar, 
  EuiFlexGroup, EuiFlexItem,
  EuiHeaderSectionItemButton, 
  EuiLink,
  EuiPopover, EuiSpacer,
  useGeneratedHtmlId 
} from "@elastic/eui";

function HeaderUserMenu()  {
    const headerUserPopoverId = useGeneratedHtmlId({
      prefix: 'headerUserPopover',
    });
    const [isOpen, setIsOpen] = useState(false);
  
    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerUserPopoverId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={onMenuButtonClick}
      >
        <EuiAvatar name="Anuj Sali" size="m" />
      </EuiHeaderSectionItemButton>
    );
  
    
  
    return (
      <EuiPopover
        id={headerUserPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
        panelPaddingSize="none"
      >
        <div style={{ width: 300 }}>
          <EuiFlexGroup
            gutterSize="m"
            className="euiHeaderProfile"
            responsive={true}
          >
            <EuiFlexItem grow={false}>
              <EuiAvatar name="Anuj Sali" size="xl" color="#000000" iconColor="#BD10E0"/>
            </EuiFlexItem>
  
            <EuiFlexItem>
              <EuiText>
                <p>Anuj Sali</p>
              </EuiText>
  
              <EuiSpacer size="m" />
  
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem grow={false}>
                      <EuiLink>Edit profile</EuiLink>
                    </EuiFlexItem>
  
                    <EuiFlexItem grow={false}>
                      <EuiLink>Log out</EuiLink>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </EuiPopover>
    );
  };

export default HeaderUserMenu;