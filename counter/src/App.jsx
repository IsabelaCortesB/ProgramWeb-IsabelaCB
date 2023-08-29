import React, { useState } from "react";
import { Button, Counter, Header, Footer } from './Components/index'

export function App() {

    const generalStyle = {
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
            gap: '30px',
    }

    const [value, setValue] = useState(0)

    const add = () => {
        setValue((preValue)=> {return preValue + 1})
    }

    const substract = () => {
       (value > 0) ? setValue((preValue)=> {return preValue - 1}) :  value 
    }

    const reset = () => {
        setValue(0);
    }



    return(
        <>
            
                <Header/>
                <section style={{display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center'}}>
                    <Button type= "-" name='substract' logic={substract} />
                    <Counter result={value}/>
                    <Button type= "+" name='add' logic={add}/>
                </section>
                <section style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                    <Button type='reset' logic = {reset}/>
                </section>

                <Footer/>
            
        </>
    )
}
