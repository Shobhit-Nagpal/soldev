import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

const genKeys = Keypair.generate();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Gottem");

