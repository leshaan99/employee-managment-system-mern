import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = (props) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff', // White background for the form
                padding: '20px',
                marginBottom: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Shadow for a premium look
                maxWidth: '600px', // Limit width
                margin: 'auto', // Center the form
            }}
        >
            <Grid item xs={12}>
                <Typography
                    component="h1"
                    sx={{
                        color: '#000000',
                        textAlign: 'center',
                        marginBottom: '20px',
                        fontFamily: "'Roboto', sans-serif", // Consistent font
                    }}
                >
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: '#d3a12a', // Dark yellow for label text
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Id
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{
                        width: '400px',
                        border: '1px solid #d3a12a', // Dark yellow border
                        borderRadius: '4px',
                        padding: '10px',
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: '#d3a12a', // Dark yellow for label text
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{
                        width: '400px',
                        border: '1px solid #d3a12a', // Dark yellow border
                        borderRadius: '4px',
                        padding: '10px',
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    sx={{
                        backgroundColor: '#d3a12a', // Dark yellow for the button
                        color: '#000000', // Black text color for the button
                        padding: '10px 20px',
                        borderRadius: '4px',
                        '&:hover': {
                            opacity: '0.8',
                            backgroundColor: '#b69223', // Darker yellow on hover
                        }
                    }}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}

export default UserForm;
