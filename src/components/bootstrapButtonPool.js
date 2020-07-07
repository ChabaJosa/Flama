import React from "react";

export default function bootstrapButtonPool({ attributes }) {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  let bootstrapArray = [
    "info",
    "danger",
    "success",
    // "dark",
    "warning",
    "primary",
  ];

  //   let randomColor = bootstrapArray[randomNumber(0, 5)];

  return (
    <>
      <div className="row">
        <div class="gradient-border" id="box">
          <div className="productQualitities">
            {/* {attributes.map((eachAttribute) => {
              return ( */}
                <>
                  <button
                    className={`btn btn-${
                      bootstrapArray[randomNumber(0, 4)]
                    } m-1 bootstrap-btn`}
                  >
                    {" "}
                    #{attributes[randomNumber(0,3)]}
                  </button>
                  <button
                    className={`btn btn-${
                      bootstrapArray[randomNumber(0, 4)]
                    } m-1 bootstrap-btn`}
                  >
                    {" "}
                    #{attributes[randomNumber(0,3)]}
                  </button>
                  <button
                    className={`btn btn-${
                      bootstrapArray[randomNumber(0, 4)]
                    } m-1 bootstrap-btn`}
                  >
                    {" "}
                    #{attributes[randomNumber(0,3)]}
                  </button>
                </>
              {/* ); */}
            {/* // })} */}
          </div>
        </div>
      </div>
    </>
  );
}
