import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Modal } from 'antd';
import { withRouter } from 'react-router-dom';
import { createWallet, updateWallet } from '../../../actions';
import WalletForm from '../WalletForm';
import WalletFormInit from '../WalletsFormInit';
import './style.scss';

const AddWalletButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
    width: 32%;
    height: 250px;
    margin-bottom: 2%;
    cursor: pointer;
    @media (max-width: 1285px) {
      width: 49%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const AddWalletItem = (props) => {
  const id = useSelector(state => state.wallet.settigsWalletId);
  const [visibleModal, toggleVisibleModal] = useState(false || !!id);
  // const [submitted, toggleSubmit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleVisibleModal(!!id);
  }, [id]);


  const formRef = useRef();

  const onSumbit = async () => {
    const submitValue = formRef.current.getFieldsValue();
    const { tags } = submitValue;
    const newSubmitValue = {
      ...submitValue,
      tags: Array.isArray(tags) ? tags : [ tags ]
    };
    if (id) {
      dispatch(updateWallet(id, newSubmitValue));
      dispatch({
        type: 'CLEAR_SETTING_ID'
      });
    } else {
      dispatch(createWallet(newSubmitValue));
    }
    toggleVisibleModal(false);
    console.log(formRef);
  };
  
  const onCancel = () => {
    dispatch({
      type: 'CLEAR_SETTING_ID'
    });
    toggleVisibleModal(false);
  };

  return (
    <>
      <AddWalletButton onClick={ () => toggleVisibleModal(true) }>
        плус
      </AddWalletButton>
      <Modal 
        className="custom-modal" 
        destroyOnClose visible={ visibleModal } 
        onOk={ onSumbit } 
        onCancel={ onCancel }
      >
        { !id ? <WalletForm formRef={ formRef } /> :
          <WalletFormInit formRef={ formRef } id={ id } /> }
      </Modal>
    </>
  );
};

export default withRouter(AddWalletItem);