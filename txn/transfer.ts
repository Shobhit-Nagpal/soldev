import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

const transaction = new Transaction();

const suppliedToPubKey = process.argv[2] || null;

if (!suppliedToPubKey) {
  console.error("Supply public key please");
  process.exit(1);
}

const sendKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubKey: ${suppliedToPubKey}`);

const toPubkey = new PublicKey(suppliedToPubKey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log("Connected");

const txn = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstructions = SystemProgram.transfer({
  fromPubkey: sendKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND

});

transaction.add(sendSolInstructions);

const signature = await sendAndConfirmTransaction(connection, txn, [sendKeypair]);

console.log(`Sent ${LAMPORTS_TO_SEND} to address ${toPubkey}`);
console.log(`Txn signature: ${signature}`);
