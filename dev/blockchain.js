function Blockchain() {
    this.chain = [];
    this.newTrans = [];
}

Blockchain.prototype.createNewBlock = function(nonce, prevBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        trans: this.newTrans,
        nonce: nonce,
        hash: hash,
        prevBlockHash: prevBlockHash
    };

    this.newTrans = [];
    this.chain.push(newBlock);

    return newBlock;

}

Blockchain.prototype

module.exports = Blockchain;