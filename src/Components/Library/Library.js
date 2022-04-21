import React from "react"


export default function Library () {
    return (
        <div className="library-lists">
            <div>
                <h2>Want to Read:</h2>
                <div className="library-cat"></div>
            </div>

            <div>
                <h2>Currently Reading:</h2>
                <div className="library-cat"></div>
            </div>

            <div>
                <h2>Already Read:</h2>
                <div className="library-cat"></div>
            </div>
        </div>
    )
}