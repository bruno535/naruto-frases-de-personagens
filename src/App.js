import styled from "styled-components";
import narutoImg from './images/naruto.png'
import GlobalStyle from "./components/globalStyle";
import { Quotes } from "./components/quotes";
import { QuoteService } from "./services";
import { useState } from "react";

export function App(){
    const [QuoteState, setQuoteState] = useState({
        quote:'Ok',
        speaker:'Speaker'
    })

    const onUpdate = async () =>{
        const quote = await QuoteService();

        setQuoteState(quote)
    }
    
    return(
        <Content>
            <GlobalStyle/>
            <Quotes 
                {...QuoteState} 
                onUpdate={onUpdate}
            />
            <NarutoImg src={narutoImg} alt='Naruto with kunai'/>
        </Content>
    )
}
const Content = styled.div`
    height:100vh;
    padding:0 50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const NarutoImg = styled.img`
    max-width:50vw;  
    align-self:flex-end;  
`
