export interface AppointmentProps {
  customer: string
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps

  constructor(props: AppointmentProps){
    const { startsAt, endsAt } = props;
    if(endsAt <= startsAt){
      throw new Error('End date must be after start date');
    }
    if (startsAt <= new Date()){
      throw new Error('Start date must be in the future');
    }

    this.props = props;
  }
  
  get customer() : string {
    return this.props.customer;
  }

  
  get startAt() : Date {
    return this.props.startsAt;
  }

  
  get endsAt() : Date {
    return this.props.endsAt;
  }  
}
