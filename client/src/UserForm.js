import { Button, Grid, Input, Typography } from "@mui/material"

const UserForm = props => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: 'white',
        marginBottom: '30px',
        display: 'block',
      }}>
      
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: '#000000' }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{display: "flex"}}>
        <Typography 
          component="label" 
          htmlFor="id"
          sx={{ 
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}>
          Id
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: '400px' }}
          value={''}
          onChange={e => { }}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{display: "flex"}}>
        <Typography 
          component="label" 
          htmlFor="name"
          sx={{ 
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}>
          Id
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: '400px' }}
          value={''}
          onChange={e => { }}
        />
      </Grid>

      <Button
        sx={{
            margin: 'auto',
            marginBottom: '20px',
            backgroundColor: '#00c6e6',
            color: '#000000',
            marginLeft: '15px',
            marginTop: '20px',
            '&:hover': {
                opacity: '0.8',
                backgroundColor: '#00c6e6'
            }
        }}
      >
        Submit
      </Button>
    </Grid>
  )
}

export default UserForm;