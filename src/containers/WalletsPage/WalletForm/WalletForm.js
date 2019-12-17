import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Select, Input, InputNumber, Collapse } from 'antd';
import { map, keys } from 'lodash';
import { currencySymbols } from '../Common';
import './style.scss';

const WalletFormInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WalletFormInput = styled(Input)`
    width: 300px;
`;

const WalletForm = (props) => {
  const { 
    form,
    form: { 
      getFieldDecorator,
      getFieldValue,
      getFieldsValue
    },
    submitted,
    formRef,
    loading,
    wallet
  } = props;

  const typeCurrency = getFieldValue('typeCurrency') || 'USD';
  if (submitted) {
    // props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    // onSumbit(getFieldsValue());
  }
  
  const savedForm = useRef();

  useEffect(() => {
    formRef.current = form;
  }, [form]);

  useEffect(() => {
    formRef.current.resetFields();
  }, [wallet]);

  const {
    name,
    count,
    tags,
    typeCurrency: { fetchCurrency } ,
    typeCash
  } = wallet || { name: '', count: '', tags: '', typeCurrency: [], typeCash: '' };

  return (
    <Form onSubmit={ () => console.log('db') } style={ { padding: '20px' } }>
      <WalletFormInputContainer>
        <Form.Item label="Имя кошелька">
          {
            getFieldDecorator('name', {
              initialValue: name || ''
            })(
              <WalletFormInput style={ { marginRight: '20px' } } />
            )
          }
        </Form.Item>
        <Form.Item label="На счету">
          {
            getFieldDecorator('count', {
              initialValue: count || '1000'
            })(
              <InputNumber
                style={ { width: '300px' } }
                formatter={ value => `${currencySymbols[typeCurrency]} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                parser={ value => value.replace(/\$\s?|(,*)/g, '') }
              />
            )
          }
        </Form.Item>
      </WalletFormInputContainer>
      <Form.Item style={ { width: '100%' } } label="Тип пополнений">
        {
          getFieldDecorator('tags', {
            initialValue: tags || 'Зарплата'
          })(
            <Select mode="tags">
              <Select.Option value="Зарплата">
                  Зарплата
              </Select.Option>
              <Select.Option value="Проценты">
                  Банковские проценты
              </Select.Option>
            </Select>
          )
        }
      </Form.Item>
      <WalletFormInputContainer>
        <Form.Item label="Тип валюты">
          {
            getFieldDecorator('typeCurrency', {
              initialValue: fetchCurrency || 'USD'
            })(
              <Select style={ { width: '300px' } }>
                {
                  map(keys(currencySymbols), (key) => (
                    <Select.Option key={ key } value={ key }>
                      { `${key} ${currencySymbols[key]}` }
                    </Select.Option>
                  ))
                }
              </Select>
            )
          }
        </Form.Item>
        <Form.Item style={ { width: '100%', marginLeft: '20px' } } label="Тип средств">
          {
            getFieldDecorator('typeCash', {
              initialValue: typeCash || 'money'
            })(
              <Select>
                <Select.Option value="money">
                Наличные
                </Select.Option>
                <Select.Option value="creditCard">
                Кредитная карта
                </Select.Option>
              </Select>
            )
          }
        </Form.Item>
      </WalletFormInputContainer>
      <Collapse>
        <Collapse.Panel header="Настройки">
            werwerw
        </Collapse.Panel>
      </Collapse>
    </Form>
  );
};

export default Form.create()(WalletForm);