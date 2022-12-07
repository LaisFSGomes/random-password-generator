import { RandomPassword } from "components/RandomPassword";
import React from "react";
import { HomeWrapper } from "./Home.styles";
import copy from "copy-to-clipboard";
import { AlertNotice } from "components/AlertNotice";
import { Button } from "components/Button";
import { InputSlider } from "components/InputSlider";

export const Home: React.FC = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passLength, setPassLength] = React.useState<number>(8);
  const [open, setOpen] = React.useState(false);

  function valuetext(value: number) {
    return `${value}`;
  }
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassLength(e.target.valueAsNumber);
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
        {/* <InputSlider
            label="Quantidade de caracteres"
            defaultValue={8}
            getAriaValueText={valuetext}
            step={1}
            min={8}
            max={24} 
            value={passLength}
            onChange={handleChange}
        /> */}
        <RandomPassword value={password} />
        <Button text="Gerar Senha" onClick={onGeneratePassword} />
        <Button text="Copiar Senha" onClick={onCopyPassword} />
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
