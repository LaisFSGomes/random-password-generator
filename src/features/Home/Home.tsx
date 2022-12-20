import { RandomPassword } from "components/RandomPassword";
import React from "react";
import {
  ButtonsWrapper,
  HomeWrapper,
  LabelSlider,
  SliderPasswordLength,
  SliderWrapper,
} from "./Home.styles";
import copy from "copy-to-clipboard";
import { AlertNotice } from "components/AlertNotice";
import { Button } from "components/Button";

export const Home: React.FC = () => {
  const [password, setPassword] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [passLength, setPassLength] = React.useState<
    number | string | Array<number | string>
  >(10);

  const onChangeLengthSlider = (event: Event, newValue: number | number[]) => {
    setPassLength(newValue);
  };

  const handleClose = () => setOpen(false);
  const onGeneratePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";

    let pass = "";
    for (let i = 0; i < passLength; i++) {
      const x = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(x);
    }
    setPassword(pass);
  };
  const onCopyPassword = () => {
    copy(password);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <HomeWrapper>
        <RandomPassword value={password} />
        <SliderWrapper>
          <SliderPasswordLength
            id="input-slider"
            value={typeof passLength === "number" ? passLength : 0}
            onChange={onChangeLengthSlider}
            aria-labelledby="input-slider"
            marks
            min={8}
            max={30}
            step={1}
            defaultValue={10}
          />
          <LabelSlider>Tamanho da senha: {passLength} </LabelSlider>
        </SliderWrapper>
        <ButtonsWrapper>
          <Button text="Gerar Senha" onClick={onGeneratePassword} />
          <Button text="Copiar Senha" onClick={onCopyPassword} />
        </ButtonsWrapper>
      </HomeWrapper>
      <AlertNotice
        open={open}
        handleClose={handleClose}
        title="Senha copiada com sucesso!"
        description="Agora você pode colar a senha em qualquer lugar."
      />
    </React.Fragment>
  );
};
