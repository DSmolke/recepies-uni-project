import React, {useEffect} from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const FullWidthTextField = styled(TextField)({
    width: '100%', // Ustawienie szerokości na 100%
    margin: '10px 0', // Dodanie marginesu dla lepszego wyglądu
});

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    useEffect(() => {
        handleSearch()
    }, [searchTerm]);

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <FullWidthTextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;

