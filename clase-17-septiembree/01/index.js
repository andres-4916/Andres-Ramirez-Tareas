const IPFS = require("ipfs-mini");

const ipfs = new IPFS({host: 'ipfs.infura.io', port:5001, protocol:'https'});

const data = "Data in the interplanetary file system IPFS";

ipfs.add(data, (err,hash)=> {

    if(err){https

    return console.log(err);

    }

    console.log('https://ipfs.infura.io/ipfs/'+hash)

})
