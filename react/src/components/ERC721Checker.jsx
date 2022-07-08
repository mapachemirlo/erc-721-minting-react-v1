import { useState } from "react";

export const ERC721Checker = ({ bunzz, userAddress }) => {
  const [tokenId, setTokenId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [onGoing, setOnGoing] = useState(false);

  const submit = async () => {
    setOnGoing(true);
    try {
      const contract = await bunzz.getContract("NFT (IPFS Mintable)");
      const { data: tokenUri } = await contract.tokenURI(tokenId);
      const url = tokenUri.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/");
      const res = await fetch(url);
      const data = await res.json();
      setName(data.name);
      setDescription(data.description);
      setImage(data.image.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/"));
    } catch (err) {
      console.error(err);
    } finally {
      setOnGoing(false);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title">STEP 2</h1>
      <p className="description">Get your NFT</p>
      <input
        className="input"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        type="text"
      />
      {onGoing ? (
        <div className="center">Loading...</div>
      ) : (
        <button className="button-get" onClick={submit}>GET</button>
      )}
      
      {image ? <div className="image-container"><img src={image} alt="image"/></div> : <></>}
      {name ? <p className="nft-name">Name: {name}</p> : <></>}
      {description ? <p className="nft-description">Description: {description}</p> : <></>}
      
    </div>
  );
};
