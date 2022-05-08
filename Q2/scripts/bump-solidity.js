const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
let groth_content = fs.readFileSync("./contracts/MultiplierVerifier.sol", { encoding: 'utf-8' });
let plonk_content = fs.readFileSync("./contracts/PlonkVerifier.sol", { encoding: 'utf-8' });

let bumped_groth = groth_content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_groth = bumped_groth.replace(verifierRegex, 'contract MultiplierVerifier');



let bumped_plonk = plonk_content.replace(solidityRegex, 'pragma solidity ^0.8.0');

fs.writeFileSync("./contracts/MultiplierVerifier.sol", bumped_groth);

fs.writeFileSync("./contracts/PlonkVerifier.sol", bumped_plonk);
