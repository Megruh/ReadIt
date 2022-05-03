import React from "react"
import "../../styles/library.css"
import Wishlist from "./Wishlist"
import Current from "./Current"
import Finished from "./Past"

export default function Library () {
    return (
        <div className="library-lists">
            <div>
                <h2>Want to Read:</h2>
                <div className="library-cat">
                <Wishlist />
                </div>
            </div>

            <div>
                <h2>Currently Reading:</h2>
                <div className="library-cat">
                    <Current />
                </div>
            </div>

            <div>
                <h2>Finished Reading:</h2>
                <div className="library-cat">
                    <Finished />
                </div>
            </div>
        </div>
    )
}