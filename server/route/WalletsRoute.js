const route = require('express').Router();
const WalletsModel = require('../models/WalletsModel');

const tunnel = require('tunnel');
const axios = require('axios');

const request = require('request')

const fs = require('fs');

const tunnelingAgent = tunnel.httpsOverHttp({
  proxy: {
    host: 'localhost',
    port: 8080
  },
  headers: {
    'User-Agent': 'Node'
  }
});

route.get('/wallets', async (req, res) => {
  fetchData();
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
  console.log(body);
  try{
    const wallets = await WalletsModel.putWallet(id, body);
    res.send(wallets);
  } catch(e) {
    console.log(e);
  }
});


const fetchData = async () => {
  const post = await axios.get('https://www.tiktok.com/@mariamateu/video/6775097456058256645', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
    },
  });
  // function callback(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body)
  //   }
  // }
  // const post = request({
  //   url: 'https://www.tiktok.com/@mariamateu/video/6775097456058256645',
  //   headers: {
  //     'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
  //   }
  // }, callback)
  // const startIndex = post.data.search(/video-card default/);
  const startIndex = post.data.search(/<video playsinline="" loop="" src=/);
  const data = post.data.slice(startIndex, startIndex + 500);
  const dataItemLink = data.split('"').find(parseLink => parseLink.match(/https/));
  
   request({
    url: `${dataItemLink}`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
    }
  }).pipe(fs.createWriteStream('my_item.mp4'))

  const video = await axios.get(`${dataItemLink}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
    },
  });
  // const res = await fs.createWriteStream(`${__dirname}/my_item.mp4`, video.data);
  // console.log(res);
  // console.log(video.data)
};


module.exports = route;