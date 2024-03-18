import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

const genKeys = Keypair.generate();
console.log(genKeys.publicKey.toString());
console.log(genKeys.secretKey);

const pubKey = "E1vwtuWiSCqMuqSS6AdNur8GHBYRSCuhyoE6eBfpfnSM";
console.log("Gottem");

