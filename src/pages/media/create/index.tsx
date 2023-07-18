import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createMedia } from 'apiSdk/media';
import { Error } from 'components/error';
import { mediaValidationSchema } from 'validationSchema/media';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { SubscriberInterface } from 'interfaces/subscriber';
import { getSubscribers } from 'apiSdk/subscribers';
import { MediaInterface } from 'interfaces/media';

function MediaCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MediaInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMedia(values);
      resetForm();
      router.push('/media');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MediaInterface>({
    initialValues: {
      type: '',
      file_path: '',
      subscriber_id: (router.query.subscriber_id as string) ?? null,
    },
    validationSchema: mediaValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Media
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="type" mb="4" isInvalid={!!formik.errors?.type}>
            <FormLabel>Type</FormLabel>
            <Input type="text" name="type" value={formik.values?.type} onChange={formik.handleChange} />
            {formik.errors.type && <FormErrorMessage>{formik.errors?.type}</FormErrorMessage>}
          </FormControl>
          <FormControl id="file_path" mb="4" isInvalid={!!formik.errors?.file_path}>
            <FormLabel>File Path</FormLabel>
            <Input type="text" name="file_path" value={formik.values?.file_path} onChange={formik.handleChange} />
            {formik.errors.file_path && <FormErrorMessage>{formik.errors?.file_path}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<SubscriberInterface>
            formik={formik}
            name={'subscriber_id'}
            label={'Select Subscriber'}
            placeholder={'Select Subscriber'}
            fetcher={getSubscribers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'media',
    operation: AccessOperationEnum.CREATE,
  }),
)(MediaCreatePage);
