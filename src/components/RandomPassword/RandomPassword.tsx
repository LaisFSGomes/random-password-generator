import React from "react";
import { Container, Text } from "./RandomPassword.styles";

interface RandomPasswordProps {
    value: string;
}

export const RandomPassword: React.FC<RandomPasswordProps> = ({
    value
}) => {
    return(
        <Container>
            <Text>
                {value}	
            </Text>
        </Container>
    );
}