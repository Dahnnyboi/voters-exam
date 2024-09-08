import { FormEvent, ReactNode } from 'react';

interface FormProps {
  onSubmit: (formData: { [key: string]: FormDataEntryValue }) => void;
  children: ReactNode;
}
const Form = (props: FormProps) => {
  const { onSubmit, children } = props;

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());

    onSubmit(formDataObject);
  };

  return <form onSubmit={handleSubmitForm}>{children}</form>;
};

export default Form;
