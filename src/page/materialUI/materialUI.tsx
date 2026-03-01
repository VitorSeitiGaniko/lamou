import { Button, Container, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';

const MaterialUI = () => {
  return (
    <div>
      <Container component='article' maxWidth='md'>
        <Typography component='h1' variant='h4' color='primary' align='center'>
          Material UI
        </Typography>
        <TextField label='Hello World' variant='outlined' color='primary' margin='normal' fullWidth />
        <TextField label='Hello World' variant='outlined' color='primary' margin='normal' fullWidth />
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label='Label' />
          <FormControlLabel required control={<Switch />} label='Required' />
          <FormControlLabel disabled control={<Switch />} label='Disabled' />
        </FormGroup>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Container>
    </div>
  );
};

export { MaterialUI };
