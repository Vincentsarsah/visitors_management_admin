/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function StaffList() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Staff List" variant="outlined" />}
    />
  );
}

const top100Films = [
  { title: 'Vincent Sarsah', year: 1948 },
  { title: 'Isaac Baidoo', year: 1921 },
  { title: 'Olivia Atta', year: 2009 },
  { title: 'Francis Aidoo', year: 2000 },
  { title: 'Sarah Blay', year: 2009 },
  { title: 'Victoria Ackon', year: 1975 },
  { title: 'Liam ', year: 2010 },
  { title: 'Sebastian Aiden', year: 2002 },
  { title: "Samuel Joseph", year: 1975 },
  { title: 'Goodfellas Matthew', year: 1990 },
  { title: 'David Mateo', year: 1999 },
  { title: 'Jayden Samurai', year: 1954 },
  { title: 'Thomas Colton', year: 1977 },
  { title: 'Nathan Santiago', year: 2002 },
  { title: 'Jonathan Jameson', year: 1995 },
];
