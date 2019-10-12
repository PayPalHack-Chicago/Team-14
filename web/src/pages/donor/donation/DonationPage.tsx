import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export function DonationPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <p>Do you want to donate to your school?</p>

      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="yes" name="no" value={value} onChange={handleChange}>
          <FormControlLabel
            value="Yes"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio color="primary" />}
            label="No"
          />
        </RadioGroup>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
      <p>The meal average cost in Chicago is $10</p>
      <p>How many meals do you want to donate?</p>
      <TextField> </TextField>
    </>
  );
}