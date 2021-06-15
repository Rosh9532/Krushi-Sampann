import React from 'react'
import { Row , Container} from 'react-bootstrap'
import ContentLoader from 'react-content-loader'

const CatLoader = () => {
  return (
    <div style={{display:"flex" ,flexDirection:"column" , justifyContent:"center"}}>
      <CatLoaderCompo />
      <CatLoaderCompo />
      <CatLoaderCompo />
      <CatLoaderCompo />
      <CatLoaderCompo />
      <CatLoaderCompo />
    </div>
  )
}


const CatLoaderCompo = () => {
  return (<Container>
    <ContentLoader
      width={360}
      height={40}
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <rect x="150" y="15" rx="10" ry="10" width="55%" height="25" />
      <rect x="20" y="10" rx="0" ry="0" width="80" height="40" />
    </ContentLoader> </Container>
  )
}

export default CatLoader