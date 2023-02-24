import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export type ControlledInputProps = {
  name: string;
  label: string;
  control: any;
  errors: any;
};
// TODO: add error props

const ControlledInput = ({ name, label, control, errors }: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            '& .MuiInputBase-input': {
              color: 'text.secondary',
              borderColor: 'text.secondary',
            },
          }}
          variant="standard"
          label={label}
          fullWidth
        />
      )}
    />
  );
};

export default ControlledInput;
