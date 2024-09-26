// utils/pinata.ts
import { PinataSDK } from 'pinata-web3';
import jws from "../contracts/key.json";

const pinata = new PinataSDK({
  pinataJwt: jws.jws,
  pinataGateway: "beige-sophisticated-baboon-74.mypinata.cloud",
});

export const uploadFileToPinata = async (file: File): Promise<string> => {
  if (!file) {
    throw new Error("File is required");
  }

  try {
    const uploadImage = await pinata.upload.file(file);
    return uploadImage.IpfsHash;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw new Error("File upload to Pinata failed.");
  }
};

export const uploadMetadataToPinata = async (
  name: string,
  description: string,
  price: string,
  imageIpfsHash: string
): Promise<string> => {
  try {
    const metadata = await pinata.upload.json({
      name,
      description,
      price,
      image: `https://beige-sophisticated-baboon-74.mypinata.cloud/ipfs/${imageIpfsHash}`,
    });
    return metadata.IpfsHash;
  } catch (error) {
    console.error("Error uploading metadata to Pinata:", error);
    throw new Error("Metadata upload to Pinata failed.");
  }
};

export const getFileFromPinata = async (uri: string): Promise<any> => {
  try {
    const data = await pinata.gateways.get(`https://beige-sophisticated-baboon-74.mypinata.cloud/ipfs/${uri}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data from Pinata:", error);
    throw new Error("Failed to retrieve data from Pinata.");
  }
};
