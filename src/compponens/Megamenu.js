import { useEffect, useState } from "react";
import React from "react";

const Megamenu = (props) => {
  const [msubcategory, setMsubcategory] = useState();
  const [mchildcategory, setMchildcategory] = useState();

  useEffect(() => {
    setMsubcategory(props?.prodata?.data?.data?.subCategory);
  }, [props]);


  useEffect(() => {
    setMchildcategory(props?.prodata?.data?.data?.childCategory);
  }, [props]);
  return (
    <>
      <div className="megamenu container">
        {msubcategory?.map((value, index) => (
          <div key={index}>
            <div className="subflexdata">
              {value.categoryName}
              <div className="sss">
                {mchildcategory
                  .filter((x) => value.id === x.parentId)
                  .map((val, i) => (
                    <div> {val.categoryName}</div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Megamenu;
