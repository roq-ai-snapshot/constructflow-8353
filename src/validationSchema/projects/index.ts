import * as yup from 'yup';
import { attendanceValidationSchema } from 'validationSchema/attendances';
import { complianceDocumentValidationSchema } from 'validationSchema/compliance-documents';
import { equipmentValidationSchema } from 'validationSchema/equipment';
import { taskValidationSchema } from 'validationSchema/tasks';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  attendance: yup.array().of(attendanceValidationSchema),
  compliance_document: yup.array().of(complianceDocumentValidationSchema),
  equipment: yup.array().of(equipmentValidationSchema),
  task: yup.array().of(taskValidationSchema),
});
