import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id, "here i");

  return (
    <div>
      <p>More dtailes page</p>
    </div>
  );
};

export default page;
