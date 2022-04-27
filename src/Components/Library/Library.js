import React from "react"
import "../../styles/library.css"

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