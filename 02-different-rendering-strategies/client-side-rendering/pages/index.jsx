import React from "react"
import UseEffectPage from "./useEffectPage"
// import IndexPage from "./index.Page"
import DynamicPage from "./dynamicPage"
import IndexPage from "./getStaticProps"

const Home = () => {
    return (
        <div>
            <UseEffectPage/>
            <DynamicPage/>
            {/* {

                console.log(UseEffectPage(__owner))
            } */}
            <IndexPage />
        </div>
    )
}

export default Home