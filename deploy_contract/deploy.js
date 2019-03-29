const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'recycle diamond reward swift insect fault suit measure friend bundle dinosaur observe',
  'https://ropsten.infura.io/v3/2ec2a1f3b4714294907cd7bd4ae1d3ef'
);
const web3 = new Web3(provider);
var helloworld;

// async function testDeplopy () {
//   const Web4 = require('web3aaa');
//   const accounts = await web3.eth.getAccounts();
//   aconsole.log('Attemp to deploy contract', accounts[0]);
// };
// testDeplopy();

const deploy = async()=>{
  console.log(interface);
  const accounts = await web3.eth.getAccounts();
  //const Web4 = require('web3aaa');
  //console.log('Attemp to deploy contract', accounts[0]);
  //0x12F35167617906786b8DB438e5eA2754a63c8758
  //helloworld = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:'0x' + bytecode,arguments:['sky']}).send({from:accounts[0],gas:'1000000'});
  console.log('account : '+accounts[0]);
  console.log('web3 version : '+web3.version);
  helloworld = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:'0x' + bytecode}).send({from:accounts[0],gas:'1000000'});
  //下载这个是答应出当前合约部署的目标地址
  console.log('contract deployed to', helloworld.options.address);

};
deploy();

// beforeEach(async()=>{
//   const accounts = await web3.eth.getAccounts();
//   aconsole.log('Attemp to deploy contract', accounts[0]);
// })
// describe('deploy test',()=>{
//   it('Attemp to deploy contract', ()=>{
//     //var me = new person();
//
//   })
// })
