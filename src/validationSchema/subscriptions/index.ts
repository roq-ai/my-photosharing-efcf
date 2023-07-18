import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  type: yup.string().required(),
  storage_limit: yup.number().integer().required(),
  subscriber_id: yup.string().nullable(),
});
