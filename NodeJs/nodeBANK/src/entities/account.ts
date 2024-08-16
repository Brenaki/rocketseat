export interface AccountProps {
  id: string;
  typeAccount: 'person' | 'company';
  name: string;
  amount: number;
}

export class Account {
  private props: AccountProps;
  
  protected constructor(props: AccountProps) {
    this.props = props;
  }
  
  get getId() : string {
    return this.props.id;
  }
  
  get getTypeAccount() : string {
    return this.props.typeAccount;
  }

  get getName() : string {
    return this.props.name;
  }
  set setName(name: string) {
    this.props.name = name;
  }

  get getAmount() : number {
    return this.props.amount; 
  }
    
}