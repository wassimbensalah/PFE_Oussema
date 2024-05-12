import React from "react";
import { TextField, FormHelperText } from "@mui/material";
// import { Controller } from "react-hook-form";
import { InputProps } from "./TextInput";
import { Controller } from "react-hook-form";
import { theme } from '../../utils/style/colors';
import { styled } from '@mui/system';


const CustomInputAdornment = styled(TextField)(() => ({

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
    borderColor: 'red',
  },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
    borderColor: theme.palette.second,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
    borderColor: theme.palette.second,
  },

  // "& .MuiOutlinedInput-root.Mui-focused": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
  //   borderColor: theme.palette.second,
  // },
  // "& .MuiOutlinedInput-notchedOutline.Mui-focusVisible": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
  //   borderColor: theme.palette.second,
  // },
  

'& input': {
color: theme.palette.second     // The color of the text when you type
},
//   "&:hover label": {
//     color: theme.palette.second // Change label color when input is hovered
//   },

//   "& label.Mui-focused": {
//     color: theme.palette.second, // Change label color when input is focused
//     borderColor: theme.palette.second,
//   },
"& .MuiInputLabel-root": { // the color of the label when you focus
color: theme.palette.second,
borderColor: theme.palette.second,
},
"& .MuiInputLabel-root.Mui-focused": { // the color of the label when you focus
color: theme.palette.second,
borderColor: theme.palette.second,
},
//   "& .MuiOutlinedInput-input:focus": { // the color of the label when you focus
//     color: theme.palette.second,
//     borderColor: theme.palette.second,
//   },
//   '& fieldset': {
//     borderColor: theme.palette.second, // the colors of the borders when you unfocus
//     borderWidth: '1px'
//   },
//   "&:hover .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
//       borderColor: theme.palette.second,
//     },
//   "& .Mui-focused": {
//       "& .MuiOutlinedInput-notchedOutline, &:after": { // the color of the borders when you hover, it works when you the text curson is set on the field
//         borderColor: theme.palette.second,
//       },
//     },

//     "& .MuiInputLabel-root": { // the color of the label initially
//       color: theme.palette.second,
//     },
//     "& ::placeholder": {
//       color: theme.palette.second,  opacity: 0.7, // the color of the placeholder
//     },
'& .MuiOutlinedInput-input': { color: 'white',
'&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 100px #039be5 inset', // change the color of the background and text of the autofill suggestions
WebkitTextFillColor: theme.palette.second, }, }
  }));


export default function AdornmentInput({
  name,
  placeholder,
  label,
  ind,
  width,
  control,
  helperText,
}: InputProps) {
  return (
    // <Controller
      // name={name}
      // control={control}
      // rules={{
      //   pattern: {
      //     value: /^[0-9]*(\.[0-9]+)?$/,
      //     message: "Please enter a valid number or float",
      //   },
      // }}
      // render={({ field, fieldState }) => (

<Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div {...field}>

          <CustomInputAdornment
          {...field}
          variant="outlined"
          
          label={label}
          placeholder={placeholder}
          // error={!!fieldState.error}
          // endAdornment={<InputAdornment position="end"> {ind}</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
            //   "aria-label": "weight",
            // }}
            />
            <FormHelperText id="outlined-weight-helper-text">{helperText}</FormHelperText>
        </div>
          )}
        />
    );
  }
  
