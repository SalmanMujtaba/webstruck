import React from "react";

function ContainerWithStyles(WrappedComponent) {
  console.log("container");
  return (props) => (
    <div
      id={props?.id}
      className={`xl:w-[1280px] w-full mx-auto text-center mt-8 mb-8 ${props.className}`}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default ContainerWithStyles;
