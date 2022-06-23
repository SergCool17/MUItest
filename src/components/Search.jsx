import { TextField } from "@material-ui/core";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      label="Поиск"
      variant="standard"
      fullWidth
      sx={{ mb: "1.5rem" }}
    />
  );
};

export default Search;
