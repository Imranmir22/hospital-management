import { validate } from 'class-validator';
import { UpdatePatientDto } from './update-patient.dto';
import { BloodGroup, Gender } from '../../common/enums/patient.enums';

describe('UpdatePatientDto', () => {
  it('accepts valid enum values', async () => {
    const dto = new UpdatePatientDto();
    dto.gender = Gender.MALE;
    dto.dob = new Date('1990-01-01');
    dto.blood_group = BloodGroup.AB_POSITIVE;
    dto.emergency_phone_ext = '123';
    dto.emergency_phone = '9876543210';

    const errors = await validate(dto);

    expect(errors).toHaveLength(0);
  });

  it('rejects invalid enum values', async () => {
    const dto = new UpdatePatientDto();
    dto.gender = 'UNKNOWN';
    dto.dob = new Date('1990-01-01');
    dto.emergency_phone_ext = '123';
    dto.emergency_phone = '9876543210';

    const errors = await validate(dto);

    expect(errors.some((error) => error.property === 'gender')).toBe(true);
  });
});
