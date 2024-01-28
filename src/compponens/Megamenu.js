import { useEffect, useState } from "react";
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";


const Megamenu = (props) => {
  const [msubcategory, setMsubcategory] = useState();
  const [mchildcategory, setMchildcategory] = useState();
  const [show, setShow] = useState()
  
  useEffect(() => {
    setMsubcategory(props?.prodata?.data?.data?.subCategory);
    setShow(props.showdata)
  }, [props]);
  
  
  useEffect(() => {
    setMchildcategory(props?.prodata?.data?.data?.childCategory);
  }, [props]);

  return (
    <>
    {
      show ?   <div  id="megamenuu" className="megamenu">
      {msubcategory?.map((value, index) => (
        <div key={index}>
          <div className="subflexdata">
          <img className='catimg' src={`${value.images.imageUrl}`} alt="#"/>  
            {value.categoryName}
            <div className="sss">
              {mchildcategory
                .filter((x) => value.id === x.parentId)
                .map((val, i) => (
                  <div key={i}> {val.categoryName}</div>
                ))}
            </div>
          </div>
        </div>
      ))}
              <IoMdCloseCircleOutline style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>!setShow()}  />

    </div> : null
    }
    
    </>
  );
};

export default Megamenu;
