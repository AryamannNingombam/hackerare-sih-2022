import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export const UploadOnIPFS = (file) => {
  try {
    const added = await client.add(file);
    const url = `https://ipfs.infura.io/ipfs/${added.path}`;
    return url;
  } catch (error) {
    console.log("File ain`t uploading..", error);
  }
};
