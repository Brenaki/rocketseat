import { cpf } from "cpf-cnpj-validator";
import { Account, AccountProps } from "./account";

export interface PersonAccountProps {
  bornDate: Date;
  createAccountAt: Date;
  cpf: string;
}

export class PersonAccount extends Account {
  private personProps: PersonAccountProps;

  constructor(props: AccountProps, personProps: PersonAccountProps){
    if(new Date().getFullYear() - personProps.bornDate.getFullYear() < 18){
      throw new Error("Person is not 18 years old");
    }
    if(!cpf.isValid(personProps.cpf)){
      throw new Error("Invalid CPF");
    }
    super(props);
    this.personProps = personProps;
  }

  get bornDate() : Date {
    return this.personProps.bornDate;
  }
  
  get createAccountAt() : Date {
    return this.personProps.createAccountAt;
  }
  
  
  get cpf() : string {
    return cpf.format(this.personProps.cpf);
  }
  
}