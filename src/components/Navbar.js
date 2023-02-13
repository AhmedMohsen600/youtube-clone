import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../util/constant';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        top: 0,
        background: '#000',
        justifyContent: 'space-between',
        zIndex: 200,
      }}
    >
      <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
        <img height={45} src={logo} alt="Logo" />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
}

export default Navbar;
