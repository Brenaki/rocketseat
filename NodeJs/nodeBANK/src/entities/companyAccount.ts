import { cnpj } from "cpf-cnpj-validator";
import { Account, AccountProps } from "./account";

export interface CompanyAccountProps {
  loan: number;
  cpnj: string;
  createAccountAt: Date;
}

export class CompanyAccount extends Account {
  private companyProps: CompanyAccountProps;

  constructor(props: AccountProps, companyProps: CompanyAccountProps){
    if(!cnpj.isValid(companyProps.cpnj)){
      throw new Error("Invalid CNPJ");
    }

    super(props);
    this.companyProps = companyProps;
  }
  
  get loan() : number {
    return this.companyProps.loan;
  }
  
  get cnpj() : string {
    return cnpj.format(this.companyProps.cpnj);
  }

  get createAccountAt(): Date {
    return this.companyProps.createAccountAt;
  }
  
}