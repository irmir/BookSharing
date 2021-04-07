import React, { useEffect, useState } from "react"
// import Slider from "react-slick"

import { Book } from './Book'

import { Button } from "./Button"

export const Slider = ({ booksColection, widthSlide, heightSlide, marginSlide, centralMode,
    widthSlideCenter, heightSlideCenter, setBookOnShelf }) => {

    const arr = [...booksColection]
    let books = []

    if (centralMode) {
        books = arr.concat(arr.splice(0, 3))
    } else books = arr
    
    const widthItem = Number(widthSlide) + (Number(marginSlide) * 2)
    const widthItemCenter = Number(widthSlideCenter)

    const [styleTrack, setStyleTrack] = useState({
        width: centralMode ? (booksColection.length - 1) * widthItem + (widthItemCenter + Number(marginSlide) * 2) :
            booksColection.length * widthItem,
        translate: centralMode ? -((booksColection.length - 7) * widthItem) : 0,
        count: 4
    })
    debugger
    const stylesTrack = {
        width: `${styleTrack.width}px`,
        transform: `translateX(${styleTrack.translate}px)`,
        transition: `0.5s`
    }

    const styleSlide = {
        width: `${widthSlide}px`,
        height: `${heightSlide}px`,
        // margin: `0 ${marginSlide}px`,
        transition: `0.5s`
    }

    const styleSlideCenter = {
        width: `${widthSlideCenter}px`,
        height: `${heightSlideCenter}px`,
        // margin: `0 ${marginSlide}px`,
        transition: `0.5s`
    }

    const goRight = () => {
        debugger
        setStyleTrack({
            ...styleTrack,
            count: styleTrack.count + 1,
            translate: styleTrack.translate + widthItem
        })
        console.log(styleTrack.count)
    }

    const goLeft = () => {

        setStyleTrack({
            ...styleTrack,
            count: styleTrack.count - 1,
            translate: styleTrack.translate - widthItem
        })
    }

    return (
        <div className="wrapper-i-slider">
            {
                booksColection.length > 7 &&
                <Button className="i-btn-right" onClick={goRight} disabled={styleTrack.count < booksColection.length - 3 ? false: true}
                    text={
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.241967 10.2083C-0.0802226 9.88614 -0.0802226 9.36377 0.241967 9.04159L4.05853 5.22495L0.241967 1.40828C-0.0802226 1.08609 -0.0802226 0.56381 0.241967 0.241621C0.564157 -0.0805693 1.08644 -0.0805693 1.40863 0.241621L5.80866 4.64162C6.13084 4.96381 6.13084 5.48609 5.80866 5.80828L1.40863 10.2083C1.08644 10.5305 0.564157 10.5305 0.241967 10.2083Z" fill="white" />
                        </svg>
                    } />
            }
            <div className="i-slider" >
                <div className="i-track" style={stylesTrack}>
                    {
                        books.map((book, index) => (
                            <div key={index} className={centralMode && index === booksColection.length - 4 ? "i-slide i-center" : "i-slide"}
                                style={centralMode && index === booksColection.length - styleTrack.count ? styleSlideCenter : styleSlide}>
                                {/* <Book book={book} isRating={centralMode && index === booksColection.length - 4 ? true: false}/> */}
                                {book}
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                booksColection.length > 7 &&
                <Button className="i-btn-left" onClick={goLeft} disabled={styleTrack.count > 4 ? false: true}
                    text={
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73386 0.516781C7.05605 0.83896 7.05605 1.36133 6.73386 1.68351L2.9173 5.50014L6.73386 9.31682C7.05605 9.63901 7.05605 10.1613 6.73386 10.4835C6.41167 10.8057 5.88939 10.8057 5.5672 10.4835L1.16717 6.08348C0.844992 5.76129 0.844992 5.23901 1.16717 4.91681L5.5672 0.516781C5.88939 0.194602 6.41167 0.194602 6.73386 0.516781Z" fill="white" />
                        </svg>
                    } />
            }

        </div>
    )

}