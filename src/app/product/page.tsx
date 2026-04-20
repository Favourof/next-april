import Link from "next/link";
import React from "react";

const ProductPage = () => {
  const arr = [
    { title: "Book", description: "this is a Book" },
    { title: "Pen", description: "this is a Pen" },
  ];
  return (
    <div>
      {arr.map((item, i) => (
        <div className="border-2 border-amber-300 text-green-800" key={i}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <Link href={`/product/${i}`}>More Detials</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
