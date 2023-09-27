// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.10;

/**
 * @title Account
 * @dev This contract represents an account that can receive, hold and transfer Ether.
 */
contract Account {
    address public owner;

    event Withdrawal(address indexed recipient, uint256 amount);
    event Deposit(address indexed sender, uint256 amount);
    event Transfer(address indexed EOA, address indexed from, address indexed to, uint256 amount);

    /**
     * @dev Initializes the contract by setting the owner to the deployer's address.
     */
    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev Emits a Transfer event when a transfer is made.
     * @param from The address of the sender.
     * @param to The address of the recipient.
     * @param amount The amount of Ether transferred.
     */
    function logTransfer(address from, address to, uint256 amount) public {
        emit Transfer(msg.sender, from, to, amount);
    }

    /**
     * @dev Deposits funds into the Account through an EOA.
     */
    function deposit() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @dev Withdraws the current amount of Ether and sends it to the EOA.
     * @param amount The amount of Ether to withdraw.
     */
    function withdraw(uint256 amount) external {
        require(msg.sender == owner, 'Only the owner can withdraw');
        require(address(this).balance >= amount, 'Insufficient balance');

        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    /**
     * @dev Transfers Ether to a specified recipient.
     * @param to The address of the recipient.
     * @param amount The amount of Ether to transfer.
     */
    function transfer(address to, uint256 amount) external {
        require(to != address(0), 'Invalid recipient address');
        require(address(this).balance >= amount, 'Insufficient balance');

        payable(to).transfer(amount);
        logTransfer(address(this), to, amount);
    }

    /**
     * @dev Fallback function to receive funds.
     */
    receive() external payable {}

    /**
     * @dev Returns the current balance of the Account.
     * @return The current balance of the Account.
     */
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    /**
     * @dev Returns the address of the Account.
     * @return The address of the Account.
     */
    function getAddress() external view returns (address) {
        return address(this);
    }
}

/**
 * Currently the EOA that owns this contract calls all the functions. This obviously does not scale in terms of cost and efficiency.
 * There should be a network of EOAs that can all execute transactions. There should be an equivalent to a laod balancer that evenly distributes the requests.
 */
