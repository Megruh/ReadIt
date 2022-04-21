import React from "react"
import Discover from "../Discover"
import Browse from "../Browse"

export default function Home() {
    return (
        <div>
            <Discover />
            <div className="recs-box">
                Recommendations Box
            </div>
            <Browse />
        </div>
    )
}