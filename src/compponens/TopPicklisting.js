import React from "react";

const TopPicklisting = () => {
  return (
    <>
      <div className="TPL mt-5 ">
        <div className="container">
        <p className="textshad" style={{fontSize: '12px', margin:"0px"}}>   ALL TIME FAVOURITES </p>
          <h2 className="textshad">Top Pick listing</h2>
          <p className="textshad">  We've sorted through our feed to put together a collection of our  products perfect for a summer outdoors. </p>
          <div className="row">
            <div className="col-md-3">
                <img className="img-fluid tplimg" src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/Max-PC-1-04October2019.jpg" alt="im"/>
            </div>
            <div className="col-md-3">
                <img className="img-fluid tplimg" src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/Max-PC-1-04October2019.jpg" alt="#"/>
            </div>
            <div className="col-md-3">
                <img className="img-fluid tplimg" src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/Max-PC-1-04October2019.jpg" alt="#"/>
            </div>
            <div className="col-md-3">
                <img className="img-fluid tplimg" src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/Max-PC-1-04October2019.jpg" alt="#"/>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default TopPicklisting;
