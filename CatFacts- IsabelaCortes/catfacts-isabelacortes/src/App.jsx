import React from "react";
import { Header, CatImg, CatFact, GeneratorButton } from "./components";
import { useApp } from "./hooks/useApp";

export function App() {

    const { fact, img, isLoading, error, words, handleOnClick } = useApp()


    if (isLoading) {
        return (
            <>
                <Header />
                <p>Hello, Welcome to Cat Fact Generator!
                    Your fact is loading</p>
            </>
        )
    }

    if (error) {
        return (
            <p>{error}</p>
        )
    }

    return (
        <>
            <Header />
            <main className="container">
                <CatImg
                    content={img} />
                <CatFact
                    text={fact} />

                <GeneratorButton
                    onClick={handleOnClick} />
            </main>
        </>
    )
}