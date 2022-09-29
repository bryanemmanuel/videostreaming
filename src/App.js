import React from 'react';
import{BrowserRouter,Router,Route} from 'react-router-dom';
import {Box} from '@mui/material';
const App = () => {

  return (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                    
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" exact element={<VideoDetail/>}/>
                <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
                <Route path="/search/:id" exact element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )

}

export default App