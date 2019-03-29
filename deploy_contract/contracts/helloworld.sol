pragma solidity ^0.4.25;
//pragma solidity ^0.5.6;

contract HelloWorld{
  string public name;

  constructor(string _name) public{
    name = _name;
  }
  function getname()  view public returns(string){
      return name;
  }
  function changename(string _name) public{
    name = _name;
  }


}
