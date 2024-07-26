import Drawer from 'devextreme-react/drawer';
import ScrollView from 'devextreme-react/scroll-view';
import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  Header,
  SideNavigationMenu,
  Footer,
  ZaloBoxModal,
  ChatBox,
} from '../../components';
import './side-nav-outer-toolbar.scss';
import { useScreenSize } from '../../utils/media-query';
import { Template } from 'devextreme-react/core/template';
import { useMenuPatch } from '../../utils/patches';
import { Button } from 'reactstrap';
import { addMessageImage, zaloImage } from '../../constants/image';
import { texts } from '../../utils/chat';

export default function SideNavOuterToolbar({ title, children }) {
  const scrollViewRef = useRef(null);
  const navigate = useNavigate();
  const { isXSmall, isLarge } = useScreenSize();
  const [patchCssClass, onMenuReady] = useMenuPatch();
  const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Opened : MenuStatus.Closed
  );
  const [isAddMessageVisible, setAddMessageVisible] = useState(false);
  const [isZaloBoxVisible, setZaloBoxVisible] = useState(false);
  const [chatTexts, setChatTexts] = useState(texts);

  const toggleMenu = useCallback(({ event }) => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.Opened
        : MenuStatus.Closed
    );
    event.stopPropagation();
  }, []);

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.TemporaryOpened
        : prevMenuStatus
    );
  }, []);

  const onOutsideClick = useCallback(() => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus !== MenuStatus.Closed && !isLarge
        ? MenuStatus.Closed
        : prevMenuStatus
    );
    return menuStatus === MenuStatus.Closed ? true : false;
  }, [isLarge, menuStatus]);

  const onNavigationChanged = useCallback(
    ({ itemData, event, node }) => {
      if (menuStatus === MenuStatus.Closed || !itemData.path || node.selected) {
        event.preventDefault();
        return;
      }

      navigate(itemData.path);
      scrollViewRef.current.instance.scrollTo(0);

      if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
        setMenuStatus(MenuStatus.Closed);
        event.stopPropagation();
      }
    },
    [navigate, menuStatus, isLarge]
  );

  const toggleZaloBox = useCallback(() => {
    setAddMessageVisible(false);
    setZaloBoxVisible(!isZaloBoxVisible);
  });

  const toggleAddMessage = useCallback(() => {
    setZaloBoxVisible(false);
    setAddMessageVisible(!isAddMessageVisible);
  });

  const sendText = ({ text, user }) => {
    const newMessage = {
      user,
      text,
      time: new Date().toLocaleTimeString(),
    };
    setChatTexts([...chatTexts, newMessage]);
  };

  return (
    <div className={'side-nav-outer-toolbar'}>
      <Drawer
        className={['drawer', patchCssClass].join(' ')}
        position={'before'}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={isLarge ? 'shrink' : 'overlap'}
        revealMode={isXSmall ? 'slide' : 'expand'}
        minSize={isXSmall ? 0 : 60}
        maxSize={250}
        shading={isLarge ? false : true}
        opened={menuStatus === MenuStatus.Closed ? false : true}
        template={'menu'}
      >
        <Header menuToggleEnabled toggleMenu={toggleMenu} title={title} />
        <div className={'container'}>
          <ScrollView ref={scrollViewRef} className={'layout-body with-footer'}>
            <div className={'content'}>
              {React.Children.map(children, (item) => {
                return item.type !== Footer && item;
              })}
            </div>
            <div className={'content-block'}>
              {React.Children.map(children, (item) => {
                return item.type === Footer && item;
              })}
            </div>
          </ScrollView>
        </div>
        <Template name={'menu'}>
          <SideNavigationMenu
            compactMode={menuStatus === MenuStatus.Closed}
            selectedItemChanged={onNavigationChanged}
            openMenu={temporaryOpenMenu}
            onMenuReady={onMenuReady}
          ></SideNavigationMenu>
        </Template>
      </Drawer>
      <div className='rung-img-wrapper' style={{ bottom: '115px' }}>
        <div className='pulsating-circle-red'></div>
        <img
          onClick={toggleAddMessage}
          className='image-icon rung-img'
          src={addMessageImage}
          style={{ borderRadius: '50%', objectFit: 'fill' }}
        />
      </div>
      <div className='rung-img-wrapper' style={{ bottom: '50px' }}>
        <div className='pulsating-circle'></div>
        <img
          onClick={toggleZaloBox}
          className='image-icon rung-img'
          src={zaloImage}
          style={{ borderRadius: '50%', objectFit: 'fill' }}
        />
      </div>
      <div>
        {isZaloBoxVisible && (
          <div className='modal-container'>
            <ZaloBoxModal />
          </div>
        )}
        {isAddMessageVisible && (
          <div className='modal-container'>
            <ChatBox
              texts={chatTexts}
              sendText={sendText}
              minimizeChatBox={() => setAddMessageVisible(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const MenuStatus = {
  Closed: 1,
  Opened: 2,
  TemporaryOpened: 3,
};
