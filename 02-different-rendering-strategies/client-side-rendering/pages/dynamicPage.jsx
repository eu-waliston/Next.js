// Using dynamic component loading

import React from "react";
import dynamic from "next/dynamic";

const Highlight = dynamic(
    () => import("./highlight"),
    {ssr: false}
);

function DynamicPage() {
    return (
        <div className="main">
            <Highlight 
                code={"Alert(Using dynamic component loading)"}
                language="js"
            />
        </div>
    )
}
export default DynamicPage