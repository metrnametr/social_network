let wallets = [
  {
    id: '1',
    name: 'name wallet',
    count: '10000',
    tags: ['Зарплата', 'Проценты', 'Вещи'],
    typeCurrency: 'USD',
    typeCash: 'money'
  }
];

class WalletsModel{
  constructor() {

  }

  static getWallets(){
    return new Promise((res, rej) => {
      res(JSON.stringify(wallets));
    });
  }

  static getWallet(id){
    return new Promise((res, rej) => {
      const wallet = wallets.find(wallet => wallet.id === id);
      res(wallet);
    });
  }

  static postWallet(data){
    return new Promise((res, rej) => {
      const item = { ...data, id: `${Math.random()}` };
      wallets.push(item);
      res(item);
    });
  }

  static deleteWallet(id){
    return new Promise((res, rej) => {
      const wallet = wallets.find(wallet => wallet.id === id);
      wallets = wallets.filter(wallet => wallet.id !== id);
      res(wallet);
    });
  }

  static putWallet(id, data){
    return new Promise((res, rej) => {
      const idx = wallets.findIndex(wallet => wallet.id === id);
      wallets = [
        ...wallets.slice(0, idx),
        { ...data, id },
        ...wallets.slice(idx + 1)
      ];
      res(wallets);
    });
  }
}

module.exports = WalletsModel;