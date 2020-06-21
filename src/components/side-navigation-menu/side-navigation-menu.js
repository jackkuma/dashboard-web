import React, { useRef, useCallback } from 'react';
import AccordionItem from './Accordion';
import NavigationMenu from './navigation-menu';
import DatePick from './date-picked';

import './side-navigation-menu.scss';
import './date-pick.css';
import * as events from 'devextreme/events';

export default function (props) {
  const {
    children,
    openMenu,
  } = props;

  const wrapperRef = useRef();
  const getWrapperRef = useCallback((element) => {
    const prevElement = wrapperRef.current;
    if (prevElement) {
      events.off(prevElement, 'dxclick');
    }

    wrapperRef.current = element;
    events.on(element, 'dxclick', e => {
      openMenu(e);
    });
  }, [openMenu]);

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div className={'menu-container'}>
        <AccordionItem />
      </div>
      <div className={'menu-container'}>
        <DatePick />
      </div>
      <div className={'menu-container'}>
        <NavigationMenu />
      </div>
    </div>
  );
}
