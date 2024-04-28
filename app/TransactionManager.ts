import AsyncStorage from "@react-native-async-storage/async-storage";

export class TransactionManager{
    /*
        Generate a transaction to be sent to peer-node.
        @param walletID the address to send orcacoin to
        @param amount how much orcacoin to send
    */
    public static async GenerateTransaction(walletID : string, amount : number) : Promise<string>{
        let privKey = await AsyncStorage.getItem("privateKey");
        let pubKey = await AsyncStorage.getItem("publicKey");

        if(!privKey || !pubKey){
            throw new Error("KEYS NOT FOUND");
        }

        let transaction : Uint8Array = this.generateTransactionBytes(amount, walletID);

        const transactionWrapper: TransactionWrapper = {
            bytes: transaction, //TODO sign this with private key
            transaction: transaction,
            public_key: pubKey,
        };

        return JSON.stringify(transactionWrapper);
    }


    //MAY BE SUBJECT TO CHANGE WHEN LINKING WITH BLOCKCHAIN
    private static generateTransactionBytes(price: number, recipient : string): Uint8Array {
        const timestamp = new Date().toISOString(); // Get current timestamp in ISO 8601 format
      
        const jsonData: Transaction = {
            price: price,
            timestamp: timestamp,
            uuid: recipient,
        };

        const jsonString = JSON.stringify(jsonData);
        const jsonBytes = new TextEncoder().encode(jsonString); // Convert string to Uint8Array
        return jsonBytes;
      }
}

interface Transaction {
    price: number;
    timestamp: string;
    uuid: string;
}

interface TransactionWrapper {
    bytes: Uint8Array;
    transaction: Uint8Array;
    public_key: string;
}