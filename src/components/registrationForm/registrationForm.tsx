import { Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Gender = ['male', 'female ', 'unknown'];

export const RegistrationForm: React.FC = () => {
  return (
    <Grid
      container
      sx={{ marginTop: '20px' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-name-input"
            label="Name"
            type="text"
            required
          />

          <TextField
            id="outlined-email-input"
            label="email"
            type="email"
            required
          />
          <TextField
            id="outlined-date-input"
            label="date of birth"
            type="date"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-confirmPassword-input"
            label="Confirm password"
            type="password"
            autoComplete="current-password"
          />

          <TextField
            id="outlined-select-currency-native"
            select
            label="Gender"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
          >
            {Gender.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </TextField>
        </div>

        <Box display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>  
          <Button type="submit" variant="contained" >  
            Submit  
          </Button>  
        </Box>  
      </Box>
    </Grid>
  );
};
