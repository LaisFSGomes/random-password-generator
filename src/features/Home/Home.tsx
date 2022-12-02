import { RandomPassword } from "components/RandomPassword";
import React from "react";
import { HomeWrapper } from "./Home.styles";

export const Home: React.FC = () => {
    return (
        <HomeWrapper>
            <RandomPassword 
                value="1234567890"
            />
        </HomeWrapper>
    );
}