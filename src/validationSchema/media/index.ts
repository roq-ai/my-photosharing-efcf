import * as yup from 'yup';

export const mediaValidationSchema = yup.object().shape({
  type: yup.string().required(),
  file_path: yup.string().required(),
  subscriber_id: yup.string().nullable(),
});
