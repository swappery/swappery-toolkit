import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box, FlexProps } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import { Footer } from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../hooks";
import { SwprPrice } from "../../components/SwprPrice";
// import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import { MenuContext } from "./context";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Button } from "../../components/Button";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
  transform: translate3d(0, 0, 0);
`;

const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  transition: top 0.2s;
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Logo = styled.a<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.logoBackground};
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: medium;
  font-weight: 600;
`;

const MenuItemsWrapper = styled(MenuItems)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.navBarBackground};
`;

const UserMenu = styled(Flex)<FlexProps>`
  align-items: center;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.navBarBackground};
`;

const MobileMenu = styled(Flex)`
  align-items: center;
  gap: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.navBarBackground};
  width: 100%;
  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
`;

const ShowMobileMenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow300};
  border: none;
  height: 40px;
  width: 40px;
  font-size: 18px;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.cyan};
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const MobileMenuItemsWrapper = styled(MenuItems)<{ menuHeight: number; showMenu: boolean }>`
  position: fixed;
  top: ${({ menuHeight }) => `${menuHeight}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-top: 0px;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.navBarBackground};
  z-index: 10;
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  linkComponent = "a",
  banner,
  isDark,
  toggleTheme,
  swprPriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = MENU_HEIGHT;

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer>
          {banner && <TopBannerContainer height={topBannerHeight}>{banner}</TopBannerContainer>}
          <StyledNav>
            <Flex width={["50%", null, null, "67%"]} height="100%">
              {isMobile ? (
                <MobileMenu>
                  <ShowMobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}> | | |</ShowMobileMenuButton>
                  {userMenu}
                </MobileMenu>
              ) : (
                <>
                  <Logo width="50%" href="/">
                    THE SWAPPERY
                  </Logo>
                  <MenuItemsWrapper items={links} activeItem={activeItem} activeSubItem={activeSubItem} width="50%" />
                </>
              )}
            </Flex>
            <UserMenu
              alignItems="center"
              justifyContent="space-between"
              height="100%"
              width={["50%", null, null, "33%"]}
            >
              {!isMobile && userMenu}
              <Box mr="12px">
                <SwprPrice swprPriceUsd={swprPriceUsd} />
              </Box>
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </UserMenu>
          </StyledNav>
        </FixedContainer>
        {isMobile && showMobileMenu && (
          <MobileMenuItemsWrapper
            menuHeight={totalTopMenuHeight}
            showMenu={showMobileMenu}
            items={links}
            activeItem={activeItem}
            activeSubItem={activeSubItem}
            width="100%"
          />
        )}

        {subLinks && (
          <Flex justifyContent="space-around">
            <SubMenuItems items={subLinksWithoutMobile} mt={`${totalTopMenuHeight + 1}px`} activeItem={activeSubItem} />

            {subLinksMobileOnly?.length > 0 && (
              <SubMenuItems
                items={subLinksMobileOnly}
                mt={`${totalTopMenuHeight + 1}px`}
                activeItem={activeSubItem}
                isMobileOnly
              />
            )}
          </Flex>
        )}
        <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}>
          <Inner isPushed={false} showMenu={showMobileMenu}>
            {children}
            <Footer items={footerLinks} mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]} />
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
