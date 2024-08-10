// ReportForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ReportForm = () => {
  const initialValues = {
    incidentDetails: {
      roadType: '',
      location: {
        lng: '',
        lat: '',
      },
      time: '',
      date: '',
    },
    vehiclesInvolved: [
      {
        licensePlate: '',
        make: '',
        model: '',
      },
    ],
    drivers: [
      {
        name: '',
        licenseNumber: '',
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    incidentDetails: Yup.object().shape({
      roadType: Yup.string().required('Road type is required'),
      location: Yup.object().shape({
        lng: Yup.number().required('Longitude is required'),
        lat: Yup.number().required('Latitude is required'),
      }),
      time: Yup.string().required('Time is required'),
      date: Yup.string().required('Date is required'),
    }),
    vehiclesInvolved: Yup.array().of(
      Yup.object().shape({
        licensePlate: Yup.string().required('License plate is required'),
        make: Yup.string().required('Make is required'),
        model: Yup.string().required('Model is required'),
      })
    ),
    drivers: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        licenseNumber: Yup.string().required('License number is required'),
      })
    ),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/submitreport', values);
      console.log('Report submitted successfully:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error submitting report:', error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Submit Report</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Road Type</label>
              <Field type="text" name="incidentDetails.roadType" />
              <ErrorMessage name="incidentDetails.roadType" component="div" />
            </div>
            <div>
              <label>Longitude</label>
              <Field type="number" name="incidentDetails.location.lng" />
              <ErrorMessage name="incidentDetails.location.lng" component="div" />
            </div>
            <div>
              <label>Latitude</label>
              <Field type="number" name="incidentDetails.location.lat" />
              <ErrorMessage name="incidentDetails.location.lat" component="div" />
            </div>
            <div>
              <label>Time</label>
              <Field type="text" name="incidentDetails.time" />
              <ErrorMessage name="incidentDetails.time" component="div" />
            </div>
            <div>
              <label>Date</label>
              <Field type="text" name="incidentDetails.date" />
              <ErrorMessage name="incidentDetails.date" component="div" />
            </div>
            <div>
              <h2>Vehicles Involved</h2>
              <div>
                <label>License Plate</label>
                <Field type="text" name="vehiclesInvolved[0].licensePlate" />
                <ErrorMessage name="vehiclesInvolved[0].licensePlate" component="div" />
              </div>
              <div>
                <label>Make</label>
                <Field type="text" name="vehiclesInvolved[0].make" />
                <ErrorMessage name="vehiclesInvolved[0].make" component="div" />
              </div>
              <div>
                <label>Model</label>
                <Field type="text" name="vehiclesInvolved[0].model" />
                <ErrorMessage name="vehiclesInvolved[0].model" component="div" />
              </div>
            </div>
            <div>
              <h2>Drivers</h2>
              <div>
                <label>Name</label>
                <Field type="text" name="drivers[0].name" />
                <ErrorMessage name="drivers[0].name" component="div" />
              </div>
              <div>
                <label>License Number</label>
                <Field type="text" name="drivers[0].licenseNumber" />
                <ErrorMessage name="drivers[0].licenseNumber" component="div" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReportForm;
