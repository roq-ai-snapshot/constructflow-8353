import * as yup from 'yup';

export const complianceDocumentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  file_path: yup.string().required(),
  project_id: yup.string().nullable().required(),
});
