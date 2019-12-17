const route = require('express').Router();
const WalletsModel = require('../models/WalletsModel');

route.get('/wallets', async (req, res) => {
  try {
    const wallets = await WalletsModel.getWallets();
    res.send(wallets);
  } catch(e) {
    console.log(e);
  }
});

route.get('/wallets/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const wallet = await WalletsModel.getWallet(id);
    res.send(wallet);
  } catch(e) {
    console.log(e);
  }
});

route.post('/wallets/create', async (req, res) => {
  const { body } = req;
  console.log(body);
  try{
    const postData = await WalletsModel.postWallet(body);
    res.send(postData);
  } catch(e) {
    console.log(e);
  }
});

route.delete('/wallets/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const deleteData = await WalletsModel.deleteWallet(id);
    res.send(deleteData);
  } catch(e) {
    console.log(e);
  }
});

route.put('/wallets/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body)
  try{
    const wallets = await WalletsModel.putWallet(id, body)
    res.send(wallets);
  } catch(e) {
    console.log(e);
  }
});


module.exports = route;