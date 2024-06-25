import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import MediaCard from './components/MediaCard';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import { RecepieSearchClient } from './api/RecepieSearchClient';

const StyledGrid = styled(Grid)`
    && {
        background-color: lightgray;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        margin-top: 20px;

        &:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    }
`;

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(true);
    const client = new RecepieSearchClient();

    useEffect(() => {
        if (!searchValue) {
            setFilteredRecipes(recipes)
        } else {
            setFilteredRecipes(recipes.filter((recipe) => recipe.label.toUpperCase().includes(searchValue.toUpperCase()) && recipe))
        }
    }, [searchValue, recipes]);

    useEffect(() => {
        const fetchInitialRecipes = async () => {
            try {
                const initialRecipes = await client.getRecipes();
                setRecipes(initialRecipes);
            } catch (error) {
                console.error('Error fetching initial recipes:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialRecipes();
    }, []);

    return (
        <>
            <Banner />
            <SearchBar onSearch={setSearchValue}/>
            <StyledGrid container spacing={3}>
                {!loading &&
                    filteredRecipes.map(recipe => (
                        <Grid item key={recipe.uri} xs={12} sm={6} md={4} lg={3}>
                            <MediaCard recipe={recipe} />
                        </Grid>
                    ))}
            </StyledGrid>
        </>
    );
};

export default App;
