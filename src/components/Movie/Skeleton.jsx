import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={230}
    height={345}
    viewBox="0 0 230 345"
    backgroundColor="#C4C4C4"
    foregroundColor="#C1B8R4"
  >
    <rect x="0" y="0" rx="20" ry="20" width="230" height="345" /> 
  </ContentLoader>
)

export default Skeleton;