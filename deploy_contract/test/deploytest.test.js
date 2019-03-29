const assert = require('assert');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('../compile');
const provider = new HDWalletProvider(
  'recycle diamond reward swift insect fault suit measure friend bundle dinosaur observe',
  'ropsten.infura.io/v3/2ec2a1f3b4714294907cd7bd4ae1d3ef'
);
const web3 = new Web3(provider);


// const deploy = async()=>{
//   const accounts = await web3.eth.getAccounts();
//   aconsole.log('Attemp to deploy contract', accounts[0]);
//   const Web4 = require('web3aaa');
// };
// deploy();

beforeEach(async()=>{
  const accounts = await web3.eth.getAccounts();
  aconsole.log('Attemp to deploy contract', accounts[0]);
})
describe('deploy test',()=>{
  it('Attemp to deploy contract', ()=>{
    //var me = new person();
    assert.equal('eat', 'eat');
  })
})
