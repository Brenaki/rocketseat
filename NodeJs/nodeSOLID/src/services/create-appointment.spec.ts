import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future";
import { InMemoryAppointmentRepositories } from "../repositories/in-memory/in-memory-appointments-repository";

describe('Create Appointment', () => {
  it('should be able to create an appointment',() => {
    const appointmentsRepository = new InMemoryAppointmentRepositories;
    const createAppointment = new CreateAppointment(appointmentsRepository);
    const startsAt = getFutureDate('2024-08-15');
    const endsAt = getFutureDate('2024-08-17');

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment);
  });

  it('should not be able to create an appointment with overlapping dates',async () => {
    const appointmentsRepository = new InMemoryAppointmentRepositories;
    const createAppointment = new CreateAppointment(appointmentsRepository);
    const startsAt = getFutureDate('2024-08-15');
    const endsAt = getFutureDate('2024-08-17');

    await createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    });

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2024-08-14'),
      endsAt: getFutureDate('2024-08-17'),
    })).rejects.toBeInstanceOf(Appointment);
  });
});