# ERC721 Minting - Dapp

By cloning this repository, you can instantly create a mint application of ERC721 minting.

## Overview

This application uses the [bunzz-sdk](https://www.npmjs.com/package/bunzz-sdk) to communicate smart contact.

For detailed instructions on how to use bunzz-sdk, see [here](https://www.npmjs.com/package/bunzz-sdk).

## Getting Started

### 1. Clone

```bash
$ git clone https://github.com/mapachemirlo/erc-721-minting-react-v1.git
$ cd erc-721-minting-react-v1
```

### 2. Create your DApp with Bunzz

For this application, you need to deploy "NFT (IPFS Mitable)" smart contract at a minimum.

### 3. Get DApp ID and API Key

When you have finished creating your DApp project and deploying smart contract, copy the **API key** and **DApp ID**.


```bash
# Create .env file
$ touch .env
```

Contents of `.env` file↓
Please replace YOUR_DAPP_ID and YOUR_API_KEY with values that you copied.
```
REACT_APP_DAPP_ID=YOUR_DAPP_ID
REACT_APP_API_KEY=YOUR_API_KEY
```

### 4. Create NFT Storage


Let's add `REACT_APP_NFT_STORAGE_KEY` to `.env` file.
```
...
REACT_APP_NFT_STORAGE_KEY=YOUR_NFT_STORAGE_KEY
```

### 5. Start application

```bash
$ yarn install
$ yarn start
```

### 6. Try to use application

Now let's mint the NFT. Enter the "Token Name", "description" and "image" in Step 1.
When you are done, press the "mint" button.

Minting creates an NFT on the blockchain.
This application stores NFT metadata in IPFS.

Then let's fetch the NFT you created. Below the mint button, you can see the ID. Please enter this ID to form in Step2 and press the "get" button.

You can see the NFT you created.
