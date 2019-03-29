// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// const assert = require('assert');
// //const helloworld = require('../compile'); //hellowrold.bytecode helloworld.interface
// const {bytecode,interface} = require('../compile');
// /*beforeEach(()=>{
//   //通过then来把异步函数，只要是web3得api都是异步函数，把他变成了同步等待，但是可以利用js一些新
//   //的特性来更好的解决这个问题
//   web3.eth.getAccounts().then(fetchAccounts=>{
//     console.log(fetchAccounts);
//   });
// });*/
// var helloworld;
// var fetchAccounts;
// var init = 0;
// beforeEach(async ()=>{
//   //通过then来把异步函数，只要是web3得api都是异步函数，把他变成了同步等待，但是可以利用js一些新
//   //的特性来更好的解决这个问题
//     if(1 == init)
//       return;
//     fetchAccounts = await web3.eth.getAccounts();
//     console.log(fetchAccounts);
//     //console.log(JSON.parse(interface));
//     //下面这个函数就是把合约部署到ganache的测试网络中去
//     helloworld = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:['sky']}).send({from:fetchAccounts[0],gas:'5000000'});
//     init = 1;
//
// });
//
// describe('HelloWorld',()=>{
//   it('deploy contract', ()=>{
//     //console.log(helloworld);
//     assert.ok(helloworld.options.address);
//   })
//
//   it('call dynamic function', async ()=>{
//     //console.log(helloworld);
//     await helloworld.methods.changename('yen').send({from:fetchAccounts[0],gas:'5000000'});
//     const message = await helloworld.methods.getname().call();
//     assert.equal('sky', message);
//   })
//
//   it('call static function', async ()=>{
//     //console.log(helloworld);
//     const message = await helloworld.methods.getname().call();
//     assert.equal('yen', message);
//   })
//
//
//
// })
