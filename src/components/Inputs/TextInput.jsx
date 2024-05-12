import React from "react";
import { TextField, FormHelperText,InputAdornment } from "@mui/material";
// import { theme } from "../Card";
// import { ThemeProvider } from '@mui/material/styles';
// import { styled } from '@mui/system';
import { Controller } from "react-hook-form";
import { theme } from '../../utils/style/colors';
import { styled } from '@mui/system';
import { useState } from "react";

const CustomTextField = styled(TextField)(() => ({

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
          borderColor: theme.palette.second,
        },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
          borderColor: theme.palette.second,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // the color of the borders when you hover, but it didnt work when you the text curson is set on the field
          borderColor: theme.palette.second,
        },

        "& .MuiInputLabel-root": { // the color of the label when you focus
          color: theme.palette.second,
          borderColor: theme.palette.second,
          },
          "& .MuiInputLabel-root.Mui-focused": { // the color of the label when you focus
          color: theme.palette.second,
          borderColor: theme.palette.second,
          },

  '& input': {
    color: theme.palette.second     // The color of the text when you type
  },

  
    '& .MuiOutlinedInput-input': { color: 'white',
 '&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 100px #039be5 inset', // change the color of the background and text of the autofill suggestions
 WebkitTextFillColor: theme.palette.second, }, }
  }));

  const CustomInputAdornment = styled(InputAdornment)(() => ({

  '& .MuiInputAdornment-root .MuiInputAdornment-positionEnd"': {
    color: theme.palette.second,
    padding: '28px 14px',
    borderTopLeftRadius: theme.shape.borderRadius + 'px',
    borderBottomLeftRadius: theme.shape.borderRadius + 'px',
  },
}));

export function TextInput({ name, control, placeholder, label, ind, defaultValue, width, helperText }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
        <Controller
      name={name}
      control={control}
      defaultValue = ''

      render={({ field }) => (
        <div>

        <CustomTextField
          {...field}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          // defaultValue={defaultValue}
          InputProps={{
            endAdornment: isFocused && <CustomInputAdornment position="end">{ind}</CustomInputAdornment>,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          }}
                    sx={{ width: width }} 
          />
        <FormHelperText id="outlined-weight-helper-text">{helperText}</FormHelperText>

          </div>
      )}
    />
  );
}



