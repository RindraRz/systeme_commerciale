import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Page404(){
    return (
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center"> 
               
                <Typography variant="h3" gutterBottom>
                    404 pr
                </Typography>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="outlined">Revenir à la page précedente</Button>            
                </div>
                </div>
            </main>
    );       
}
export default Page404;