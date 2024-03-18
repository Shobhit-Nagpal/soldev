import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];

if (!suppliedPublicKey) {
  console.error("Run command as: npx esrun index.ts <public_key>")
  process.exit(1);
}

const connection = new Connection("http://api.devnet.solana.com", "confirmed");
const address = new PublicKey(suppliedPublicKey);
const balance = await connection.getBalance(address);
const balanceSol = balance / LAMPORTS_PER_SOL;

console.log(`Balance of ${address} is ${balanceSol}`);
console.log("Connected");
