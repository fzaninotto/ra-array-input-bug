import {
  ArrayInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

function CreateWithBug() {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="default"
          label="Write here so you can save without touching the array input"
          fullWidth
        />
        <ArrayInput source="array_input">
          <SimpleFormIterator>
            <TextInput source="text_input" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}

export default CreateWithBug;
