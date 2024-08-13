import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, Box } from '@mui/material';
import Card from './components/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RandomQuote from './components/RandomQuote';
import CardSkeleton from './components/CardSkeleton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [allQuotes, setAllQuotes] = useState([])
  const [QuotesLoading, setQuotesLoading] = useState((false))

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((response) => {
        // console.log(response.data.quotes);
        setQuotesLoading(true)
        setTimeout(() => {
          setQuotesLoading(false)
          setAllQuotes(response.data.quotes)
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])


  return (
    <div >
      <Box sx={{ flexGrow: 1, backgroundImage: "url(download.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <Grid container spacing={2} sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center", mb: 2, }}>

          <Grid item xs={4} >
            <Item elevation={3}>
              <RandomQuote />
            </Item>
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ p: 2 }}>

          {QuotesLoading ? (
            [1,2,3,4,5,6].map(()=>(
              <Grid item xs={4} >
              <Item elevation={5}>
                <CardSkeleton /></Item></Grid>
            ))
          ) : (
            allQuotes?.map((value, index) => (
              <Grid item xs={4} key={index}>
                <Item>
                  <Card
                    data={value} />
                </Item>
              </Grid>
            )))}
        </Grid>
      </Box>
    </div>

  );
}

export default App;
