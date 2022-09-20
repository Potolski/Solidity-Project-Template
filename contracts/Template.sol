// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Template is ERC721, Ownable {
    constructor() ERC721("TokenName", "TokenSymbol") {}
}
