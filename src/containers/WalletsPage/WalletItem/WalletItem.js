import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import numeral from 'numeral';
import { Icon, Popover, Form, Input, InputNumber, Select } from 'antd';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { primaryColor, successColor, warningColor, borderColorBase, errorColor, textColor } from '../../../theme';
import { deleteWallet } from '../../../actions';
import { currencySymbols } from '../Common';
import './style.scss';

// &:last-of-type {
//   margin-right: ${props => (props.isEven) ? 'auto' : 'inherit'};
//   margin-left: ${props => (props.isEven) ? '2%' : '0'};
// }

const WalletItemBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 1px solid ${borderColorBase};
    border-radius: 15px;
    padding: 30px;
    width: 32%;
    height: 250px;
    margin-bottom: 2%;
    color: ${textColor} !important;
    @media (max-width: 1285px) {
      width: 49%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const WalletTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.edit ? 'center': 'baseline'};
`;

const WalletTitle = styled.span`
  font-size: 1.3em;
  font-weight: 600;
`;

const WalletBalance = styled.span`

`;

const IconContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 0;
    border-bottom: 1px solid ${borderColorBase};
`;

const IconItem = styled.li`
    text-align: center;
    list-style: none;
    font-size: 20px;
    width: 33.3%;
    border-left: 1px solid ${borderColorBase};
    margin-bottom: 15px;
    cursor: pointer;
    &:first-of-type {
      border: 0;
    }
    &:hover {
      color: ${primaryColor};
    }
`;

const WalletType = styled.div`

`;

const WalletTypeCash = styled.div`

`;

const Tag = styled.span`
    padding: 5px;
    background: #eeeeee;
    margin-right: 3px;
    border-radius: 5px;
`;

const EditSuccessIcon = styled.div`
    display: ${props => props.edit ? 'flex' : 'none' };
    position: absolute;
    font-size: 50px;
    font-weight: 300;
    bottom: -20px;
    right: -20px;
    svg {
      border-radius: 50%;
      background: ${successColor};
      cursor: pointer;
    }
    color: white;
`;


const type_cash = {
  'money': 'наличные',
  'crediCard': 'кредитная карта'
};

const WalletItem = (props) => {
  const [edit, toggleEdit] = useState(false);
  const { id, name, count, typeCash, typeCurrency, tags, isEven, form: { getFieldDecorator } } = props;
  const dispatch = useDispatch();
  
  const [walletItem, toggleWalletItem] = useState({
    id,
    name,
    count,
    typeCash,
    typeCurrency,
    tags
  });

  const editWallet = (e) => {
    const { name } = e['_targetInst'].memoizedProps;
    const { target: { value } } = e;
    toggleWalletItem({
      ...walletItem,
      [name]: value ? value : ''
    });
  };

  return (
    <WalletItemBlock isEven={ isEven }>
      <IconContainer>
        <IconItem onClick={ () => dispatch({
          type: 'SET_SETTING_ID',
          payload: {
            id
          }
        }) }
        > <Icon type="setting" key="setting" /> </IconItem>
        <IconItem 
          onClick={ () => toggleEdit(!edit) }
        > {
            edit ? 
              <Icon style={ { color: errorColor} } type="close-circle" /> : <Icon type="edit" key="edit" /> 
          } 
        </IconItem>
        <Popover placement="bottom" content={ <div onClick={ () => dispatch(deleteWallet(id)) }>Delete</div> }>
          <IconItem>  <Icon type="ellipsis" key="ellipsis" /> </IconItem>
        </Popover>
      </IconContainer>
      {/* <Form> */}
        <WalletTextContainer edit={ edit }>
          <WalletTitle>
            {
              edit ? <Form.Item className="wallet-form__edit-input">
                {
                  getFieldDecorator('name', {
                    initialValue: name
                  })(
                    <Input />
                  )
                }
              </Form.Item>
                :
                name
            }
          </WalletTitle>
          <WalletBalance>
            {
              edit ? 
                <Form.Item className="wallet-form__edit-input">
                  {
                    getFieldDecorator('count', {
                      initialValue: count
                    })(
                      <InputNumber
                        formatter={ value => `${currencySymbols[typeCurrency]} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                        parser={ value => value.replace(/\$\s?|(,*)/g, '') }
                      />
                    )
                  }
                </Form.Item>
                :
                ( <>
                  <span>
                    {currencySymbols[typeCurrency]}
                  </span>
                  <span> 
                    {numeral(count).format('0.00')}
                  </span>
                </>
                )
            }
          </WalletBalance>
        </WalletTextContainer>
        <WalletTextContainer>
          <WalletTypeCash>
          Тип средств: <ContentEditable
            // style={{ display: 'inline' }}
              html={ walletItem.typeCash }
              tagName="span"
              name="typeCash"
              onChange={ editWallet }
              disabled={!edit}
              style={{ borderBottom: edit ? `2px solid ${primaryColor}` : '', padding: '3px' }}
                       />
            {/* <span contenteditable={ edit }>{type_cash[typeCash]}</span> */}
            {/* </ContentEditable> */}
          </WalletTypeCash>
        </WalletTextContainer>
        <WalletTextContainer>
          <WalletTypeCash>
  Тип пополнений: {
              !isEmpty(tags) && tags.map((tag, idx) => idx < 2 
                ? <Tag key={ tag }>{tag}</Tag> 
                : '')}
            {(!isEmpty(tags) && tags.length > 2) ? <Tag>+{tags.length - 2}</Tag> : ''}
          </WalletTypeCash>
        </WalletTextContainer>
        <div ontenteditable={ edit }>Последняя операция: <span>+3000</span></div>
        <EditSuccessIcon edit={ edit }><Icon type="check-circle" key="check-circle" /></EditSuccessIcon>
      {/* </Form> */}
    </WalletItemBlock>
  );
};

export default Form.create()(WalletItem);