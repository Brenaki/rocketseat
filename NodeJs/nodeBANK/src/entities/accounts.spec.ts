import { describe, expect, it } from 'vitest';
import crypto from 'node:crypto';
import { AccountProps } from './account';
import { PersonAccount, PersonAccountProps } from './personAccount';
import { CompanyAccount, CompanyAccountProps } from './companyAccount';
import { cnpj, cpf } from 'cpf-cnpj-validator';

describe('Create accounts', () => {
  it('create an person account', () => { 
    const infoAccount: AccountProps = {
      id: crypto.randomUUID(),
      name: 'John Doe',
      typeAccount: 'person',
      amount: 0
    };
    const infoPerson: PersonAccountProps = {
      bornDate: new Date('2005-06-13'),
      cpf: cpf.generate(),
      createAccountAt: new Date()
    };
  
    const account = new PersonAccount(infoAccount, infoPerson)
  
    expect(account).toBeInstanceOf(PersonAccount);
  });

  it('cannot create an person account, because -18 years', () => { 
    const infoAccount: AccountProps = {
      id: crypto.randomUUID(),
      name: 'John Doe',
      typeAccount: 'person',
      amount: 0
    };
    const infoPerson: PersonAccountProps = {
      bornDate: new Date('2010-10-12'),
      cpf: cpf.generate(),
      createAccountAt: new Date()
    };
  
    expect(() => {
      return new PersonAccount(infoAccount, infoPerson);
    }).toThrow();
  });

  it('cannot create an person account, because cpf is invalid', () => { 
    const infoAccount: AccountProps = {
      id: crypto.randomUUID(),
      name: 'John Doe',
      typeAccount: 'person',
      amount: 0
    };
    const infoPerson: PersonAccountProps = {
      bornDate: new Date('2004-01-24'),
      cpf: '01000020096',
      createAccountAt: new Date()
    };
  
    expect(() => {
      return new PersonAccount(infoAccount, infoPerson);
    }).toThrow();
  });

  it('create an company account', () => {
    const infoAccount: AccountProps = {
      id: crypto.randomUUID(),
      name: 'MineSoft',
      typeAccount: 'company',
      amount: 0
    };
    const infoCompany: CompanyAccountProps = {
      cpnj: cnpj.generate(),
      loan: 0,
      createAccountAt: new Date()
    };

    const account = new CompanyAccount(infoAccount, infoCompany);

    expect(account).toBeInstanceOf(CompanyAccount);
  });

  it('cannot create an company account, because cnpj is invalid', () => {
    const infoAccount: AccountProps = {
      id: crypto.randomUUID(),
      name: 'MineSoft',
      typeAccount: 'company',
      amount: 0
    };
    const infoCompany: CompanyAccountProps = {
      cpnj: '10000404005060',
      loan: 0,
      createAccountAt: new Date()
    };

    expect(() => {
      new CompanyAccount(infoAccount, infoCompany);
    }).toThrow();
  });
})