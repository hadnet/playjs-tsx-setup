import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import {IoIosSunny, IoIosMoon} from 'react-icons/io';

type P = {
  onChange: () => void;
  checked: boolean;
  icon?: boolean;
};

export default class extends React.PureComponent<P> { 
  render() {
    let icon = this.props.icon ? true : false;
    return (
      <Label>
        <Switch {...this.props} 
          checkedIcon={<Moon />} 
          uncheckedIcon={<Sunny />} 
        />
      </Label>
    );
  }
}

const
Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,
Caption = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
`,
iconStyle = `
  position: absolute; 
  top: 6px;
  left: 6px;
`,
Moon = styled(IoIosMoon)`
 ${iconStyle}
`,
Sunny = styled(IoIosSunny)`
  ${iconStyle}
`;
