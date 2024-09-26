import React from "react";
import Card from "../Card/Card";

interface NFTData {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CardListProps {
  userNFTs: NFTData[];
}

const CardList: React.FC<CardListProps> = ({ userNFTs }) => {
  
  let cardComponents: JSX.Element[] = [];
  if (userNFTs) {
    cardComponents = userNFTs.map((nft) => (
      <Card
        key={nft.id}
        name={nft.name}
        price={nft.price}
        description={nft.description}
        photo={nft.image}
      />
    ));
  }

  return (
    <div>
      {userNFTs.length === 0 ? (
        <p>No NFTs found.</p>
      ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-items-center mx-auto px-4 py-3">
            {cardComponents}
          </div>
      )}
    </div>
  );
};

export default CardList;
