import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowBigRight, Copy, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowBigRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div className="space-y-3">
        <InputRoot error>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="text" placeholder="E-mail" />
        </InputRoot>
      </div>
    </main>
  );
}
