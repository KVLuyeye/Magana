// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.10;

contract Account {
    address public owner;

    event Withdrawal(address indexed recipient, uint256 amount);
    event Deposit(address indexed sender, uint256 amount);
    event Transfer(
        address indexed sender,
        address indexed recipient,
        uint256 amount
    );

    constructor() {
        owner = msg.sender;
    }

    // Deposit funds into the Account through an EOA
    function deposit() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Function withdraws the current amount of ETH and sends it to the EOA
    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Only the owner can withdraw");
        require(address(this).balance >= amount, "Insufficient balance");

        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    function transfer(address recipient, uint256 amount) external {
        require(recipient != address(0), "Invalid recipient address");
        require(address(this).balance >= amount, "Insufficient balance");

        payable(recipient).transfer(amount);
        emit Transfer(msg.sender, recipient, amount);
    }

    // Fallback function to receive funds
    receive() external payable {}

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    function getAddress() external view returns (address) {
        return address(this);
    }

    /**
     * Currently the EOA that owns this contract calls all the functions. This obviously does not scale in terms of cost and efficiency.
     * There should be a network of EOAs that can all execute transactions. There should be an equivalent to laod balancer that evenly distributes the requests.
     */
}
