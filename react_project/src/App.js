import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';





function checkRate(inputData) {
　　var re = /^[0-9]+.?[0-9]*$/;

　　if (!re.test(inputData)) {
　　　　alert("please input numbers");
　　　　return false;
　　}
    return true;
}
class App extends Component {

  state = {
    managerAddress : '',
    players:[],
    balance:'',
    value:'',
    message:''
  }
  //life cycle function, it calls when render being called
  async componentDidMount(){
    //it calls the getter function of public manager/players declared by Contract
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    //the render function will be call again once state changed
    this.setState({managerAddress:manager,players,balance});
    //0x12F35167617906786b8DB438e5eA2754a63c8758

    //8888
    const accounts = await web3.eth.getAccounts();
    console.log(web3.version);
    console.log("Current default: " + web3.eth.defaultAccount);
    console.log(accounts);
    console.log('start to output account length');
    console.log(accounts.length);

    if (web3.currentProvider.isMetaMask == true)
      console.log('metamask availabel');
      else {
        console.log('metamask not availabel');
      }

  }


  onClick = async() =>{
    const accounts =await web3.eth.getAccounts();
    this.setState({message:'waiting for the result'});
    await lottery.methods.pickwiner().send({from:accounts[0]});
    this.setState({message:'winner shows'});
  }




  onSubmit = async event =>{
    //prevent the browser to refresh or re-direct
    event.preventDefault();
    var ret = checkRate(this.state.value);
    if(!ret) return;


    const accounts = await web3.eth.getAccounts();

    this.setState({message:'waiting for the deal'});



    //because the value of send api needs wei, so need to change to wei from ether
    await lottery.methods.enter().send({from:accounts[0], value:web3.utils.toWei(this.state.value, 'ether')});

     // console.log('start to output the first account :');
     // console.log(accounts[0]);

    this.setState({message:'checked in OK'});
  }
  render() {
    //console.log(web3.version);


    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1>hello sky</h1>
      //     <p>this is manged by {this.state.managerAddress}</p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      /*
      <img id="hdFirstImgObj" onload="alog &amp;&amp; alog('speed.set', 'c_imgobjshow', +new Date); alog.fire &amp;&amp; alog.fire('mark'); speed &amp;&amp; speed.mark('firstSc');" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1553829632&amp;di=2085f67a2089ac90becc626c55459915&amp;src=http://pic49.nipic.com/file/20140923/6608733_115258312000_2.jpg" data-ispreload="1" data-clicktime="1553829770095" data-israndom="1903" data-isala="1" style="display: none;">
      */
      //<img id="s_lg_img" class="s_lg_img_gold_show" src="//www.baidu.com/img/bd_logo1.png?where=super" width="270" height="129" usemap="#mp">
      <div>
        <header className="App-header-customized">

      <img id="s_lg_img" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1553829632&amp;di=2085f67a2089ac90becc626c55459915&amp;src=http://pic49.nipic.com/file/20140923/6608733_115258312000_2.jpg" width="400" height="300">
      </img>
      </header>
        <div  className="App">
        <h1>lottery manager address : </h1>
        <p>this is managed by {this.state.managerAddress}</p>
        <p>currently candidate : {this.state.players.length}</p>
        <p>currently money pool : {web3.utils.fromWei(this.state.balance, 'ether')} ether</p>
        </div>

          <hr/>
          <form onSubmit={this.onSubmit} className="App">
            <h4>Do you wanna join us?</h4>
              <div>
                <label>money:</label>
                <input
                  value={this.state.value}
                  onChange={event=>{this.setState({value:event.target.value})}}
                />
              </div>
              <button>submit</button>
          </form>

          <hr/>
            <h4 className="App">who wins?</h4>
            <div className="App">
            <button onClick={this.onClick}  >start games</button>
            </div>
          <p className="App">{this.state.message}</p>

       </div>
    );
  }
}

export default App;
