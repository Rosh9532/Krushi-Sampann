import React, { useEffect } from 'react'
import { Container, Navbar, Row } from 'react-bootstrap'
import { getReqPost } from '../../actions/reqPost.actions'
import Layout from '../../components/Layout'
import ReqCard from '../../components/UI/ReqCard'
import { useDispatch, useSelector } from 'react-redux'
import CardLoader from '../../components/Loaders/cardsLoader'
const ReqPost = (props) => {
    const reqPosts = useSelector(state => state.reqPost);
    console.log("reqPosts"); console.log(reqPosts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReqPost());
    }, [])

    const dateFormater = (props) => {
        const date = new Date(props);
        const formated = date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear()
        return formated
    }
    return (
        <>
            <Layout>
                <Container style={{ paddingBottom: "30%", paddingTop: "2%", margin: "auto" }} >

                    <Navbar bg="dark" className="heading" >
                        <span className="title">Buyer's Requirements</span>
                    </Navbar>

                    <div style={{ margin: "auto" }}>
                        {
                            reqPosts.reqPost.length > 0 ?
                                reqPosts.reqPost.map(post =>
                                    <div key={post._id}>
                                        <Row >                                        
                                            <ReqCard
                                            prodName={post.name}
                                            expQuant={post.quantity}
                                            expPrice={post.expPrice}
                                            phoneNo={post.userName}
                                            date={dateFormater(post.createdAt)}
                                            // loc = {post.location}
                                            // name ={}    //send from db
                                        />
                                        </Row>
                                    </div>
                                ) : <div><h3>No Requirement posts to show </h3> <CardLoader row ="2" col="4" /> </div>
                        }
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default ReqPost