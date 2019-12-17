import React from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';

const WalletFormEdit = (props) => {
  const { formRef, form, initialValue, getFieldDecorator } = props;
  formRef.current = form;

  const { name } = initialValue;
  return (
    <Form>
      <Form.Item>
        {
          getFieldDecorator('name', {
            initialValue: name
          })(
            <Input
              style={ { width: '300px' } }
            />
          )
        }
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WalletFormEdit);