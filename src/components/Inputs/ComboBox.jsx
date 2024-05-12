import React from "react";
import { Autocomplete, TextField, styled } from "@mui/material";
import { Controller } from "react-hook-form";
import { theme } from '../../utils/style/colors';

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

export function ComboBox({
  name,
  label,
  placeholder,
  options,
  defaultValue,
  width,
  control,
}) {
  
  const optionsWithCategory = options.map((option) => {
    if (option.category) {
      return {
        ...option,
        categoryHeader: option.category.toUpperCase(),
      };
    }
    return option;
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          options={optionsWithCategory.sort((a, b) => {
            if (a.categoryHeader && b.categoryHeader) {
              return -b.categoryHeader.localeCompare(a.categoryHeader);
            }
            return optionsWithCategory;
          })}
          getOptionLabel={(option) => option.name}
          // isOptionEqualToValue={(option: ComboBoxOption, value) => option.value === value.value}
          onChange={(event, item) => {
            onChange(item?.value);
            console.log("item:", item?.value);
          }}
          groupBy={(option) => option.categoryHeader}
          // defaultValue={options.find((option) => option.value === defaultValue)}
          renderInput={(params) => (
            <CustomTextField
              sx={{ width }}
              {...params}
              label={label}
              placeholder={placeholder}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
}
