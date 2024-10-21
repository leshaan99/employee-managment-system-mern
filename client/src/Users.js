import React from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'

const users = [
    {
        id: 1,
        name: 'Leshan'
    },
    {
        id: 2,
        name: 'Sanjeewa'
    }
];

const Users = () => {
  return (
    <Box
        xs={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
    >    
        <UserForm/>
        <UsersTable rows={users}/>
    </Box>
  )
}

export default Users
